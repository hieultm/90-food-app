import { db } from "../configs/firebaseConfig"

function useFirestoreProducts() {

    const query = db.collection("users")

    // check product exist
    const checkProductExists = (data, productInfo) => {
        return data.some((item) => item.id === productInfo.id)
    }

    const handleAddToCart = (data, productInfo, action) => {
        const isProductExists = checkProductExists(data, productInfo);

        if (isProductExists) {
            const index = data.findIndex((item) => item.id === productInfo.id);
            const productQnt = data[index].qnt;

            const updatedProduct = {
                ...data[index],
                qnt: action === "increase" ?
                    productQnt + 1 :
                    action === "decrease" ?
                    productQnt - 1 || 1 :
                    productQnt + productInfo.qnt || 1,
            };

            data[index] = updatedProduct;

            return data;
        } else {
            return data.concat({...productInfo, qnt: productInfo.qnt || 1 });
        }
    }

    const addToFirestore = (uid, product) => {
        query.doc(uid).get().then((doc) => {
            if (doc.exists) {
                const { productInfo, action } = product || ""
                const cartData = doc.data().cart

                productInfo && db.collection("users").doc(uid).set({
                    cart: handleAddToCart(cartData, productInfo, action)
                })
            } else {
                query.doc(uid).set({
                    cart: []
                })
            }
        }).catch((err) => {
            console.log("Fail to fetch:", err.message);
        });
    }

    const removeFromFirestore = (uid, product) => {
        query.doc(uid).get().then((doc) => {
            const { productInfo } = product
            const cartData = doc.data().cart

            const index = cartData.findIndex(
                (item) => item.id === productInfo.id
            )
            cartData.splice(index, 1)

            productInfo && query.doc(uid).set({
                cart: cartData
            })
        }).catch((err) => {
            console.log("Fail to remove", err.message);
        })
    }

    return { addToFirestore, removeFromFirestore }
}

export default useFirestoreProducts