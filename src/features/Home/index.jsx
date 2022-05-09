import { Fragment, useContext, useEffect } from "react";
import HomeBanners  from "../Home/components/HomeBanner";
import HomeDelivery from "./components/HomeDelivery";
import HomeSlider from "./components/HomeSlider";

import { AuthContext } from '../../context/AuthContext'

function Home() {
    const { setHasHeader } = useContext(AuthContext)

    useEffect(() => {
        setHasHeader(true)
    }, [])

    return (
        <Fragment>
            <HomeBanners/>
            <HomeSlider/>
            <HomeDelivery/>
        </Fragment>
    )
}

export default Home