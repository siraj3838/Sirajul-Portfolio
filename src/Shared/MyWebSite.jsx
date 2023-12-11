
import "./website.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { Link } from "react-router-dom";
const MyWebSite = () => {
    return (
        <div className="bg-[#112e42] max-w-screen-2xl mx-auto overflow-hidden py-9" id="projects">
            <h2 className="heading">My <span>Projects</span></h2>
            <div className="portfolio" id="portfolio">


                {/* slider */}
                <Swiper
                    spaceBetween={20}
                    slidesPerView={2}
                    grabCursor={true}
                    className="portfolio-slider"
                >
                    <SwiperSlide>
                        <div>
                            <div className="flex items-center gap-5">
                                <div className="mr-10">
                                    <img className="image w-[500px]" src="https://i.ibb.co/8dVf8dS/screencapture-mgi-inventory-manage-web-app-2023-12-11-22-51-58.png" alt="" />
                                </div>
                                <div className="lg:space-y-4 space-y-1 pr-16">
                                    <h2 className="text-3xl font-semibold mb-16">Inventory Management</h2>
                                    <p className="text-xl text-gray-400"><span>●</span> I have used mongoDB in the back-end to <br /> store the information of this web site.</p>
                                    <p className="text-xl text-gray-400"><span>●</span> I have used TanStack Query in Front End <br /> to present back end data faster on this web site.</p>
                                    <p className="text-xl text-gray-400"><span>●</span> I have used JavaScript for discount and <br /> quantity calculation on this website.</p>
                                </div>
                            </div>
                            <div className="flex justify-center my-5">
                                <Link to={'https://mgi-inventory-manage.web.app'}>
                                    <button className="bg-[#00abf0] text-2xl text-gray-800 font-semibold py-2 px-2 rounded-md">Visit Website</button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className="flex items-center gap-5">
                                <div className="">
                                    <img className="image w-[500px]" src="https://i.ibb.co/4mZ5xG1/screencapture-retail-e-commerce-based-web-app-2023-12-11-22-53-09.png" alt="" />
                                </div>
                                <div className="space-y-4 pr-16">
                                    <h2 className="text-3xl font-semibold mb-16">Retail-E-Commerce</h2>
                                    <p className="text-xl text-gray-400"><span>●</span> Added functionality to publish any product <br /> on this web site.</p>
                                    <p className="text-xl text-gray-400"><span>●</span> To store all the information in the database, <br /> I have stored the information in MongoDB with <br /> axios at the font-end.</p>
                                    <p className="text-xl text-gray-400"><span>●</span> I have created the functionality that specific <br /> user can update and delete his data.</p>
                                </div>
                            </div>
                            <div className="flex justify-center my-5">
                                <Link to={'https://retail-e-commerce-based.web.app'}>
                                    <button className="bg-[#00abf0] text-2xl text-gray-800 font-semibold py-2 px-2 rounded-md">Visit Website</button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className="flex items-center gap-5">
                                <div className="">
                                    <img className="image w-[500px]" src="https://i.ibb.co/2FjGJTM/screencapture-libary-manage-web-app-2023-12-11-22-53-53.png" alt="" />
                                </div>
                                <div className="space-y-4 pr-16">
                                    <h2 className="text-3xl font-semibold mb-16">Library Management</h2>
                                    <p className="text-xl text-gray-400"><span>●</span> Swiper js and active feedback functionality have <br /> been added to this website</p>
                                    <p className="text-xl text-gray-400"><span>●</span> Added functionality that specific user cannot borrow <br /> more than one same book.</p>
                                    <p className="text-xl text-gray-400"><span>●</span> I have used jwt in this project so that all user <br /> information is secure.</p>
                                </div>
                            </div>
                            <div className="flex justify-center my-5">
                                <Link to={'https://libary-manage.web.app'}>
                                    <button className="bg-[#00abf0] text-2xl text-gray-800 font-semibold py-2 px-2 rounded-md">Visit Website</button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className="flex items-center gap-5">
                                <div className="">
                                    <img className="image w-[500px]" src="https://i.ibb.co/DWGPK5R/screencapture-localhost-5174-2023-12-11-22-59-34.png" alt="" />
                                </div>
                                <div className="space-y-4 pr-16">
                                    <h2 className="text-3xl font-semibold mb-16">GYM Ster</h2>
                                    <p className="text-xl text-gray-400"><span>●</span> In this project of mine you will get fitness support from <br /> our classes.If you want, you can apply to be a fitness <br /> trainer yourself.</p>
                                    <p className="text-xl text-gray-400"><span>●</span>In this project I have used react js in frontend and used <br /> Tailwind and Daisy ui for beauty.</p>
                                    <p className="text-xl text-gray-400"><span>●</span> The project is in progress and more will be added soon.</p>
                                </div>
                            </div>
                            <div className="flex justify-center my-5">
                                <Link to={'https://fitness-trainer-7611e.web.app'}>
                                    <button className="bg-[#00abf0] text-2xl text-gray-800 font-semibold py-2 px-2 rounded-md">Visit Website</button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default MyWebSite;