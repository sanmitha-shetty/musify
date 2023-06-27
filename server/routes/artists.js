const router = require("express").Router();

//Our artist schema model
const artist = require("../models/artist");

router.post("/save", async (req, res) => {
    
    const newArtist = artist({
        name: req.body.name,
        imageURL: req.body.imageURL,
        twitter: req.body.twitter,
        instagram: req.body.instagram,
      });
      try {
        const savedArtist = await newArtist.save();
        res.status(200).send({success : true, artist: savedArtist });
      } catch (error) {
        res.status(400).send({ success: false, msg: error });
      }
});

module.exports = router;