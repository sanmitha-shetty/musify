const express = require("express");
const app = express();
require("dotenv/config")

const cors = require("cors");
const {default: mongoose} = require("mongoose");

app.use(cors({origin : true}));
app.use(express.json());

app.get("/", (req, res) => {
    return res.json("Hi there...")
})

//User authentication Route
const userRoute = require("./routes/auth");
app.use("/api/users", userRoute);

// Artist Routes
const artistsRoute = require("./routes/artists");
app.use("/api/artists/", artistsRoute);

// Album Routes
const albumRoute = require("./routes/albums");
app.use("/api/albums/", albumRoute);

// Songs Routes
const songRoute = require("./routes/songs");
app.use("/api/songs/", songRoute);

mongoose.connect(process.env.DB_STRING, {useNewUrlParser: true});
mongoose.connection
.once("open", () => console.log("Connected"))
.on("error", (error) =>{
    console.log(`ERROR: ${error}`);
})

app.listen(4000, () => console.log("Listening to port 4000"));
