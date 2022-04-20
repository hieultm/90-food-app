import ShopHandle from "./ShopHandle"
import ShopProducts from "./ShopProducts"

function ShopContent() {
    return (
        <div
            className="flex flex-1 flex-col"
        >
            <ShopHandle/>
            <ShopProducts/>
        </div>
    )
}
export default ShopContent