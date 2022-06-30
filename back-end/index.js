const express = require('express')

const app = express()

app.get('/', (req, res) => {
    console.log('hello world')
})

app.listen(4000, () => console.log(`app is running on port 4000`))
