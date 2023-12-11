import '../index.css'
const Navbar = () => {
    return (
        <>
            <div id='home' className='max-w-screen-2xl mx-auto'>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <nav tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 space-y-4">
                                <a href="#home" className="active">Home</a>
                                <a href="#about">About</a>
                                <a href="#projects">My Projects</a>
                                <a href="#education">Education</a>
                                <a href="#skills">Skills</a>
                                <a href="#contact">Contact</a>
                            </nav>
                        </div>
                    </div>
                    <div className="lg:navbar-start hidden lg:flex max-w-screen-2xl mx-auto">
                        <nav className="menu menu-horizontal px-1 navbar">
                            <a href="#home" className="active">Home</a>
                            <a href="#about">About</a>
                            <a href="#projects">My Projects</a>
                            <a href="#education">Education</a>
                            <a href="#skills">Skills</a>
                            <a href="#contact">Contact</a>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;