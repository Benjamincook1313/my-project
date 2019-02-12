const express = require('express')
const bodyParser = require('body-Parser')
const ac = require('./adventure-controller')

const app = express()

app.use(bodyParser.json())

app.get('/api/adventures', ac.getAdventures)

app.post('/api/adventures', ac.createNewAdventure)

app.put('/api/adventures/:id', ac.updateAdventure)

app.delete('/api/adventures/:id',ac.deleteAdventure)




const serverPort = 4144
app.listen(serverPort, () => console.log(`lets get started ${serverPort}`))