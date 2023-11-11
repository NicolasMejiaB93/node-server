// En el archivo tasks.js

const readline = require('readline');

const tasks = [];

function displayTasks() {
  console.log('Lista de tareas:');
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. [${task.completed ? '✔' : '❌'}] ${task.description}`);
  });
}

function addTask(description) {
  tasks.push({ description, completed: false });
  console.log('Tarea añadida exitosamente.');
  displayTasks();
}

function deleteTask(index) {
  if (index >= 0 && index < tasks.length) {
    tasks.splice(index, 1);
    console.log('Tarea eliminada exitosamente.');
  } else {
    console.log('Índice de tarea no válido.');
  }
  displayTasks();
}

function completeTask(index) {
  if (index >= 0 && index < tasks.length) {
    tasks[index].completed = true;
    console.log('Tarea completada exitosamente.');
  } else {
    console.log('Índice de tarea no válido.');
  }
  displayTasks();
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function mainMenu() {
  console.log('1. Añadir tarea');
  console.log('2. Eliminar tarea');
  console.log('3. Completar tarea');
  console.log('4. Salir');
  rl.question('Selecciona una opción: ', (option) => {
    switch (option) {
      case '1':
        rl.question('Introduce la descripción de la tarea: ', (description) => {
          addTask(description);
          mainMenu();
        });
        break;
      case '2':
        rl.question('Introduce el índice de la tarea a eliminar: ', (index) => {
          deleteTask(parseInt(index) - 1);
          mainMenu();
        });
        break;
      case '3':
        rl.question('Introduce el índice de la tarea a completar: ', (index) => {
          completeTask(parseInt(index) - 1);
          mainMenu();
        });
        break;
      case '4':
        rl.close();
        break;
      default:
        console.log('Opción no válida. Inténtalo de nuevo.');
        mainMenu();
    }
  });
}

mainMenu();
