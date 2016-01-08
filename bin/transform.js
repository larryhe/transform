#!/usr/bin/env node

var commander = require("commander");
var main = require('../src/index');
var colors = require('colors');

var program = new commander.Command('transform');

// program.option("-s, --source <type>", "Source to convert from ES5 to ES6 i.e. transform -s src/js");
program.option("-v, --verbose", "Verbose mode");

var pkg = require("../package.json");
program.version(pkg.version);
program.parse(process.argv);

// Verify source
var source = program.source;
var verbose = program.verbose;

// if (!source) {
//   return program.help();
// }

main({verbose: verbose});

