import express from 'express';
import {resolve} from 'path';

const app = express();
const PORT = 3000;

app.use(express.static('./dist'));

app.get('/', function(_req, res) {
    res.sendFile(resolve(__dirname, 'dist/index.html'))
})

app.get('/404', function(_req, res) {
    res.sendFile(resolve(__dirname, 'dist/404.html'))
})

app.get('/500', function(_req, res) {
    res.sendFile(resolve(__dirname, 'dist/500.html'))
})

app.get('/chat', function(_req, res) {
    res.sendFile(resolve(__dirname, 'dist/chat.html'))
})

app.get('/sign-in', function(_req, res) {
    res.sendFile(resolve(__dirname, 'dist/sign-in.html'))
})

app.get('/profile', function(_req, res) {
    res.sendFile(resolve(__dirname, 'dist/profile.html'))
})

app.listen(PORT, function(){
    console.log(`\nApp Messenger started on port ${PORT} \nlocal - http://localhost:3000/`)
})