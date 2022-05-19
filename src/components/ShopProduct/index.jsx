import PropTypes from 'prop-types';
// import lazy load image
import { LazyLoadImage } from 'react-lazy-load-image-component';
// lazy load img css
import 'react-lazy-load-image-component/src/effects/blur.css';
// mui icon
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

import useFirestoreProducts from '../../hooks/useFirestoreProducts';

import ToastNotification from '../ToastNotification';

function ShopProduct(props) {
    const { id, name, img, dsc, price, country, openDialog } = props;

    const { addToFirestore } = useFirestoreProducts();

    const { user } = useContext(AuthContext);

    const handleAddToFirestore = () => {
        const productInfo = { id, name, img, price, dsc, country };
        if (!user) {
            openDialog();
            return;
        }
        addToFirestore(user.uid, {
            productInfo,
            action: 'increase',
        });
        ToastNotification('success');
    };

    return (
        <div id={id} className="relative max-w-[187.2px] pb-3 cursor-pointer flex-item-product group">
            <div className="relative h-[165px] text-center">
                <LazyLoadImage
                    effect="blur"
                    src={img}
                    alt={name}
                    className="h-full w-full object-cover"
                    width="100%"
                    height="100%"
                ></LazyLoadImage>
            </div>
            <div className="flex-1 flex flex-col">
                <div className="flex flex-1 flex-col">
                    <div className="font-semibold text-lg mt-2 mb-[6px] text-ellipsis overflow-hidden flex-1 min-h-[60px]">
                        {name}
                    </div>
                    <p className="text-sm mb-[5px] block text-ellipsis overflow-hidden min-h-[50px]">{dsc}</p>
                </div>
                <div className="flex justify-between mt-auto flex-shrink-0">
                    <div className="flex items-center ">
                        <LocationOnIcon className="!text-lg !mr-[1px] !fill-red-500" />
                        <span className="text-[13px] w-[85%] overflow-hidden ">{country}</span>
                    </div>
                    <div className="text-[17.5px] font-semibold text-red-500">${price}</div>
                </div>

                <div
                    className="absolute top-2 right-[-3px] opacity-0 invisible
                    transition-all delay-[0.15ms] ease-linear group-hover:opacity-100 group-hover:visible group-hover:right-2"
                >
                    <div
                        className="rounded-full w-[29.5px] h-[29.5px] text-center mb-[5px] bg-product-cart"
                        onClick={handleAddToFirestore}
                    >
                        <ShoppingCartOutlinedIcon className="text-white !w-[16.5px] !h-full hover:!text-red-500" />
                    </div>
                </div>
            </div>
        </div>
    );
}

ShopProduct.propsTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    img: PropTypes.string,
    dsc: PropTypes.string,
    price: PropTypes.number,
    country: PropTypes.string,

    openDialog: PropTypes.func,
    // moveToTop: PropTypes.func
};

export default ShopProduct;
