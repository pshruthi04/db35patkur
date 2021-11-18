const mongoose = require("mongoose") 
const macbookSchema = mongoose.Schema({  
 cost: Number,
 model: String,
 memory: Number
}) 
 
module.exports = mongoose.model("macbook", macbookSchema)