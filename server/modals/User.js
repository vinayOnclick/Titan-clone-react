const mongoose = require('mongoose')
const validator = require('validator')
const jwt =require('jsonwebtoken')


const UserSchema = new mongoose.Schema ({
    name :{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
          validate( value ) {
                if( !validator.isEmail( value )) {
                     throw new Error('Email is invalid')
                      }
                 }
    },
    password: {
        type: String,
    required: true,
    minLength: 7,
    trim: true,
    },
   
    timestamps: true,
})

UserSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString()}, process.env.JWT_SECRET)
    user.tokens = user.tokens.concat({token})
     await user.save()
    return token
}

const User = mongoose.model('user', UserSchema)

module.exports = User;