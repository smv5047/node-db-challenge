const db = require("../data/db-configs")

function find() {
    return db('tasks')
        .join("projects", "tasks.project_id", "projects.id")
        .select(
            "tasks.id",
            "tasks.task_description",
            "tasks.task_note",
            "tasks.is_complete",
            "projects.project_name",
            "projects.project_description"
        )        
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