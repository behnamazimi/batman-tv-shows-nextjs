const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = !process.argv.includes('-p');
const app = next({dev})
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express()

    server.get('/', (req, res) => {
        return app.render(req, res, '/', req.query)
    })

    server.get('/show/:id', (req, res) => {
        return app.render(req, res, '/single-show', {id: req.params.id})
    })

    server.get('/about', (req, res) => {
        return app.render(req, res, '/about', req.query)
    })

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})