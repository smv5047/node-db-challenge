
exports.up = async function(knex) {
    await knex.schema.createTable("projects", (table) =>{
        table.increments("id").notNullable()
        table.string("project_name").notNullable()
        table.string("project_description")
        table.boolean("is_complete").defaultTo("false").notNullable()
    })
    
};

exports.down = function(knex) {
  
};
