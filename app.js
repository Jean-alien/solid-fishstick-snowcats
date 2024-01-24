const express = require('express')
const app = express()
const port = process.env.PORT || 5500;

app.get('/', (req, res) => {
  res.send('My Enneagram personality result: Type 9 Peacemaker')
})

app.listen(port, () => {
  console.log(`mike app listening on port ${port}`)
})


/*app.get('/', function (req, res) {
  res.send('Hello World from Express. I be XYZ')
})

app.get('/iss6', function (req, res) {
    res.send('Hello World from Express. I\'m Jean.')
  })

app.get('/iss6html', function (req, res) {
    res.send('<p>Hello World from Express.</p> <li>I\'m Jean.</li>')
  })

app.get('/iss6file', function (req, res) {
    //res.sendFile('very-cool-web-page.html');
    res.sendFile(__dirname + '/very-cool-web-page.html');
  })

app.get('/iss8', function (req, res) {
    res.send('nodemon in the house.')
  })

*/
