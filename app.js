var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "employeesDB"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    // run the start function after the connection is made to prompt the user
    choice();
});

async function choice() {
    try {
        var choice = await inquirer.prompt([
            {
                name: "action",
                type: "list",
                message: "What would you like to do?",
                choices: [
                    "Add new values ",
                    "View a table",
                    "Update values ",
                    "exit"]
            },
            {
                name: "table",
                type: "list",
                message: "Which table would you like to choose?",
                choices: [
                    "departments",
                    "roles",
                    "employees"
                ]
            }
        ]);

        const { action, table } = choice;

        switch (action) {
            case "Add new values ":
                Add(table);
                break;

            case "View a table":
                View(table);
                break;

            case "Update values ":
                Update(table);
                break;

            case "exit":
                connection.end();
                break;
        }
    } catch (err) {
        console.log(err)
    };

};

function View(table){
    console.log(table);
    connection.query("SELECT * FROM ??", [table], function (err, res) {
        if (err) throw err;
        for(var i = 0; i < res.length; i++){
            console.log("ID: " + res[i].id + "  Name: " + res[i].name);
        }

choice();
}

    )};

    async function Add(table){
        try {
            switch (table) {
                case "departments":
                    var addDep= await inquirer.prompt([
                        {
                            type: 'input',
                            name: 'department',
                            message: 'Please insert a new deparment'
                        }
                    ]);
    
                    const { department } = addDep;
                    
                    connection.query("INSERT INTO departments SET ?;", {department_name: department}, function (err, res) {
                        if (err) throw err;
                        console.log( addDep+ "has been added successfully with id: " + res.department_id);
          
                        choice();
                    });
                break;
    
                case "roles":
                    var addRole = await inquirer.prompt([
                        {
                            type: 'input',
                            name: 'title',
                            message: ' insert a title'
                        },
                        {
                            type: 'input',
                            name: 'salary',
                            message: ' insert salary'
                        },
                        {
                            type: 'input',
                            name: 'department_id',
                            message: ' insert the department id'
                        },
                    ]);
    
                    const { title, salary, department_id } = addRole;
                    
                    console.log(addRole);
    
                    connection.query("INSERT INTO roles SET ?", {title: title, salary: salary, department_id: department_id}, function (err, res) {
                        if (err) throw err;
                        console.log(title + "has been added successfully with id: " + res);
                        console.log("======================================================")
                        choice();
                    });
                break;

                case "employees":
                    var addEmployee = await inquirer.prompt([
                        {
                            type: 'input',
                            name: ' first_name',
                            message: ' insert your firstname'
                        },
                        {
                            type: 'input',
                            name: 'last_name',
                            message: ' insert your lastname'
                        },
                        {
                            type: 'input',
                            name: 'role_id',
                            message: ' insert the role id'
                        },

                        {
                            type: 'input',
                            name: 'manager_id',
                            message: ' insert the manager id'
                        },
                    ]);
                 
    
                    const { first_name, last_name, role_id,manager_id } = addEmployee;
                    
                    console.log(addEmployee);
    
                    connection.query("INSERT INTO employees SET ?", {first_name: first_name, last_name: last_name, role_id: role_id, manager_id: manager_id}, function (err, res) {
                        if (err) throw err;
                        console.log(first_name + last_name + "has been added successfully with id: " + res);
                        console.log("======================================================")
                        choice();
                    });
                break;

                
            }
    
        } catch (err) {
            console.log(err)
        };
    }