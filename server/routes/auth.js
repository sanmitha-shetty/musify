const router = require("express").Router();
const admin = require("../config/firebase.config");

router.get("/login", async (req, res) => {
    if (!req.headers.authorization) {
      return res.status(500).send({ message: "Invalid Token" });
    }
    const token = req.headers.authorization.split(" ")[1];
    try{
        const decodeValue = await admin.auth().verifyIdToken(token);
        if (!decodeValue) {
            return res.status(500).json({ message: "Un Authorize" });
        }else{
            return res.status(200).json(decodeValue)
        }

    } catch(error){
        return res.status(505).json({message : error})
    }
})

module.exports = router;