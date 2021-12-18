const {Schema, model} =require("mongoose");

const watchlistSchema = new Schema({
    user: { type: Schema.Types.ObjectId,ref:"user",require:true},
    smallcase: [{ type:Schema.Types.ObjectId,ref:"smallcase",require:true}]

},
{
    versionKey: false,
    timestamps: true
})

module.exports = model("watchlist", watchlistSchema);