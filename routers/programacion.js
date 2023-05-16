const express = require('express');

const {programacion} = require('../datos/cursos.js').infoCursos;

const routerProgramacion = express.Router();

//Cursos de programación:
routerProgramacion.get('/:lenguaje', (req,res)=>{
      const lenguaje = req.params.lenguaje;
      const resultados = programacion.filter(cursos => cursos.lenguaje === lenguaje);
      if(resultados.length === 0){
            return res.status(404).send(`No se encontraron cursos de: ${lenguaje}`);
      }
      res.send(JSON.stringify(resultados));
})
routerProgramacion.get('/:lenguaje/:nivel', (req,res) => {
      const lenguaje = req.params.lenguaje;
      const nivel = req.params.nivel;

      const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);
      if(resultados.length === 0){
            return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
      }
      res.send(JSON.stringify(resultados));
})


module.exports.routerProgramacion = routerProgramacion;