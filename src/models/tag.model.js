const {Schema, model} = require("mongoose");

const tagSchema = Schema({
    tag:{type:String,required:true}
},{versionKey:false, timestamps:true});

module.exports = model("tag",tagSchema);