const {Schema,model}=require("mongoose");
const ItemSchema = new Schema({
    
        title : {
                type:String,
                required:true,
                alias:'Book name'
        },
        authors:[{
                type: String,
              

        }],
        id: {
                type: String,
                required: true,
                unique: true
        },

        description: {
                type:String
        },
        image:{
                type: String
        }
    
});


const Book = model('Book',ItemSchema);
module.export = Book;
