const path = require('path')
require('dotenv').config()
const express = require('express')
const app = express()
const cors = require("cors")


app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname, "/../public")));

app.get("/", (req, res) => {
    rollbar.info(`user accessed the main page`)
    res.sendFile(path.resolve("public/landing.html"));
  });

const SERVER_PORT = process.env.PORT || 4400
app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))

