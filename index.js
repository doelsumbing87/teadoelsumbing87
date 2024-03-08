// server.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let tasks = [];

// Menampilkan halaman utama
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Menampilkan daftar tugas
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Menambah tugas baru
app.post('/addtask', (req, res) => {
  const task = req.body.task;
  tasks.push(task);
  res.redirect('/');
});

// Menghapus tugas
app.post('/removetask', (req, res) => {
  const index = req.body.index;
  tasks.splice(index, 1);
  res.redirect('/');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
