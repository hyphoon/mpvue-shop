// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module"
  },
  env: {
    browser: false,
    node: true,
    es6: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: "standard",
  // required to lint *.vue files
  plugins: [
    "html"
  ],
  // add your custom rules here
  "rules": {
    // allow paren-less arrow functions
    "arrow-parens": 0,
    // allow async-await
    "generator-star-spacing": 0,
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    // allow undefined variable
    "no-undef": 0,
    // 是否两个空格
    "indent": 0,
    // 逗号前后的空格控制
    "comma-spacing": [2, { "before": false, "after": true }],
    // 代码间间隔出现一行
    "eol-last": 0,
    // 语句以分号结尾
    "semi": 0,
    // 可以使用双引号
    "quotes": [0, "single"],
    "space-before-function-paren": [0, "always"],
    // 函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
    "new-cap": 0,
    // 允许 Promise 的 reject() 不带参数
    "prefer-promise-reject-errors": [1, {"allowEmptyReject": true}]
  },
  globals: {
    App: true,
    Page: true,
    wx: true,
    swan: true,
    tt: true,
    my: true,
    getApp: true,
    getPage: true,
    requirePlugin: true,
    mpvue: true,
    mpvuePlatform: true
  }
};
