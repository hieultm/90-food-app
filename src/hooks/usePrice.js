import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function useTotalPrice() {
    const [totalPrice, setTotalPrice] = useState(0);
    const cartProducts = useSelector((state) => state.cart);

    useEffect(() => {
        const totalPrice = cartProducts.reduce(
            (accumulator, item) => accumulator + item.price * item.qnt,
            0
        );

        setTotalPrice(totalPrice)

    }, [cartProducts]);

    return { totalPrice };
}

export default useTotalPrice;