/**
 * This is DoSomething.org's shared ESLint config
 * for enforcing consistent code style in our JavaScript
 * projects. It's based on Airbnb's JavaScript style guide.
 *
 * @see https://github.com/DoSomething/code-style/tree/master/javascript
 * @see https://github.com/airbnb/javascript
 */

module.exports = {
  extends: 'airbnb',

  // We make a few tweaks to the stock rules:
  rules: {
    // Do not require named functions.
    'func-names': 0,

    // Allow common iterator variable names.
    'id-length': [2, { exceptions: ['i', 'j', 'k', '$'] }],

    // Allow `console.log` so we can include logging
    // in development builds. Warn on `debugger`.
    'no-console': 'off',
    'no-debugger': 'warn',

    // Disable 'no-return-assign' because it makes common
    // patterns like React's refs unwieldy.
    'no-return-assign': 'off',

    // Require space before "!" unary operator to conform
    // to our PHP code style guide:
    'space-unary-ops': ['error', {
      words: true,
      nonwords: false,
      overrides: {
        '!': true,
      },
    }],

    // We prefer not to use the .jsx file extension.
    'react/jsx-filename-extension': 'off',
  },
};
