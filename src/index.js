var recast = require('recast');
var _      = require('lodash');
var n      = recast.types.namedTypes;
var b      = recast.types.builders;
var fs     = require('fs');
var colors = require('colors');
var Promise = require('bluebird');


var middlewares = [
  require('./modules/strip-use-stricts'),
  require('./modules/amd_def_to_export_default')
];

/////////////
// Convert //
/////////////
function convert(opts) {
    var all = pathCache.paths;
    var count = 0;
    for(var file in all){
        count++
        // if(file === "vvcontrollerpagelayouts"){
            processFile(pathCache.baseUrl + all[file] + ".js");
        // }
    }
    console.log('totally processed '+count+' files');
}

function processFile(file) {

      var code, ast;
      // Read file and parse to ast
      try{
        code   = fs.readFileSync(file, "utf-8");
      }catch(e){
          console.log('read_file_error: ', e, ' file_name= ',file);
      }
      try{
        ast    = recast.parse(code);
      }catch(e){
          console.log('parse_file_error: ', e, ' file_name= ',file);
      }

      if (!code) {
          console.log(file + " is empty or does not exist.".yellow);
        return;
      }
      // Run through middlewares
      try{
        ast.program.body = middlewares.reduce(function(body, m) {
            return m(body, file);
        }, ast.program.body);
        // Write
        fs.writeFileSync(file, _.trimLeft(recast.print(ast).code));
        console.log(("successfully transformed "+file).green);
      }catch(e){
          var type = "non_AMD_module_definition_format";
          if(e.message.indexOf(type) === 0){
            console.log((e.message).yellow);
          }else{
            console.log(('Error_happening ' + e.message + ' in file ' + file).red);
          }
      }
    // console.log(recast.print(ast).code);
}

module.exports = convert;
