const UserModel = require ("./../model/user_model")
const bcrypt = require ("bcrypt")
UserController = {

    createAccount : async function(req,res){
        try {
            const userdata = req.body;
            const user = new UserModel(userdata);
            await user.save();
            
            return res.json({sucess:true,data: user,message:"User Created"});


        }
        catch(e){
            return res.json({sucess:false,message:e.message});

        }
    },

    signin: async function (req,res){

        try{
            const {email,password} = req.body;
            const realuser = await UserModel.findOne({email:email});
            if(!realuser){ return res.json({sucess:false,message:"user not found"}); }
        

            if(realuser){
                const isMatch = bcrypt.compareSync(password,realuser.password);
                if(isMatch){
                    return res.json({sucess:true,data: realuser,message:"User Logged In"});
                }
                else{
                    return res.json({sucess:false,message:"Invalid Password"});
                }
            }
            else{
                return res.json({sucess:false,message:"Invalid Email"});
            }

        }
        catch(e){
            return res.json({sucess:false,message:e.message});

    }}
}

module.exports = UserController;