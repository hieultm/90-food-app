import SecondaryButton from "../../SecondaryButton/index"
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';

import {useState } from "react";


function CartHandle() {
    const [isActive, setIsActive] = useState(false)

    const toggleDropUp = () => {
        setIsActive(!isActive)
    }
  return (
    <div className="relative px-6 pb-[25px] border-[1px] border-solid border-t-cart-overlay bg-white shadow-cart-handle">
        <div 
            className="relative flex items-center justify-center mb-[5px] pt-[3px] h-6 cursor-pointer
            before:absolute before:left-1/2 before:w-1/5 before:h-[6px] before:rounded-[999px] before:bg-zinc-300 before:translate-x-[-50%]"
            onClick={toggleDropUp}
        ></div>
        <div 

            className= {
                isActive ? "w-full h-[160px] px-[10px] overflow-hidden transition-all delay-[0.5s] ease-in-out visible opacity-100"
                : "w-full h-0 px-[10px] invisible overflow-hidden transition-all delay-[0.5s] ease-in-out opacity-0"
            }
            
        >
            <h3 className="text-lg mb-3 font-semibold text-zinc-800">
                Order Info
            </h3>
            <div className="flex justify-between mb-5">
                <span className="text-sm text-zinc-400">
                    Discount
                </span>
                <span className="text-sn font-semibold">
                    $
                </span>
            </div>
            <div className="flex justify-between mb-5">
                <span className="text-sm text-zinc-400">
                    Shipping Cost
                </span>
                <span className="text-sn font-semibold">
                    Free
                </span>
            </div>
            <div className="flex justify-between mb-5">
                <span className="text-sm text-zinc-400">
                    Vouncher
                </span>
                <span className="text-sn font-semibold">
                    None
                </span>
            </div>
        </div>
        <div className="flex justify-between px-[10px] mb-[10px]">
            <span className="text-lg capitalize font-bold">
                Total
            </span>
            <span className="text-2xl font-bold text-red-500">
                $
            </span>
        </div>
        <div 
            className="flex items-center gap-5"
        >
            <SecondaryButton
            >
                <ShoppingCartCheckoutIcon className="!text-lg !mr-[3px]"/>
                <span>Checkout</span>
            </SecondaryButton>
            <SecondaryButton
                page="shop"
                className="!flex-1 mr"
            >
                <StoreMallDirectoryIcon className="!text-lg !mr-[3px]"/>
                <span>Buymore</span>
            </SecondaryButton>
        </div>
    </div>
  )
}

export default CartHandle