var mongoose = require('mongoose')
  // , schema = require('./schema')
  , modelName = 'Beer'
  , collectionName = 'beers'
  , schema = new mongoose.Schema(require('./schema'))
  ;

module.exports = mongoose.model(modelName, schema, collectionName);