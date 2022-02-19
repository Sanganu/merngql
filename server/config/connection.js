const mongoose = require("mongoose");

mongoose.connect(process.env.MONGOOSE_URI ||
    "mongodb://localhost/graphql",{
    useNewUrlParser:true,
    useUnifiedTopology:true
 
})

module.exports = mongoose.connection;
