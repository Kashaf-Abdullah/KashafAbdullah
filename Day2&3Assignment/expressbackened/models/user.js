import mongoose from 'mongoose'

//Defining schema

const UserSchema = new mongoose.Schema({
    name: { type: String }
    //username 


})

//Model 
const userModel = mongoose.model("user", UserSchema)

export default userModel;