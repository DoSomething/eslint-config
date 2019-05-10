/**
 * This is DoSomething.org's shared ESLint config
 * for enforcing consistent code style in our JavaScript
 * projects. It's based on Airbnb's JavaScript style guide.
 *
 * @see https://github.com/DoSomething/code-style/tree/master/javascript
 * @see https://github.com/airbnb/javascript
 */

module.exports = {
  // We use Babel when writing code for browsers so we can use
  // new language features without worrying about compatibility.
  parser: 'babel-eslint',

  extends: [
    '@dosomething/eslint-config',
    'prettier',
    'prettier/react'
  ],

  env: {
    // We use Jest for testing!
    jest: true,
  },


  // We make a few tweaks to the stock rules:
  rules: {
    // Allow `console.log` so we can include logging
    // in development builds. Warn on `debugger`.
    'no-console': 'off',
    'no-debugger': 'warn',

    // We like, but don't require destructuring.
    'prefer-destructuring': 'off',
    'react/destructuring-assignment': 'off',

    // Don't warn when using GraphQL's meta fields.
    'no-underscore-dangle': ['warn', { allow: ['__typename', '__schema'] }],

    // Require multi-line curly braces for all conditionals.
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],
    curly: ['error', 'all'],

    // Disable 'no-return-assign' because it makes common
    // patterns like React's refs unwieldy.
    'no-return-assign': 'off',

    // We prefer not to use the .jsx file extension.
    'react/jsx-filename-extension': 'off',

    // Disable JSX indenting which may conflict with Prettier.
    'react/jsx-indent': 0,

    // Warn on missing alt or caption.
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/media-has-caption': 'warn',

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
