import { Button, Container } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import LoginForm from "./components/LoginForm"

import { AuthContext } from "../../context/AuthContext"
import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom"

import LoginThumb from "../../assets/svgs/Login/LoginThumb.png"
import GoogleIcon from "../../assets/svgs/Login/googleIcon.svg"
// firebase

import {auth, fbProvider, googleProvider } from '../../configs/firebaseConfig'

function Login() {
   const history = useHistory()

    const { setHasHeader } = useContext(AuthContext)

    const handleGoogleLogin = () => {
        auth.signInWithPopup(googleProvider)
        .then(() => {
            history.goBack()
            setHasHeader(true)
        }).catch((err) => {
            console.log(err.message);
        })

    }
    const handleFbLogin = () => {
        auth.signInWithPopup(fbProvider)
        .then(() => {
            history.goBack()
            setHasHeader(true)
        }).catch((err) => {
            console.log(err.message);
        })

    }
    useEffect(() => {
        setHasHeader(false);
      }, [setHasHeader]);

    return (
        <section>
            <Container>
                <div 
                    className="flex items-center overflow-hidden flex-1 rounded-[8px] my-[150px] h-[70%] shadow-login"
                >
                    <div className="w-[55%] tablet:hidden">
                        <img 
                            src={LoginThumb} 
                            className="bg-contain bg-no-repeat"
                            style={{ backgroundPosition: "50%" }}
                            alt="LoginThumb"
                        />
                    </div>
                    <div className="flex flex-col justify-center w-[45%] px-[50px] py-[60px] tablet:w-full">
                        <h2 className="text-xl font-bold">
                            JOIN WITH US
                        </h2>
                        <div className="my-4 text-sm text-zinc-400">
                            <span>
                                Don't have an account?   
                            </span>
                            <span className="cursor-pointer">
                                <strong className="text-red-500">
                                     Create an account
                                </strong>
                            </span>
                        </div>
                        <LoginForm />
                        <div 
                            className="relative text-center 
                            after:absolute after:h-[0.5px] after:w-full 
                            after:top-1/2 after:left-1/2 after:text-center 
                            after:translate-x-[-50%] after:translate-y-[-50%] after:bg-zinc-300"
                        >
                            <span className="relative z-10 text-sm bg-white text-zinc-400 px-1">
                                OR
                            </span>
                        </div>
                        <div className="flex flex-wrap items-center justify-center">
                            <Button
                                onClick={handleGoogleLogin} 
                                className="!mr-5 !text-sm !bg-white !mt-4 
                                !rounded-full !min-w-[185px] !normal-case !px-3 !py-[10px] !text-inherit !shadow-btnLogin"
                            >
                                <img 
                                    src={GoogleIcon} 
                                    alt="GoogleIcon" 
                                    className="mr-1 w-5 h-5"
                                />
                                Log in with Google
                            </Button>

                            <Button
                                onClick={handleFbLogin}
                                className="!text-sm !bg-white !rounded-full !mt-4
                                !normal-case !px-3 !py-[10px] !text-inherit !shadow-btnLogin"
                            >
                                <FacebookIcon className="mr-1 !w-5 !h-5 !fill-fb"/>
                                Log in with Facebook
                            </Button>
                        </div>
                    </div>
                </div>
                
            </Container>
        </section>
    )
}

export default Login