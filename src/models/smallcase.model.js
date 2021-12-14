const {Schema, model} = require("mongoose");


const smallcaseSchema = new Schema({
    id: {type:Number, required:true},
    info: {creater: {type:String,required:true}, owner:{name:{type:String,required:true},userid:{type:Schema.Types.ObjectId,ref:"user",required:true}},
    tags: [{type:Schema.Types.ObjectId, ref:"tags"}],
    tier,
    type: {type:Schema.Types.ObjectId,ref:"types", required:true},
    name: {type:String, required:true},
    imageUrl:{type:String, required:true},
    publisher:{type:String, required:true},
    shortDescription:{type:String,required:true},
    created: String,
    updated: String,
    nextUpdate: String,
    blogURL: String,
    uploaded: String,
    rebalanceSchedule: String,
    publisherName: String,
    lastRebalanced: String,
    slug: String,
    micrositeUrl: String,
    investmentStrategy: [{key: {type:Schema.Types.ObjectId,ref:"investmentstrategy",required: true}, displayName: {type:String, required:true}}],
    


}
});