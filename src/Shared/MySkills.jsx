
const MySkills = () => {
    return (
        <>
            <section className="skills" id="skills">
                <h2 className="heading">My <span>Skills</span></h2>
                <div className="skills-row">

                    <div className="skills-column">
                        <h3 className="title">Front-End Skills</h3>
                        <div className="flex items-center ml-8">
                            <h4 className="text-6xl text-yellow-500 font-bold">JS</h4>
                            <img className="w-32" src="https://i.ibb.co/tzFsZkk/maxresdefault-4-removebg-preview.png" alt="" />
                            <img className="w-20" src="https://i.ibb.co/ThqmHbM/images-7-removebg-preview-2.png" alt="" />
                            <img className="w-[60px]" src="https://i.ibb.co/z86dvRV/favicon-192-removebg-preview.png" alt="" />

                        </div>
                        <div className="flex gap-2 items-center ml-20 mt-1">
                            <img className="w-20" src="https://i.ibb.co/wdmw9tW/download-7-removebg-preview.png" alt="" />
                            <img className="w-[55px]" src="https://i.ibb.co/6ZDB8vh/800px-HTML5-Badge-svg-removebg-preview.png" alt="" />
                            <img className="w-[60px]" src="https://i.ibb.co/jzV08gH/CSS3-logo-svg-removebg-preview.png" alt="" />
                        </div>
                        <div className="flex gap-2 items-center -mt-10">
                            <img className="w-40 -ml-5" src="https://i.ibb.co/0C13ZRc/download-10-removebg-preview.png" alt="" />
                            <img className="w-80 -ml-5" src="https://i.ibb.co/6HWrh7C/Screenshot-2023-12-11-153925-removebg-preview.png" alt="" />
                        </div>

                        <p className="text-2xl pr-36">I use React Js to build the front-end structure and use Tailwind library for design and also use Daisy UI Component library for user comfort viewing. Use axios for data fetch in front-end and use TanStack Query to present data faster.</p>

                    </div>

                    <div className="skills-column">
                        <h3 className="title">Back-End Skills</h3>
                        <div className="flex items-center">
                            <img className="w-32" src="https://i.ibb.co/JxbGpfD/1443988-1-removebg-preview.png" alt="" />
                            <img className="w-64" src="https://i.ibb.co/t3XDwLc/png-transparent-web-development-express-js-javascript-software-framework-laravel-world-wide-web-purp.png" alt="" />
                            <img className="w-64" src="https://i.ibb.co/1dKw2Vp/Screenshot-2023-12-11-152652-removebg-preview-1.png" alt="" />
                        </div>
                        <div className="ml-44">
                            <img className="w-48" src="https://i.ibb.co/qR1TKvn/Screenshot-2023-12-11-154819-removebg-preview.png" alt="" />
                        </div>
                        <p className="text-2xl pr-36 mt-16">I use MongoDB for the back-end server. I use Node js for CRUD operations. After the Api collects all the data, it is necessary to verify the data that is needed. In this case I use JSON web token so that the API can be kept secure. Because it is a standard format that is used to securely transfer information between the two parties.</p>

                    </div>

                </div>
            </section>
        </>
    );
};

export default MySkills;