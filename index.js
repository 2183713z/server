var express = require('express')
var app = express()

app.get('/:name', function (req, res) {
  var username=req.params.name; 
  var page="<html>"+
            "<body>"+
            "<h1>"+
            username +"的购物车"+
            "<h1>"+
            "</body>"+
            "</html>"
  // console.log('Hello Express!');

  res.send(page)
})
app.get('/about.html', function (req, res) {
  // console.log('Hello Express123456!');
  var page1="<html>"+
            "<body>"+
            "<h1>About.html<h1>"+
            "</body>"+
            "</html>"
    res.send(page1)
})

app.listen(3000,function(){
  console.log('running on port 3000...please visit http://localhost:3000');
})
