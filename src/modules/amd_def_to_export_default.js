var assert = require('assert');
var recast = require('recast');
var _      = require('lodash');
var n      = recast.types.namedTypes;
var b      = recast.types.builders;
var pathCache = require('../vault-all');

// module.exports = Component
// =>
// export default Component

module.exports = function convertAmdDefToExportDefault(body, file) {
    if(body.length > 1){
         console.log('extra_statements_after_AMD_define found in file :', file);
    }
  body = body.map(function(o) {
    if (!o) {
      return o;
    }
    var depsList = [],
        args,
        params,
        callbackExpr;
    try {
      n.ExpressionStatement.assert(o);
      n.CallExpression.assert(o.expression);
      assert(o.expression.callee.name === "define" || o.expression.callee.name === "require", "non_AMD_module_definition_format found");
      args = o.expression.arguments ||[];
      assert(args.length === 2 || args.length === 1, "AMD_module_define_has_none_standard_arguments");
      callbackExpr = args[args.length - 1];
      n.FunctionExpression.assert(callbackExpr);
      if(args.length === 2){
          depsList = args[0].elements;
      }
      params = callbackExpr.params || [];
      var ret = generateImports(params, depsList, file);
      generateExportFromFuncBody(ret, callbackExpr.body, file);
    } catch(e) {
      return o;
    }
    return ret;
  });
    return _.flatten(body);
};

function generateExportFromFuncBody(body, funcBody, file){
    n.BlockStatement.assert(funcBody);
    for (var i = 0; i < funcBody.body.length; i++) {
        var stmt = funcBody.body[i];
        if(stmt.type === "ReturnStatement"){
            body.push(b.exportDeclaration(true, stmt.argument));//last return should default export
            if(i !== funcBody.body.length -1){
                console.log("return_module_value_at_middle in file :", file);
            }
        }else{
            body.push(stmt);
        }
    }
}

function generateImports(params, deps, file){
    var imports = [];
    for (var p = 0; p < params.length; p++) {
        var paramExpr = params[p];
        var name = deps[p].value;
        if(name.indexOf("hbs!") === 0){
            name = name.replace(/(hbs!)(.*)/, "$2.$1");
        }else{
            if(name === 'require'){
                console.log('require_call_found in file: ', file);
            }
            name = pathCache.paths[name];
        }
        if(name){
            var declarator = b.importDeclaration([
            b.importDefaultSpecifier(b.identifier(paramExpr.name))
            ], b.literal(name));
            imports.push(declarator);
        }
    };
    if(p < deps.length){
        console.log('none_exposed_module found in file: ', file);
        while(p < deps.length){
            console.log('xxxxxxxxx>>>>', pathCache.paths[deps[p].value]);
            p++;
        }
    }
    return imports;
}
