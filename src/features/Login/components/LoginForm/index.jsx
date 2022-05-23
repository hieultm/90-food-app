import LoginField from './LoginField';
// material ui
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockIcon from '@mui/icons-material/Lock';
import { Checkbox } from '@mui/material';

import PrimaryButton from '../../../../components/PrimaryButton';
import { useState } from 'react';
import axios from 'axios';
import { useHistory, useLocation } from 'react-router-dom';

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const login = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("https://netflix-test-server.herokuapp.com/api/auth/login", {
                email, password
            });
            if (!response.data) {
                return;
            }
            localStorage.setItem('user', JSON.stringify(response.data));
            history.push('/home');
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <form className="mb-4">
            {/*<LoginField*/}
            {/*    icon={<MailOutlineIcon className="!w-[18px] !h-[18px] mx-2 text-zinc-500" />}*/}
            {/*    name="email"*/}
            {/*    label="Email address"*/}
            {/*    placeholder="Your email"*/}
            {/*/>*/}
            {/*<LoginField*/}
            {/*    icon={<LockIcon className="!w-[18px] !h-[18px] mx-2 text-zinc-500" />}*/}
            {/*    name="password"*/}
            {/*    label="Password"*/}
            {/*    placeholder="Your password"*/}
            {/*/>*/}
            <input
                type="email"
                placeholder="Email or phone number"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <div className="inline-flex items-center text-[13px] mb-[10px]">
                <Checkbox />
                <span className="ml-[3px]">Save your password</span>
            </div>
            <span className="block text-center">
                {/*<PrimaryButton onClick={login}>LOG IN</PrimaryButton>*/}
                <button onClick={login}>Log in</button>
            </span>
        </form>
    );
}

export default LoginForm;
