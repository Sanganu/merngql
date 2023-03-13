const mongoose = require("mongoose");
// process.env.MONGOOSE_URI ||
mongoose.connect("mongodb://localhost/bookgraphql",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    family:4
 
})

module.exports = mongoose.connection;
