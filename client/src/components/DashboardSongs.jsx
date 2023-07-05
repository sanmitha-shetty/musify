import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { IoAdd, IoPause, IoPlay, IoTrash } from "react-icons/io5";
import { AiOutlineClear } from "react-icons/ai";
import {actionType} from "../context/reducer"
import { getAllSongs } from '../api';
import SongCard from './SongCard';

const DashboardSongs = () => {
  const [songFilter, setsongFilter] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [{ allSongs }, dispatch] = useStateValue();

  useEffect(() => {
    if (!allSongs) {
      getAllSongs().then((data) => {
        console.log(data.song)
        dispatch({
          type: actionType.SET_ALL_SONGS,
          allSongs: data.song,
        });
      });
    }
  }, []);

  return (
    <div className="w-full p-4 flex items-center justify-center flex-col">
      <div className="w-full flex justify-center items-center gap-20">
        <NavLink to={"/dashboard/newSong"}
          className="flex items-center px-4 py-3 border  rounded-md border-gray-300 hover:border-gray-400 hover:shadow-md cursor-pointer">
            <IoAdd />
        </NavLink>

        <input
          type="text"
          placeholder="Search here"
          className={`w-52 px-4 py-2 border ${
            isFocus ? "border-gray-500 shadow-md" : "border-gray-300"
          } rounded-md bg-transparent outline-none duration-150 transition-all ease-in-out text-base text-textColor font-semibold`}
          value={songFilter}
          onChange={(e) => setsongFilter(e.target.value)}
          onBlur={() => setIsFocus(false)}
          onFocus={() => setIsFocus(true)}
        />

        <i>
          <AiOutlineClear className="text-3xl text-textColor cursor-pointer" />
        </i>
        
      </div>
      {/* Main container */}
      <div className="relative w-full  my-4 p-4 
      py-16 border border-gray-300 rounded-md">

          {/* The count */}
          <div className="absolute top-4 left-4">
          <p className="text-xl font-bold">
            <span className="text-sm font-semibold text-textColor">
              Count :{" "}
            </span>
            {allSongs?.length}
          </p>
          </div>
          
          <SongContainer  data={allSongs}/>

      </div>
    </div>
  )
};

export const SongContainer = ({ data }) => {
  return (
    <div className=" w-full flex flex-wrap gap-3  items-center justify-evenly">
      {data &&
        data.map((song, i) => (
          <SongCard
          key={song._id} data={song} index={i}  type="song"
          />
        ))}
    </div>
  );
};

export default DashboardSongs;