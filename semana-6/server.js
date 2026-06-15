
const express = require('express');
const app = express();

app.use(express.json());

app.post('/registro', (req, res) => {

  const nombre = req.body.nombre;
  const mensaje = req.body.mensaje;

  res.json({
    estado: "Datos recibidos",
    nombre:"Cristian",
    mensaje:"hola a todos",
  });

});

app.post('/incidencia', (req, res) => {

  const tipo = req.body.tipo;
  const descripcion = req.body.descripcion;

  res.json({
    "tipo": "Caida del servidor",
  "descripcion": "Error de conexión rechazada debido a que el servicio se detuvo de forma inesperada o el puerto está ocupado",
  });

});
app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});
