document.body.style.backgroundColor = 'lightgrey '


async function fetchSW () {
    const reponse = await fetch ('https://swapi.dev/api/people');
    const perso = await reponse.json (); 
    console.log (perso)  //ok je vois bien les données
    persoSW (perso.results)
} 
fetchSW ()

function persoSW (arrayPerso) {
    for (personnages of arrayPerso)
    document.querySelector ('.name').innerHTML +=  ` <p>
    <h3>${personnages.name}</h3>
    <p>Est né(e) :${personnages.birth_year}</p>
    <p> A les yeux : ${personnages.eye_color}</p>
</p>
    `
}