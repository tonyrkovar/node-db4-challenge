exports.seed = function (knex) {
  return knex('instructions').insert([
    { step: 'Melt butter', recipe_id: 1, step_number: 2 },
    { step: 'Add water', recipe_id: 1, step_number: 1 },
    { step: 'Cook Meat', recipe_id: 3, step_number: 1 },
    { step: 'Add Relish', recipe_id: 3, step_number: 3 },
    { step: 'Add Yeast', recipe_id: 2, step_number: 2 },
    { step: 'Mix', recipe_id: 2, step_number: 3 },
    { step: 'Bake', recipe_id: 2, step_number: 4 },
    { step: 'Toast Buns', recipe_id: 3, step_number: 2 }
  ]);
};