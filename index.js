const express = require("express")
const app = express()

//Routers
const ProjectRouter = require('./projects/projects-router')
const ResourceRouter = require('./resources/resources-router')
const TaskRouter = require('./tasks/tasks-router')

app.use(express.json())
app.use('/api/project', ProjectRouter)
app.use('/api/resource', ResourceRouter)
app.use('/api/task', TaskRouter)

const PORT = process.env.PORT || 4010

app.get('/', (req, res) => {
    res.send("This is your server speaking")
})

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`)
})