const express = require('express')
const app = express()
const port = 1337

app.use(express.static('demo/dist'));
app.use(express.static('demo/public'));

app.listen(port, () => {
  console.log(`Demo app listening at http://localhost:${port}`)
})