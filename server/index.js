const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose")
require('dotenv').config()
const postsRoutes = require("./routes/posts")

const app = express();

app.use(cors());
app.use(express.json())
app.use('/posts' , postsRoutes)

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DB_URL)
.then(console.log("Database Connected"))
.catch(error => console.log(error))

app.listen(PORT , console.log("server running"));   
 