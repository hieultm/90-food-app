import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Dialog(props) {
    const { isShow, setIsShow } = props;

    const history = useHistory();

    const hideDialog = () => {
        setIsShow(false);
    };

    const moveToLogin = () => {
        setIsShow(false);
        history.push('/login');
    };

    return (
        <div className={isShow ? 'fixed inset-0 z-[999] flex visible' : 'fixed inset-0 z-[999] flex invisible'}>
            <div
                className={
                    isShow
                        ? 'absolute w-full h-full bg-dialog-overlay transition-all delay-[.25s] ease-out opacity-100'
                        : 'absolute w-full h-full bg-dialog-overlay transition-all delay-[.25s] ease-out opacity-0 '
                }
                onClick={hideDialog}
            ></div>
            <div
                className={
                    isShow
                        ? 'z-10 m-auto p-5 rounded-md shadow-btnLogin bg-white transition-all delay-[.5s] ease-linear translate-y-0 visible opacity-100'
                        : 'z-10 m-auto p-5 rounded-md shadow-btnLogin bg-white transition-all delay-[.5s] ease-linear translate-y-[300%] invisible opacity-0'
                }
            >
                <h2 className="text-xl uppercase mb-4 font-semibold">Join with us</h2>
                <p className="text-base text-zinc-800">You are not signed in. Please sign in to use this feature!</p>
                <div className="flex justify-end items-center mt-10">
                    <Button
                        onClick={hideDialog}
                        className="!bg-slate-200 !text-zinc-800 !mr-3 !px-2 !py-[6px] hover:!bg-slate-400"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={moveToLogin}
                        className="!bg-cyan-400 !text-white !px-2 !py-[6px] hover:!bg-cyan-600"
                    >
                        Log In
                    </Button>
                </div>
            </div>
        </div>
    );
}
Dialog.propsTypes = {
    isShow: PropTypes.bool,
    setIsShow: PropTypes.func,
};
export default Dialog;
