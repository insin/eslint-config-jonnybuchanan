[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]

A personal ESLint config, but with ESLint itself and all the necessary shareable config, plugins and parser as dependencies.

Provides an `eslint` command which runs the real ESLint with this config's `.eslintrc` in the context of this module's dependencies, so it will be able to find the plugins and parser it depends on without having to manage these dependencies individually in every project.

Installing an `eslint` command means tools which look for `node_modules/.bin/eslint` will find and run what is effectively a preconfigured version.

Sublime Text with [SublimeLinter-eslint](https://github.com/roadhump/SublimeLinter-eslint) will successfully lint with this config just by having it installed in a project.

Visual Studio Code requires configuration to find ESLint and config:

```json
{
  "eslint.options": {
    "configFile": "node_modules/eslint-config-jonnybuchanan/.eslintrc"
  },
  "eslint.nodePath": "node_modules/eslint-config-jonnybuchanan/node_modules",
}
```

## MIT Licensed

[build-badge]: https://img.shields.io/travis/insin/eslint-config-jonnybuchanan/master.png?style=flat-square
[build]: https://travis-ci.org/insin/eslint-config-jonnybuchanan

[npm-badge]: https://img.shields.io/npm/v/eslint-config-jonnybuchanan.png?style=flat-square
[npm]: https://www.npmjs.org/package/eslint-config-jonnybuchanan
