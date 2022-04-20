import CartItem from "./CartItem"
//import useFirestoreProducts from "../../../hooks/useFirestoreProducts"

function CartItems() {
  const cartProduct = [
  ]

  const handleAddToFirestore = () => {
      console.log(cartProduct);
  }

  return (
    <div
      className="px-4 py-5 mb-auto overflow-y-auto"
    >
      {cartProduct.map((product) => (
          <CartItem
            handleAddToFirestore={handleAddToFirestore}
            key={product.id}
            product={product}
          />
      ))}
    </div>
  )
}

export default CartItems