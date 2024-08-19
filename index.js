const express = require("express");
const app = express();
const cors = require("cors");
const { dbConnector } = require("./utilityFunctions/dbConnector");
const port = process.env.PORT

// Midddleware
app.use(cors())

// db connector 
dbConnector();


app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})