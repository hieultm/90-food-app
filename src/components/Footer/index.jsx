import Logo from "../../assets/images/Home/logo.png"
// import Material UI
import { Container } from '@mui/material';
// icon Material UI
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
//route


function Footer() {


    return (
        <footer className='bg-zinc-900 text-white pt-6 pb-8 mobi:mb-2'>
            <Container>
                <div className='flex flex-wrap justify-center mx-[-15px]'>
                    <div className='flex-footer px-4'>
                        <span>
                            <img 
                                src={Logo}
                                className="min-w-[255px] h-[200px]" 
                                alt="Logo" 
                            />
                        </span>
                    </div>
                    <div className='flex-footer px-4 min-w-[255px] mobi:mb-2'>
                        <div className="mb-4 border-b-2 border-solid border-b-white">
                            <p className="text-base bg-white inline-block px-[15px] py-[5px] uppercase font-bold text-zinc-900 rounded-tl m-0">
                                Về Chúng Tôi
                            </p>
                        </div>
                        <ul>
                            <li className="mb-2 text-sm text-white">
                                <LocationOnIcon className="mr-4 !text-xl"/>
                                Mộ Lao, Hà Đông, Hà Nội
                            </li>
                            <li className="mb-2 text-sm text-white">
                                <PhoneEnabledIcon className="mr-4 !text-xl"/>
                                0372935118
                            </li>
                            <li className="mb-2 text-sm text-white hover:text-cyan-400 cursor-pointer">
                                <EmailIcon className="mr-4 !text-xl"/>
                                hieu140084@gmail.com
                            </li>
                        </ul>
                        <ul className="flex">
                            <li className="mb-2">
                                <a 
                                    href="/"
                                    className="w-8 h-8 text-xl bg-zinc-900 border-solid border-[1px] border-zinc-900 rounded-sm mr-1 flex justify-center items-center  hover:border-white"
                                >
                                    <FacebookIcon/>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a 
                                    href="/"
                                    className="w-8 h-8 text-xl bg-zinc-900 border-solid border-[1px] border-zinc-900 rounded-sm mr-1 flex justify-center items-center hover:border-white "
                                >
                                    <InstagramIcon/>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a 
                                    href="/"
                                    className="w-8 h-8 text-xl bg-zinc-900 border-solid border-[1px] border-zinc-900 rounded-sm mr-1 flex justify-center items-center  hover:border-white"
                                >
                                    <YouTubeIcon/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex-footer px-4 mobi:mb-2'>
                        <div className="mb-4 border-b-2 border-solid border-b-white">
                            <p className="text-base bg-white inline-block px-[15px] py-[5px] uppercase font-bold text-zinc-900 rounded-tl m-0">
                                Fanpage
                            </p>
                        </div>
                        <div>
                            <span>
                                <iframe title="fanpage" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fkocovandon%2F&tabs=timeline&width=255px&height=150px&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" width="255px" height="150px" style={{border:"none",overflow:"hidden"}} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                            </span>
                        </div>
                    </div>
                    <div className='flex-footer px-4'>
                        <div className="mb-4 border-b-2 border-solid border-b-white">
                            <p className="text-base bg-white inline-block px-[15px] py-[5px] uppercase font-bold text-zinc-900 rounded-tl m-0">
                                Địa chỉ
                            </p>
                        </div>
                        <div>
                            <span>
                                <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.2373004375027!2d105.78329501476247!3d20.983122786023145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135accc5d942527%3A0x58c36449a85646df!2zMTY3IFAuIE5ndXnhu4VuIFbEg24gVHLhu5dpLCBQLiBN4buZIExhbywgSMOgIMSQw7RuZywgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1648457166513!5m2!1svi!2s" width="225px" height="150px" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer