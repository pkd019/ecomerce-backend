const {Schema ,model} = require('mongoose');

 itemschema = new Schema({

    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: "",
    },
    price: {
        type: Number,
        required: true,
    },
    
    image: {
        type: Array,
        default: [],
       
    },
    quantity: {
        type: Number,
        required: true,
    },
    catagory: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    createon:{type: Date},
    updateon:{type: Date},
})

itemschema.pre("save", function(next){
   
    this.createon = new Date();
    this.updateon = new Date();
   
    next();
});
itemschema.pre(['update','findone',"updateone"], function(next){
    const update = this.getupdate();
    delete this._id;
    
    this.updateon = new Date();
    next();
})
 
const ItemModel = model("item",itemschema);

module.exports = ItemModel;