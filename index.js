const port = 3098
const spdy = require('spdy')
const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()
app.use('/img', express.static(path.join(__dirname, 'images')))

app.get('*', (req, res) => {
  res
    .status(200)
    .json({
      message: 'ok'
    })
})
const options = {
  key: fs.readFileSync(__dirname + '/server.key'),
  cert: fs.readFileSync(__dirname + '/server.crt')
}
console.log(options)
spdy
  .createServer(options, app)
  .listen(port, (error) => {
    if (error) {
      console.error(error)
      return process.exit(1)
    } else {
      console.log('Listening on port: ' + port + '.')
    }
  })
