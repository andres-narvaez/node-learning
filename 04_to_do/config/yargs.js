const doOptions = {
  description: {
    demand: true,
    alias: 'd'
  }
};

const listOptions = {
  description: {
    alias: 'd'
  },
  all: {
    alias: 'a'
  }
};

const updateOptions = {
  description: {
    demand: true,
    alias: 'd'
  },
  complete: {
    default: true,
    alias: 'c'
  }
}


const argv = require('yargs')
  .command('do', 'Crear un elemento por hacer', doOptions)
  .command('list', 'Show current task', listOptions)
  .command('update', 'Actualiza el estado completado de una tarea', updateOptions)
  .command('clean', 'Erase a task', doOptions)
  .help()
  .argv

module.exports = {
  argv
}
