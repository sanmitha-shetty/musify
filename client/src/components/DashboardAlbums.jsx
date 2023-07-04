import React, { useEffect } from 'react'
import { getAllAlbums } from '../api';
import { actionType } from '../context/reducer';
import SongCard from './SongCard';
import { useStateValue } from '../context/StateProvider';

const DashboardAlbums = () => {
  const [{ allAlbums }, dispatch] = useStateValue();
  useEffect(() => {
    if(!allAlbums){
      getAllAlbums().then ((data) => {
        dispatch({
          type: actionType.SET_ALL_ALBUMS,
          allAlbums: data.album,
        })
      })
    }
  }, []);

  return (
    <div className="w-full p-4 flex items-center justify-center flex-col">
        {/* Main container */}
        <div className="relative w-full  my-4 p-4 
        py-16 border border-gray-300 rounded-md">
          <AlbumContainer  data={allAlbums}/>

      </div>
    </div>
  )
}

export const AlbumContainer = ({ data }) => {
  return (
    <div className=" w-full flex flex-wrap gap-3  items-center justify-evenly">
      {data &&
        data.map((song, i) => (
          <SongCard
          key={song._id} data={song} index={i} 
          />
        ))}
    </div>
  );
};

export default DashboardAlbums