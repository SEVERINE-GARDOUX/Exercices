let stock = document.querySelector('.contenair');
console.log(stock)
let listing = [{
    titre : 'Acheter jeux video et autre',
    lien : 'https://fr.shopping.rakuten.com'},

    {titre : 'Pour m/entrainer',
    lien : 'https://fr.tuto.com'},

    {titre : 'Pour avancer',
    lien : 'https://learndigital.withgoogle.com/ateliersnumeriques'},

    {titre : 'Realiser des maquettes',
    lien : 'https://www.figma.com'},

    {titre : 'Pour me divertir',
    lien : 'https://www.passagedudesir.fr'},

    {titre : 'Pour les films et series',
    lien : 'https://www.disneyplus.com'}, 

    {titre : 'Pour me former',
    lien : 'https://www.youtube.com'},

    {titre : 'Beaute',
    lien : 'https://www.yves-rocher.fr'},

    {titre : 'Reseau social',
    lien : 'https://discord.com'},
]

for (list of listing) {
    stock.innerHTML += `

<div class="carre"><h3>${list.titre}</h3>
<a href="${list.lien}">Visiter</a> </div>
`
}
