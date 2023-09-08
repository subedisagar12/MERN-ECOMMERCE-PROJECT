import React, {createContext,useState} from 'react'
// import { Products } from "../productcard";
export const ProductContext = createContext(null)

const getDefaultCart = () =>{
    let cart = []
    return cart
}

function ProductContextProvider(props) {
  
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const getTotalCartAmount = () => {
        let totalAmount = cartItems.reduce((acc,item)=>{
          return acc + item.quantity*item.price
        },0);
        
        return totalAmount;
      };

    const addToCart = ({product}) =>{
      let cartProduct = cartItems.find(item=>item._id === product._id)
      if(cartProduct){
        setCartItems(cartItems.map(item=>{
          if(item._id === cartProduct._id){
            return {...item, quantity:cartProduct.quantity+1}
          }else{
            return item
          }
        }))
      }else{
      //  let newcartProduct = {
      //     _id: product._id,
      //     name: product.name,
      //     image: product.image,
      //     price: product.price,
      //     quantity: 1,
      //   }
        setCartItems((prev)=> ([...prev,{...product,quantity:1} ]))
      }
      // console.log(product._id)
      // console.log(cart)
      // setCartItems((prev) => ({ ...prev, [itemId]:prev[itemId]+1}))
    }
    console.log(cartItems)
    const removeFromCart = (_id) =>{
      setCartItems(cartItems.map(item=>{
        if(item._id === _id){
          return {...item, quantity:item.quantity-1}
        }else{
          return item
        }
      }))
    }
    const increaseToCart = (_id) =>{
      setCartItems(cartItems.map(item=>{
        if(item._id === _id){
          return {...item, quantity:item.quantity+1}
        }else{
          return item
        }
      }))
    }
    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
      }
    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount, increaseToCart}
    // console.log(cartItems)
  return (
    <div>
        <ProductContext.Provider value = {contextValue}> {props.children} </ProductContext.Provider>
    </div>
  )
}

export default ProductContextProvider