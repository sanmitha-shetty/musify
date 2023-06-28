const router = require("express").Router();

//Our album schema model
const album = require("../models/album");

//Add Album
router.post("/save", async (req, res) => {
    
    const newAlbum = album({
        name: req.body.name,
        imageURL: req.body.imageURL,
      });

      try {
        const savedAlbum = await newAlbum.save();
        res.status(200).send({success : true, album: savedAlbum });
      } catch (error) {
        res.status(400).send({ success: false, msg: error });
      }
});

//Find One Album
router.get("/getOne/:id", async (req, res) => {
    const filter = { _id: req.params.id };
  
    const data = await album.findOne(filter);
  
    if (data) {
      return res.status(200).send({ success: true, album: data });
    } else {
     return res.status(400).send({ success: false, msg: "No Data Found" });
    }
  });

module.exports = router