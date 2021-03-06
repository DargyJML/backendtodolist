const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const todolistRoutes = require("./routes/todolist");

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use('/api', todolistRoutes);


// routes
app.get("/", (req, res) =>{
    res.send("Welcome to my API");
});


//mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error(error));

app.listen(port, () => console.log('server listning on port', port));

