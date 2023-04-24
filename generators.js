// Define the three tasks to be executed asynchronously
function doTask1() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("Task 1 is done");
        resolve();
      }, 1000);
    });
  }
  
  function doTask2() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("Task 2 is done");
        resolve();
      }, 2000);
    });
  }
  
  function doTask3() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("Task 3 is done");
        resolve();
      }, 3000);
    });
  }
  
  // Define a generator function to execute the tasks
  function* executeTasks() {
    yield doTask1();
    yield doTask2();
    yield doTask3();
  }
  
  // Define an async function to run the generator
  async function runTasks() {
    const taskGenerator = executeTasks();
    for await (const task of taskGenerator) {
      // Do nothing, just iterate over the tasks
    }
    console.log("All tasks are done");
  }
  
  // Call the async function to start running the tasks
  runTasks();
  