const { writeFile } = require('fs')
const colors = require('colors/safe')


const build = description => {
  let thingsToDo = loadDb();
  let toDo = {
    description,
    complete: false
  }

  thingsToDo.push(toDo);

  return thingsToDo;
}

const loadDb = () => {
  let thingsToDo;

  try {
    thingsToDo = require('../db/data.json')
  } catch (error) {
    thingsToDo = []
  }

  return thingsToDo;
}

const saveDb = (task) => {
  let data = JSON.stringify(task)

  writeFile('db/data.json', data, (err) => {
    if (!err) return console.log(colors.white(`The file ${colors.green('data.json')} has been saved!`))
        throw new Error(err);
  })
}

const listing = (task) => {
  const currentTasks = loadDb()
  const requestedTask = currentTasks.filter( currentTask => currentTask.description === task)

  return requestedTask.length ? requestedTask : currentTasks
}

const update = (task, complete = true) => {
  const currentTasks = loadDb();
  const index = currentTasks.findIndex( currentTask => currentTask.description === task);
  const toBoolean = complete === 'false' ? false : true

  if(index >= 0) {
    currentTasks[index].complete = toBoolean

    saveDb(currentTasks)
    return ':)'
  } else {
    return ':('
  }
}

const clean = description => {
  const currentTask = loadDb();
  const deleteTask = currentTask.filter(task => task.description !== description)

  if(deleteTask.length < currentTask.length) {
    saveDb(deleteTask)
    return ':)'
  } else {
    return ':('
  }
}

module.exports = {
  build,
  saveDb,
  listing,
  update,
  clean
}