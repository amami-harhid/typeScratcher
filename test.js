const varNameValues = ( vars ) => {
        if(typeof vars == 'string'){
            return [ vars, vars ];
        }
        let _key = '';
        let _value = undefined;
        for (const [key, value] of Object.entries(vars)) {
            _key = `${key}`;
            _value = value;
            break;
        }
        return [_key, _value ];
}
const test = "test string";
const result = varNameValues( test );
console.log(result);