const CatagoryModel = require( "./../model/catagory_model" );

catagorycontroller={

    createCatagory: async function(req, res) {
        try {
            const catagorydata = req.body;
            const catagory = new CatagoryModel(catagorydata);
            await catagory.save();
            return res.json({success:true,data :catagory,
                message:
            "Catagory Created"});
        }
            catch(e) {
                return res.json({sucess:false,message:e.message});
            }
    },
    fetchCatagory: async function(req, res) {
        try {
            const catagorydata = req.body;
            const catagories = await CatagoryModel.find(catagorydata);
            return res.json({
                success: true,
                data: catagories,
                message: "Catagory",
            });
        }
            catch(e) {
                return res.json({sucess:false,message:e.message});
            }
    },
    fetchCatagorybyId: async function(req, res) {
        try {
            const id = req.params.id;
            const foundcatagory = await CatagoryModel.findById(id);
            if(!foundcatagory) {
                return res.json({success:false,message:"catagory not found"});

            }
            return res.json({
                success: true,
                data: foundcatagory,
                message: "Catagory",
            });
          }
            catch(e) {
                return res.json({sucess:false,message:e.message});
            }
    }
}

module.exports = catagorycontroller;