const basic = require('./config/basic')
const typescript = require('./config/typescript')
const uni = require('./config/uni')
const vue = require('./config/vue@2')
const vueBasic = require('./config/vue-basic')
const _ = require('lodash')

module.exports = {
  ..._.merge(basic, typescript, uni, vue),
  extends: _.concat(basic.extends, typescript.extends, uni.extends, vueBasic.extends, vue.extends)
}
