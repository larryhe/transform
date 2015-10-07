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
function convert(pattern, opts) {

  var verbose = opts.verbose;

  var glob = require('glob');
  var path = require('path');
  var p = pattern;
  if(!pattern.match(/\.js$/)){
    p = path.join(pattern, '**/*.js');
  }

  var files = glob.sync(p);

  if (!files) {
      console.log("Error globbing files.".red);
    return;
  }

  if (!files.length) {
      console.log("No files to convert.".yellow);
  }

  files.map(function(file) {

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
     console.log('start processing file=========', file);
      // Run through middlewares
      ast.program.body = middlewares.reduce(function(body, m) {
        return m(body, file);
      }, ast.program.body);

      // Write
      fs.writeFileSync(file, _.trimLeft(recast.print(ast).code));
    // console.log(recast.print(ast).code);
    console.log(('transform_success: ' + file + " is converted.").green);
    });
}

module.exports = convert;
