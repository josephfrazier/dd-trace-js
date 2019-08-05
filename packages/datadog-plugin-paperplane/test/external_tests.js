'use strict'

const defaultConfig = {
  integration: 'paperplane',
  repo: 'https://github.com/articulate/paperplane',
  testType: 'mocha',
  testArgs: '--reporter dot test/'
}

const testConfigs = []

module.exports = {
  defaultConfig,
  testConfigs
}
