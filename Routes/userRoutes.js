const express = require('express');
const userService = require('../Service/userService.js');
const router = express.Router();

router.post('/usercriar', async (req, res) => {
    const { nome, email } = req.body;
    try {
        const novoUsuario = await userService.criarUsuario(nome, email);
        res.status(201).json(novoUsuario);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
}
);
router.put('/userupdate/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, email } = req.body;
    try {
        const usuarioAtualizado = await userService.updateUsuario(id, nome, email);
        res.status(200).json({ message: 'Usuário atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
});

router.get('/userlistar', async (req, res) => {
    try {
        const usuarios = await userService.listarUsuario();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar usuários' });
    }
});
router.delete('/userdeletar/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletar = await userService.deletarUsuario(id);
        res.status(200).json({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar usuário' });
    }
});



module.exports = router;