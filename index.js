async function cours() {
    const response = await fetch('https://strapi-gogokodo.herokuapp.com/api/sources');
    const liens = await response.json();
    affichage(liens.data)
  }
  cours()

/*
fetch('https://strapi-gogokodo.herokuapp.com/api/sources')
    .then(response => response.json())
    .then(response => affichage(response.data))
    .catch(error => console.log("Erreur : " + error));
*/

function affichage (data) {
    const titrage  = document.querySelector (".box")
    titrage.innerHTML =""                   // on prend le parent pas le h3 de l'enfant

for (infos of data)

titrage.innerHTML +=`                               
<div class="carre"><h3>${infos.attributes.title}</h3>
     <button>${infos.attributes.url}</button></div>`}

// Pas oublier de noter tout le detail du chemin pour arriver a l info qu on a besoin 
// ex $ on prend info puis attributes et dans attribute on prend titre ou url ou autre