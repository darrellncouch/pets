
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pets').del()
    .then(function () {
      // Inserts seed entries
      return knex('pets').insert([
        {name: 'spots', type: "dog", gender: "m"},
        {name: 'killer', type: "dog", gender: "m"},
        {name: 'fluffy', type: "cat", gender: "fm"}
      ]);
    });
};
