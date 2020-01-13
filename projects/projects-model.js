const db = require("../data/db-configs")

async function find() {
    const projects = await db("projects")
    return projects.map((project) => {
        return{...project, is_complete: project.is_complete === 1 ? true : false}
    })
}

async function add(project) {
    const[id] = await db("projects").insert(project)
    return db("projects")
        .where({id})
        .first()
}

module.exports = {
    find,
    add
}