
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project_resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project_resources').insert([
        { projects_id: 1, resources_id: 1, resource_quantity: 2 },
        { projects_id: 1, resources_id: 2, resource_quantity: 7 },
        { projects_id: 3, resources_id: 3, resource_quantity: 46 }
      ]);
    });
};
