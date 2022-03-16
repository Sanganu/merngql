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
        id: {
                type: String,
                required: true
        },

        descritption: {
                type:String
        }
    
});


const Book = model('Book',ItemSchema);
module.export = Book;
