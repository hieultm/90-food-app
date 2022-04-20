import {
    BannerOne,
    BannerSecond,
    BannerThree,
}
from "./homeImages";
//home 
const homeBannersData = [{
        className: "banner-st",
        title: "Enjoy your meal",
        description: "Good food is wise",
        strong: " medicine",
        background: BannerOne,
    },
    {
        className: "banner-nd",
        title: "Happy your special",
        description: "Love at first",
        strong: " bite",
        background: BannerSecond,
    },
    {
        className: "banner-rd",
        title: "Good food is good mood",
        description: "The belly rules the",
        strong: " mind",
        background: BannerThree,
    },
];
const navbarName = [{
        name: "Home",
        path: "/home",
        icon: "HomeIcon"
    },
    {
        name: "Order online",
        path: "/shop/best-foods",
        icon: "RestaurantIcon"
    },
    {
        name: "News",
        path: "/",
        icon: "FeedIcon"
    },
    {
        name: "Forum",
        path: "/",
        icon: "StorefrontIcon"
    },
]
export {
    homeBannersData,
    navbarName
}