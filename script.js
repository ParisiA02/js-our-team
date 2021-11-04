/*
    1. creo l'array di elementi da inserire in pagina
    2. creo un contenitore a cui aggiungere elementi
    3. finchè l'array di elementi non è finito stampo il contenuto degli oggetti
    4. prendo dalla pagina i dati da inserire nel nuovo oggetto
    5. inserisco i dati nel nuovo oggetto
    6. inserisco il nuovo oggetto nell'array di oggetti
    7. al click del bottone stampo in pagina l'ultimo elemento dell'arry 
*/

// elementi del team
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

//stampo in pagina gli oggetti dell'array
for(let i = 0; i < elementi.length; i++){
    let componente=`<div class="team-card">
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
    contenitore.innerHTML += componente;
}

let button = document.getElementById("addMemberButton");
button.addEventListener("click", function(){

    let name = document.getElementById("name").value;
    let role = document.getElementById("role").value;
    let image = document.getElementById("image").value;

    let elemento = {
        "immagine": image,
        "nome": name,
        "ruolo": role,
    }

    elementi.push(elemento);
    aggiungiElemento();
});


// funzioni

function aggiungiElemento() {
    let len = elementi.length - 1;

    let componente=`<div class="team-card">
                        <div class="card-image">
                            <img
                                src="${elementi[len].immagine}"
                                alt="${elementi[len].nome}"
                            />
                        </div>
                        <div class="card-text">
                            <h3>${elementi[len].nome}</h3>
                            <p>${elementi[len].ruolo}</p>
                        </div>
                    </div>`; 
    contenitore.innerHTML += componente;
}