const fs = require('fs')
const colors = require('colors/safe')

function multiplicar(base, limite) {
    let data = []

    for(let i = 1; i <= limite; i++) {
        const product = base * i
        data.push(`${base} * ${i} = ${product}`)
    }

    return data
}

function crearTablaDeMultiplicar(bases, limite) {
    const tablas = bases.map(base => {
        return {
            nombreTabla: `Tabla-del-${base}`,
            tablaCompleta: multiplicar(base, limite)
        }
    });

    return tablas
}


async function crearArchivo(tabla) {
    return fs.writeFile(`tablas/${tabla.nombreTabla}.txt`, tabla.tablaCompleta.join('\n'), (err) => {
        if (!err) return console.log(colors.white(`The file ${colors.green(tabla.nombreTabla + '.txt')} has been saved!`))
        throw new Error(err);
    });
}

async function crearTablas(bases, limite) {
    const tablas = crearTablaDeMultiplicar(bases, limite)

    return tablas.forEach(tabla => {
        return crearArchivo(tabla)
    });
}

async function listarTablas(bases, limite) {
    const tablas = crearTablaDeMultiplicar(bases, limite)

    
    return tablas.forEach(tabla => {
        console.log(colors.yellow(tabla.nombreTabla))
        console.log(colors.white(tabla.tablaCompleta.join('\n')))
        console.log(colors.gray('===================='))
    });
}

module.exports = {
    crearTablas,
    listarTablas
}