const basic = require('./config/basic')
const typescript = require('./config/typescript')
const _ = require('lodash')

module.exports = {
  ..._.merge(basic, typescript),
  extends: _.concat(basic.extends, typescript.extends)
}
