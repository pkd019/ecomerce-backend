const CartModel = require( "./../model/cart_model" );


    const cartModelcontroller = {
        addToCart: async function(req, res) {
            try {
                const { item, user, quantity } = req.body;
    
                let foundCart = await CartModel.findOne({ user: user });
    
                if (!foundCart) {
                    const newCart = new CartModel({
                        user: user,
                        cartItems: [{ item: item, quantity: quantity }]
                    });
                    await newCart.save();
                    return res.json({ success: true, data: newCart, message: "Item Added to Cart" });
                }
    
                const updatedCart = await CartModel.findOneAndUpdate(
                    { user: user },
                    { $push: { 'cartItems': { item: item, quantity: quantity } } },
                    { new: true }
                );
    
                return res.json({ success: true, data: updatedCart, message: "Cart updated successfully" });
    
            } catch (e) {
                return res.json({ success: false, message: e.message });
            }
        },
        removeFromCart: async function(req, res) {
            try {
                const { item, user } = req.body;
    
                const updatedCart = await CartModel.findOneAndUpdate(
                    { user: user },
                    { $pull: { 'cartItems': { items: item } } },
                    { new: true }
                );
    
                return res.json({ success: true, data: updatedCart, message: "Item removed from Cart" });
    
            } catch (e) {
                return res.json({ success: false, message: e.message });
            }
        },
        getCard: async function(req, res) {
            try {
                const user = req.params.user;
                const foundCart = await CartModel.findOne({ user: user });
                if (!foundCart) {
                    return res.json({ success: true, message: "Cart not found", data: [] });
                }
                return res.json({ success: true, message: "Cart found", data: foundCart.cartItems });
            } catch (error) {
                return res.json({ success: false, message: error.message });
            }
        }
    };        

module.exports = cartModelcontroller;