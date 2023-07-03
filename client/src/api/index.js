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

//Update user role
export const changingUserRole = async (userId, role) => {
  try {
    const res = axios.put(`${baseURL}api/users/updateRole/${userId}`, {
      data: {role: role}  
    } );
    return res;
  } catch (error) {
    return null;
  }
}

//Delete User
export const removeUser = async(userId) =>{
  try {
    const res = axios.delete(`${baseURL}api/users/deleteUser/${userId}`);
    return res;
  } catch (error) {
    return null;
  }
}

//Save new song
export const saveNewSong = async (data) => {
  try {
    const res = axios.post(`${baseURL}api/songs/save`, { ...data });
    return (await res).data.savedSong;
  } catch (error) {
    return null;
  }
};

