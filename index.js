const express = require("express");
const app = express();
const cors = require("cors")
require("dotenv").config()
const port = process.env.PORT

// Midddleware
app.use(cors())

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})