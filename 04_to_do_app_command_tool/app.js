const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');
const colors = require('colors/safe');

let comando = argv._[0]

switch(comando) {
  case 'do':
  let task = toDo.build(argv.description);
  toDo.saveDb(task);
  break;

  case 'list':
    let findTask = toDo.listing(argv.description)

    if(findTask[0] && findTask[0].description && !argv.open) {
      findTask.forEach(task => {
        console.log(colors.green('===========Task==========='));
        console.log(colors.blue(`Task: ${task.description}`));
        console.log(colors.blue(`Is Complete: ${task.complete}`));
        console.log(colors.green('=========================='));
      });
    } else if(findTask[0] && findTask[0].description && argv.open) {
      const openTask = findTask.filter(task => task.complete === false);

      if(openTask.length) {
        openTask.forEach(task => {
          console.log(colors.green('===========Task==========='));
          console.log(colors.blue(`Task: ${task.description}`));
          console.log(colors.blue(`Is Complete: ${task.complete}`));
          console.log(colors.green('=========================='));
        });
      } else {
        console.log(':)', 'No task uncompleted');
      }
    } else {
      console.log(':)', 'No task saved');
    }
  break;

  case 'update':
    let update = toDo.update(argv.description, argv.complete);
    console.log(update);
  break;

  case 'clean':
    let clean = toDo.clean(argv.description);
    console.log(clean);
  break;

  default:
    console.log('Comando no es reconocido')
}