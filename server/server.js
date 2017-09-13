import path from 'path'
import express from 'express'


const app = express()
const config = {
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 8080,
  url: process.env.URL,
}

app.get('*', (req, res, next) => {
  if (req.headers['x-forwarded-proto'] !== 'https' && config.url) {
    res.redirect(`https://${config.url}${req.url}`)
  }
  else {
    next()
  }
})

app.use('/assets', express.static(path.resolve(__dirname, '..', 'build', 'assets')))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'))
})

app.listen(config.port, config.host, () => {
  console.log(`Server is running and listening on http://${config.host}:${config.port}`)
})
