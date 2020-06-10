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
    const data = {};
    //node .  --create:Contact --firstName=Blake --lastName=ElBarbaro
    args.slice(1).map(arg => {
      const temp = arg.split("=");
      data[temp[0].substring(2)] = temp[1];
    });

    db[entity]
      .create(data)
      .then(() => console.log("Contact created"))
      .catch();
    break;

  case CRUD.READ:
    console.log("READ")
    break;

  default:
    console.log("Operation not found!!!")
}
