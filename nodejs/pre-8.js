/**
 * This is DoSomething.org's shared ESLint config specific to Node.js < 8 apps.
 * for enforcing consistent code style in our JavaScript
 * projects. It's based on Airbnb's JavaScript style guide.
 *
 * @see https://github.com/airbnb/javascript
 */
module.exports = {
  extends: '@dosomething/eslint-config/nodejs',
  rules: {
    // Comma dangle in functions is not yet supported in Node < 8.
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'ignore',
    }],
  },
};
