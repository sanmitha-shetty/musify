import React from 'react'
import { motion } from "framer-motion";
import { IoTrash } from 'react-icons/io5';

const SongCard = ({data, index}) => {
  return (
    <motion.div  
    className="relative w-40 min-w-210 px-2 py-4 cursor-pointer hover:shadow-xl hover:bg-card bg-gray-100 shadow-md rounded-lg flex flex-col items-center"
    >
        <div className="w-40 min-w-[160px] h-40 min-h-[160px] rounded-lg drop-shadow-lg relative overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.05 }}
          src={data.imageURL}
          className=" w-full h-full rounded-lg object-cover"
        />
        </div>

        <p className="text-base text-center text-headingColor font-semibold my-2">
        {data.name.length > 25 ? `${data.name.slice(0, 25)}..` : data.name}
            {data.artist && (
              <span className="block text-sm text-gray-400 my-1">
              {data.artist.length > 25 ? `${data.artist.slice(0, 25)}..` : data.artist}
              </span>
            )}
      </p>

      <div className="w-full absolute bottom-2 right-2 flex items-center justify-between px-4">
        <motion.i whileTap={{ scale: 0.75 }}>
            <IoTrash className="text-base text-red-400 drop-shadow-md hover:text-red-600"/>
        </motion.i>
      </div>

    </motion.div>
  );
};

export default SongCard