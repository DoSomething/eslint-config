/**
 * This is DoSomething.org's shared ESLint config
 * for enforcing consistent code style in our JavaScript
 * projects. It's based on Airbnb's JavaScript style guide.
 *
 * @see https://github.com/DoSomething/code-style/tree/master/javascript
 * @see https://github.com/airbnb/javascript
 */

module.exports = {
  extends: [
    'airbnb',
    'prettier',
  ],

  // We make a few tweaks to the stock rules:
  rules: {
    // Do not require named functions.
    'func-names': 0,

    // Allow common iterator variable names.
    'id-length': [2, { exceptions: ['i', 'j', 'k', '$'] }],

    // We like, but don't require destructuring.
    'prefer-destructuring': 'off',
    'react/destructuring-assignment': 'off',

    // Don't warn when using Mongo or GraphQL's meta fields.
    'no-underscore-dangle': ['warn', { allow: ['_id', '__typename', '__schema'] }],

    // Require multi-line curly braces for all conditionals.
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],
    curly: ['error', 'all'],

    // Disable 'no-return-assign' because it makes common
    // patterns like React's refs unwieldy.
    'no-return-assign': 'off',

    // Require imports to be grouped by type (packages, then internal files).
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          ['builtin', 'external'],
          ['parent', 'sibling', 'internal', 'index'],
        ],
      },
    ],
  },
};
