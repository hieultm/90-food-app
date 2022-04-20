
import PropTypes from "prop-types";
// component material-ui
import { Container } from '@mui/material';
// icon materiul-ui
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import PrimaryButton from "../../../../components/PrimaryButton";




function HomeBanner(props) {
    const { title, description, strong, background } = props;


    return (
        <div 
            className="h-[46rem] w-full shrink-0 bg-cover bg-no-repeat tablet:h-[500px]" 
            style={{ backgroundImage: `url(${(background)})` }}
        >
            <Container className="h-full"> 
                <div 
                    className="flex justify-center w-3/5 h-full flex-col tablet:w-full tablet:items-center"
                >
                    <div 
                        className="text-white text-xl font-semibold uppercase tablet:text-sm"
                    >
                        {title}
                    </div>
                    <div 
                        className="text-7xl text-white font-semibold mt-[5px] mb-[15px] tablet:text-5xl"
                    >
                        {description}
                        <strong className='text-red-500'> {strong} </strong>
                    </div>
                    <div 
                    >
                        <PrimaryButton 
                            page="shop"
                        >
                            <AddShoppingCartIcon className="mr-2 !w-4 !h-4"/>
                            Order now
                        </PrimaryButton>
                    </div>
                </div>
            </Container>
        </div>
    )
}


HomeBanner.propsTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    strong: PropTypes.string,
    background: PropTypes.string,
};


export default HomeBanner;