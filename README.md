# eslint-config

This is our [ESLint](http://eslint.org) config used for JavaScript projects at DoSomething.org, based on [Airbnb's JavaScript Style Guide](https://github.com/airbnb/javascript).

It can be used by installing this package & setting the `extends` property in your `.eslintrc.js`:

```js
module.exports = {
  extends: '@dosomething/eslint-config',
};
```

But you probably want to use a preset fine-tuned to your environment:

### In browser...

We use [Babel](https://babeljs.io), [Prettier](https://prettier.io) and some browser-specific rules:

```js
module.exports = {
  extends: '@dosomething/eslint-config/browser',
};
```


### On a server...

We also write code for [Node.js](https://nodejs.org/en/). We do not use a compilation step on the server.

```js
module.exports = {
  extends: '@dosomething/eslint-config/server',
};
```

#### AVA tests

This ESLint configuration is different from other config profiles provided in this package.
It meant to be inherited *indirectly* from a profile of your choice. Setup instructions:

1. Install the [ESLint AVA plugin](https://github.com/avajs/eslint-plugin-ava): `npm install --save-dev eslint-plugin-ava`.
2. Setup `.eslintrc.js` in your project root to extend `@dosomething/eslint-config/server`.
3. Put another `.eslintrc.js` into your tests folder and set it to extend from `@dosomething/eslint-config/server/ava`

### License
&copy; DoSomething.org. @dosomething/eslint-config is free software, and may be redistributed under the
terms specified in the [LICENSE](https://github.com/DoSomething/eslint-config/blob/master/LICENSE) file. The
name and logo for DoSomething.org are trademarks of Do Something, Inc and may not be used without permission.
