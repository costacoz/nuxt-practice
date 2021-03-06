module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['@nuxtjs'],
  // add your custom rules here
  rules: {
    'no-comma-dangle': 'off',
    'comma-dangle': 'off'
  }
}
