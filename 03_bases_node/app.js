const { argumentos } = require('./config/yargs')
const { crearTablas,  listarTablas} = require('./multiplicacion/multiplicar')

let bases = [1,2,3,4,5,6,7,8,9]
let argumentBase = argumentos.base.split(",")

switch(argumentos._[0]) {
    case 'crear':
        crearTablas(argumentBase || bases, argumentos.limite)
    break;
    case 'listar':
        listarTablas(argumentBase || bases, argumentos.limite)
    break;
    default:
        'Bad command'
}


