const express = require('express')
const app = express()

function start() {
    const PORT = process.env.PORT || 3000
    app.listen(PORT, () => {
        console.log(`Server is running on port : ${PORT}`)
    })
}

start()