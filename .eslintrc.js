module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['prettier'],
  extends: ['plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
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
