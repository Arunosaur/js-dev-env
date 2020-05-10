import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function (req, res) {
   //Hard coding
   res.json([
      {"id": 1, "firstName": "Ashwin", "lastName": "Swaminathan", "email": "ashwins@gmail.com"},
      {"id": 2, "firstName": "Ananya", "lastName": "Swaminathan", "email": "ananyas@gmail.com"},
      {"id": 3, "firstName": "Radhika", "lastName": "Balasubramanian", "email": "radhi.arun@gmail.com"},
      {"id": 4, "firstName": "Vijayalakshmi", "lastName": "Rajagopalan", "email": "vijiraja@gmail.com"},
      {"id": 5, "firstName": "Rajagopalan", "lastName": "Krishnamoorthy", "email": "krajagopalan1k@hotmail.com"},
      {"id": 6, "firstName": "John", "lastName": "Rice", "email": "j2rice@gmail.com"},
      {"id": 7, "firstName": "Paul", "lastName": "Le", "email": "ple4096@gmail.com"},
      {"id": 8, "firstName": "Duraiarasan", "lastName": "Arumugam", "email": "mynanba@gmail.com"},
      {"id": 9, "firstName": "Ranganathan", "lastName": "Venukrishnan", "email": "rangarao@gmail.com"},
      {"id": 10, "firstName": "Krishnakumar", "lastName": "Sampath", "email": "kawareness@yahoo.com"},
   ])
});

app.listen(port, function (err) {
   if (err) {
      console.log(err);
   } else {
      open('http://localhost:' + port);
   }
});