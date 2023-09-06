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
        let totalAmount = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            let itemInfo = Products.find((product) => product.id === Number(item));
            totalAmount += cartItems[item] * itemInfo.price;
          }
        }
        return totalAmount;
      };

    const addToCart = ({product}) =>{
      console.log(product._id)
      let cartProduct = {
        id: product._id,
        name: product.name,
        image: product.image,
        price:product.price
      }
      console.log(cartProduct)
      setCartItems((prev)=> ({...prev, [product._id]: cartProduct}))
      console.log(cartItems)

      // console.log(cart)
      // setCartItems((prev) => ({ ...prev, [itemId]:prev[itemId]+1}))
    }
    const removeFromCart = (id,image,name,price) =>{
        setCartItems((prev) => ({ ...prev, [itemId]:prev[itemId]-1}))
    }
    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
      }
    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount}
    console.log(cartItems)
  return (
    <div>
        <ProductContext.Provider value = {contextValue}> {props.children} </ProductContext.Provider>
    </div>
  )
}

export default ProductContextProvider