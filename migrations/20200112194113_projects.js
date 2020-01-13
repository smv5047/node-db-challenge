
exports.up = async function(knex) {
    await knex.schema.createTable("projects", (table) =>{
        table.increments("id").notNullable()
        table.string("project_name").notNullable()
        table.string("project_description")
        table.boolean("is_complete").defaultTo("false").notNullable()
    })

    await knex.schema.createTable("resources", (table) => {
        table.increments("id").notNullable()
        table.string("resource_name").notNullable().unique()
        table.string("resource_description")
    })

    await knex.schema.createTable("tasks", (table) => {
        table.increments("id").notNullable()
        table.string("task_description").notNullable()
        table.string("task_note")
        table.boolean("is_complete").defaultTo("false").notNullable()
        table.integer("project_id")
            .references("id")
            .inTable("projects")
            .onDelete("SET NULL")
            .onUpdate("CASCADE")
    })

    await knex.schema.createTable("project_resources", (table) => {
        table.integer("projects_id")
            .references("id")
            .inTable("projects")
            .onDelete("SET NULL")
            .onUpdate("CASCADE")
        table.integer("resources_id")
            .references("resources")
            .inTable("projects")
            .onDelete("SET NULL")
            .onUpdate("CASCADE")
        table.integer("resource_quantity").notNullable()
        table.primary(["projects_id","resources_id"])
    })
    
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("project_resources")
  await knex.schema.dropTableIfExists("tasks")
  await knex.schema.dropTableIfExists("resources")
  await knex.schema.dropTableIfExists("projects")
};
