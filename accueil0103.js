const seve = Admin ('Severine', 'seve@gmail.com')
const titi = new Admin ('Thomas', 'titi@gmail.com')
const mimi = new Perso ('Camille', 'camille@gmail.com')

class Perso {
    constructor (name, email) {
        this.name = name
        this.email = email
    }
info () {
    return `nom : $(this.name') email : $(this.email)`
}
}

class Admin extends Perso {
    constructor (name, email) {
    super (name, email)
    this.status = 'Admin'
    return `${super.info()} statut : ${this.status}` 
}
}

console.log (mimi.info())