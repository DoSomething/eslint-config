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
  },
};
