const express = require("express");
const app = express();
app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});

app.post('/posting', function (req, res) {
    res.send('Saludos desde express');
    console.log(req.query)
  });