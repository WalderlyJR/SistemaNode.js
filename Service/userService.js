const usuario = require('../Model/userModel.js');

async function criarUsuario(nome, email) {
    return usuario.create({nome, email});
}

async function updateUsuario(id, nome, email) {
    const userData = await usuario.findByPk(id);
    if(!userData){
        console.log("Usuario não encontrado");
    } else {
        return usuario.update({nome, email}, {where: {id}});
    }
}

async function listarUsuario() { 
    const userData = await usuario.findAll();
    if(!userData){
        console.log("Usuario não encontrado");
    } else {
        return userData;
    }
}
async function deletarUsuario(id) {
    const userData = await usuario.findByPk(id);
    if(!userData){
        console.log("Usuario não encontrado");
    } else {
        return usuario.destroy({where: {id}});
    }
}

module.exports = {
    criarUsuario,
    updateUsuario,
    listarUsuario,
    deletarUsuario
};