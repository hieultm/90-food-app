import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';

function PrimaryButton(props){
    const history = useHistory();
    const { page,children } = props;

    const handleMovePage = () => {
        if (page === 'shop') {
            history.push("/shop/best-foods")
        }
        else if (page === 'login') {
            history.push('/login');
        }
    }
    return (
        <Button
            onClick={handleMovePage}
            className="w-max !text-sm !tracking-wide !bg-cyan-500 
            hover:!bg-blue-500 shadow-lg !shadow-cyan-500/50 !px-3 !py-2 !text-white !rounded-2xl"
        >
            {children}
        </Button>
    )
}
PrimaryButton.propsType = {
    page: PropTypes.string,
}

export default PrimaryButton