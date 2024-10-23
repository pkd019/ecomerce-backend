const {Schema ,model, default: mongoose} = require('mongoose');

const orderItemSchema = new Schema({
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
        
        required: true,
    },
    quantity: {
        type: Number,
        default:1,
    },
    
})
const orderSchema = new Schema({
    user: {
        type: Map,
        ref: 'User',
        required: true,
    },
    orderItems: {
        type: [orderItemSchema],
        default: [],
    },
    orderStatus: {
        type: String,
        enum: ['pending', 'shipped', 'delivered'],
        default: "Pending",
        required: true,
    },
    updatedon:{type:Date },
    createdon:{type:Date},

})

orderSchema.pre("save", function(next){
    this.createdon = new Date();
    this.updatedon = new Date();
    next();
});

orderSchema.pre(['update','findone',"updateone"], function(next){
    const update = this.getupdate();
    delete this._id;
    this.updatedon = new Date();
    next();
});

const OrderModel = model("order",orderSchema);

module.exports = OrderModel;