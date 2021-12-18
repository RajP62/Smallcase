const {Schema,model} = require("mongoose");


const investmentStrategySchema = Schema({
    key: {type:String, required: true},
    displayName: {type:String,required:true}
}, {versionKey: false, timestamps:true});

module.exports = model("investmentstrategy",investmentStrategySchema);