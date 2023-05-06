const { program } = require("commander");
const { prompt } = require("inquirer");

// ------------------------------------------------------------

const {
    addStudent,
    findStudent,
    updateStudent,
    removeStudent,
    listStudents,
} = require("./studentActions");

// ------------------------------------------------------------

const questions = [
    {
        type: "input",
        name: "firstname",
        message: "Student First Name",
    },
    {
        type: "input",
        name: "lastname",
        message: "Student Last Name",
    },
    {
        type: "input",
        name: "phone",
        message: "Student Phone Number",
    },
    {
        type: "input",
        name: "email",
        message: "Student Email Address",
    },
];

// ------------------------------------------------------------

program.version("1.0.0").alias("v").description("ASCOL DATA MANAGEMENT SYSTEM");
// Says Hi
program
    .command("hi")
    .alias("h")
    .description("Just says Hi")
    .action(() => console.log("Hi I am working"));

// ------------------------------------------------------------

// Add Command
program
    .command("add")
    .alias("a")
    .description("Add a student")
    .action(() => {
        prompt(questions).then((answers) => addStudent(answers));
    });
// _____________________________
// Find Command
program
    .command("find <name>")
    .alias("f")
    .description("Find a student")
    .action((name) => findStudent(name));

// _____________________________
// Update Command
program
    .command("update <_id>")
    .alias("u")
    .description("Update a student")
    .action((_id) => {
        prompt(questions).then((answers) => updateStudent(_id, answers));
    });

// _____________________________
// Remove Command
program
    .command("remove <_id>")
    .alias("r")
    .description("Remove a student")
    .action((_id) => removeStudent(_id));

// _____________________________
// List Command
program
    .command("list")
    .alias("l")
    .description("List all students")
    .action(() => listStudents());

// ------------------------------------------------------------

program.parse(process.argv);
