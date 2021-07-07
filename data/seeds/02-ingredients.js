exports.seed = function (knex) {
  return knex('ingredients').insert([
    { ingredient_name: 'Butter' },
    { ingredient_name: 'Flour' },
    { ingredient_name: 'Meat' },
    { ingredient_name: 'buns' }
  ]);
};