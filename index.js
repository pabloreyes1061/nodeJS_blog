const {conexion} = require("./basedatos/conexion")
const express = require("express")
const cors =require("cors")

console.log("App de node arrrancada")

// conectar

conexion()


// crear servidor node

const app =express()
const puerto = 3900
// configurar cors

app.use(cors())

// convertir body a objeto json

app.use(express.json())

//crear rutas
app.get("/", (req,res)=>{
    console.log("endpoint probando")

    return res.status(200).send(`
        <div>
            ruta raiz
        </div>
        `)
})


app.get("/probando", (req,res)=>{
    console.log("endpoint probando")

    return res.status(200).json({
        "nombre":"pablo",
        "apellido":"reyes"
    })
})


//crear servidor y escuchar peticiones
app.listen(puerto, ()=>{
    console.log("servidor corriendo en el puerto " + puerto)
})
