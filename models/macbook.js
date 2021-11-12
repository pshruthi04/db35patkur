const mongoose = require("mongoose") 
const macbookSchema = mongoose.Schema({ 
 macbook_type: String, 
 size: String, 
 cost: Number 
}) 
 
module.exports = mongoose.model("macbook", macbookSchema)