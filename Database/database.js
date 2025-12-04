const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'saep',
    port: 3306,
    logging: false, 
});


sequelize.sync().then(() =>{
    console.log("Database conectada com sucesso");
}).catch((error) => {
    console.error("Deu erro oia: ", error);
})

module.exports = sequelize;