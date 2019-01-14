const description = {
  demand: true,
  alias: 'd'
};

const complete = {
  default: true,
  alias: 'c'
}

const doOptions = {
  description
};

const listOptions = {
  description: {
    alias: 'd'
  },
  all: {
    alias: 'a'
  },
  open: {
    alias: 'o',
    default: false
  }
};

const updateOptions = {
  description: {
    demand: true,
    alias: 'd'
  },
  complete
}


const argv = require('yargs')
  .command('do', 'Crear un elemento por hacer', doOptions)
  .command('list', 'Show current tasks. With aditional parameter -o shows only uncomplete task', listOptions)
  .command('update', 'Actualiza el estado completado de una tarea', updateOptions)
  .command('clean', 'Erase a task', doOptions)
  .help()
  .argv

module.exports = {
  argv
}
