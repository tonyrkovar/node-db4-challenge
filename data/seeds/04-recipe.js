exports.seed = function (knex) {
  return knex('recipe').insert([
    { recipe_id: 1, ingredient_id: 1, quantity: 90, measurement: 'oz' },
    { recipe_id: 2, ingredient_id: 2, quantity: 90, measurement: 'oz' },
    { recipe_id: 3, ingredient_id: 3, quantity: 1, measurement: 'ea' },
    { recipe_id: 3, ingredient_id: 4, quantity: 1, measurement: 'ea' }
  ]);
};