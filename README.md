Wechat Mini Program Type
======
[![npm](https://img.shields.io/npm/v/miniprogram-type)](https://www.npmjs.com/package/miniprogram-type)
![license](https://img.shields.io/npm/l/miniprogram-type)
![downloads](https://img.shields.io/npm/dt/miniprogram-type)

Type definitions of Wechat Mini Program in TypeScript

Forked from https://github.com/wechat-miniprogram/api-typings Version 3.10.0

Quick fix bug

> [中文文档](https://github.com/xiaweiss/miniprogram-type/blob/main/README_CN.md)

## Install

### By standalone npm package

```bash
npm install -D miniprogram-type
```

After installed, reference by [Triple-Slash Directives](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html):

If you use default set:
``` javascript
// tsconfig.json
"typeRoots": [
  "./typings"
]
```

Please use:
```typescript
/// <reference path="../node_modules/miniprogram-api-typings/index.d.ts" />
```

### Automated tests

We use [`tsd`](https://github.com/SamVerschueren/tsd) to check if this definition is working properly. All test cases are under folder `test`.

To perform an automated test, clone this repo, `npm install -D` and `npm test`.

If you have test case that fails the test, an issue or PR will be great. Strong test case that passes are also welcomed.
