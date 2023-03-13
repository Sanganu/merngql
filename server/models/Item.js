const {Schema,model}=require("mongoose");
const itemSchema = new Schema({
    
        title : {
                type:String,
                required:true,
                alias:'Book name'
        },
        authors:[{
                type: String,
        }],
        bookId: {
                type: String,
                required: true,
                
        },

        description: {
                type:String,
                required: true,
        },
        image:{
                type: String
        },
        link:{
                type:String
        }
    
});



module.export = itemSchema;
