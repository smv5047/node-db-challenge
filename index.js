const express = require("express")
const app = express()
//Import Router

app.use(express.json())
//app.use(')

const PORT = process.env.PORT || 4010

app.get('/', (req, res) => {
    res.send("This is your server speaking")
})

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`)
})