const Sequelize = require('sequelize');

const sequelize = new Sequelize ('webii', 'root', 'admin', {dialect: 'mysql', host: 'localhost', port:3306});
//                                nomeBAnco, usuario, senha, { linguagemBD, host, porta}

module.exports = {sequelize};