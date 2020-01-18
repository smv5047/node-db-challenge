
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: "testresource1", resource_description: "testdescription1"},
        {resource_name: "testresource2", resource_description: "testdescription2"},
        {resource_name: "testresource3"}

      ]);
    });
};
