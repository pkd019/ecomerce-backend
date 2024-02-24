const OrderModel = require ("./../model/order_model");

const OrderController = {

    createOrder: async function (req, res) {
        try {
            const orderData = req.body;
            const order = new OrderModel(orderData);
            await order.save();
            return res.json({ success: true, data: order, message: "Order Created" });
        } catch (error) {
            return res.json({ success: false, message: error.message });
        }
    },

    cancelOrder: async function (req, res) {
        try {
            const id = req.params.id;
            const foundOrder = await OrderModel.findById(id);
            if (!foundOrder) {
                return res.json({ success: false, message: "Order not found" });
            }
            await OrderModel.findByIdAndDelete(id);
            return res.json({ success: true, message: "Order Cancelled" });
        } catch (error) {
            return res.json({ success: false, message: error.message });
        }
    },

    getOrder: async function (req, res) {
        try {
            const id = req.params.id;
            const order = await OrderModel.findById(id);
            return res.json({ success: true, data: order, message: "Order Found" });
        } catch (error) {
            return res.json({ success: false, message: error.message });
        }
    },

    updateOrder: async function (req, res) {
        try {
            const id = req.params.id;
            const orderData = req.body;
            const foundOrder = await OrderModel.findById(id);
            if (!foundOrder) {
                return res.json({ success: false, message: "Order not found" });
            }
            await OrderModel.findByIdAndUpdate(id, orderData);
            return res.json({ success: true, message: "Order Updated" });
        } catch (error) {
            return res.json({ success: false, message: error.message });
        }
    }
};

module.exports = OrderController;
