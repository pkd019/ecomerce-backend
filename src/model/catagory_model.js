const {Schema ,model} = require('mongoose');

 catagoryschema = new Schema({
    title:{type: String,required: [true,"title is required"], },
    description:{type: String,default:"", },
    updatedon:{type:Date },
    createdon:{type:Date},
    
})
catagoryschema.pre("save", function(next){

    this.createon = new Date();
    this.updateon = new Date();

 
    next();
});
catagoryschema.pre(['update','findone',"updateone"], function(next){
    const update = this.getupdate();
    delete this._id;

    this.updateon = new Date();
    next();
})

const CatagoryModel = model("catagory",catagoryschema);

module.exports = CatagoryModel;