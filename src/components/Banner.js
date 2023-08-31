import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className=" min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container  mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary ">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              <span className=""> ABDULLAH </span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={["Developer", 2000, "Designer", 2000, "Trader", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="mb-8 max-w-lg mx-auto "
            >
              Hey there! I'm a full-stack software developer who's absolutely
              intrigued by blockchain technology. From the moment I started
              coding, I've been all about turning concepts into tangible
              software.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              {/* <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Resume
              </a> */}
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto "
            >
              <a href="https://www.linkedin.com/in/abdullah-abutaleb/">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Abdullah3at">
                <FaGithub />
              </a>
              <a href="https://twitter.com/0xAbdull">
                <FaTwitter />
              </a>
            </motion.div>
          </div>
          {/* image */}
          {/* <motion.div
              variants={fadeIn("down", 0.5)}
              initial="hidden"
              whileInView={"show"}
              className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
            >
              <img src={Image} alt="" />
            </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Banner;
