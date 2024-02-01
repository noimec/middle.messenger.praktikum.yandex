import express from 'express';
import {resolve} from 'path';

const app = express();
const PORT = 3000;

app.use(express.static('./dist'));

app.get('/', function(_req, res) {
    res.sendFile(resolve(__dirname, 'dist/index.html'))
})

app.get('/profile', function(_req, res) {
    res.sendFile(resolve(__dirname, 'dist/profile.html'))
})

app.get('/prof', function(_req, res) {
    res.sendFile(resolve(__dirname, 'dist/prof.html'))
})

app.listen(PORT, function(){
    console.log(`App Messenger started on port ${PORT}`)
})