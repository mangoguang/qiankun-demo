// module.exports = {
//   root: true,
//   parserOptions: {
//     parser: 'babel-eslint'
//   },
//   env: {
//     browser: true,
//     es6: true
//   },
//   extends: [
//     // https://github.com/standard/standard/blob/master/docs/RULES-en.md
//     'standard',
//     // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
//     // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
//     'plugin:vue/essential',
//     "plugin:prettier/recommended",
//   ],
//   // required to lint *.vue files
//   plugins: [
//     'vue'
//   ],
//   // add your custom rules here
//   rules: {
//     "prettier/prettier": "error",
//     // allow async-await
//     'generator-star-spacing': 'off',
//     // allow debugger during development
//     'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
//     "printWidth": 80, //一行的字符数，如果超过会进行换行，默认为80
//     "tabWidth": 2, //一个tab代表几个空格数，默认为80
//     "useTabs": false, //是否使用tab进行缩进，默认为false，表示用空格进行缩减
//     "singleQuote": true, //字符串是否使用单引号，默认为false，使用双引号
//     "semi": false, //行位是否使用分号，默认为true
//     "trailingComma": "none", //是否使用尾逗号，有三个可选值"<none|es5|all>"
//     "bracketSpacing": true, //对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
//     "parser": "babylon", //代码的解析引擎，默认为babylon，与babel相同。
//     "endOfLine": "auto"
//   }
// }