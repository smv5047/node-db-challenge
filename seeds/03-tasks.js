
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {task_description: "testtask1", task_note: "testnote1", project_id: 1},
        {task_description: "testtask1", task_note: "testnote2", project_id: 2},
        {task_description: "testtask1", task_note: "testnote3", is_complete: true, project_id: 3}
      ]);
    });
};
