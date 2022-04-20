import ShopContent from "./Components/ShopContent/index.jsx";
import Banner from "../../components/Banner/index.jsx";
import ShopFilter from "./Components/ShopFilter/index";


import { Container } from "@mui/material"

function Shop() {
    return (
        <section>
            <Banner/>
            <Container>
                <div 
                    className="flex justify-center"
                >
                    <ShopFilter/>
                    <ShopContent/>
                </div>
            </Container>
        </section>
    )
}
export default Shop