import axios from "axios";

const baseURL = "http://localhost:4000/";

// Validate Users
export const validateUser = async (token) => {
    try {
        const res = await axios.get(`${baseURL}api/users/login`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        return res.data;
      } catch (error) {
        return null;
      }
}

//Fetch All Users
export const getAllUsers = async () => {
  try {
    const res = await axios.get(`${baseURL}api/users/getUsers`);
    return res.data;
  } catch (error) {
    return null;
  }
};
//Fetch All Artists
export const getAllArtists = async () => {
  try {
    const res = await axios.get(`${baseURL}api/artists/getAll`);
    return res.data;
  } catch (error) {
    return null;
  }
};

//Fetch All Albums
export const getAllAlbums = async () => {
  try {
    const res = await axios.get(`${baseURL}api/albums/getAll`);
    return res.data;
  } catch (error) {
    return null;
  }
};

//Fetch All Songs
export const getAllSongs = async () => {
  try {
    const res = await axios.get(`${baseURL}api/songs/getAll`);
    return res.data;
  } catch (error) {
    return null;
  }
};