const express = require('express');

const {programacion} = require('../datos/cursos.js').infoCursos;

const routerProgramacion = express.Router();

//middleware ## Se ejecutam DESPUÉS de recibir una solicitud ## ANTES de enviar una respuesta.
routerProgramacion.use(express.json());

routerProgramacion.get('/', (req,res)=>{
      res.json(programacion);
})

//Cursos de programación:
routerProgramacion.get('/:lenguaje', (req,res)=>{
      const lenguaje = req.params.lenguaje;
      const resultados = programacion.filter(cursos => cursos.lenguaje === lenguaje);
      if(resultados.length === 0){
            return res.status(404).send(`No se encontraron cursos de: ${lenguaje}`);
      }
      res.json(resultados);
});
routerProgramacion.get('/:lenguaje/:nivel', (req,res) => {
      const lenguaje = req.params.lenguaje;
      const nivel = req.params.nivel;

      const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);
      if(resultados.length === 0){
            return res.status(204).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
      }
      res.json(resultados);
});

routerProgramacion.post('/',(req,res)=>{
      let cursoNuevo = req.body;
      programacion.push(cursoNuevo);
      res.status(201).json(programacion);
});
routerProgramacion.put('/:id',(req,res) =>{
      const cursoActualizado = req.body;
      const id = req.params.id;

      const indice = programacion.findIndex(curso => curso.id == id);

      if(indice >= 0){
            programacion[indice] = cursoActualizado;
      }
      res.status(202).json(programacion);
});
routerProgramacion.patch('/:id',(req,res) =>{
      const infoActualizada = req.body;
      const id = req.params.id;

      const indice = programacion.findIndex(curso => curso.id == id);

      if(indice >= 0){
            const cursoAModificar = programacion[indice];
            Object.assign(cursoAModificar,infoActualizada);
      }
      res.status(202).json(programacion);
});
routerProgramacion.delete('/:id',(req,res) =>{
      const id = req.params.id;
      const indice = programacion.findIndex(curso => curso.id == id);

      if(indice >= 0){
            programacion.splice(indice,1);
      }
      res.status(204).json(programacion);
});


module.exports.routerProgramacion = routerProgramacion;