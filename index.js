const express = require('express');

const app = express();
const port = 5600


app.get('/users', (req, res) => {
  // console.log('method: ' + req.method, req.params)
  // res.end('welcome, express.js');
  // res.end({code: 0, message: 'success', data: [{id: 1, name: 'John', age: 12}]});
  res.send({code: 0, message: 'success', data: [{id: 1, name: 'John', age: 12}]});

})
app.listen(port, function () {
  console.log('listening on port ' + port);
})
