const {schema, model} = require("mongoose")

const ArticuloSchema= Schema({
    titulo:{
        type:String,
        require:true
    },
    contenido:{
        type:String,
        require:true
    },
    fecha:{
        type:Date,
        default:Date.now
    },
    imagen:String,
    default:"default.png"
})

module.exports = model("Articulos", ArticuloSchema, "articulos")
//                      ----------, model to export, nombre base de datos