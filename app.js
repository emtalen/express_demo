const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.table(req.query)
    res.send('<h1>Hello World!</h1>')
})

app.listen(port, () => console.warn(`The audience is listening on port ${port}!`))