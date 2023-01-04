const mongoose = require('mongoose')

const ObjectID = mongoose.Schema.Types.ObjectId

const CartSchema = mongoose.Schema ({
    owner : {
        type: ObjectID,
        required: true,
        ref: "User",
    },
    items : [{
        itemId : {
         type: ObjectID,
         required: true,
         ref: 'Item'
        },
        name: String,
        quantity: {
            type: Number,
            required: true,
            min: 1,
            default: 1
        },
    price: Number,

    }],
    bill : {
       type: Number,
       required: true,
       default: 0,
    },
    timestamps : true,
})

const Cart = mongoose.model('cart', CartSchema)

module.exports = Cart