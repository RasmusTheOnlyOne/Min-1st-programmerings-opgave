const fs = require("fs");

const ABSOLUTE_PATH = "";
const USER_FILE = "/k1gbrugere.json";

class DB {
    constructor() {
        this.users = this.openfile()
    }

    savefile() {
        fs.writeFileSync(ABSOLUTE_PATH + USER_FILE)
    }
//Denne const er synkron, da vi gerne vil have functionen til at vente
    openfile() {
        const file =fs.readFileSync()
        return JSON.parse(file); //SVideo 1:00:00
    }

    saveuser(user) {
        this.users.push(user)
        this.savefile();
    }
}

//module.exports = new DB
