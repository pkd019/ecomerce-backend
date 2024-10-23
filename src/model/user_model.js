const {Schema ,model} = require('mongoose');
const  uuid  = require('uuid');
const bcrypt = require('bcrypt');

const userschema =new  Schema( {
    id: {type: String,
    unique: true
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,unique: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,

        default: ""    },

        gender:{
            type: String,default: ''
        },


    addresses: {type: String,default: ""},
    city:{type: String,default: ""},
    state:{type: String,default: ""},
    country:{type: String,default: ""},
    pinCode:{type: String,default: ""},
    profileprogress:{type: Number,default: 0},

    updateon:{type: Date},
    createon:{type: Date},

    
},
{
time
}
)

userschema.pre("save", function(next){
    this.id = uuid.v1();
    this.createon = new Date();
    this.updateon = new Date();
    const salt = bcrypt.genSaltSync(10);

    const hash = bcrypt.hashSync(this.password,salt);
    this.password = hash;
    next();
});
userschema.pre(['update','findone',"updateone"], function(next){
    const update = this.getupdate();
    delete this._id;
    delete this.id;
    this.updateon = new Date();
    next();
})
const UserModel = model("user",userschema);

module.exports = UserModel;