const {Schema,model} = require("mongoose");


const investmentStrategySchema = Schema({
    strategy: {type:String,required:true}
}, {versionKey: false, timestamps:true});

module.exports = model("investmentstrategy",investmentStrategySchema);