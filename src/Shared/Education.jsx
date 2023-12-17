import '../index.css'
const Education = () => {
    return (
        <>
            <section className="education bg-[#081b29]" id="education">
                <h2 className="heading">My <span>Education & Experience</span></h2>

                <div className="education-row">

                    <div className="education-column">
                        <h3 className="title">Education</h3>
                        <div className="education-box">

                            <div className="education-content">
                                <div className="content">
                                    <div className="year"><i className='bx bxs-calendar'>2010 - 2013</i></div>
                                    <h3>JSC</h3>
                                    <p>I have given JSC from Dhaka AM International School And College. I got a 4.65 GPA there.</p>
                                </div>
                            </div>
                            <div className="education-content">
                                <div className="content">
                                    <div className="year"><i className='bx bxs-calendar'>2014 - 2016</i></div>
                                    <h3>SSC</h3>
                                    <p>I have given SSC from commerce. I graduated from Bidyakut Amar Bohumukhi High School with GPA 3.8.</p>
                                </div>
                            </div>
                            <div className="education-content">
                                <div className="content">
                                    <div className="year"><i className='bx bxs-calendar'>2017 - 2020</i></div>
                                    <h3>HSC</h3>
                                    <p>I passed HSC from Arts department. I passed out from Shivpur Sur Somtrat Alauddin Kha Degree College with GPA 4.25</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="education-column">
                        <h3 className="title">Experience</h3>
                        <div className="education-box">

                            <div className="education-content">
                                <div className="content">
                                    <div className="year"><i className='bx bxs-calendar'>2018 - 2019</i></div>
                                    <h3>Data Entry</h3>
                                    <p>I worked in Data Entry at Brahmanbaria BDIT Institute in 2018-19 and it was going on for about 6 months.</p>
                                </div>
                            </div>
                            <div className="education-content">
                                <div className="content">
                                    <div className="year"><i className='bx bxs-calendar'>2020 - 2021</i></div>
                                    <h3>Front-End Design</h3>
                                    <p>I did Frontend design course at BDIT Institute in 2020-21 and created 7 projects after 9 months of course there.</p>
                                </div>
                            </div>
                            <div className="education-content">
                                <div className="content">
                                    <div className="year"><i className='bx bxs-calendar'>2022 - 2023</i></div>
                                    <h3>Course</h3>
                                    <p>I enrolled in Complete Web development Course in Programming Hero in 2022-23 and it lasted for 6 months and I completed all the learning on time.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Education;