const express = require('express')
const app = express()
const port = process.env.PORT || 5500;

app.get('/html', function (req, res) {
  res.sendFile(__dirname + '/enneagram-test-result.html');
})

app.listen(port, () => {
  console.log(`mike app listening on port ${port}`)
})