 document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const nomeTarefa = document.getElementById('nome').value;
        const descricao = document.getElementById('descricao').value;
        const setor = document.getElementById('setor').value;
        const usuario = document.getElementById('usuario').value;
        const prioridades = document.getElementById('prioridades').value;
        const status = document.getElementById('status').value;

        if (nomeTarefa && descricao && usuario && prioridades && status) {
            fetch('http://localhost:3456/tarefas/tarefascriar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nomeTarefa, descricao, setor, usuario, prioridades, status })
            })
            .then(response => {
                if (response.ok) {
                    alert(`Tarefa cadastrada com sucesso!\nNome da Tarefa: ${nomeTarefa}\nDescrição: ${descricao}\nSetor: ${setor}\nUsuário: ${usuario}`);
                    document.getElementById('form').reset();
                } else {
                    alert('Erro ao cadastrar tarefa.\n' + (data.message || JSON.stringify(data)));
        console.error(data);
                }
            })
            .catch(() => {
                alert('Erro de conexão com o servidor.');
            });
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
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