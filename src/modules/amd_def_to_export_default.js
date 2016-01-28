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
    var non_AMD_module_msg = "non_AMD_module_definition_format found in "+file;
    if(body.length > 1){
        throw new Error(non_AMD_module_msg);
    }
  body = body.map(function(o) {
    if (!o) {
      return o;
    }
    var depsList = [],
        args,
        params,
        callbackExpr;
      assert(o.type === "ExpressionStatement", non_AMD_module_msg);
      assert(o.expression.type === "CallExpression", non_AMD_module_msg);
      assert(o.expression.callee.name === "define" || o.expression.callee.name === "require", non_AMD_module_msg);
      args = o.expression.arguments ||[];
      assert(args.length === 2 || args.length === 1, "AMD_module_define_has_none_standard_arguments found in "+file);
      if(args.length === 2){
            depsList = args[0].elements;
            callbackExpr = args[args.length - 1];
            assert("FunctionExpression" === callbackExpr.type, "invalid_file_found in file: "+file);
            params = callbackExpr.params || [];
            var ret = generateImports(params, depsList, file);
            return ret.concat(generateExportFromFuncBody(callbackExpr.body, file));
      }else{
          var expr = args[0];
          assert(expr.type === "FunctionExpression" || expr.type === "ArrayExpression", "invalid_file_found in file: "+file);
          if(expr.type === "FunctionExpression"){
              return generateExportFromFuncBody(expr.body, file);
          }else{
              return generateImports([], expr.elements, file);
          }
      }
  });
    return _.flatten(body);
};

function generateExportFromFuncBody(funcBody, file){
    n.BlockStatement.assert(funcBody, 'invalid_file_found in file:'+file);
    return funcBody.body.map(function(o){
        if(o.type === 'ExpressionStatement' && o.expression.value === "use strict"){
            return null;
        }else if(o.type === "ReturnStatement"){
            return b.exportDeclaration(true, o.argument);//last return should default export
        }else{
            return o;
        }
    })
}

function generateImports(params, deps, file){
    var imports = [];
    for (var p = 0; p < params.length; p++) {
        var paramExpr = params[p];
        var name = deps[p].value;
        if(name.indexOf("hbs!") === 0){
            name = name.replace(/((hbs)!)(.*)/, "$3.$2");
        }else{
            if(name === 'require'){
                console.log('require_call_found in file: ', file);
            }
            name = pathCache.paths[name];
            if(!name){
                name = deps[p].value;
                console.log(('name_not_registered [ ' + name + '] found in file: '+file).blue);
            }
        }
        if(name){
            var declarator = b.importDeclaration([
            b.importDefaultSpecifier(b.identifier(paramExpr.name))
            ], b.literal(name));
            imports.push(declarator);
        }
    };
    if(p < deps.length){
        console.log(('empty_import found in file: '+file).yellow);
        while(p < deps.length){
            var name = pathCache.paths[deps[p].value];
            if(!name){
                name = deps[p].value;
                console.log(('name_not_registered [ ' + name + '] found in file: '+file).blue);
            }
            var declarator = b.importDeclaration([], b.literal(name));
            imports.push(declarator);
            p++;
        }
    }
    return imports;
}
