module.exports = {
  extends: ['wolox-react'],
  plugins: ['babel'],
  env: {
    jest: true
  },
  rules: {
    'no-extra-parens': 'off',
    indent: 'off',
    'no-mixed-operators': 'off',
    'max-nested-callbacks': ['error', 3],
    'no-magic-numbers': ['error', { ignore: [0, 1, -1, 2], enforceConst: true }],
    'react/jsx-wrap-multilines': ['error', { declaration: false, assignment: false }],
    'babel/no-unused-expressions': 1,
    'no-unused-expressions': 'off'
  },
  settings: {
    'import/resolver': {
      node: {},
      'babel-module': {
        alias: {
          '~scss': './src/scss',
          '~screens': './src/app/screens',
          '~config': './src/config',
          '~constants': './src/constants',
          '~redux': './src/redux',
          '~services': './src/services',
          '~utils': './src/utils',
          '~propTypes': './src/propTypes'
        }
      }
    },
    react: {
      version: 'detect'
    }
  }
};
