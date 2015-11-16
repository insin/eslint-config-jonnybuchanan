#!/usr/bin/env node

var execSync = require('child_process').execSync
var fs = require('fs')
var path = require('path')

// Find eslint .bin script
var options = [
  // Global install or npm@2 local install, dependencies in local node_modules
  path.join(__dirname, '../node_modules/.bin/eslint'),
  // Local npm@3 install, .bin and dependencies are siblings
  path.join(__dirname, '../../.bin/eslint')
]

var eslint
for (var i = 0; i < options.length; i++) {
  try {
    fs.statSync(options[i])
    eslint = options[i]
    break
  }
  catch (e) {
    // pass
  }
}

if (!eslint) {
  console.error('Unable to locate .bin/eslint')
  process.exit(1)
}

var command =
  [eslint, '-c', path.join(__dirname, '../.eslintrc')]
    .concat(process.argv.slice(2))
    .join(' ')

try {
  execSync(command, {stdio: [0, 1, 2]})
}
catch (e) {
  process.exit(1)
}
