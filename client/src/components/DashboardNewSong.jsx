import React, { useEffect, useRef, useState } from "react";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";
import { motion } from "framer-motion";

import { BiCloudUpload } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

import { storage } from "../config/firebase.config";
import { useStateValue } from "../context/StateProvider";
/* import FilterButtons from "./FilterButtons"; */
import {
  getAllAlbums,
  getAllArtist,
  getAllSongs,
  saveNewAlbum,
  saveNewArtist,
  saveNewSong,
} from "../api";
import { actionType } from "../context/reducer";
/* import { filterByLanguage, filters } from "../utils/supportfunctions"; */
/* import AlertSuccess from "./AlertSuccess"; */
/* import AlertError from "./AlertError"; */


const DashboardNewSong = () => {
    const [songName, setsongName] = useState("");

  return (
    <div className="flex flex-col items-center justify-center p-4 border border-gray-300 rounded-md"> 
    <input type="text"
            placeholder="Type your song name.."
            className="w-full p-3 rounded-md text-base font-semibold text-textColor outline-none shadow-sm border border-gray-300 bg-transparent"
            value={songName}
            onChange={(e) => setsongName(e.target.value)} />
    </div>
  )
}

export default DashboardNewSong