document.addEventListener('DOMContentLoaded', function() {
    window.onload = function() {
    fetch('http://localhost:3456/usuario/userlistar')
        .then(response => response.json())
        .then(usuarios => {
            const select = document.getElementById('usuario');
            usuarios.forEach(usuario => {
                const option = document.createElement('option');
                option.value = usuario.id;
                option.textContent = usuario.nome;
                select.appendChild(option);
            });
        });
};

    document.getElementById('form').addEventListener('submit', function(e) {
        e.preventDefault();
        const id = document.getElementById('id').value;
        const nomeTarefa = document.getElementById('nome').value;
        const descricao = document.getElementById('descricao').value;
        const setor = document.getElementById('setor').value;
        const usuario = document.getElementById('usuario').value;
        const prioridades = document.getElementById('prioridades').value;
        const status = document.getElementById('status').value;

        fetch(`http://localhost:3456/tarefas/tarefasupdate`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, nomeTarefa, descricao, setor, usuario, prioridades, status })
        })
        .then(res => {
            if (res.ok) {
                alert('Tarefa atualizada com sucesso!');
                window.location.href = 'listarTarefas.html';
            } else {
                alert('Erro ao atualizar tarefa.');
            }
        });
    });
});