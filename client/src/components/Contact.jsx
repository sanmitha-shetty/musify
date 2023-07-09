import React, { useState } from "react";
import Header from "./Header";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-primary gap-6">
      <Header />
      <div className=" w-1/2 justify-center items-center flex flex-col p-6 gap-4 bg-card backdrop-blur-md rounded-md border-2 border-dotted border-gray-300 cursor-pointer">
        <p className="text-[40px] font-semibold text-[#ff5757] justify-center">
          Contact Here
        </p>
        <div className=" flex flex-col w-1/2 h-full justify-center items-center gap-4  ">
          <div className="  flex flex-row items-center gap-4 ">
            <p className="">Name: </p>
            <input
              name="name"
              type="text"
              placeholder=" Your Name"
              className="w-[350px] p-3 rounded-md text-base font-semibold text-textColor outline-none shadow-sm border border-gray-300 bg-transparent"
            />
          </div>

          <div className="  flex flex-row items-center gap-4 ">
            <p className="">Email: </p>
            <input
              name="email"
              type="text"
              placeholder=" Your Email Id"
              className="w-[350px] p-3 rounded-md text-base font-semibold text-textColor outline-none shadow-sm border border-gray-300 bg-transparent"
            />
          </div>

          <div className="  flex flex-row items-center gap-4 ">
            <p className="">Contact: </p>
            <input
              name="contact"
              type="text"
              placeholder=" Your Contact No."
              className="w-[350px] p-3 rounded-md text-base font-semibold text-textColor outline-none shadow-sm border border-gray-300 bg-transparent"
            />
          </div>

          <div className="  flex flex-row  gap-4 ">
            <p className=" p-0.5">Message: </p>
            <textarea
              name="message"
              type="text"
              placeholder=" Write to us here.."
              cols="38"
              rows="5"
              className="w-[100 px] p-3 rounded-md text-base font-semibold text-textColor outline-none shadow-sm border border-gray-300 bg-transparent"
            />
          </div>
          <div className="  flex flex-row  gap-4 ">
            <motion.button
              whileTap={{ scale: 0.75 }}
              className="px-8 py-2 rounded-md text-white bg-red-600 hover:shadow-lg"
            >
              Submit
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
