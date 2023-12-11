import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaLevelUpAlt } from "react-icons/fa";

const ContactUs = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_a0mdvpo', 'template_juqabph', form.current, 'j5sszaitvOpKkBPD8')
          .then((result) => {
              console.log(result.text);
              toast.success('Thank You For Contact')
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <div id="contact" className="bg-slate-800 max-w-screen-2xl mx-auto py-10">
            <Toaster />
            <h2 className="heading">Contact <span>Us</span></h2>
            <form ref={form} onSubmit={sendEmail} className="max-w-3xl mx-auto border-4 border-gray-300 space-y-6">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-gray-400 text-3xl">Your Name</span>
                    </label>
                    <input type="text" name="user_name" placeholder="Full Name Here" className="input input-bordered border-2 border-base-300 w-full text-2xl text-black" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-gray-400 text-3xl">Your Email</span>
                    </label>
                    <input type="email" name="user_email" placeholder="Email Here" className="input input-bordered border-2 border-base-300 text-black w-full text-2xl" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-gray-400 text-3xl">Type Message</span>
                    </label>
                    <textarea className="rounded-md  text-2xl p-2 text-black" placeholder="Type Somethings" name="message" id="" cols="30" rows="7"></textarea>
                </div>
                <input type="submit" value="Send" className="bg-[#00abf0] text-2xl text-gray-800 font-semibold py-2 px-2 rounded-md w-full" />
            </form>
            <div className='flex justify-end lg:px-40'>
                <a href="#home" className="bg-[#00abf0] text-2xl text-gray-800 font-semibold py-4 px-5 rounded-md"><FaLevelUpAlt className='text-4xl'></FaLevelUpAlt></a>
            </div>
        </div>
    );
};

export default ContactUs;