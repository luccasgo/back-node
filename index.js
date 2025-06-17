const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Conectar ao MongoDB
connectDB();

// Rotas
const taskRoutes = require('./routes/task.routes');
const categoryRoutes = require('./routes/category.routes');

app.use('/api/tasks', taskRoutes);
app.use('/api/categories', categoryRoutes);

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
