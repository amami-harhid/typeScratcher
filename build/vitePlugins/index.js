import ts from "typescript";
import MagicString from "magic-string";
import { Project, SyntaxKind } from "ts-morph";
import path from "path";
import remapping from "@ampproject/remapping";
//#region src/vitePlugins/vite-plugin-ts-ast-replacer/utils/await-target-set.ts
/**
* await の付与対象となるメソッドのパターン辞書
* キーはメソッドのフルパス（オブジェクト名を除く部分）
*/
var AWAIT_TARGET_METHODS$1 = /* @__PURE__ */ new Set([
	"Looks.backdrop.nextAndWait",
	"Looks.backdrop.previousAndWait",
	"Looks.backdrop.switchRandomAndWait",
	"Looks.backdrop.switchAndWait",
	"Control.wait",
	"Control.waitUntil",
	"Control.waitWhile",
	"Broadcast.sendAndWait",
	"Looks.bubble.sayForSecs",
	"Looks.bubble.thinkForSecs",
	"Motion.move.glideTo",
	"Motion.move.glideToRandom",
	"Motion.move.glideToMouse",
	"Sensing.askAndWait",
	"Sound.playUntilDone",
	"Speech.speech"
]);
//#endregion
//#region src/vitePlugins/vite-plugin-ts-ast-replacer/utils/ast-helpers.ts
function isTarget$1(node) {
	return ts.isBreakStatement(node) || ts.isContinueStatement(node);
}
function createYieldStatement$1() {
	return ts.factory.createExpressionStatement(ts.factory.createYieldExpression(void 0, void 0));
}
function hasSkipComment$1(node, sourceFile) {
	const leadingComments = ts.getLeadingCommentRanges(sourceFile.text, node.pos);
	if (!leadingComments) return false;
	for (const commentRange of leadingComments) if (sourceFile.text.substring(commentRange.pos, commentRange.end).includes("@ts-loop-yield-skip")) return true;
	return false;
}
function isTargetEventAssignment$1(node) {
	if (!ts.isBinaryExpression(node) || node.operatorToken.kind !== ts.SyntaxKind.EqualsToken) return false;
	const left = node.left;
	if (!ts.isPropertyAccessExpression(left) || left.name.text !== "func") return false;
	let expr = left.expression;
	if (ts.isCallExpression(expr)) expr = expr.expression;
	if (ts.isPropertyAccessExpression(expr)) {
		const parentExpr = expr.expression;
		if (ts.isPropertyAccessExpression(parentExpr)) {
			const categoryName = parentExpr.name.text;
			if (categoryName === "Event" || categoryName === "Broadcast") return true;
		}
	}
	return false;
}
/**
* ノードが await 付与対象のメソッド呼び出しであるか判定する
*/
function isAwaitTargetCall$1(node) {
	if (!ts.isCallExpression(node)) return false;
	let expr = node.expression;
	const parts = [];
	while (ts.isPropertyAccessExpression(expr)) {
		parts.unshift(expr.name.text);
		expr = expr.expression;
	}
	const methodPath = parts.join(".");
	return AWAIT_TARGET_METHODS$1.has(methodPath);
}
/**
* オブジェクトリテラル自動ラップの対象（new式、または特定のメソッド呼び出し）であるかを判定する
*/
function isArgumentObjectWrapTarget(node) {
	if (!ts.isNewExpression(node) && !ts.isCallExpression(node)) return false;
	if (!node.arguments || node.arguments.length !== 1) return false;
	const firstArg = node.arguments[0];
	if (ts.isObjectLiteralExpression(firstArg)) return false;
	const expr = node.expression;
	if (ts.isNewExpression(node) && ts.isPropertyAccessExpression(expr)) {
		const className = expr.name.text;
		return className === "Image" || className === "Sound";
	}
	if (ts.isCallExpression(node) && ts.isPropertyAccessExpression(expr)) {
		if (expr.name.text === "monitoring") {
			const parentExpr = expr.expression;
			if (ts.isPropertyAccessExpression(parentExpr)) return parentExpr.name.text === "Variable";
		}
	}
	return false;
}
//#endregion
//#region src/vitePlugins/vite-plugin-ts-ast-replacer/transformers/transformer.ts
function transformLoopBody$1(node, visit, id) {
	const sourceFile = node.getSourceFile();
	if (ts.isBlock(node)) {
		if (node.statements.length === 0) {
			const { line, character } = sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile));
			const nodeText = node.getText(sourceFile);
			const error = /* @__PURE__ */ new Error(`Empty loop body detected. Loop statements must not be empty.`);
			error.loc = {
				file: id,
				line: line + 1,
				column: character + 1
			};
			error.frame = nodeText;
			throw error;
		}
		const newStatements = [];
		for (const stmt of node.statements) {
			if (isTarget$1(stmt)) newStatements.push(createYieldStatement$1());
			newStatements.push(ts.visitNode(stmt, visit));
		}
		const yieldStmt = createYieldStatement$1();
		const lastStmt = node.statements[node.statements.length - 1];
		const trailingCommentsOfLastStmt = ts.getTrailingCommentRanges(sourceFile.text, lastStmt.end);
		const scanStartPos = trailingCommentsOfLastStmt && trailingCommentsOfLastStmt.length > 0 ? trailingCommentsOfLastStmt[trailingCommentsOfLastStmt.length - 1].end : lastStmt.end;
		const matches = sourceFile.text.substring(scanStartPos, node.end - 1).match(/(\/\/.*|\/\*[\s\S]*?\*\/)/g);
		if (matches && matches.length > 0) for (const rawComment of matches) {
			const isSingleLine = rawComment.startsWith("//");
			const cleanText = isSingleLine ? rawComment.replace(/^\/\/ ?/, "").trimEnd() : rawComment.replace(/^\/\* ?/, "").replace(/ ?\*\/$/, "").trim();
			ts.addSyntheticLeadingComment(yieldStmt, isSingleLine ? ts.SyntaxKind.SingleLineCommentTrivia : ts.SyntaxKind.MultiLineCommentTrivia, cleanText, true);
		}
		newStatements.push(yieldStmt);
		return ts.factory.updateBlock(node, newStatements);
	}
	if (ts.isEmptyStatement(node)) {
		const { line, character } = sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile));
		const nodeText = node.getText(sourceFile);
		const error = /* @__PURE__ */ new Error(`Empty loop body detected. Loop statements must not be empty.`);
		error.loc = {
			file: id,
			line: line + 1,
			column: character + 1
		};
		error.frame = nodeText;
		throw error;
	}
	const newStatements = [];
	if (isTarget$1(node)) {
		newStatements.push(createYieldStatement$1());
		newStatements.push(ts.visitNode(node, visit));
	} else newStatements.push(ts.visitNode(node, visit));
	newStatements.push(createYieldStatement$1());
	return ts.factory.createBlock(newStatements, true);
}
function transformIfBody$1(node, visit) {
	if (ts.isBlock(node)) {
		const newStatements = [];
		for (const stmt of node.statements) {
			if (isTarget$1(stmt)) newStatements.push(createYieldStatement$1());
			newStatements.push(ts.visitNode(stmt, visit));
		}
		return ts.factory.updateBlock(node, newStatements);
	} else {
		if (isTarget$1(node)) return ts.factory.createBlock([createYieldStatement$1(), ts.visitNode(node, visit)], true);
		return ts.factory.createBlock([ts.visitNode(node, visit)], true);
	}
}
function convertToAsyncGenerator$1(rightExpr, visit, inLoop) {
	const hasAsync = rightExpr.modifiers?.some((m) => m.kind === ts.SyntaxKind.AsyncKeyword);
	let newModifiers = rightExpr.modifiers || ts.factory.createNodeArray([]);
	if (!hasAsync) newModifiers = ts.factory.createNodeArray([ts.factory.createModifier(ts.SyntaxKind.AsyncKeyword), ...newModifiers]);
	return ts.factory.updateFunctionExpression(rightExpr, newModifiers, ts.factory.createToken(ts.SyntaxKind.AsteriskToken), rightExpr.name, rightExpr.typeParameters, rightExpr.parameters, rightExpr.type, ts.visitNode(rightExpr.body, (n) => visit(n, inLoop)));
}
var createTransformer$1 = (id, context) => {
	return (sf) => {
		const targetVariableNames = /* @__PURE__ */ new Set();
		function preScan(node) {
			if (isTargetEventAssignment$1(node)) {
				const binaryExpr = node;
				if (ts.isIdentifier(binaryExpr.right)) targetVariableNames.add(binaryExpr.right.text);
			}
			ts.forEachChild(node, preScan);
		}
		preScan(sf);
		function visit(node, inLoop = false) {
			if (isArgumentObjectWrapTarget(node)) {
				const visitedNode = ts.visitEachChild(node, (n) => visit(n, inLoop), context);
				const originalArg = ts.isNewExpression(visitedNode) ? visitedNode.arguments[0] : visitedNode.arguments[0];
				if (!ts.isIdentifier(originalArg)) {
					const { line, character } = sf.getLineAndCharacterOfPosition(node.getStart(sf));
					const nodeText = node.getText(sf);
					const error = /* @__PURE__ */ new Error(`Please specify a variable as the argument. [変数を引数にしてください]`);
					error.loc = {
						file: id,
						line: line + 1,
						column: character + 1
					};
					error.frame = nodeText;
					throw error;
				}
				const propertyAssignment = ts.factory.createShorthandPropertyAssignment(originalArg);
				const newObjectLiteral = ts.factory.createObjectLiteralExpression([propertyAssignment], false);
				if (ts.isNewExpression(visitedNode)) return ts.factory.updateNewExpression(visitedNode, visitedNode.expression, visitedNode.typeArguments, ts.factory.createNodeArray([newObjectLiteral]));
				else return ts.factory.updateCallExpression(visitedNode, visitedNode.expression, visitedNode.typeArguments, ts.factory.createNodeArray([newObjectLiteral]));
			}
			if (isAwaitTargetCall$1(node) && node.parent && !ts.isAwaitExpression(node.parent)) {
				const visitedCall = ts.visitEachChild(node, (n) => visit(n, inLoop), context);
				return ts.factory.createAwaitExpression(visitedCall);
			}
			if (ts.isVariableDeclaration(node) && node.initializer && ts.isFunctionExpression(node.initializer)) {
				if (ts.isIdentifier(node.name) && targetVariableNames.has(node.name.text)) {
					const updatedFunction = convertToAsyncGenerator$1(node.initializer, visit, inLoop);
					return ts.factory.updateVariableDeclaration(node, node.name, node.exclamationToken, node.type, updatedFunction);
				}
			}
			if (isTargetEventAssignment$1(node)) {
				const binaryExpr = node;
				const rightExpr = binaryExpr.right;
				if (ts.isFunctionExpression(rightExpr)) {
					const updatedFunction = convertToAsyncGenerator$1(rightExpr, visit, inLoop);
					return ts.factory.updateBinaryExpression(binaryExpr, binaryExpr.left, binaryExpr.operatorToken, updatedFunction);
				}
			}
			if (ts.isForStatement(node) || ts.isForInStatement(node) || ts.isForOfStatement(node) || ts.isWhileStatement(node) || ts.isDoStatement(node)) {
				if (hasSkipComment$1(node, sf)) return ts.visitEachChild(node, (n) => visit(n, false), context);
				if (ts.isForStatement(node)) {
					const updatedBody = transformLoopBody$1(node.statement, (n) => visit(n, true), id);
					return ts.factory.updateForStatement(node, node.initializer, node.condition, node.incrementor, updatedBody);
				}
				if (ts.isForInStatement(node)) {
					const updatedBody = transformLoopBody$1(node.statement, (n) => visit(n, true), id);
					return ts.factory.updateForInStatement(node, node.initializer, node.expression, updatedBody);
				}
				if (ts.isForOfStatement(node)) {
					const updatedBody = transformLoopBody$1(node.statement, (n) => visit(n, true), id);
					return ts.factory.updateForOfStatement(node, node.awaitModifier, node.initializer, node.expression, updatedBody);
				}
				if (ts.isWhileStatement(node)) {
					const updatedBody = transformLoopBody$1(node.statement, (n) => visit(n, true), id);
					return ts.factory.updateWhileStatement(node, node.expression, updatedBody);
				}
				if (ts.isDoStatement(node)) {
					const updatedBody = transformLoopBody$1(node.statement, (n) => visit(n, true), id);
					return ts.factory.updateDoStatement(node, updatedBody, node.expression);
				}
			}
			if (inLoop && ts.isIfStatement(node)) {
				const newThen = transformIfBody$1(node.thenStatement, (n) => visit(n, true));
				const newElse = node.elseStatement ? transformIfBody$1(node.elseStatement, (n) => visit(n, true)) : void 0;
				return ts.factory.updateIfStatement(node, node.expression, newThen, newElse);
			}
			return ts.visitEachChild(node, (n) => visit(n, inLoop), context);
		}
		return ts.visitNode(sf, (n) => visit(n, false));
	};
};
//#endregion
//#region src/vitePlugins/vite-plugin-ts-ast-replacer/index.ts
function isPluginError$1(error) {
	return error instanceof Error && "loc" in error;
}
function TsAstReplacer$1() {
	return {
		name: "vite-plugin-ts-ast-replacer",
		enforce: "pre",
		transform(code, id) {
			if (!id.endsWith(".ts") || id.includes("node_modules") || id.includes("docs") || id.includes("vitePlugin")) return null;
			try {
				const transpileResult = ts.transpileModule(code, {
					compilerOptions: {
						target: ts.ScriptTarget.Latest,
						module: ts.ModuleKind.ESNext,
						sourceMap: true
					},
					fileName: id,
					transformers: { before: [(context) => createTransformer$1(id, context)] }
				});
				console.log(transpileResult.outputText);
				return {
					code: transpileResult.outputText,
					map: transpileResult.sourceMapText ? JSON.parse(transpileResult.sourceMapText) : null
				};
			} catch (error) {
				if (isPluginError$1(error) && error.loc) {
					const paddedFrame = error.frame ? `\n\n  > ${error.frame}\n` : "";
					this.error({
						message: `[vite-plugin-ts-ast-replacer] ${error.message}${paddedFrame}`,
						id: error.loc.file,
						loc: {
							line: error.loc.line,
							column: error.loc.column
						},
						frame: error.frame
					});
				} else if (error instanceof Error) this.error(error.message);
				else this.error(String(error));
			}
		}
	};
}
//#endregion
//#region src/vitePlugins/vite-plugin-ts-code-replacer/utils/await-target-set.ts
/**
* await の付与対象となるメソッドのパターン辞書
* キーはメソッドのフルパス（オブジェクト名を除く部分）
*/
var AWAIT_TARGET_METHODS = /* @__PURE__ */ new Set([
	"Looks.backdrop.nextAndWait",
	"Looks.backdrop.previousAndWait",
	"Looks.backdrop.switchRandomAndWait",
	"Looks.backdrop.switchAndWait",
	"Control.wait",
	"Control.waitUntil",
	"Control.waitWhile",
	"Broadcast.sendAndWait",
	"Looks.bubble.sayForSecs",
	"Looks.bubble.thinkForSecs",
	"Motion.move.glideTo",
	"Motion.move.glideToRandom",
	"Motion.move.glideToMouse",
	"Sensing.askAndWait",
	"Sound.playUntilDone",
	"Speech.speech"
]);
//#endregion
//#region src/vitePlugins/vite-plugin-ts-code-replacer/utils/plugins-helpers.ts
function isTarget(node) {
	return ts.isBreakStatement(node) || ts.isContinueStatement(node);
}
function createYieldStatement() {
	return ts.factory.createExpressionStatement(ts.factory.createYieldExpression(void 0, void 0));
}
function hasSkipComment(node, sourceFile) {
	const leadingComments = ts.getLeadingCommentRanges(sourceFile.text, node.pos);
	if (!leadingComments) return false;
	for (const commentRange of leadingComments) if (sourceFile.text.substring(commentRange.pos, commentRange.end).includes("@ts-loop-yield-skip")) return true;
	return false;
}
function isTargetEventAssignment(node) {
	if (!ts.isBinaryExpression(node) || node.operatorToken.kind !== ts.SyntaxKind.EqualsToken) return false;
	const left = node.left;
	if (!ts.isPropertyAccessExpression(left) || left.name.text !== "func") return false;
	let expr = left.expression;
	if (ts.isCallExpression(expr)) expr = expr.expression;
	if (ts.isPropertyAccessExpression(expr)) {
		const parentExpr = expr.expression;
		if (ts.isPropertyAccessExpression(parentExpr)) {
			const categoryName = parentExpr.name.text;
			if (categoryName === "Event" || categoryName === "Broadcast") return true;
		}
	}
	return false;
}
/**
* ノードが await 付与対象のメソッド呼び出しであるか判定する
*/
function isAwaitTargetCall(node) {
	if (!ts.isCallExpression(node)) return false;
	let expr = node.expression;
	const parts = [];
	while (ts.isPropertyAccessExpression(expr)) {
		parts.unshift(expr.name.text);
		expr = expr.expression;
	}
	const methodPath = parts.join(".");
	return AWAIT_TARGET_METHODS.has(methodPath);
}
//#endregion
//#region src/vitePlugins/vite-plugin-ts-code-replacer/transformers/transformer.ts
function transformLoopBody(node, visit, id) {
	const sourceFile = node.getSourceFile();
	if (ts.isBlock(node)) {
		if (node.statements.length === 0) {
			const { line, character } = sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile));
			const nodeText = node.getText(sourceFile);
			const error = /* @__PURE__ */ new Error(`Empty loop body detected. Loop statements must not be empty.`);
			error.loc = {
				file: id,
				line: line + 1,
				column: character + 1
			};
			error.frame = nodeText;
			throw error;
		}
		const newStatements = [];
		for (const stmt of node.statements) {
			if (isTarget(stmt)) newStatements.push(createYieldStatement());
			newStatements.push(ts.visitNode(stmt, visit));
		}
		const yieldStmt = createYieldStatement();
		const lastStmt = node.statements[node.statements.length - 1];
		const trailingCommentsOfLastStmt = ts.getTrailingCommentRanges(sourceFile.text, lastStmt.end);
		const scanStartPos = trailingCommentsOfLastStmt && trailingCommentsOfLastStmt.length > 0 ? trailingCommentsOfLastStmt[trailingCommentsOfLastStmt.length - 1].end : lastStmt.end;
		const matches = sourceFile.text.substring(scanStartPos, node.end - 1).match(/(\/\/.*|\/\*[\s\S]*?\*\/)/g);
		if (matches && matches.length > 0) for (const rawComment of matches) {
			const isSingleLine = rawComment.startsWith("//");
			const cleanText = isSingleLine ? rawComment.replace(/^\/\/ ?/, "").trimEnd() : rawComment.replace(/^\/\* ?/, "").replace(/ ?\*\/$/, "").trim();
			ts.addSyntheticLeadingComment(yieldStmt, isSingleLine ? ts.SyntaxKind.SingleLineCommentTrivia : ts.SyntaxKind.MultiLineCommentTrivia, cleanText, true);
		}
		newStatements.push(yieldStmt);
		return ts.factory.updateBlock(node, newStatements);
	}
	if (ts.isEmptyStatement(node)) {
		const { line, character } = sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile));
		const nodeText = node.getText(sourceFile);
		const error = /* @__PURE__ */ new Error(`Empty loop body detected. Loop statements must not be empty.`);
		error.loc = {
			file: id,
			line: line + 1,
			column: character + 1
		};
		error.frame = nodeText;
		throw error;
	}
	const newStatements = [];
	if (isTarget(node)) {
		newStatements.push(createYieldStatement());
		newStatements.push(ts.visitNode(node, visit));
	} else newStatements.push(ts.visitNode(node, visit));
	newStatements.push(createYieldStatement());
	return ts.factory.createBlock(newStatements, true);
}
function transformIfBody(node, visit) {
	if (ts.isBlock(node)) {
		const newStatements = [];
		for (const stmt of node.statements) {
			if (isTarget(stmt)) newStatements.push(createYieldStatement());
			newStatements.push(ts.visitNode(stmt, visit));
		}
		return ts.factory.updateBlock(node, newStatements);
	} else {
		if (isTarget(node)) return ts.factory.createBlock([createYieldStatement(), ts.visitNode(node, visit)], true);
		return ts.factory.createBlock([ts.visitNode(node, visit)], true);
	}
}
function convertToAsyncGenerator(rightExpr, visit, inLoop) {
	const hasAsync = rightExpr.modifiers?.some((m) => m.kind === ts.SyntaxKind.AsyncKeyword);
	let newModifiers = rightExpr.modifiers || ts.factory.createNodeArray([]);
	if (!hasAsync) newModifiers = ts.factory.createNodeArray([ts.factory.createModifier(ts.SyntaxKind.AsyncKeyword), ...newModifiers]);
	return ts.factory.updateFunctionExpression(rightExpr, newModifiers, ts.factory.createToken(ts.SyntaxKind.AsteriskToken), rightExpr.name, rightExpr.typeParameters, rightExpr.parameters, rightExpr.type, ts.visitNode(rightExpr.body, (n) => visit(n, inLoop)));
}
var createTransformer = (id, context) => {
	return (sf) => {
		const targetVariableNames = /* @__PURE__ */ new Set();
		function preScan(node) {
			if (isTargetEventAssignment(node)) {
				const binaryExpr = node;
				if (ts.isIdentifier(binaryExpr.right)) targetVariableNames.add(binaryExpr.right.text);
			}
			ts.forEachChild(node, preScan);
		}
		preScan(sf);
		function visit(node, inLoop = false) {
			if (isAwaitTargetCall(node) && node.parent && !ts.isAwaitExpression(node.parent)) {
				const visitedCall = ts.visitEachChild(node, (n) => visit(n, inLoop), context);
				return ts.factory.createAwaitExpression(visitedCall);
			}
			if (ts.isVariableDeclaration(node) && node.initializer && ts.isFunctionExpression(node.initializer)) {
				if (ts.isIdentifier(node.name) && targetVariableNames.has(node.name.text)) {
					const updatedFunction = convertToAsyncGenerator(node.initializer, visit, inLoop);
					return ts.factory.updateVariableDeclaration(node, node.name, node.exclamationToken, node.type, updatedFunction);
				}
			}
			if (isTargetEventAssignment(node)) {
				const binaryExpr = node;
				const rightExpr = binaryExpr.right;
				if (ts.isFunctionExpression(rightExpr)) {
					const updatedFunction = convertToAsyncGenerator(rightExpr, visit, inLoop);
					return ts.factory.updateBinaryExpression(binaryExpr, binaryExpr.left, binaryExpr.operatorToken, updatedFunction);
				}
			}
			if (ts.isForStatement(node) || ts.isForInStatement(node) || ts.isForOfStatement(node) || ts.isWhileStatement(node) || ts.isDoStatement(node)) {
				if (hasSkipComment(node, sf)) return ts.visitEachChild(node, (n) => visit(n, false), context);
				if (ts.isForStatement(node)) {
					const updatedBody = transformLoopBody(node.statement, (n) => visit(n, true), id);
					return ts.factory.updateForStatement(node, node.initializer, node.condition, node.incrementor, updatedBody);
				}
				if (ts.isForInStatement(node)) {
					const updatedBody = transformLoopBody(node.statement, (n) => visit(n, true), id);
					return ts.factory.updateForInStatement(node, node.initializer, node.expression, updatedBody);
				}
				if (ts.isForOfStatement(node)) {
					const updatedBody = transformLoopBody(node.statement, (n) => visit(n, true), id);
					return ts.factory.updateForOfStatement(node, node.awaitModifier, node.initializer, node.expression, updatedBody);
				}
				if (ts.isWhileStatement(node)) {
					const updatedBody = transformLoopBody(node.statement, (n) => visit(n, true), id);
					return ts.factory.updateWhileStatement(node, node.expression, updatedBody);
				}
				if (ts.isDoStatement(node)) {
					const updatedBody = transformLoopBody(node.statement, (n) => visit(n, true), id);
					return ts.factory.updateDoStatement(node, updatedBody, node.expression);
				}
			}
			if (inLoop && ts.isIfStatement(node)) {
				const newThen = transformIfBody(node.thenStatement, (n) => visit(n, true));
				const newElse = node.elseStatement ? transformIfBody(node.elseStatement, (n) => visit(n, true)) : void 0;
				return ts.factory.updateIfStatement(node, node.expression, newThen, newElse);
			}
			return ts.visitEachChild(node, (n) => visit(n, inLoop), context);
		}
		return ts.visitNode(sf, (n) => visit(n, false));
	};
};
//#endregion
//#region src/vitePlugins/vite-plugin-ts-code-replacer/utils/typeDefineSymbolSet.ts
/** クラスシンボル */
var CLASS_SYMBOL = {
	FONT_CLASS_BRAND: "FontBrandSymbol",
	FONT_IMAGE_CLASS_BRAND: "FontIMageBrandSymbol",
	IMAGE_CLASS_BRAND: "ImageBrandSymbol",
	SOUND_CLASS_BRAND: "SoundBrandSymbol",
	VARIABLE_CLASS_BRAND: "VariableBrandSymbol"
};
/**  型ファイルをそれぞれ絶対パスで定義 */
var basePackagePath = "node_modules/@tscratch3/typescratcher/src/type";
/** 型ファイルパスの配列を返す */
var type_definition_files = function(rootPath) {
	return [
		path.resolve(rootPath, `${basePackagePath}/font/index.ts`),
		path.resolve(rootPath, `${basePackagePath}/font/fontImage.ts`),
		path.resolve(rootPath, `${basePackagePath}/image/index.ts`),
		path.resolve(rootPath, `${basePackagePath}/sound/index.ts`),
		path.resolve(rootPath, `${basePackagePath}/entity/monitor/SVariable.ts`)
	];
};
//#endregion
//#region src/vitePlugins/vite-plugin-ts-code-replacer/transformers/transformObjectWrapping.ts
var project = null;
function getOrInitProject(rootPath) {
	if (project) return project;
	project = new Project({
		compilerOptions: { target: 99 },
		skipAddingFilesFromTsConfig: true
	});
	type_definition_files(rootPath).forEach((filePath) => {
		try {
			project.addSourceFileAtPath(filePath);
		} catch (e) {
			console.warn(`[vite-plugin-ts-code-replacer] Failed to load type definition file: ${filePath}`);
		}
	});
	return project;
}
function transformObjectWrapping(code, id) {
	if (!code.includes("Font") && !code.includes("FontImage") && !code.includes("Image") && !code.includes("Sound") && !code.includes("monitoring")) return {
		code,
		map: null
	};
	const currentProject = getOrInitProject(process.cwd());
	const sourceFile = currentProject.createSourceFile(id, code, { overwrite: true });
	const typeChecker = currentProject.getTypeChecker();
	const s = new MagicString(code);
	sourceFile.getDescendantsOfKind(SyntaxKind.NewExpression).forEach((newExpr) => {
		const constructorExpression = newExpr.getExpression();
		if (typeChecker.getTypeAtLocation(constructorExpression).getProperties().some((prop) => {
			const name = prop.getName();
			return name.includes(CLASS_SYMBOL.FONT_CLASS_BRAND) || name.includes(CLASS_SYMBOL.FONT_IMAGE_CLASS_BRAND) || name.includes(CLASS_SYMBOL.IMAGE_CLASS_BRAND) || name.includes(CLASS_SYMBOL.SOUND_CLASS_BRAND);
		})) processArguments(newExpr.getArguments(), newExpr.getText(), id, code, s, () => {});
	});
	sourceFile.getDescendantsOfKind(SyntaxKind.CallExpression).forEach((callExpr) => {
		const expression = callExpr.getExpression();
		if (expression.getKind() === SyntaxKind.PropertyAccessExpression) {
			const propAccess = expression;
			if (propAccess.getName() === "monitoring") {
				const objectExpression = propAccess.getExpression();
				if (typeChecker.getTypeAtLocation(objectExpression).getProperties().some((prop) => {
					return prop.getName().includes(CLASS_SYMBOL.VARIABLE_CLASS_BRAND);
				})) processArguments(callExpr.getArguments(), callExpr.getText(), id, code, s, () => {});
			}
		}
	});
	currentProject.removeSourceFile(sourceFile);
	currentProject._cachedProgram = void 0;
	return {
		code: s.toString(),
		map: s.generateMap({ hires: true })
	};
}
/**
* 引数の数をチェックし、オブジェクトリテラルへの書き換え、およびバリデーションを行う共通ヘルパー
*/
function processArguments(args, fullMatchText, id, code, s, onChanged) {
	if (args.length !== 1) return;
	const firstArg = args[0];
	if (firstArg.getKind() === SyntaxKind.ObjectLiteralExpression) return;
	const argumentText = firstArg.getText();
	const cleanArg = argumentText.trim();
	if (!/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(cleanArg)) {
		const { line, column } = getLineAndColumn(code, firstArg.getStart());
		const error = /* @__PURE__ */ new Error(`Please specify a variable as the argument. Automatic object conversion is not supported.`);
		error.loc = {
			file: id,
			line,
			column
		};
		error.frame = fullMatchText;
		throw error;
	}
	const start = firstArg.getStart();
	const end = firstArg.getEnd();
	s.overwrite(start, end, `{ ${argumentText} }`);
	onChanged();
}
/**
* 文字列のインデックスから行番号と列番号（1始まり）を計算するヘルパー
*/
function getLineAndColumn(code, index) {
	const lines = code.substring(0, index).split("\n");
	return {
		line: lines.length,
		column: lines[lines.length - 1].length + 1
	};
}
//#endregion
//#region src/vitePlugins/vite-plugin-ts-code-replacer/index.ts
function isPluginError(error) {
	return error instanceof Error && "loc" in error;
}
function TsCodeReplacer$1() {
	return {
		name: "vite-plugin-ts-code-replacer",
		enforce: "pre",
		transform(code, id) {
			if (!id.endsWith(".ts") || id.includes("node_modules") || id.includes("docs") || id.includes("vitePlugin")) return null;
			try {
				const transpileResult = ts.transpileModule(code, {
					compilerOptions: {
						target: ts.ScriptTarget.Latest,
						module: ts.ModuleKind.ESNext,
						sourceMap: true
					},
					fileName: id,
					transformers: { before: [(context) => createTransformer(id, context)] }
				});
				const wrappedResult = transformObjectWrapping(transpileResult.outputText, id);
				if (transpileResult.sourceMapText && wrappedResult.map) {
					const map1 = JSON.parse(transpileResult.sourceMapText);
					const map2 = wrappedResult.map;
					const mergedMap = remapping([map2, map1], () => null);
					return {
						code: wrappedResult.code,
						map: mergedMap
					};
				}
				return {
					code: wrappedResult.code,
					map: wrappedResult.map ? wrappedResult.map : null
				};
			} catch (error) {
				if (isPluginError(error) && error.loc) {
					const paddedFrame = error.frame ? `\n\n  > ${error.frame}\n` : "";
					this.error({
						message: `[vite-plugin-ts-code-replacer] ${error.message}${paddedFrame}`,
						id: error.loc.file,
						loc: {
							line: error.loc.line,
							column: error.loc.column
						}
					});
				} else if (error instanceof Error) this.error(error.message);
				else this.error(String(error));
			}
		}
	};
}
//#endregion
//#region src/vitePlugins/index.ts
var TsAstReplacer = TsAstReplacer$1;
var TsCodeReplacer = TsCodeReplacer$1;
//#endregion
export { TsAstReplacer, TsCodeReplacer };

//# sourceMappingURL=index.js.map