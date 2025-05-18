const { default: mongoose } = require("mongoose")
const phone = require("./route/phoneRoutes")
const express = require("express")
const cors = require("cors")
require("dotenv/config")

const app = express()
// middleware
app.use(express.json())
app.use(cors())

app.get("/",()=>{
    res.send("home")
})

app.use("/api/phone",phone)

// connection
app.listen(process.env.PORT || 5000)

// db connection

async function db() {
    try {
        const res = await mongoose.connect(process.env.DB)
        console.log(res.STATES.connected);
        
    } catch (error) {
        console.log(error.message);
    }
}

db()