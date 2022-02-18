const {Schema,model}=require("mongoose");
const ItemSchema = new Schema({
    
        title : {
                type:String,
                required:true,
                alias:'Book name'
        },
        author:[{
                type: String,
              

        }],
        pages: {
                type: Number,
                required: true
        },

        additional_details: {
                type:String
        }
    
});


const Book = model('Book',ItemSchema);
module.export = Book;
