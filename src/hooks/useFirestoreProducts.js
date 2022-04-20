import { db } from "../configs/firebaseConfig"

function useFirestoreProducts() {

    const query = db.collection("users")

    const addToFirestore = (uid, product) => {
            query.doc(uid).get().then((doc) => {
                if (doc.exists) {
                    const { type, productInfo, action } = product || ""
                    const cartData = doc.data().cart

                    productInfo && db.collection("users").doc(uid).set({
                        cart: type === "success" ? handleAddToCart(cartData, productInfo, action) : cartData
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
        // check product exist
    const checkProductExist = (data, productInfo) => {
        return data.some((item) => item.id === productInfo.id)
    }

    const handleAddToCart = (data, productInfo, action) => {
        const isProductExist = checkProductExist(data, productInfo)

        if (isProductExist) {
            const index = data.findIndex((item) => item.id === productInfo.id);
            const productQnt = data[index].qnt

            const updateProduct = {
                ...data[index],
                qnt: action === "increase" ? productQnt + 1 : action === "decrease" ? productQnt - 1 || 1 : productQnt + productInfo.qnt || 1
            };

            data[index] = updateProduct

            return data
        } else {
            return data.concat({...productInfo, qnt: productInfo.qnt || 1 });
        }
    }

    const removeFromFirestore = (uid, product) => {
        query.doc(uid).get().then((doc) => {
            const { type, productInfo } = product
            const cartData = doc.data().cart

            const index = (type === "success" ? cartData : []).findIndex(
                (item) => item.id === productInfo.id
            )

            type === "success" ? cartData.splice(index, 1) : console.log("fail");

            productInfo && query.doc(uid).set({
                cart: cartData
            })
        }).catch((err) => {
            console.log("Fail to remove", err.message);
        })
    }

    return { addToFirestore, handleAddToCart, removeFromFirestore }
}

export default useFirestoreProducts