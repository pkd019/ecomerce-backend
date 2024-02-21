const CartModel = require( "./../model/cart_model" );

cartModelcontroller ={

   addToCart: async function(req,res){
    try{
        const {item , user ,quantity} = req.body;

        const foundCart = await cartModel.findone({user:user,})
        if(!foundCart){
            const newCart = new CartModel({
                user:user,
                
            })
            newCart.items.push({item:item, quantity:quantity});
           
            await newCart.save();
            return res.json({success:true,data:newCart,message:"Item Added to Cart"});
        }
      const updatedcart =  await cartModel.findone({user:user},{$push:{cartItems:{item:item, quantity:quantity}}},{new:true})

      return res.json({success:true,data:updatedcart,message:"cart updated successfully"});

    }
    catch(e){
        return res.json({success:false,message:e.message});
    }
   }
}

module.exports = cartModelcontroller;