import '../index.css'
const Banner = () => {
    return (
        <>
            <div className='min-h flex flex-col-reverse md:flex-row md:justify-center p-5'>
                <div>
                    <div className="home-content">
                        <h1>Hi, I'm <span>Sirajul Islam</span></h1>
                        <div className="text-animate">
                            <h3>MERN Stack Developer</h3>
                        </div>
                        <p className='text-gray-400'>I am MERN Stack Developer, I am comfortable working with React JavaScript. I have knowledge of problem solving. I am None CSE background but I like Coding more. I am happy to complete my work. I value my work on time. I enjoy coding more than wasting time.</p>
                        <div className="btn-box">
                            <a href="#" className="btn">Download My Resume</a>
                        </div>
                    </div>
                    <div className="home-sci">
                        <a href="#"><i className='bx bxl-facebook'></i></a>
                        <a href="#"><i className='bx bxl-whatsapp'></i></a>
                        <a href="#"><i className='bx bxl-linkedin'></i></a>
                    </div>
                </div>
                <div className='mt-24'>
                    <img className='w-full' src="https://i.ibb.co/8zyM56C/393177808-6918236598259935-4058257208839663921-n-removebg-preview-1.png" alt="" />
                </div>
            </div>
        </>
    );
};

export default Banner;