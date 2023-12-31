const router = require("express").Router();

//Our Song Schema
const song = require("../models/song");

//Add Song
router.post("/save", async (req, res) => {
    
    const newSong = song({
        name: req.body.name,
        imageURL: req.body.imageURL,
        songUrl: req.body.songUrl,
        album: req.body.album,
        artist: req.body.artist,
        language: req.body.language,
        category: req.body.category,
        
      });
      try {
        const savedSong = await newSong.save();
        res.status(200).send({success : true, song: savedSong });
      } catch (error) {
        res.status(400).send({ success: false, msg: error });
      }
});

//Find One Song
router.get("/getOne/:id", async (req, res) => {
    const filter = { _id: req.params.id };
  
    const data = await song.findOne(filter);
  
    if (data) {
      return res.status(200).send({ success: true, song: data });
    } else {
     return res.status(400).send({ success: false, msg: "No Data Found" });
    }
  });

//Find All Songs
router.get("/getAll", async (req, res) =>{
    const options ={ 
        sort: ({
            createdAt: 1 
        }),
    };
    //options didnt work
    const data = await song.find().sort( { createdAt: 1 } )
    if (data) {
       return res.status(200).send({ success: true, song: data });
      } else {
        return res.status(400).send({ success: false, msg: "No Data Found" });
      }

});

//Update Song
router.put("/update/:id", async (req, res) =>{

    const filter = { _id: req.params.id };
    const options = {
      upsert: true,
      new: true,
    };
  
    try {
     const result = await song.findOneAndUpdate(filter, 
      {
        name: req.body.name,
        imageURL: req.body.imageURL,
        songUrl: req.body.songUrl,
        album: req.body.album,
        artist: req.body.artist,
        language: req.body.language,
        category: req.body.category,
      }, 
      options);
  
      return res.status(200).send({success: true, data: result});
    } catch (error) {
      return res.status(400).send({ success: false, msg: error });
    }
  });
  
//Delete Song
router.delete("/delete/:id", async (req, res) => {
const filter = {_id: req.params.id};

const result = await song.deleteOne(filter);
if (result) {
        return res.status(200).send({ success: true, msg: "Data deleted successfully", data: result });
    } else {
        return res.status(400).send({ success: false, msg: "No Data Found" });
    }
});

module.exports = router