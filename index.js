import readline from "readline";

const readCmd = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const todo = [];

const handleInput = (cmd) => {
  switch (cmd) {
    case "1":
      readCmd.question("write your task: ", (task) => {
        todo.push(task);
        cliTask();
      });

      break;

    case "2":
      todo.forEach( (element,index) => {
        console.log(`${index+1}. ${element}`);
      });
      cliTask();
      break;
    case "3":
      readCmd.close();
      break;

    default:
      console.log("please choose from above 3 option only ");
      cliTask();
      break;
  }
};

const cliTask = () => {
  console.log("1.Add task");
  console.log("2.View task");
  console.log("3.Exit");
  readCmd.question("Choose any one option:", (cmd) => {
    handleInput(cmd);
  });
};

cliTask();
