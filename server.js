import express from 'express';
import { resolve } from 'path';

const app = express();
const PORT = 3000;

app.use(express.static('./dist'));

app.get('/', (_req, res) => {
  res.sendFile(resolve(__dirname, 'dist/index.html'));
});

app.listen(PORT, () => `\nApp Messenger started on port ${PORT} \nlocal - http://localhost:3000/`);
