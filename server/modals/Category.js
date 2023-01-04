const mongoose = require('mongoose')
const ObjectID = mongoose.Schema.Types.ObjectId

const CategorySchema = new mongoose.Schema({
    category : {
        type: String,
        required: true,
    },
    slug : {
        type: String,
        required: true,
        unique: true,
    },
    parentId : {
        type: String
    },
    
        timestamps : true
    
})

const Category = mongoose.model('Category', CategorySchema)
module.exports = Category