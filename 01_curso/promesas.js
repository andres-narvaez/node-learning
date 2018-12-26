const empleados = [
    {
        nombre: 'Andres',
        id: 1
    },
    {
        nombre: 'Felipe',
        id: 2
    },
    {
        nombre: 'Pepe',
        id: 3
    }
];

const salarios = [
    {
        salario: 10000,
        id: 1
    },
    {
        salario: 20000,
        id: 2
    }
];

let getEmpleado = id => {

    return new Promise((resolve, reject) => {
        const empleado = empleados.find(empleado => empleado.id === id)

        if(empleado) {
            resolve(empleado)
        } else {
            reject('No existe el empleado')
        }
    })
}

let getSalario = empleado => {
    
    return new Promise((resolve, reject) => {
        const salarioDb = salarios.find(salario => empleado.id === salario.id)

        if(salarioDb) {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDb.salario,
                id: empleado.id
            })
        } else {
            reject(`Empleado ${empleado.nombre} sin salario`)
        }
    })
} 

getEmpleado(3).then(response => {
    return getSalario(response)
}).then(response => {
    console.log(response)
}).catch(error => {
    console.log(error)
})
