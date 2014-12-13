 var express = require('express')
  var app = express()
  
  app.get('/', function(req, res) {
    //res.setHeader('Content-Type', 'application/json');
    res.json({"name": "badger-gocd", "version": "0.1.0", "description": "Serve badges for GoCD pipeline statuses", "repository": "git://github.com/L3-DT-Hackathon/badger-gocd.git"})
  })
  app.listen(3000)


