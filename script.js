/*
    1. creo l'array di elementi da inserire in pagina
    2. creo un contenitore a cui aggiungere elementi
    3. finchè l'array di elementi non è finito stampo il contenuto degli oggetti
*/

const elementi = [

    {
        "immagine": "img/wayne-barnett-founder-ceo.jpg",
        "nome": "Wayne Barnett",
        "ruolo": "Founder & CEO"
    },
    {
        "immagine": "img/angela-caroll-chief-editor.jpg",
        "nome": "Angela Caroll",
        "ruolo": "Chief Editor"
    },
    {
        "immagine": "img/walter-gordon-office-manager.jpg",
        "nome": "Walter Gordon",
        "ruolo": "Office Manager"
    },
    {
        "immagine": "img/angela-lopez-social-media-manager.jpg",
        "nome": "Angela Lopez",
        "ruolo": "Social Media Manager"
    },
    {
        "immagine": "img/scott-estrada-developer.jpg",
        "nome": "Scott Estrada",
        "ruolo": "Developer"
    },
    {
        "immagine": "img/barbara-ramos-graphic-designer.jpg",
        "nome": "Barbara Ramos",
        "ruolo": "Graphic Designer"
    }

];


const contenitore = document.querySelector(".team-container");

for(let i = 0; i < elementi.length; i++){
    contenitore.innerHTML +=`<div class="team-card">
                                <div class="card-image">
                                    <img
                                        src="${elementi[i].immagine}"
                                        alt="${elementi[i].nome}"
                                    />
                                </div>
                                <div class="card-text">
                                    <h3>${elementi[i].nome}</h3>
                                    <p>${elementi[i].ruolo}</p>
                                </div>
                            </div>`; 
}