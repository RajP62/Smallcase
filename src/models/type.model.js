const {Schema, model} = require("mongoose");

const typeModel = Schema({
    type:{type:String,required:true}
},{versionKey:false, timestamps: true});

module.exports = model("type", typeModel);