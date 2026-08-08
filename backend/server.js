import express from "express"
import { createServer } from "http"
import { Server } from "socket.io"
import { YSocketIO } from "y-socket.io/dist/server"
import cors from "cors"

const app = express();
const httpServer = createServer(app)


const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    }
})


//health routes
app.get("/", (req, res) => {
    res.status(200).json({
        message: "HELLO WORLD",
        success: true
    })
})

app.get("/health", (req, res) => {
    res.status(200).json({
        message: "OK!",
        success: true
    })
})



httpServer.listen(3000, () => {
    console.log("Server running on port 3000")
})