import {
    BannerOne,
    BannerSecond,
    BannerThree,
}
from "./homeImages";

import {
    Burger,
    Coffee,
    Pork,
    Lunch,
    Juice,
    Chicken,
    Beef
} from "./homeImages"

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
const homeCategoryData = [{
        img: Burger,
        name: "breakfast",
    },
    {
        img: Coffee,
        name: "coffee",
    },
    {
        img: Pork,
        name: "pork ham",
    },
    {
        img: Lunch,
        name: "lunch",
    },
    {
        img: Juice,
        name: "juice",
    },
    {
        img: Chicken,
        name: "grilled chicken",
    },
    {
        img: Beef,
        name: "roast beef",
    },
]
export {
    homeBannersData,
    navbarName,
    homeCategoryData
}