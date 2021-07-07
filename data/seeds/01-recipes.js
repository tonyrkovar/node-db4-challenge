
exports.seed = function (knex) {
  return knex('recipes').insert([
    { recipe_name: 'Pot Pie' },
    { recipe_name: 'Pretzle' },
    { recipe_name: 'Hot Dog' }
  ]);
};
