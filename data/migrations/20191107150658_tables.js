
exports.up = function (knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.string('recipe_name', 255).notNullable()
        })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('ingredient_name', 128).notNullable();
        })
        .createTable('instructions', tbl => {
            tbl.increments();
            tbl.string('step', 255).notNullable()
            tbl.integer('step_number', 64).unsigned().notNullable();
            tbl.integer('recipe_id', 64).unsigned().references('id').inTable('recipes').notNullable().onDelete('RESTRICT').onUpdate('CASCADE')
        })
        .createTable('recipe', tbl => {
            tbl.increments()
            tbl.float('quantity', 128).notNullable()
            tbl.string('measurement', 64).notNullable()
            // foreign key for ingredient
            tbl.integer('ingredient_id', 64).unsigned().references('id').inTable('ingredients').notNullable().onDelete('RESTRICT').onUpdate('CASCADE')
            // foreign key for recipe
            tbl.integer('recipe_id', 64).unsigned().references('id').inTable('recipe').notNullable().onDelete('RESTRICT').onUpdate('CASCADE')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('recipes')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('instructions')
        .dropTableIfExists('recipe')
};
