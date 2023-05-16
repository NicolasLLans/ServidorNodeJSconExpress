const express = require('express');

const {matematicas} = require('../datos/cursos.js').infoCursos;

const routerMatematicas = express.Router();

//Cursos de matemáticas
routerMatematicas.get('/:tema',(req,res)=>{
      const tema = req.params.tema;
      const resultados = matematicas.filter(curso => curso.tema === tema);
      if(resultados.length === 0){
            return res.status(404).send(`No se encontraron cursos de ${tema}`);
      }
      res.json(resultados);
})
routerMatematicas.get('/', (req,res)=>{
      res.json(matematicas);
})

module.exports.routerMatematicas = routerMatematicas;
