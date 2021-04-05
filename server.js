const express = require("express");
const mongoose = require("mongoose");

const allRoutes = require("./routes")

const app = express();
const PORT = process.env.PORT || 3003; 
app.use(allRoutes)

app.use(express.urlencoded({extended: true}));
app.use(express.json())

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"))
}

mongoose.connect("mongodb://localhost:27017/google-books",
{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.listen(PORT, () => {
    console.log("Listening on + PORT")
})
