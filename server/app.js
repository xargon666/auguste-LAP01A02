const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors());
app.use(express.json())

const port = 3000 
app.listen(port, ()=>{
console.log('We are live on ' + port)})


app.get('/', (req, res) => res.send('Hello World!'))

app.get('/searchresults', (req, res) => res.send('Node.js Search and Filter'))

