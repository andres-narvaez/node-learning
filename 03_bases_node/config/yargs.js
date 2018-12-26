const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argumentos = require('yargs')
    .command('listar', 'Imprime en consola las tablas de multiplicar', options)
    .command('crear', 'Creador de tablas de multiplicar', options)
    .help()
    .argv

module.exports = {
    argumentos
}