const {Schema ,model} = require('mongoose');

cartItemSchema = new Schema({
    item: {
        type: Schema.Types.ObjectId,
        ref: 'Item',
        required: true,
        required: true,
    },
    quantity: {
        type: Number,
        default:1,
    },
   
    createon:{type: Date},
    updateon:{type: Date},
});

 cartSchema = new Schema({
  user:{type:Schema.Types.ObjectId,ref:"User",required: true},
  cartItems: {type:[cartItemSchema],default:[]},
  
    updatedon:{type:Date },
    createdon:{type:Date},
    
})
cartSchema.pre("save", function(next){

    this.createon = new Date();
    this.updateon = new Date();

 
    next();
});
cartSchema.pre(['update','findone',"updateone"], function(next){
    const update = this.getupdate();
    delete this._id;

    this.updateon = new Date();
    next();
})

const CartModel = model("cart",cartSchema);

module.exports = CartModel;