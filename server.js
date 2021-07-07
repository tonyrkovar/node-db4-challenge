const express = require('express');
const helmet = require('helmet');

const recipeRoutes = require('./routers/recipe-router')
const server = express()

server.use(helmet())
server.use(express.json())

server.use('/api/recipes', recipeRoutes)

module.exports = server;