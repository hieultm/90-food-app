import { useParams } from "react-router-dom"
import BannerShop from "../../../src/assets/images/Shop/banner.jpg"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Banner() {

    const { name } = useParams()

    const paramsName = name.replace("-"," ")

    return(
        <section
            className="flex items-center justify-center flex-col h-[325px] mb-[80px] w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${BannerShop})` }}
        >
            <h2 className="text-4xl text-center capitalize text-white font-bold">
                {paramsName}
            </h2>
            <div className="flex items-center justify-center mt-1 ">
                <span 
                    className="text-sm m-1 p-2 capitalize text-white transition-all hover:text-red-500 cursor-pointer font-medium"
                >
                    Home
                </span>
                <MoreHorizIcon/>
                <span 
                    className="text-sm m-1 p-2 capitalize text-white transition-all hover:text-red-500 cursor-pointer font-medium"
                >
                    Shop
                </span>
                <MoreHorizIcon/>
                <span 
                    className="text-sm m-1 p-2 capitalize text-red-500 transition-all cursor-pointer font-medium"
                >
                    {paramsName}
                </span>
            </div>
        </section>
    )
}

export default Banner