import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center py-8 bg-[#081b29] text-white">
                <div className="text-left text-2xl text-gray-400">
                    <p className="text-left ml-1 flex items-center gap-2"><MdOutlineMailOutline className="text-3xl"></MdOutlineMailOutline> Email: siraul.islam583853@gmail.com</p>
                    <p className="text-left mr-32 flex items-center gap-2"><FaPhoneAlt className="text-2xl"></FaPhoneAlt> Mobile: +8801741352039</p>
                </div>
                <aside>
                    <p className="text-2xl ">Copyright © 2023 - All right reserved by Sirajul Islam</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;