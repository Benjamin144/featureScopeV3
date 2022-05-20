const express = require('express')
const app = express()
const port = process.env.PORT || 9000

const bodyParser = require ('body-parser')

app.use(bodyParser.json()) // creating middleware which is extracting JSON from the body of requests
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')// also need custom middleware that will disable security. Can be used in an HTTP response and that doesn't relate to the content of the message ('mdn web docs' reference)
    res.header('Access-Control-Allow-Headers', 'content-type')// relaxes the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API ('google' reference)
    next();
})

app.get('/creators', async (req, res) => {
    const creators = [ 
            { name: 'Simple Electronics', img: 'https://' },
            { name: 'Coreteks', img: 'https://' },
            { name: 'ThriftyAV', img: 'https://' },
    ]
    // todo: GET from Database
    res.send(creators)
})

app.post('/creators', async (req, res) => { // creates requests for use with bodyParser lib
    console.log(req.body)
    // todo: Webscraper channel
    // todo: add to Database
    res.send('Success')// The res. send function sets the content type to text/Html which means that the client will now treat it as text. It then returns the response to the client.

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})