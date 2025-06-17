const Task = require('../models/task.model');

exports.getAll = async (req, res) => {
  try {
    const tasks = await Task.find().populate('categoryId');
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar tarefas' });
  }
};

exports.create = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar tarefa' });
  }
};

exports.update = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!task) return res.status(404).json({ error: 'Tarefa não encontrada' });
    res.json(task);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar tarefa' });
  }
};

exports.remove = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ error: 'Tarefa não encontrada' });
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao excluir tarefa' });
  }
};
