document.body.style.backgroundColor = 'lightgrey '
document.body.style.textAlign = 'center'

async function fetchSw () {
    const response = await fetch ('https://swapi.dev/api/people');
    const perso = await response.json (); 
    console.log (perso) 
    persoSw (StarWarsPersos)
} 
fetchSw ()

function persoSw (StarWarsPersos) {
    for (perso of persos)
    document.querySelector ('ul').innerHTML +=  `
    <li> ${results.name} </li>`
}