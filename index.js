var express = require('express')
var app = express()

app.get('/', function (req, res) {
  console.log('Hello Express!');
})
app.get('/abc', function (req, res) {
  console.log('Hello Express123456!');
})

app.listen(3000,function(){
  console.log('running on port 3000...please visit http://localhost:3000');
})
