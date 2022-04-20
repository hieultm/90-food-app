import EmptyCartImg from "../../assets/images/Shop/empty_cart.jpg"

function EmptyCart() {
    return (
        <div className="absolute left-0 right-0 -z-10 flex flex-col justify-center items-center h-full mt-[-35px] mb-[40px]">
            <img
                className="mb-[35px] w-[250px]"
                src={EmptyCartImg} 
                alt="EmptyCart" 
            />
            <h2 className="text-2xl capitalize font-bold text-zinc-700">
                Your Cart Is Empty 🐧
            </h2>
        </div>
    )
}

export default EmptyCart