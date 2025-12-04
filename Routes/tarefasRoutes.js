const express = require('express');
const tarefaService = require('../Service/tarefaService.js');
const router = express.Router();

router.post('/tarefascriar', async (req, res) => {
    const { nomeTarefa, descricao, setor, usuario, prioridades, status } = req.body;
    try {
        const novaTarefa = await tarefaService.criarTarefas(nomeTarefa, descricao, setor, usuario, prioridades, status);
        res.status(201).json(novaTarefa);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar :/' });
    }
});

router.get('/tarefaslistar', async (req, res) => {
    try {
        const tarefas = await tarefaService.listarTarefas();
        res.status(200).json(tarefas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar tarefas' });
    }
});

router.delete('/tarefasdelete/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await tarefaService.deletarTarefas(id);
        res.status(200).json({ message: 'Tarefa deletada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar tarefa' });
    }
});

router.put('/tarefasupdate', async (req, res) => {
    const {id, nomeTarefa, descricao, setor, usuario, prioridades, status } = req.body;
    try {
        const atualizarTarefas = await tarefaService.updateTarefas(id, nomeTarefa, descricao, setor, usuario, prioridades, status);
        res.status(200).json({ message: 'Tarefa atualizada boy' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar boy' });
    }
});

module.exports = router;