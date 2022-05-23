import LoginField from './LoginField';
// material ui
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockIcon from '@mui/icons-material/Lock';
import { Checkbox } from '@mui/material';

import PrimaryButton from '../../../../components/PrimaryButton';

function LoginForm() {
    return (
        <form className="mb-4">
            <LoginField
                icon={<MailOutlineIcon className="!w-[18px] !h-[18px] mx-2 text-zinc-500" />}
                name="email"
                label="Email address"
                placeholder="Your email"
            />
            <LoginField
                icon={<LockIcon className="!w-[18px] !h-[18px] mx-2 text-zinc-500" />}
                name="password"
                label="Password"
                placeholder="Your password"
            />
            <div className="inline-flex items-center text-[13px] mb-[10px]">
                <Checkbox />
                <span className="ml-[3px]">Save your password</span>
            </div>
            <span className="block text-center">
                <PrimaryButton>LOG IN</PrimaryButton>
            </span>
        </form>
    );
}

export default LoginForm;
