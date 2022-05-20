import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

//component
import ShopProduct from '../../../../components/ShopProduct';
import Dialog from '../../../../components/Dialog';

function ShopProducts() {
    const { shopProducts, searchProducts } = useSelector((state) => state.shop);

    const [isShowDialog, setIsShowDialog] = useState(false);
    const [searchItem, setSearchItem] = useState('');

    const openDialog = () => {
        setIsShowDialog(true);
    };
    useEffect(() => {
        setSearchItem(searchProducts);
    }, [searchProducts]);

    return (
        <>
            <div className="flex justify-start flex-wrap gap-3 pt-6 pl-5 pb-5 tablet:p-0">
                {shopProducts &&
                    shopProducts
                        .filter((item) => {
                            if (searchItem === '') {
                                return item;
                            } else if (item.name.toLowerCase().includes(searchItem.toLowerCase())) {
                                return item;
                            }
                            return false;
                        })
                        .map((data) => {
                            return <ShopProduct key={data.id} {...data} openDialog={openDialog}></ShopProduct>;
                        })}
            </div>

            <Dialog isShow={isShowDialog} setIsShow={setIsShowDialog} />
        </>
    );
}
export default ShopProducts;
