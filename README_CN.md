微信小程序类型文件
======
![license](https://img.shields.io/npm/l/miniprogram-type)
![downloads](https://img.shields.io/npm/dt/miniprogram-type)

微信小程序的 TypeScript 类型定义文件

克隆自 https://github.com/wechat-miniprogram/api-typings 版本 3.10.0

快速修复问题

## 安装

### 通过独立 npm 包

```bash
npm install -D miniprogram-type
```

安装后通过 [三斜杠指令](https://www.tslang.cn/docs/handbook/triple-slash-directives.html) 引用：

如果你使用了默认设置：
``` javascript
// tsconfig.json
"typeRoots": [
  "./typings"
]
```

请使用：
```typescript
/// <reference path="../node_modules/miniprogram-api-typings/index.d.ts" />
```


### 测试

本定义文件使用 [`tsd`](https://github.com/SamVerschueren/tsd) 进行测试，所有的测试样例放在 `test` 目录下。

想执行测试的话，克隆本项目并完成 `npm install --save-dev` 后执行 `npm test` 即可。

如果您发现了不能通过自动化测试的测试样例，可以提交 PR 或者提一个 issue。当然，能通过自动化测试的强有力的测试样例也是欢迎的。
