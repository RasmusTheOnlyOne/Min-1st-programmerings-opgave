const express = require('express');
const app = express();

//Controllers
const userController = require('USERCONTROLLER');
//Her laver jeg en const jeg kalder PORT, som bare henviser til 3000
const PORT = process.env.PORT || 3000;

//Middelware se Søren video 30:00
app.use(express.static('VIEWS'));
//Kommer som string til JSON
app.use(express.json());

//Ruter
app.use('/k1gbrugere', userController)

//Dette er så jeg kan se om serveren kører på port 3000 eller ej
app.listen(PORT, console.log("Server is running"));
