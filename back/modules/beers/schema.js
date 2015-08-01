
var mongoose = require('mongoose')
  , _schema = {
        name: { type: String, default: '' }
      , description: { type: String, default: '' }
      , alcohol: { type: Number, min: 0, default: '' }
      , price: { type: Number, min: 0, default: '' }
      , category: { type: String, default: ''}
      , created_at: { type: Date, default: Date.now() }
    }
  ;

module.exports = _schema;