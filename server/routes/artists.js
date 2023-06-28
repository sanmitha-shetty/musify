const router = require("express").Router();

//Our artist schema model
const artist = require("../models/artist");

 //Add Artist
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

//Find One Artist
router.get("/getOne/:id", async (req, res) => {
    const filter = { _id: req.params.id };
  
    const data = await artist.findOne(filter);
  
    if (data) {
      return res.status(200).send({ success: true, artist: data });
    } else {
     return res.status(400).send({ success: false, msg: "No Data Found" });
    }
  });

//Find All Artists
router.get("/getAll", async (req, res) =>{
    const options ={ 
        sort: ({
            createdAt: 1 
        }),
    };
    //options didnt work
    const data = await artist.find().sort( { createdAt: 1 } )
    if (data) {
       return res.status(200).send({ success: true, artist: data });
      } else {
        return res.status(400).send({ success: false, msg: "No Data Found" });
      }

});

//Delete Artist
router.delete("/delete/:id", async (req, res) => {
  const filter = {_id: req.params.id};

 const result = await artist.deleteOne(filter);
 if (result) {
       return res.status(200).send({ success: true, msg: "Data deleted successfully", data: result });
      } else {
        return res.status(400).send({ success: false, msg: "No Data Found" });
      }
})

//Update Artist
router.put("/update/:id", async (req, res) =>{

  const filter = { _id: req.params.id };
  const options = {
    upsert: true,
    new: true,
  };

  try {
   const result = await artist.findOneAndUpdate(filter, 
    {
      name: req.body.name,
      imageURL: req.body.imageURL,
      twitter: req.body.twitter,
      instagram: req.body.instagram,
    }, 
    options);

    return res.status(200).send({success: true, data: result});
  } catch (error) {
    return res.status(400).send({ success: false, msg: error });
  }
});

module.exports = router;