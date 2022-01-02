const { Schema, model } = require("mongoose");


const smallcaseSchema = new Schema({
    id: {type:Number},
    info: {creator: {type:String}, owner:{name:{type:String}},
    tags: [{type:Schema.Types.ObjectId, ref:"tag"}],
    tier:Schema.Types.Mixed,
    type: {type:Schema.Types.ObjectId,ref:"type", required:true},
    name: {type:String, required:true},
    imageUrl:{type:String, required:true},
    publisher:{type:String},
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
    investmentStrategy: {type:String, required:true}
    },
    flags: { active: Boolean, locked: Boolean, private: Boolean, historicalData: Boolean, preferredSipType: String, blocked: Boolean },
    stats: {
        returns: { daily: Number, weekly: Number, monthly: Number, quarterly: Number, halfyearly: Number, yearly: Number, threeYear: Number, fiveYear: Number, sinceInception: Number, sinceLaunch: Number },
        indexValue: Number,
        unadjustedIndex: Number,
        recommendedBuyAmount: Number,
        divReturns: Number,
        minInvestAmount: { type: Number, required: true },
        lastCloseIndex: Number,
        ratios: {
            risk: { type: Number, required: true }, cagr: { type: Number, required: true }, sharpe: Number, momentumRank: Number, ema: Number, lastCloseEma: Number, '52wHigh': { type: Number }, '52wLow': { type: Number }, divYield: Number, divYieldDifferential: Number,
            midCapPercentage: Number,
            momentum: Number,
            smallCapPercentage: Number,
            pb: Schema.Types.Mixed,
            pbDiscount: Schema.Types.Mixed,
            pe: Schema.Types.Mixed,
            peDiscount: Schema.Types.Mixed,
            sharpeRatio: Number,
            oneYearLiveHistory: Boolean,
            riskLabel: { type: String, required: true },
            cagrDuration: { type: String },
            cagr1y: { type: Number },
            cagr3y: { type: Number },
        },
        minSipAmount: Number,
        minInvestAmountOverridden: Boolean,
        launchDateIndex: Number
    },
    scid: String,
    benchmark: {
        id: String,
        message: { type: String },
        index: String,
        msg: String
    },
    brokerMeta: {
        flags: {
            popular: {
                rank: { type: Number }
            }
        }
    }
}, { versionKey: false, timestamps: true });

module.exports = model("smallcase", smallcaseSchema);