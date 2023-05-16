const express = require('express');
const app = express();

const { infoCursos } = require('./datos/cursos.js');
const { routerMatematicas } = require('./routers/matematicas.js');
const { routerProgramacion } = require('./routers/programacion.js');


//Routers
app.use('/api/cursos/programacion', routerProgramacion)
app.use('/api/cursos/matematicas', routerMatematicas)

//Routing
app.get('/',(req,res)=>{
      res.send('Mi primer servidor con Express. Cursos 💻.');
});

app.get('/api/cursos',(req,res)=>{
      res.send(JSON.stringify(infoCursos));
});

routerProgramacion.get('/', (req,res)=>{
      res.send(JSON.stringify(infoCursos.programacion));
})


const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () =>{
      console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});