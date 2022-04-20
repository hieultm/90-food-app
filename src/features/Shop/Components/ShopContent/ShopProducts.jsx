import { useEffect, useState } from "react";
import { useDispatch,useSelector  } from "react-redux"
import shopApi from "../../../../api/shopApi"
import { setShopProducts } from '../../shopSlice';

//component
import ShopProduct from "../../../../components/ShopProduct"
import Dialog from "../../../../components/Dialog";

function ShopProducts() {
    const dispatch = useDispatch()
    const { shopProducts } = useSelector((state) => state.shop);

    const [isShowDialog, setIsShowDialog] = useState(false)

    const openDialog = () => {
        setIsShowDialog(true)
    }

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await shopApi.getAll()
                const action = setShopProducts(res.data)
                dispatch(action)
            } catch (err) {
                console.log(err.message);
            }
        }
        fetchProduct()

        return () => {
            
        };
    },[]);

    return (
        <>
            <div
                className="flex justify-center flex-wrap gap-3 pt-6 pl-5 pb-5 tablet:p-0"
            >
            {shopProducts && shopProducts.map((item) => (
                <ShopProduct
                    key={item.id}
                    {...item}
                    openDialog={openDialog}
                >
                </ShopProduct>
            ))}
            </div>

            <Dialog isShow={isShowDialog} setIsShow={setIsShowDialog} />
        </>
    )
}
export default ShopProducts