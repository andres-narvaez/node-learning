const hbs = require('hbs')

// helpers

hbs.registerHelper('getYear', () => {
    return new Date().getFullYear()
})