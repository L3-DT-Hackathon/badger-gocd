 var express = require('express')
  var app = express()
  app.get('/', function(req, res) {
    res.end('Badger v0.1')
  })
  app.listen(3000)

