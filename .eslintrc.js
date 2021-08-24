module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-blocks': 'off',
    'quotes': 'off',
    'no-extra-semi': 'off',
    'indent': 'off',
	'no-multiple-empty-lines':'off',
	'no-new':'off',
	'no-trailing-spaces':'off',
	'no-tabs':'off',
	'space-before-function-paren':'off',
	'semi':'off',
	'import/export': 0,
	'no-mixed-spaces-and-tabs': 'off'
  }
}
