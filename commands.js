const { version, command, parse } = require("commander");
const program = require("commander");
// const { prompt } = require('inquirer');
import { prompt } from "inquirer";
const {
    addCustomer,
    findCustomer,
    removeCustomer,
    updateCustomer,
    listCustomer,
} = require('./index.js"');

version("1.0.0").description("Customer Management System");

const questions = [
    {
        type: "input",
        name: "firstname",
        message: "Enter the first name",
    },
    {
        type: "input",
        name: "lastname",
        message: "Enter the last name",
    },
    {
        type: "input",
        name: "phone",
        message: "Enter the phone number",
    },
    {
        type: "input",
        name: "email",
        message: "Enter the email",
    },
];

// program
//     .command("add <firstname> <lastname> <phone> <email>")
//     .alias("a")
//     .description("Add a customer")
//     .action((firstname, lastname, phone, email) => {
//         addCustomer({ firstname, lastname, phone, email });
//     });

command("add")
    .alias("a")
    .description("Add a customer")
    .action(() => {
        prompt(questions).then((answers) => addCustomer(answers));
    });

command("find <name>")
    .alias("f")
    .description("Find a Customer")
    .action((name) => {
        findCustomer(name);
    });

command("list")
    .alias("l")
    .description("List all customers")
    .action(() => {
        listCustomer();
    });

command("remove")
    .alias("rm")
    .description("Delete customer by id")
    .action((_id) => {
        removeCustomer(_id);
    });

command("update <_id>")
    .description("Update customer by using Id")
    .action((_id) => {
        prompt(questions).then((answers) => {
            updateCustomer(_id, answers);
        });
    });
parse(process.argv);
