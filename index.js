const { CRUD } = require("./helpers");
const db = require("./models");

const params = process.argv;

if (params.length <= 2) {
  process.exit();
}

const args = params.slice(2);

const command = args[0].split(":")[0].substring(2);
const entity = args[0].split(":")[1];

switch(command) {
  case CRUD.CREATE:
    console.log("CREATED");
    break;
  case CRUD.READ:
    console.log("READ")
    break;
  default:
    console.log("Operation not found!!!")
}
