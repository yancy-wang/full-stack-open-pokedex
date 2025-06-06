const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist', {
  setHeaders: (res, path) => {
    if (path.endsWith('.html')) {
      res.setHeader('Content-Type', 'text/html')
    }
  }
}))

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
