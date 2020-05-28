module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
parser: 'babel-eslint',
extends: [ 'react-app', 'prettier' ],
globals: {
  Atomics: 'readonly',
  SharedArrayBuffer: 'readonly'
},
parserOptions: {
  ecmaFeatures: {
    modules: true
  },
  ecmaVersion: 2018,
  sourceType: 'module'
},
plugins: [ 'react', 'prettier' ],
rules: {
  'prettier/prettier': 'warn',
  'react/forbid-prop-types': [ 0, { forbid: [ 'any' ] } ],
  'react/prop-types': 0,

},
env: {
  jest: true,
  browser: true,
      node: true,
      es6: true
}
}