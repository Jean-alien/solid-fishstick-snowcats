const express = require('express')
const app = express()
const port = process.env.PORT || 5500;

app.get('/', (req, res) => {
  res.send('My Enneagram result Type 9 Peacemaker it is good to work on dev teams cuz of their mullets XYZ need to watch out for talking too much when everyone already gets it.')
})

app.listen(port, () => {
  console.log(`mike app listening on port ${port}`)
})

