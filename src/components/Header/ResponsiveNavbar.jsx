import PropTypes from "prop-types";
import { Link } from "react-router-dom"

//mui
import { Avatar } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FeedIcon from '@mui/icons-material/Feed';
import StorefrontIcon from '@mui/icons-material/Storefront';

function ResponsiveNavbar(props) {
    const { user, isShow, showNavbar, handleLogIn, handleLogOut} = props


    return (
        <div>
            <div
                className={
                    isShow ? "fixed top-0 left-0 bottom-0 z-[999] h-full w-4/5 px-4 py-[10px] bg-black transition-all delay-[0.5s] ease-in-out translate-x-0"
                    : "fixed top-0 left-0 bottom-0 z-[999] h-full w-4/5 px-4 py-[10px] bg-black transition-all delay-[0.5s] ease-in-out translate-x-[-100%]"
                }
            >
                <div
                    className="flex items-center justify-between py-[15px] mb-[10px] border-b-[1px] border-solid border-b-zinc-500 cursor-pointer"
                >
                    <div
                        onClick={handleLogIn}
                        className="flex items-center"
                    >
                        <Avatar 
                            src={ user?.photoURL}
                            className="!w-8 !h-8"
                        />  
                        <div
                            className="text-sm text-white ml-2"
                        >
                            {user?.displayName ?? "Sign In"}
                        </div>
                    </div>
                    {user && (
                        <div
                            className="text-white tablet:text-sm border-[1px] border-solid border-slate-300 px-2 py-[5px] rounded-md hover:bg-red-500"
                            onClick={handleLogOut}
                        >
                            Log Out
                        </div>
                    )}
                </div>
                <ul>
                    <Link to="/home" className="flex items-center text-sm py-3 my-1 text-white cursor-pointer hover:text-red-500">
                        <HomeIcon className="!text-2xl !mr-2"/>
                        Home
                    </Link>
                    <Link to="/shop/best-foods" className="flex items-center text-sm py-3 my-1 text-white cursor-pointer hover:text-red-500">
                        <RestaurantIcon className="!text-2xl !mr-2"/>
                        Order Online
                    </Link>
                    <li className="flex items-center text-sm py-3 my-1 text-white cursor-pointer hover:text-red-500">
                        <FeedIcon className="!text-2xl !mr-2"/>
                        News
                    </li>
                    <li className="flex items-center text-sm py-3 my-1 text-white cursor-pointer hover:text-red-500">
                        <StorefrontIcon className="!text-2xl !mr-2"/>
                        Forum
                    </li>
                </ul>
            </div>

            <span
                className={
                    isShow ? "fixed top-0 bottom-0 left-0 right-0 z-[998] bg-dialog-overlay transition-all delay-[0.3s] ease-in opacity-100 visible"
                    : "fixed top-0 bottom-0 left-0 right-0 z-[998] bg-dialog-overlay transition-all delay-[0.3s] ease-in opacity-0 invisible"
                }
                onClick={showNavbar}
            >
            </span>
        </div>
    )
}

ResponsiveNavbar.propsTypes = {
    user: PropTypes.object,
  
    isShow: PropTypes.bool.isRequired,
    showBurgerNav: PropTypes.func.isRequired,
    setIsShowWishlist: PropTypes.func.isRequired,
    handleLogOut: PropTypes.func.isRequired,
    handleLogIn: PropTypes.func.isRequired,
  };

export default ResponsiveNavbar