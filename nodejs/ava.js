/**
 * This is DoSomething.org's shared ESLint config used to set AVA test runner
 * in Nodejs environement.
 *
 * Usage:
 *   TODO
 *
 * @see https://github.com/airbnb/javascript
 * @see https://github.com/avajs/eslint-plugin-ava
 */
module.exports = {
  plugins: ['ava'],
  rules: {
    // See https://github.com/avajs/eslint-plugin-ava#usage
    "ava/assertion-arguments": "error",
    "ava/max-asserts": ["off", 5],
    "ava/no-async-fn-without-await": "error",
    "ava/no-cb-test": "off",
    "ava/no-duplicate-modifiers": "error",
    "ava/no-identical-title": "error",
    "ava/no-ignored-test-files": "error",
    "ava/no-invalid-end": "error",
    "ava/no-nested-tests": "error",
    "ava/no-only-test": "error",
    "ava/no-skip-assert": "error",
    "ava/no-skip-test": "error",
    "ava/no-statement-after-end": "error",
    "ava/no-todo-implementation": "error",
    "ava/no-todo-test": "warn",
    "ava/no-unknown-modifiers": "error",
    "ava/prefer-async-await": "error",
    "ava/prefer-power-assert": "off",
    "ava/test-ended": "error",
    "ava/test-title": ["error", "if-multiple"],
    "ava/use-t-well": "error",
    "ava/use-t": "error",
    "ava/use-test": "error",
    "ava/use-true-false": "error",
    // DoSomething specific settings
    // t variable is used for tests
    'id-length': ['error', { exceptions: ['t'] }],
    // Support should notation, for example result.should.be.true
    'no-unused-expressions': 'off',
    // Allow local `require` command for injectig stubs
    'global-require': 'off',
    // Allow t.context reassignment. Useful in AVA before and after hooks
    'no-param-reassign': [ 'error', {
      props: true,
      ignorePropertyModificationsFor: ['t'],
    }],
  },
};
