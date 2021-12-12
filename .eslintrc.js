module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['plugin:vue/vue3-recommended', 'prettier', 'plugin:prettier/recommended'],
  rules: {
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-len': [
      'error',
      {
        code: 100,
        tabWidth: 2,
      },
    ],
    'vue/one-component-per-file': 'off',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 2,
        },
        multiline: {
          max: 2,
        },
      },
    ],
  },
}
