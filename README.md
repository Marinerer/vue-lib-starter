# vue-lib-starter

开发 vue 组件库模板 (支持vue2/3)。

> 使用 monorepo 单体仓库代码管理方式。


## Project

工程目录如下

```
.
├── README.md
├── build                 // 构建配置
├── scripts               // 脚本
├── lib                   // 组件库目录
│   ├── index.ts
│   └── package.json
├── playground            // 演练场
│   ├── vue2              // vue2
│   └── vue3              // vue3
├── package.json
└── pnpm-workspace.yaml
```

1. 将 `lib` 作为一个单体项目
2. 将 `lib` 作为根目录。


## build

### 1. rollup

使用 `defineComponent` 定义组件库，可以使用 `rollup` 构建。


### 2. vite

`.vue` 组件库，可以使用 `vite` 方式构建。


## vue-demi

```bash
# vue<=2.6 (vue + @vue/composition-api)
npx vue-demi-switch 2 vue2

# vue@2.7
npx vue-demi-switch 2.7 vue
# vue@3
npx vue-demi-switch 3 vue3
```


## playground

- vue2 (vue@2.7.x)
- vue3 (vue@3.x)


> 注意事项:  
> 使用 `vue-demi` 切换 `vue 版本，请参考 [vue-demi setup in monorepos #138](https://github.com/vueuse/vue-demi/issues/138#issuecomment-1565369444)


## refs

- [vue-demi](https://github.com/vueuse/vue-demi)
- [使用 vue-demi 开发 vue2/3 通用组件](https://zhuanlan.zhihu.com/p/597334820)
- [example: Shimada666/vue-demi-sfc-component-template](https://github.com/Shimada666/vue-demi-sfc-component-template)
- [example: AttoJS/vue-request](https://github.com/AttoJS/vue-request)

