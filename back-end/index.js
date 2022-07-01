const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const userRoutes = require("./routes/UserRoute")

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://netflix-user:jSdbAmiBzidDAeL9@cluster0.3wczo.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('database connected')
})

app.use("/api/user", userRoutes)


app.get('/', (req, res) => {
    console.log('hello world')
})

app.listen(5000, () => console.log(`app is running on port 4000`))
