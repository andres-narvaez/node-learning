const express = require('express')
const app = express()
const hbs = require('hbs')
require('./hbs/helpers/helpers')

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))

// Express hbs engine
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Andres'
    })
})

app.get('/about', (req, res) => {
    res.render('about')
})


// app.get('/', (req, res) => {
//     res.send('Hello World')
//     let salida = {
//         name: 'Andres',
//         lastName: 'Narvaez',
//         url: req.url
//     }

//     res.send(salida)
// })

app.get('/data', (req, res) => {
    res.send('Hello Data')

    //res.send(salida)
})

app.listen(port, () => {
    console.log(`listen on port ${ port }`)
})