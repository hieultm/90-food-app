// component from Mui
import { Container } from '@mui/material';

import PrimaryButton from "../../../../components/PrimaryButton";

import SmallDeliveryImg from "../../../../assets/svgs/Home/small_delivery.jpg"

import BigDeliveryImg from "../../../../assets/svgs/Home/big_delivery.png"

function HomeDelivery() {

    return (
        <section className="mb-12 tablet:mt-5">
            <Container>
                <div className='flex items-center'>
                    <div className='w-2/5 mr-[50px] tablet:w-full tablet:text-center'>
                        <div className='text-yellow-500 text-[18px] tablet:text-base '>
                            Delivery
                        </div>
                        <h2 className='font-bold text-[32px] mt-1 text-zinc-700 tablet:text-xl'>
                            A Moments Of Delivered
                            <strong className='text-red-500 text-[32px]'> On Right Time & Place </strong>
                        </h2>
                        <p className='text-sm mt-2 mb-4 text-zinc-600'> 
                        90Food is a website selling food at night for football enthusiasts 
                        and always watching top matches from the old continent.
                        </p>
                        <div className='flex items-center flex-wrap tablet:justify-center '>
                            <img 
                                src={SmallDeliveryImg} 
                                className="w-[85px] tablet:w-[70px]"
                                alt="Delevery" 
                            />
                            <div className='mx-[15px]'>
                                <div className='text-sm text-zinc-600'>
                                    Delivery Order Num
                                </div>
                                <div className='text-base text-red-500'>
                                    088 888888
                                </div>
                            </div>
                            <PrimaryButton page="shop">
                                Order Now
                            </PrimaryButton>
                        </div>
                    </div>
                    <img 
                        src={BigDeliveryImg} 
                        className="min-w-[40%] flex-1 tablet:hidden"
                        alt="Delivery" 
                    />
                </div>
            </Container>
        </section>
    )
}
export default HomeDelivery