import About from "../Shared/About";
import Banner from "../Shared/Banner";
import Education from "../Shared/Education";
import Footer from "../Shared/Footer";
import MySkills from "../Shared/MySkills";
import Navbar from "../Shared/Navbar";

const Home = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <div className="bg-[#081b29]">
                <Navbar></Navbar>
                <Banner></Banner>
            </div>
            <About></About>
            <Education></Education>
            <MySkills></MySkills>
            <Footer></Footer>
        </div>
    );
};

export default Home;