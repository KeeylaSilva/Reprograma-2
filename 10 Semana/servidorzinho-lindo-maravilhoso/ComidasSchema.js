const mongoose = require("mongoose")
//cada schema equivale 1 collection
var Schema = mongoose.Schema;
var ComidasSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    nome: { type: String, required: true },
    descricao: {type:String} //opcional
})
const comidasModel = mongoose.model("comidas", ComidasSchema);

module.exports = comidasModel;
