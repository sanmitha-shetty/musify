import React from 'react';
import {BsEmojiWink} from "react-icons/bs";
import { BsEmojiFrown } from "react-icons/bs";
import { motion } from "framer-motion";

const Alert = ({type}) => {
  return (
    <motion.div 
        initial={{ opacity: 0, y: -100, scale: 0.6 }}
        animate={{ opacity: 1, y: 50, scale: 1 }}
        exit={{ opacity: 0, y: -100, scale: 0.6 }}
        key={type}
        className={`fixed top-12 right-12 p-4
     rounded-md backdrop-blur-md flex items-center justify-center shadow-xl 
    ${type === "success" && "bg-green-200"}
    ${type === "danger" && "bg-red-200"}`}>
        {type === "success" && (
            <div className='flex items-center justify-center gap-4'>
                <BsEmojiWink className='text-3xl texr-primary'/>
                <p className='text-xl font-semibold text-black '>Data Saved!</p>
            </div>
        ) }
        {type === "danger" && (
            <div className='flex items-center justify-center gap-4'>
                <BsEmojiFrown className='text-3xl texr-primary'/>
                <p className='text-xl font-semibold text-black '>Something went wrong.</p>
            </div>
        ) }
    </motion.div>
  )
}

export default Alert