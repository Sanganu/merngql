const mongoose = require("mongoose");

mongoose.connect(process.env.MONGOOSE_URI ||
    "mongodb://localhost/graphql",{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify: false
})

HTMLSourceElement.exports = mongoose.connection;
