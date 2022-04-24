import { Link, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect, useState} from 'react'

// mui 
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Avatar, Container } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

import { AuthContext } from "../../context/AuthContext"
import {auth} from "../../configs/firebaseConfig"
import { setIsShowCart } from "./headerSlice";

import { navbarName } from "../../utils/staticData"
import Logo from "../../assets/images/Home/logo.png"

//component
import Dialog from "../Dialog/index";
import Cart from "../Cart/index"
import ResponsiveNavbar from "./ResponsiveNavbar";



function Header() {


    const {  user, setUser, hasHeader, setHasHeader } = useContext(AuthContext)
    const cartProducts = useSelector((state) => state.cart);

    const dispatch = useDispatch()
    let history = useHistory()

    const [totalQnt, setTotalQnt] = useState(0)
    const [isShowDialog, setIsShowDialog] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);
    const [showResNav, setIsShowResNav] = useState(false)

    useEffect(() => {
        const showBgNavbar = () => {
            if (window.scrollY >= 100) {
                setShowNavbar(true)
            } else {
                setShowNavbar(false)
            }
        }
        window.addEventListener('scroll', showBgNavbar)

        return  () => {
            window.removeEventListener('scroll', showBgNavbar)
        }
    }, [])
    //responsive navbar
    const showResponsiveNav = () => {
        setIsShowResNav(!showResNav)
    }
    // Login
    const handleLogin = () => {
        setHasHeader(!hasHeader)
        history.push("/login")
        
    }
    //Logout
    const handleLogOut = () => {
        auth.signOut().then(() => {
          setUser(false);
        });
    };
    const onShowCart = () => {
        const action = setIsShowCart(true)
        user && dispatch(action)

        !user && setIsShowDialog(true)
    }

    useEffect(() => {
        const totalQnt = cartProducts.reduce(
            (acc, item) => acc + item.qnt, 0)
        
            setTotalQnt(totalQnt)
    }, [cartProducts])

    return (
    <>
        <header 
        className={(showNavbar) ? "bg-navbar-food mt-0 fixed !w-full transition easy-in-out delay-150 z-[900]" : " mt-1 !w-full sm:!w-full fixed z-[900]"}
        style = {{ display: hasHeader ? 'block' : 'none' }}
        >
            <Container>
            <nav className="flex items-center h-12 py-4 tablet:h-10">
                <DensityMediumIcon 
                    onClick={showResponsiveNav}
                    className="!w-8 !h-8 !fill-white !hidden tablet:!block tablet:cursor-pointer"
                />
                <Link className="flex mr-14 tablet:w-full tablet:justify-center" to="/home">
                    <img 
                        src={Logo} 
                        alt="Logo"
                        className="h-auto w-12 cursor-pointer"
                    />
                </Link>


                <ul className="flex gap-x-11 tablet:hidden">
                {navbarName.map(({name, path}) => (
                    <li 
                        key={name} 
                    >
                            <Link 
                                className="text-white text-base uppercase font-normal hover:text-red-500 cursor-pointer"
                                to={path}
                            >
                                {name}
                            </Link>
                    </li>
                ))}
                </ul>
                <ul className='flex ml-auto tablet:mr-unset'>
                    <div className='flex items-center'>
                        <div className='relative'>
                            <ShoppingCartIcon
                                className='!fill-white !w-8 !h-8 !cursor-pointer !mr-3 hover:!fill-red-500'
                                onClick={onShowCart}
                            />
                            <div className='absolute bg-sky-400 text-sm min-w-[30px] rounded-[44px] text-normal text-center right-0 bottom-[-0.3rem]'>
                                {user ? totalQnt : 0}
                            </div>
                        </div>
                    </div>
                    { user ? (
                        <div 
                            className='flex items-center text-base mx-8 cursor-pointer group tablet:hidden'
                        >
                            <Avatar src={user.photoURL} />
                            <label
                                className='text-white items-center text-lg cursor-pointer ml-[0.85rem] hover:text-red-500' 
                                htmlFor="login"
                            >
                                {user.displayName}
                            </label>
                            <ul
                                className="absolute top-[70px] bg-white py-[7px] transition-all delay-75 ease-out
                                rounded-md w-max border-[1px] border-solid shadow-dropList border-dropList 
                                before:absolute before:top-[-19.5px] before:border-[10.5px] before:border-solid 
                                before:border-b-white before:border-transparent before:right-3
                                after:absolute after:left-0 after:w-full after:h-5 after:top-[-1rem]
                                invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:top-[55px]"
                                >
                                <li
                                    className="flex items-center text-sm py-[6px] px-4 hover:bg-zinc-200"
                                >
                                    <PermContactCalendarIcon className="!mr-[5px] !text-lg fill-dropList"/>
                                    <span>My account</span>
                                </li>
                                <li 
                                    className="flex items-center text-sm py-[6px] px-4 hover:bg-zinc-200"
                                    onClick={handleLogOut}
                                >
                                    <ExitToAppIcon className="!mr-[5px] !text-lg fill-dropList"/>
                                    <span>Logout</span>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <div onClick={handleLogin} className='flex items-center text-base mx-8 cursor-pointer tablet:hidden'>
                            <Avatar/>
                            <label
                                className='text-white items-center text-lg cursor-pointer ml-[0.85rem] hover:text-red-500' 
                                htmlFor="login"
                            >
                                Sign In
                            </label>
                        </div>
                    )}
                </ul>
            </nav>
            </Container>
        </header>

        <ResponsiveNavbar
            user={user}
            isShow={showResNav}
            showNavbar={showResponsiveNav}
            handleLogIn={handleLogin}
            handleLogOut={handleLogOut}
        />                
        
        <Cart/>
        <Dialog isShow={isShowDialog} setIsShow={setIsShowDialog}/>
    </>
    )
}

export default Header;