const config = require('config')
const app = require('./server')
const http = require('http')

app.set('port', config.port)
const server = http.createServer(app)

server.listen(config.port, () => {
  console.log(`server listening on port ${config.port}`)
})
