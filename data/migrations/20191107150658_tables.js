
exports.up = function (knex) {
    return knes.schema.createTable('recipies', tbl => {
        tbl.increments();
        tbl.string('recipe_name', 255).notNullable()
        tbl.string('ingredients').unsigned().references('name').inTable('ingredients').onDelete('RESTRICT').onUpdate('CASCADE').notNullable()
        tbl.float('quantity').notNullable()
    })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('ingredient_name', 128).notNullable();
        })
        .createTable('instructions', tbl => {
            tbl.increments();
            tbl.string('steps', 255)
        })
};

exports.down = function (knex) {

};
