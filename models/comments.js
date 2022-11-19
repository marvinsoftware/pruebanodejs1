
const CommentsModel = require('./models/comments');

const { Sequelize } = require("sequelize")

module.exports = (sequelize, type) => {

    return sequelize.define('comments', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        subject: Sequelize.STRING,
        website: Sequelize.STRING,
        text: Sequelize.STRING,
        email: Sequelize.STRING
    })


}