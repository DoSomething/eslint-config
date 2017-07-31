# eslint-config

This is our shared [ESLint](http://eslint.org) config used for JavaScript projects at DoSomething.org based on [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).

It can be used by installing this package & setting the `extends` property in your `.eslintrc`:

```json
{
  "extends": "@dosomething/eslint-config"
}
```

Alternative yml config  `.eslintrc.yml`:
```yml
---
  extends: "@dosomething/eslint-config"
```

### Additional Profiles

This package includes additional linting profiles fine-tuned to different environments.

**Node.js 8.x**

Provides ESLint config specific to native (non-transcripted, non-babel) Node.js 8.x ECMA 2017 apps.

`.eslintrc`:

```json
{
  "extends": "@dosomething/eslint-config/nodejs/8.x"
}
```

Alternative yml config  `.eslintrc.yml`:
```yml
---
  extends: "@dosomething/eslint-config/nodejs/8.x"
```

**Node.js 6.x**

Based on Node.js 8.x configuraton, with minor adjustments specific to Node.js 6.x support.
For example, comma dangle in function arguments is not yet supported by Node.js 6.x,
so the corresponding linting rule is configured to ignore default recommendation in this case.

`.eslintrc`:

```json
{
  "extends": "@dosomething/eslint-config/nodejs/6.x"
}
```

Alternative yml config  `.eslintrc.yml`:
```yml
---
  extends: "@dosomething/eslint-config/nodejs/6.x"
```


**Node.js AVA tests**

This esling configuration is different from other config profiles provided in this package.
It meant to be inherited *indirectly* from a profile of your choice. Setup instructions:

1. Install eslint ava plugin: `npm install --save-dev eslint-plugin-ava`
2. Setup `.eslintrc` in your project root to extend from one of `@dosomething/eslint-config/nodejs` profiles (8.x or 6.x)
3. Put another `.eslintrc` into your tests folder and set it to extend from `@dosomething/eslint-config/nodejs/ava`

```json
{
  "extends": "@dosomething/eslint-config/nodejs/ava"
}
```

Alternative yml config  `.eslintrc.yml`:
```yml
---
  extends: "@dosomething/eslint-config/nodejs/ava"
```

### License
&copy;2016 DoSomething.org. @dosomething/eslint-config is free software, and may be redistributed under the
terms specified in the [LICENSE](https://github.com/DoSomething/eslint-config/blob/master/LICENSE) file. The
name and logo for DoSomething.org are trademarks of Do Something, Inc and may not be used without permission.
