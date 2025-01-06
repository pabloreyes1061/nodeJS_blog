const mongoose =require("mongoose")

const conexion = async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/mi_blog")

        // mongodb://localhost:27017/

        console.log("conectado correctamente a la base de datos mi_blog")
    } catch (error) {
        console.log(error)
        throw new Error("no se a podido conectar");
        
    }
}

module.exports={
    conexion
}