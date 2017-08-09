const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4001;

app.use(bodyParser.json());      
app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/', function (req, res) {
	const { state, payload } = req.body;
  res.status(400).json({state, payload});
})

app.listen(4001)