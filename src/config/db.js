const {connect} = require("mongoose");
require('dotenv').config();

module.exports = async ()=>{
    return await connect(process.env.MONGO_DB_URL);
}

