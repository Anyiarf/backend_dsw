import express from 'express';
import { cursoRouter } from './curso/cursos.routes.js';
import { alumnoRouter } from './alumno/alumnos.routes.js';
import { certificadoRouter } from './certificado/certificado.routes.js';

const app = express() 
app.use(express.json()) 

app.use("/api/cursos", cursoRouter)
app.use("/api/alumnos", alumnoRouter)
app.use('/api/certificados', certificadoRouter)

app.listen (3000, ()=>{
    console.log("Server running on http: //localhost:3000/")
});

app.use((_, res) => {
    return res.status(404).json({Error:"Ruta no encontrada"});
})