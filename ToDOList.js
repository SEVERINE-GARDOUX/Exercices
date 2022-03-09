'use strict'
// Notre application

const list = document.getElementById ('list')
const input = document.getElementById ('input')
const add = document.getElementById ('Add')
const clear = document.getElementById ('clear')
const url = document.getElementById ('url')
const load = document.getElementById ('load')

// on récupère le tableau des tâches déjà existantes
const tasks = ['Reprendre le sport', 'Apprendre le Responsive']

// Fonction qui ajoute les tâches au DOM avec un bouton de suppression auquel on attache un événement
function taskToDom (tasks) {
    // Si on a une châine non-vide
   if (typeof tasks === 'string' && tasks) {
        const li = document.createElement ('li')
        const remove = document.createElement ('button')

        li.textContent = tasks
        remove.textContent = 'REMOVE'

        remove.addEventListener ('click', () => {
            list.removeChild (remove.parentNode)
        })

        li.appendChild(remove)

        list.insertBefore (li, list.firstChild)
    }
} 

// On ajoute chaque tâche à la liste à puces
// for (let i = 0; i < tasks.length; i++) {
//     taskToDom (tasks[i])
// }
tasks.forEach (task => taskToDom (task))

//On gère l'ajout de tâche avec le bouton add et la touche enter
function newTask () {
    input.focus ()
}

add.addEventListener ('click', newTask)
input.addEventListener ('keydown', e => {
    if (e.key === 'Enter'){
    }
})

//On supprime le liste du DOM et du navigateur
clear.addEventListener ('click', () => {
    list.innerHTML = ''
})

//On gère l'importation de tâches
load.addEventListener ('click', () => {

})