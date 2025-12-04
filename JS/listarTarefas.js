let usuariosMap = {};
let usuarioEmail = {};

fetch('http://localhost:3456/usuario/userlistar')
    .then(response => response.json())
    .then(usuarios => {
        usuarios.forEach(usuario => {
            usuariosMap[usuario.id] = usuario.nome;
            usuarioEmail[usuario.id] = usuario.email;
        });

        fetch('http://localhost:3456/tarefas/tarefaslistar')
            .then(response => response.json())
            .then(data => {
                const tbody = document.querySelector('tbody');
                data.forEach(tarefa => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td>${tarefa.id}</td>
                        <td>${usuariosMap[tarefa.usuario]}</td>
                        <td>${usuarioEmail[tarefa.usuario]}</td>
                        <td>${tarefa.status}</td>
                        <td>${tarefa.descricao}</td>
                        <td>${tarefa.setor}</td>
                        <td>
        <button onclick="editarTarefa(${tarefa.id})">Editar</button>
        <button onclick="excluirTarefa(${tarefa.id})">Excluir</button>
    </td>
                    `;
                    tbody.appendChild(tr);
                });
            })
            .catch(error => {
                console.error('Erro ao listar tarefas:', error);
            });

        window.excluirTarefa = function (id) {
    if (confirm('Tem certeza que deseja excluir esta tarefa?')) {
        fetch(`http://localhost:3456/tarefas/tarefasdelete/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json().then(data => ({ ok: response.ok, data })))
        .then(result => {
            if (result.ok) {
                alert('Tarefa excluída com sucesso!');
                location.reload();
            } else {
                alert('Erro ao excluir tarefa');
            }
        })
        .catch(error => {
            alert('Erro de conexão ao excluir tarefa.');
            console.error(error);
        });
    }
};
window.editarTarefa = function(id) {
    window.location.href = `atualizarTarefas.html`;
};
    });