const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/models', (req, res) => {
  const modelsDir = path.join(__dirname, 'public/model');
  let files = [];
  try {
    files = fs.readdirSync(modelsDir).filter(f => f.endsWith('.glb'));
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Could not read models directory.' });
  }
  const models = files.map(fname => ({
    name: path.parse(fname).name,
    file: `/model/${fname}`
  }));
  res.json(models);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
