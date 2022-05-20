const express = require('express')
const app = express()
const port = process.env.PORT || 9000

app.get('/creators', async (req, res) => {
    const creators = [ 
            { name: 'Simple Electronics', img: 'https://' },
            { name: 'Coreteks', img: 'https://' },
            { name: 'ThriftyAV', img: 'https://' },
    ]
    // todo: GET from Database
    res.send(creators)
})

app.post('/creators', async (req, res) => {


})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})