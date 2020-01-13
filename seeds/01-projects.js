
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: "testproject1", project_description:"This is a test project"},
        {project_name: "testproject2", project_description:"This is also a test project"},
        {project_name: "testproject3", project_description:"This too is a test project", is_complete: true}

      ]);
    });
};
