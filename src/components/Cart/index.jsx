import CartItems from "./CartItem/index"
import CartHandle from "./CartHandle/index"
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

import {setIsShowCart} from "../../components/Header/headerSlice"
import EmptyCart from "../EmptyCart";
import { db } from "../../configs/firebaseConfig";
import { addToCart } from "../Cart/cartSlice"

function Cart() {
  const { user } = useContext(AuthContext)
  const { isShowCart } = useSelector((state) => state.header)
  const cartProducts = useSelector((state) => state.cart)


  const dispatch = useDispatch()

  const closeCart = () => {
    const action = setIsShowCart(false)

    dispatch(action)
  }

  // get data from firestore
  useEffect(() => {
    if(user) {
      db.collection("users").doc(user.uid).onSnapshot((doc) => {
        if(doc.data()) {
          const action = addToCart(doc.data().cart);
          dispatch(action);
        }
      });
    };
  },[user, dispatch]);

  return (
      <div 
        className="relative z-[999]"
      >
        <div
          className={
            isShowCart ? "fixed top-0 right-0 z-[998] w-[600px] h-[600px] opacity-1 visible bg-product-cart rounded-[50%] scale-[80] transition-all delay-75 ease-linear cursor-pointer"
            : "fixed top-0 right-0 z-[998] w-[600px] h-[600px] opacity-0 invisible bg-product-cart rounded-[50%] scale-0  transition-all delay-75 ease-linear"
          }
          onClick={closeCart}
        ></div>
        <div 
          className={
            isShowCart ? 
            "fixed top-0 right-0 z-[999] w-[450px] h-full flex flex-col justify-between opacity-100 bg-white shadow-cart-overlay translate-x-0 transition-all delay-[0.45s] ease-in-out tablet:w-full"
            : "fixed top-0 right-0 z-[999] w-[450px] h-full flex flex-col justify-between opacity-80 bg-white shadow-cart-overlay translate-x-full transition-all delay-[0.45s] ease-in-out "
          }
        >
          <div className="flex items-center justify-between border-[1px] border-solid py-5 pl-5 pr-8 border-b-cart-overlay">
            <h2 className="text-2xl uppercase font-bold text-zinc-700">
              Shopping Cart
            </h2>
            <div
              className="cursor-pointer"
              onClick={closeCart}
            >
              <CloseIcon className=" !w-8 !h-8 !fill-zinc-700"/>
            </div>
          </div>
          
          {cartProducts.length <= 0 && (
              <EmptyCart/>
          )}
          <CartItems/>
          <CartHandle/>
        </div>
      </div>

  )
}

export default Cart