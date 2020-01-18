const db = require("../data/db-configs")

async function find() {
    // return db('tasks')
    //     .join("projects", "tasks.project_id", "projects.id")
    //     .select(
    //         "tasks.id",
    //         "tasks.task_description",
    //         "tasks.task_note",
    //         "tasks.is_complete",
    //         "projects.project_name",
    //         "projects.project_description"
    //     )      
    const tasks = await db('tasks').join("projects", "tasks.project_id", "projects.id")
                .select(
                    "tasks.id",
                    "tasks.task_description",
                    "tasks.task_note",
                    "tasks.is_complete",
                    "projects.project_name",
                    "projects.project_description"
                )     
    return tasks.map((task) => {
        return{...task, is_complete:task.is_complete === 1 ? true : false}
    })
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