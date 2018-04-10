/**
 * This is DoSomething.org's shared ESLint config specific to node apps
 * for enforcing consistent code style in our JavaScript
 * projects. It's based on Airbnb's JavaScript style guide.
 *
 * @see https://github.com/airbnb/javascript
 */
module.exports = {
  extends: '@dosomething/eslint-config',
  env: {
    // Enables ES6 syntax and expose ES6 global variables
    es6: true,
    // Node.js global variables and Node.js scoping
    node: true,
  },
  parserOptions: {
    // Node requires 'use strict' to use built-in ES8 compatibility.
    // Use script source type, so lint doesn't throw error:
    // 'use strict' is unnecessary inside of modules.
    sourceType: 'script',
    // Latest ECMA
    ecmaVersion: 2017,
  },
  rules: {
    // We don't use babel in native Node.js apps, so require 'use strict'.
    // See https://git.io/vr6I0.
    strict: ['error', 'global'],
  },
};
