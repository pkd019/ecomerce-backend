const ItemModel = require('./../model/item_model');

 itemcontroller = {
    createItem: async function(req, res) {
        try {
            const itemdata = req.body;
            const item = new ItemModel(itemdata); 
            await item.save();
            return res.json({success:true, data: item, message: "Item Created"});
        } catch(e) {
            return res.json({success: false, message: e.message});
        }
    },
    fetchItem: async function(req, res) {
        try {
           
            const items = await ItemModel.find({});
            return res.json({ success: true, data: items, message: "Items Found" });
        } catch(e) {
            return res.json({ success: false, message: e.message });
        }
    },
    fetchItembycatagoryId: async function(req, res) {
        try {
            const catagoryid = req.params.id; 
            const foundItems = await ItemModel.find({catagory:catagoryid});
            if (!foundItems) {
                return res.json({ success: false, message: "Item not found" });
            }
            return res.json({ success: true, data: foundItems, message: "Item Found" });
        } catch(e) {
            return res.json({ success: false, message: e.message });
        }
    }
};



module.exports = itemcontroller;