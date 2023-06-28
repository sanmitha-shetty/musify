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


  //Find All Albums
router.get("/getAll", async (req, res) =>{
    const options ={ 
        sort: ({
            createdAt: 1 
        }),
    };
    //options didnt work
    const data = await album.find().sort( { createdAt: 1 } )
    if (data) {
       return res.status(200).send({ success: true, album: data });
      } else {
        return res.status(400).send({ success: false, msg: "No Data Found" });
      }

});

//Update Album
router.put("/update/:id", async (req, res) =>{

    const filter = { _id: req.params.id };
    const options = {
      upsert: true,
      new: true,
    };
  
    try {
     const result = await album.findOneAndUpdate(filter, 
      {
        name: req.body.name,
        imageURL: req.body.imageURL,
      }, 
      options);
  
      return res.status(200).send({success: true, data: result});
    } catch (error) {
      return res.status(400).send({ success: false, msg: error });
    }
  });

  //Delete Album
router.delete("/delete/:id", async (req, res) => {
    const filter = {_id: req.params.id};
  
   const result = await album.deleteOne(filter);
   if (result) {
         return res.status(200).send({ success: true, msg: "Data deleted successfully", data: result });
        } else {
          return res.status(400).send({ success: false, msg: "No Data Found" });
        }
  })
module.exports = router