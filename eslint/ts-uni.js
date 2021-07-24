const basic = require('./config/basic')
const typescript = require('./config/typescript')
const uni = require('./config/uni')
const vue = require('./config/vue@2')
const _ = require('lodash')

module.exports = _.merge(basic, typescript, uni, vue)
