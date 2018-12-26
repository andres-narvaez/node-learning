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

let getEmpleado = async (id) => {
    const empleado = empleados.find(empleado => empleado.id === id)

    if(empleado) return empleado
    throw new Error('No existe el empleado')
}

let getSalario = async (empleado) => {
    const salarioDb = salarios.find(salario => empleado.id === salario.id)

    if(salarioDb) return {
        nombre: empleado.nombre,
        salario: salarioDb.salario,
        id: empleado.id
    }
    throw new Error(`Empleado ${empleado.nombre} sin salario`)
}

let getInformacion = async (id) => {
    const empleado = await getEmpleado(id)
    const respuesta = await getSalario(empleado)

    return `El salario de ${respuesta.nombre} es $${respuesta.salario}`
}

getInformacion(2)
    .then(response => console.log(response))
    .catch(error => console.log(error))