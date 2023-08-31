import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Front-End & Back-End ",
    description:
      "Crafting user interfaces with React, HTML, CSS, and Bootstrap? I'm all about making things visually appealing. On the back-end, I work with Node.js and Express, and I'm exploring how to handle databases like MongoDB",
  },
  {
    name: "Collaborative Coding",
    description:
      "Git is my tool for collaborative coding and keeping track of project versions. Working in teams and facilitating communication among different roles? I'm all ears.",
  },
  {
    name: "Ethereum Enthusiast",
    description:
      "I've caught the Solidity bug! While I'm not a pro (yet!), I'm passionate about creating smart contracts and exploring their potential. Working with Truffle and Remix, I'm learning the ropes of building, testing, and deploying Ethereum contracts.",
  },
  {
    name: "Problem-Solving Explorer",
    description:
      "I thrive on challenges and love diving into complex problems to uncover creative solutions. Designing software systems that are efficient, modular, and maintainable? Count me in..",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="flex-1  lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            {/* <h3 className="h3 max-w-[455px] mb-16">
              I'm a Full-Stack Developer with over 2 years of experience.
            </h3> */}
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="flex-1"
          >
            {/* service list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[166px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      {/* <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a> */}
                      {/* <a href="#" className="text-gradient text-sm">
                        
                      </a> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
