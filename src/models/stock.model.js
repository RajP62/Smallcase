const {Schema, model} = require("mongoose");

const stockSchema = Schema({
    sid:{type:String,required:true},
    stock:{
        info:{
            sector:{type:String,required:true},
            name:{type:String,required:true},
            ticker:{type:String,required:true},
            exchange:{type:String,required:true},
            description:{type:String,required:true},
            price: {type:Number, required: true}
        }
    }
}, {versionKey: false, timestamps: true});

module.exports = model("stock",stockSchema);