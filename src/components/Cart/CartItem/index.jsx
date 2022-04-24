import CartItem from "./CartItem"
import useFirestoreProducts from "../../../hooks/useFirestoreProducts"
import { useSelector } from "react-redux";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

function CartItems() {
  const cartProducts = useSelector((state) => state.cart)

  const { user } = useContext(AuthContext)

  const { addToFirestore, removeFromFirestore} = useFirestoreProducts()

  const onHandleAddToFirestore = (product, action) => {
      addToFirestore(user.uid, {
        productInfo: product,
        action: action
      })
  }

  const onHandleRemoveToFirestore = (product) => {
    removeFromFirestore(user.uid, {
      productInfo: product
    })
  }

  return (
    <div
      className="px-4 py-5 mb-auto overflow-y-auto"
    >
      {cartProducts.map((product) => (
          <CartItem
            handleAddToFirestore={onHandleAddToFirestore}
            handleRemoveToFirestore={onHandleRemoveToFirestore}
            key={product.id}
            product={product}
          />
      ))}
    </div>
  )
}

export default CartItems