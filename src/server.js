const app = require('./index');
const dbConnect = require("./config/db");
require("dotenv").config();
const PORT = process.env.PORT || 2000;

app.listen(PORT, async()=>{
    await dbConnect();
    console.log("Server is running on port 2000");
});