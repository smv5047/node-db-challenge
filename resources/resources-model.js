const db = require("../data/db-configs")

function find() {
    return db("resources")
}

async function add(resource) {
    const[id] = await db("resources").insert(resource)
    return db("resources")
        .where({id})
        .first()
}

module.exports = {
    find,
    add
}