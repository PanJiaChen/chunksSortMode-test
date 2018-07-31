[issue](https://github.com/vuejs/vue-cli/issues/1978)

## Step
```
npm install
```

```
npm run build
```


## check

see dist/index.html

```
  <link href=/css/app.eca329cd.css rel=stylesheet>
  <link href=/css/chunk-elementUI.aed9c24b.css rel=stylesheet>
```

```diff
  //vue.config.js
  configureWebpack: {
    optimization: {
+     runtimeChunk: 'single'
    }
  }
```

When I add `runtimeChunk`, the order is wrong.
