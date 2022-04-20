import { lazy } from "react"
import { Redirect } from "react-router-dom";

import { PATH_NAMES } from "../constants/routes";

const Home = lazy(() =>
    import ("../features/Home"))
const Login = lazy(() =>
    import ("../features/Login"))
const Shop = lazy(() =>
    import ("../features/Shop"))

const routesConfig = [{
        exact: true,
        path: PATH_NAMES.ROOT,
        component: () => < Redirect to = { PATH_NAMES.HOME }
        />,
    },
    {
        exact: true,
        path: PATH_NAMES.HOME,
        component: Home,
    },
    {
        exact: true,
        path: PATH_NAMES.LOGIN,
        component: Login,
    },
    {
        exact: true,
        path: PATH_NAMES.SHOP,
        component: Shop,
    },
]

export default routesConfig;