import { useEffect, useState } from "react";
import { homeBannersData } from "../../../../utils/staticData";
import HomeBanner from "./HomeBanner";

function HomeBanners() {
    const [slideNum, setSlideNum] = useState(0);

    useEffect(() => {
        const timeWaiter = setTimeout(() => {
            if (slideNum < homeBannersData.length - 1) {
                setSlideNum(slideNum + 1)
            } else {
                setSlideNum(0)
            }
        },3000)

        return clearInterval(timeWaiter)
    })

    const moveDot = (index) => {
        setSlideNum(index)
    }
    return (
        <section className="relative overflow-hidden">
            <div className="flex transition delay-50 ease-in-out" style={{ transform: `translateX(${-100 * slideNum}%)` }}>
                {homeBannersData.map((data, index) => (
                    <HomeBanner key={index} {...data} />
                ))}
            </div>
            <div className="absolute flex bottom-[30px] left-1/2 translate-x-[-50%]">
            {Array(homeBannersData.length)
            .fill()
            .map((_, index) => {
            return (
              <span
                onClick={() => moveDot(index)}
                key={index}
                className={slideNum === index ? 
                    "relative w-5 h-5 rounded-full mx-[10px] border-cyan-500 border-solid border-2 cursor-pointer transition delay-100 ease-in-out before:absolute before:right-0 before:bottom-0 before:w-dots before:h-dots before:rounded-full before:bg-cyan-500 before:transition-all before:opacity-1 before:scale-100 before:translate-x-px before:translate-y-px" 
                    : 
                    "relative w-5 h-5 rounded-full mx-[10px] border-cyan-500 border-solid border-2 cursor-pointer transition delay-100 ease-in-out before:absolute before:right-0 before:bottom-0 before:w-dots before:h-dots before:rounded-full before:bg-cyan-500 before:transition-all before:opacity-0 before:scale-75 before:translate-x-px before:translate-y-px"}
              >
              </span>
            );
          })}
            </div>
        </section>
    )
}
export default HomeBanners;

