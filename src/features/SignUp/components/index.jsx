import SignupField from './SignupField';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockIcon from '@mui/icons-material/Lock';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function SignupForm() {
    return (
        <form className="mb-4">
            <SignupField
                name="Email address"
                placeholder="Your Email address"
                icon={<MailOutlineIcon className="!w-[18px] !h-[18px] mx-2 text-zinc-50" />}
            />
            <SignupField
                name="Password"
                placeholder="Your Password"
                icon={<LockIcon className="!w-[18px] !h-[18px] mx-2 text-zinc-50" />}
            />
            <SignupField
                name="Confirm Password"
                placeholder="Confirm Your Password"
                icon={<LockOutlinedIcon className="!w-[18px] !h-[18px] mx-2 text-zinc-50" />}
            />
        </form>
    );
}

export default SignupForm;
