// DICHIARAZIONE VARIABILI
let ourTeamDom= document.querySelector(".ourTeam");

// CREAZIONE ARRAY
let ourTeam = [
    {
        "name": "Wayne Barnett",
        "role": "Founder & Ceo",
        "image": "wayne-barnett-founder-ceo.jpg"
    },
    {
        "name": "Angela Caroll",
        "role": "Chief Editor",
        "image": "angela-caroll-chief-editor.jpg"
    },
    {
        "name": "Walter Gordon",
        "role": "Office Manager",
        "image": "walter-gordon-office-manager.jpg"
    },
    {
        "name": "Angela Lopez",
        "role": "Social Media Manager",
        "image": "angela-lopez-social-media-manager.jpg"
    },
    {
        "name": "Scott Estrada",
        "role": "Developer",
        "image": "scott-estrada-developer.jpg"
    },
    {
        "name": "Barbara Ramos",
        "role": "Graphic Designer",
        "image": "barbara-ramos-graphic-designer.jpg"
    }
]

// CICLO PER LA VISUALIZZAZIONE DELLE INFORMAZIONI DELL'ARRAY
for( let i=0; i<ourTeam.length; i++){
    let member= ourTeam[i];
    console.log(member.name)
    console.log(member.role)
    console.log(member.image)
    let memberInfo= `<div class="d-flex justify-content-around">
                    <p>${member.name}</p>
                    <p>${member.role}</p>
                    <p>${member.image}</p>
                    </div>`
    ourTeamDom.innerHTML+= memberInfo;
}