const {getPizza } = require('./getProductos')
const { getMilanesa} = require('./getProductos')

const express = require('express');
const app = express();
const port = 4000;


app.get('/home', (req, res) => {
  res.send('Hello World!');
});

app.get('/pizza-menu', getPizza )


app.get('/milanesa-menu', getMilanesa )



app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
