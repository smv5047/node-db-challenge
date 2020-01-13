const db = require("../data/db-configs")

function find() {
    return db("tasks")
}

async function add(task) {
    const[id] = await db("tasks").insert(task)
    return db("tasks")
        .where({id})
        .first()
}

module.exports = {
    find,
    add
}