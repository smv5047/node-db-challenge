const db = require("../data/db-configs")

function find() {
    return db("projects")
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