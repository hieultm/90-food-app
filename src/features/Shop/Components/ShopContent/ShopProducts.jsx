import { useState } from 'react';
import { useSelector } from 'react-redux';

//component
import ShopProduct from '../../../../components/ShopProduct';
import Dialog from '../../../../components/Dialog';

function ShopProducts() {
    const { shopProducts } = useSelector((state) => state.shop);

    const [isShowDialog, setIsShowDialog] = useState(false);

    const openDialog = () => {
        setIsShowDialog(true);
    };

    return (
        <>
            <div className="flex justify-start flex-wrap gap-3 pt-6 pl-5 pb-5 tablet:p-0">
                {shopProducts &&
                    shopProducts.map((item) => (
                        <ShopProduct key={item.id} {...item} openDialog={openDialog}></ShopProduct>
                    ))}
            </div>

            <Dialog isShow={isShowDialog} setIsShow={setIsShowDialog} />
        </>
    );
}
export default ShopProducts;
