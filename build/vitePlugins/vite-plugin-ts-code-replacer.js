import ts from 'typescript';

const AWAIT_TARGET_METHODS = /* @__PURE__ */ new Set([
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

function isTarget(node) {
  return ts.isBreakStatement(node) || ts.isContinueStatement(node);
}
function createYieldStatement() {
  return ts.factory.createExpressionStatement(
    ts.factory.createYieldExpression(void 0, void 0)
  );
}
function hasSkipComment(node, sourceFile) {
  const leadingComments = ts.getLeadingCommentRanges(sourceFile.text, node.pos);
  if (!leadingComments) return false;
  for (const commentRange of leadingComments) {
    const commentText = sourceFile.text.substring(commentRange.pos, commentRange.end);
    if (commentText.includes("@ts-loop-yield-skip")) {
      return true;
    }
  }
  return false;
}
function isTargetEventAssignment(node) {
  if (!ts.isBinaryExpression(node) || node.operatorToken.kind !== ts.SyntaxKind.EqualsToken) {
    return false;
  }
  const left = node.left;
  if (!ts.isPropertyAccessExpression(left) || left.name.text !== "func") {
    return false;
  }
  let expr = left.expression;
  if (ts.isCallExpression(expr)) {
    expr = expr.expression;
  }
  if (ts.isPropertyAccessExpression(expr)) {
    const parentExpr = expr.expression;
    if (ts.isPropertyAccessExpression(parentExpr)) {
      const categoryName = parentExpr.name.text;
      if (categoryName === "Event" || categoryName === "Broadcast") {
        return true;
      }
    }
  }
  return false;
}
function isAwaitTargetCall(node) {
  if (!ts.isCallExpression(node)) {
    return false;
  }
  let expr = node.expression;
  const parts = [];
  while (ts.isPropertyAccessExpression(expr)) {
    parts.unshift(expr.name.text);
    expr = expr.expression;
  }
  const methodPath = parts.join(".");
  return AWAIT_TARGET_METHODS.has(methodPath);
}
function isArgumentObjectWrapTarget(node) {
  if (!ts.isNewExpression(node) && !ts.isCallExpression(node)) {
    return false;
  }
  if (!node.arguments || node.arguments.length !== 1) {
    return false;
  }
  const firstArg = node.arguments[0];
  if (ts.isObjectLiteralExpression(firstArg)) {
    return false;
  }
  const expr = node.expression;
  if (ts.isNewExpression(node) && ts.isPropertyAccessExpression(expr)) {
    const className = expr.name.text;
    return className === "Image" || className === "Sound";
  }
  if (ts.isCallExpression(node) && ts.isPropertyAccessExpression(expr)) {
    const methodName = expr.name.text;
    if (methodName === "monitoring") {
      const parentExpr = expr.expression;
      if (ts.isPropertyAccessExpression(parentExpr)) {
        const subName = parentExpr.name.text;
        return subName === "Variable";
      }
    }
  }
  return false;
}

function transformLoopBody(node, visit, id) {
  const sourceFile = node.getSourceFile();
  if (ts.isBlock(node)) {
    if (node.statements.length === 0) {
      const { line, character } = sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile));
      const nodeText = node.getText(sourceFile);
      const error = new Error(`Empty loop body detected. Loop statements must not be empty.`);
      error.loc = {
        file: id,
        line: line + 1,
        column: character + 1
      };
      error.frame = nodeText;
      throw error;
    }
    const newStatements2 = [];
    for (const stmt of node.statements) {
      if (isTarget(stmt)) {
        newStatements2.push(createYieldStatement());
      }
      newStatements2.push(ts.visitNode(stmt, visit));
    }
    const yieldStmt = createYieldStatement();
    const lastStmt = node.statements[node.statements.length - 1];
    const trailingCommentsOfLastStmt = ts.getTrailingCommentRanges(sourceFile.text, lastStmt.end);
    const scanStartPos = trailingCommentsOfLastStmt && trailingCommentsOfLastStmt.length > 0 ? trailingCommentsOfLastStmt[trailingCommentsOfLastStmt.length - 1].end : lastStmt.end;
    const rawTailText = sourceFile.text.substring(scanStartPos, node.end - 1);
    const commentRegex = /(\/\/.*|\/\*[\s\S]*?\*\/)/g;
    const matches = rawTailText.match(commentRegex);
    if (matches && matches.length > 0) {
      for (const rawComment of matches) {
        const isSingleLine = rawComment.startsWith("//");
        const cleanText = isSingleLine ? rawComment.replace(/^\/\/ ?/, "").trimEnd() : rawComment.replace(/^\/\* ?/, "").replace(/ ?\*\/$/, "").trim();
        ts.addSyntheticLeadingComment(
          yieldStmt,
          isSingleLine ? ts.SyntaxKind.SingleLineCommentTrivia : ts.SyntaxKind.MultiLineCommentTrivia,
          cleanText,
          true
        );
      }
    }
    newStatements2.push(yieldStmt);
    return ts.factory.updateBlock(node, newStatements2);
  }
  if (ts.isEmptyStatement(node)) {
    const { line, character } = sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile));
    const nodeText = node.getText(sourceFile);
    const error = new Error(`Empty loop body detected. Loop statements must not be empty.`);
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
  } else {
    newStatements.push(ts.visitNode(node, visit));
  }
  newStatements.push(createYieldStatement());
  return ts.factory.createBlock(newStatements, true);
}
function transformIfBody(node, visit) {
  if (ts.isBlock(node)) {
    const newStatements = [];
    for (const stmt of node.statements) {
      if (isTarget(stmt)) {
        newStatements.push(createYieldStatement());
      }
      newStatements.push(ts.visitNode(stmt, visit));
    }
    return ts.factory.updateBlock(node, newStatements);
  } else {
    if (isTarget(node)) {
      return ts.factory.createBlock([createYieldStatement(), ts.visitNode(node, visit)], true);
    }
    return ts.factory.createBlock([ts.visitNode(node, visit)], true);
  }
}
function convertToAsyncGenerator(rightExpr, visit, inLoop) {
  const hasAsync = rightExpr.modifiers?.some((m) => m.kind === ts.SyntaxKind.AsyncKeyword);
  let newModifiers = rightExpr.modifiers || ts.factory.createNodeArray([]);
  if (!hasAsync) {
    newModifiers = ts.factory.createNodeArray([
      ts.factory.createModifier(ts.SyntaxKind.AsyncKeyword),
      ...newModifiers
    ]);
  }
  return ts.factory.updateFunctionExpression(
    rightExpr,
    newModifiers,
    ts.factory.createToken(ts.SyntaxKind.AsteriskToken),
    rightExpr.name,
    rightExpr.typeParameters,
    rightExpr.parameters,
    rightExpr.type,
    ts.visitNode(rightExpr.body, (n) => visit(n, inLoop))
  );
}
const createTransformer = (id, context) => {
  return (sf) => {
    const targetVariableNames = /* @__PURE__ */ new Set();
    function preScan(node) {
      if (isTargetEventAssignment(node)) {
        const binaryExpr = node;
        if (ts.isIdentifier(binaryExpr.right)) {
          targetVariableNames.add(binaryExpr.right.text);
        }
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
          const error = new Error(`Please specify a variable as the argument. [変数を引数にしてください]`);
          error.loc = {
            file: id,
            line: line + 1,
            column: character + 1
          };
          error.frame = nodeText;
          throw error;
        }
        const propertyAssignment = ts.factory.createShorthandPropertyAssignment(originalArg);
        const newObjectLiteral = ts.factory.createObjectLiteralExpression(
          [propertyAssignment],
          false
        );
        if (ts.isNewExpression(visitedNode)) {
          return ts.factory.updateNewExpression(
            visitedNode,
            visitedNode.expression,
            visitedNode.typeArguments,
            ts.factory.createNodeArray([newObjectLiteral])
          );
        } else {
          return ts.factory.updateCallExpression(
            visitedNode,
            visitedNode.expression,
            visitedNode.typeArguments,
            ts.factory.createNodeArray([newObjectLiteral])
          );
        }
      }
      if (isAwaitTargetCall(node) && node.parent && !ts.isAwaitExpression(node.parent)) {
        const visitedCall = ts.visitEachChild(node, (n) => visit(n, inLoop), context);
        return ts.factory.createAwaitExpression(visitedCall);
      }
      if (ts.isVariableDeclaration(node) && node.initializer && ts.isFunctionExpression(node.initializer)) {
        if (ts.isIdentifier(node.name) && targetVariableNames.has(node.name.text)) {
          const updatedFunction = convertToAsyncGenerator(node.initializer, visit, inLoop);
          return ts.factory.updateVariableDeclaration(
            node,
            node.name,
            node.exclamationToken,
            node.type,
            updatedFunction
          );
        }
      }
      if (isTargetEventAssignment(node)) {
        const binaryExpr = node;
        const rightExpr = binaryExpr.right;
        if (ts.isFunctionExpression(rightExpr)) {
          const updatedFunction = convertToAsyncGenerator(rightExpr, visit, inLoop);
          return ts.factory.updateBinaryExpression(
            binaryExpr,
            binaryExpr.left,
            binaryExpr.operatorToken,
            updatedFunction
          );
        }
      }
      if (ts.isForStatement(node) || ts.isForInStatement(node) || ts.isForOfStatement(node) || ts.isWhileStatement(node) || ts.isDoStatement(node)) {
        if (hasSkipComment(node, sf)) {
          return ts.visitEachChild(node, (n) => visit(n, false), context);
        }
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

function isPluginError(error) {
  return error instanceof Error && "loc" in error;
}
function TsCodeReplacer() {
  return {
    name: "vite-plugin-ts-code-replacer",
    enforce: "pre",
    transform(code, id) {
      if (!id.endsWith(".ts") || id.includes("node_modules") || id.includes("docs") || id.includes("vitePlugin")) {
        return null;
      }
      try {
        const transpileResult = ts.transpileModule(code, {
          compilerOptions: {
            target: ts.ScriptTarget.Latest,
            module: ts.ModuleKind.ESNext,
            sourceMap: true
          },
          fileName: id,
          transformers: {
            before: [
              (context) => createTransformer(id, context)
            ]
          }
        });
        console.log(transpileResult.outputText);
        return {
          code: transpileResult.outputText,
          map: transpileResult.sourceMapText ? JSON.parse(transpileResult.sourceMapText) : null
        };
      } catch (error) {
        if (isPluginError(error) && error.loc) {
          const paddedFrame = error.frame ? `

  > ${error.frame}
` : "";
          this.error({
            message: `[vite-plugin-ts-code-replacer] ${error.message}${paddedFrame}`,
            id: error.loc.file,
            loc: {
              line: error.loc.line,
              column: error.loc.column
            },
            frame: error.frame
          });
        } else if (error instanceof Error) {
          this.error(error.message);
        } else {
          this.error(String(error));
        }
      }
    }
  };
}

export { TsCodeReplacer };
