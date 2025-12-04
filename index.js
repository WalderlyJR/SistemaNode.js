const express = require('express')
const cors = require('cors');
const app = express();
const userRoutes = ('./Routes/userRoutes.js');
const tarefasRoutes = ('./Routes/tarefasRoutes.js');
const porta = 3456;



app.use(cors());
app.use(express.json());
app.use('/usuario', require(userRoutes));
app.use('/tarefas', require(tarefasRoutes));

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});