import { Fragment, useContext, useEffect } from "react";
import HomeBanners  from "../Home/components/HomeBanner";
import HomeDelivery from "./components/HomeDelivery";

import { AuthContext } from '../../context/AuthContext'

function Home() {
    const { setHasHeader } = useContext(AuthContext)

    useEffect(() => {
        setHasHeader(true)
    }, [])

    return (
        <Fragment>
            <HomeBanners/>
            <HomeDelivery/>
        </Fragment>
    )
}

export default Home