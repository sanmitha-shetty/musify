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

import {
  getAllAlbums,
  getAllArtists,
  getAllSongs,
  saveNewAlbum,
  saveNewArtist,
  saveNewSong,
} from "../api";
import { actionType } from "../context/reducer";
import FilterButtons from "./FilterButtons";
import { filterByLanguage, filters } from "../utilis/supportfunctions";
/* import AlertSuccess from "./AlertSuccess"; */
/* import AlertError from "./AlertError"; */


const DashboardNewSong = () => {
    const [songName, setsongName] = useState("");
    const [songImageCover, setsongImageCover] = useState(null)
    const [isImageLoading, setisImageLoading] = useState(false);
    const [imageUploadProgress, setimageUploadProgress] = useState(0)

    const [{allArtists, allAlbums}, dispatch] = useStateValue();

    useEffect(() => {
        if (!allArtists) {
          getAllArtists().then((data) => {
            dispatch({
                 type: actionType.SET_ALL_ARTISTS, allArtists: data.artist 
                });
          });
        }
    
        if (!allAlbums) {
          getAllAlbums().then((data) => {
            dispatch({ 
                type: actionType.SET_ALL_ALBUMS, allAlbums: data.album 
            });
          });
        }
      }, []);

  return (
    <div className="flex flex-col items-center justify-center p-4 border border-gray-300 rounded-md gap-4"> 
      <input type="text"
              placeholder="Type your song name.."
              className="w-full p-3 rounded-md text-base font-semibold text-textColor outline-none shadow-sm border border-gray-300 bg-transparent"
              value={songName}
              onChange={(e) => setsongName(e.target.value)}
      />

      <div className="flex w-full justify-between flex-wrap items-center gap-4">
          <FilterButtons filterData ={allArtists} flag={"Artist"}/>
          <FilterButtons filterData ={allAlbums} flag={"Albums"}/>
          <FilterButtons filterData ={filterByLanguage } flag={"Language"}/>
          <FilterButtons filterData ={filters} flag={"Category"}/>

        </div>


      <div className="bg-card backdrop-blur-md w-full h-300 rounded-md border-2 border-dotted border-gray-300 cursor-pointer"> 
        {isImageLoading && <FileLoader progress ={imageUploadProgress} />}
        {!isImageLoading && (
          <>
            {!songImageCover ? (
              <FileUploader updateState ={setsongImageCover} setProgress = {setimageUploadProgress} />
            ) : (
                <div></div>
            )}
          </>
        )}

      </div>

    </div>
  )
}

export const FileLoader =({progress}) =>{
  return(
    <div className="w-full h-full flex flex-col items-center justify-center">
      <p className="text-xl font-semibold text-textColor">
        {Math.round(progress) > 0 && 
        <>{`${Math.round(progress)}%`}</>}
      </p>
      <div className="w-20 h-20 min-w-[40px] bg-red-600  animate-ping  rounded-full flex items-center justify-center relative">
        <div className="absolute inset-0 rounded-full bg-red-600 blur-xl "></div>
      </div>
    </div>
  )
}

export const FileUploader =({}) =>{
  return <div></div>
}

export default DashboardNewSong