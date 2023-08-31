import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  // const [messageSent, setMessageSent] = useState(false);

  const notify = () => {
    toast.success("🤝 Thanks for Reaching Out!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("window");
    // setMessageSent(true);

    emailjs
      .sendForm(
        "service_8rc35eu",
        "template_nu15x2u",
        form.current,
        "z3L5LVQCVHaEk8SOo"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            ref={form}
            onSubmit={sendEmail}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your name"
              name="user_name"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="email"
              placeholder="Your email"
              name="user_email"
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your message"
              name="message"
            ></textarea>
            <button onClick={notify} className="btn btn-lg">
              Send message
            </button>
            <ToastContainer />
          </motion.form>
          {/* {messageSent && (
            <div className="flex-1 flex justify-center items-center">
              <div
                className="bg-green-100 border border-purple-500 text-purple-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <p className="font-bold">Message Sent!</p>
                <p>Your message has been successfully sent.</p>
                <button
                  className="text-black mt-3"
                  onClick={() => setMessageSent(false)} // Reset messageSent when the user clicks OK
                >
                  OK
                </button>
              </div>
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
