const db = require('../data/db-config')

module.exports = {
    find,
    findShoppingList,
    getInstructions
}

function find() {
    return db('recipes')
}

function findShoppingList(id) {
    return db
        .select('R.quantity', 'RS.recipe_name', 'I.ingredient_name')
        .from('recipe as R')
        .join('recipes as RS', function () {
            this.on('RS.Id', '=', 'R.recipe_id')
        })
        .join('ingredients as I', function () {
            this.on('I.Id', '=', 'R.ingredient_id')
        })
        .where({
            'RS.Id': id
        })
}

function getInstructions(id) {
    return db
        .select('IN.step', 'RS.recipe_name', 'RS.Id')
        .from('instructions as IN')
        .join('recipes as RS', function () {
            this.on('RS.Id', '=', 'IN.recipe_id')
        })
        .where({ 'RS.Id': id })
}