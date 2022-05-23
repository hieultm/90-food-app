import { useContext, useEffect } from 'react';
import SignupForm from './components';

import { AuthContext } from '../../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';

//mui
import { Button, Container } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

function SignUp() {
    const { setHasHeader } = useContext(AuthContext);
    const history = useHistory();

    useEffect(() => {
        setHasHeader(false);
    }, [setHasHeader]);

    return (
        <Container>
            <div className="flex items-center overflow-hidden flex-1 rounded-[8px] my-[150px] h-[70%] shadow-login">
                <div className="flex flex-col justify-center w-[50%] px-[50px] pt-[30px] pb-[80px] tablet:w-full bg-form-signup">
                    <div className="flex justify-between items-center mb-[60px]">
                        <span className="text-white translate-x-[-36px] text-base">Welcome to 90Food</span>
                        <CloseOutlinedIcon
                            className="!fill-white translate-x-[36px] cursor-pointer"
                            onClick={() => history.goBack()}
                        />
                    </div>
                    <h2 className="text-center text-2xl text-white mb-5">Create an Account</h2>
                    <SignupForm className="" />
                    <div className="text-center text-zinc-50 mb-4">
                        <Button
                            className="!text-sm !bg-signup-btn !rounded-lg
                                !normal-case !px-4 !py-[10px] !text-inherit shadow-btnLogin !w-1/4"
                        >
                            Sign Up
                        </Button>
                    </div>
                    <div className="text-center text-zinc-400">
                        Have an account?
                        <Link to="/login" className="text-signup-btn ml-2">
                            Sign In
                        </Link>
                    </div>
                </div>
                <div className="w-[50%] tablet:hidden">
                    <img
                        src=""
                        className="bg-contain bg-no-repeat"
                        style={{ backgroundPosition: '50%' }}
                        alt="LoginThumb"
                    />
                </div>
            </div>
        </Container>
    );
}

export default SignUp;
