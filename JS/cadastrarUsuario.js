document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault(); 

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;

        if (nome && email) {
            fetch('http://localhost:3456/usuario/usercriar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nome, email })
            })
            .then(response => {
                if (response.ok) {
                    alert(`Usuário cadastrado com sucesso!\nNome: ${nome}\nEmail: ${email}`);
                    document.getElementById('form').reset();
                } else {
                    alert('Erro ao cadastrar usuário.');
                }
            })
            .catch(() => {
                alert('Erro de conexão com o servidor.');
            });
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });