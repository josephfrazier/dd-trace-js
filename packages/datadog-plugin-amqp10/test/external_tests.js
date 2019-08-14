'use strict'

const tests = './test/unit ./test/integration/qpid ./test/integration/servicebus'

const defaultConfig = {
  integration: 'amqp10',
  repo: 'https://github.com/noodlefrenzy/node-amqp10/',
  testType: 'mocha',
  testArgs: `--recursive --exit --check-leaks -R spec -t 5000 ${tests}`
}

module.exports = {
  defaultConfig
}
