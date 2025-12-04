const Tarefas = require('../Model/tarefaModels.js');

async function criarTarefas(nomeTarefa, descricao, setor, usuario, prioridades, status) {
    return Tarefas.create({nomeTarefa, descricao, setor, usuario, prioridades, status});
}

async function updateTarefas(id, nomeTarefa, descricao, setor, usuario, prioridades, status) {
    const userData = await Tarefas.findByPk(id);
    if (!userData) {
        console.log("Tarefa não encontrada");
        throw new Error("Tarefa não encontrada");
    } else {
        return Tarefas.update(
            { nomeTarefa, descricao, setor, usuario, prioridades, status },
            { where: { id } }
        );
    }
}
async function listarTarefas() {
    const userData = await Tarefas.findAll();
    if(!userData){
        console.log("Tarefas não encontrado");
    } else {
        return userData;
    }
}

async function deletarTarefas(id) {
    const userData = await Tarefas.findByPk(id);
    if(!userData){
        console.log("Tarefas não encontrado");
    } else {
        return Tarefas.destroy({where: {id}});
    }
}

module.exports = {
    criarTarefas,
    updateTarefas,
    listarTarefas,
    deletarTarefas
};
