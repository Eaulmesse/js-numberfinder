const divVies = document.querySelector('.vies');
const message = document.getElementById('message');
const formulaire = document.getElementById('inputBox');
const input = document.getElementById('number');
const essayerBtn = document.getElementById('essayerBtn');
const rejouerBtn = document.getElementById('rejouer');
const body = document.getElementsByTagName('body')[0];
const erreur = document.getElementById('erreur');
const indiceBtn = document.getElementById('indice');
const difficileBtn = document.getElementById('difficulte');

// Modèle de coeurs
const coeurVide = '<ion-icon name="heart-outline"></ion-icon>';
const coeurPlein = '<ion-icon name="heart"></ion-icon>';

// Fond 
const bgFroid = 'linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)';
const bgFroid2 = 'linear-gradient(120deg, #66a6ff 0%,#89f7fe  100%)';
const bgTiède = 'linear-gradient(to top, #d299c2 0%, #fef9d7 100%)';
const bgTiède2 = 'linear-gradient(to top, #fef9d7 0%, #d299c2 100%)';
const bgChaud = 'linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)';
const bgChaud2 = 'linear-gradient(to right, #fe9a8b 0%, #fd868c 19%, #f9748f 60%, #f78ca0 100%)';
const bgBrulant = 'linear-gradient(to top, #ff0844 0%, #ffb199 100%)';
const bgBrulant2 = 'linear-gradient(to top, #ffb199 0%, #ff0844 100%)';

const bgWin = 'linear-gradient(to right, #f83600 0%, #f9d423 100%)';
const bgWin2 = 'linear-gradient(to right, #f9d423 0%, #f83600 100%)';
const bgLoose = 'linear-gradient(to top, #09203f 0%, #537895 100%)';
const bgLoose2 = 'linear-gradient(to top, #537895 0%, #09203f 100%)';
let tableauDeChiffres = [];
// PLAY : 
const play = () => {

    // nombre aléatoire 
    const randomNumber = Math.floor(Math.random() * 101); // 3
    const totalVies = 5;
    let vies = totalVies;
    console.log(randomNumber);

    // Actualisation à chaque essai 
    formulaire.addEventListener('submit', (e) => {
        e.preventDefault();
        const valeurInput = parseInt(input.value);
        erreur.textContent = "";
        

        if (valeurInput < 0 || valeurInput > 100) return;

        if (valeurInput === randomNumber) {
            console.log("victoire");
            body.style.backgroundImage = bgWin;
            message.textContent = `BRAVO !!! Le nombre était bien ${randomNumber} !!! Vous avez réussi avec ${vies} vies !!!`;
            rejouerBtn.style.display = "block";
            essayerBtn.setAttribute("disabled", "");
            indiceBtn.style.display = "none";
            indiceBtn.setAttribute("disabled", "");
            difficileBtn.style.display = "inline-block";
        }
        else if (valeurInput !== randomNumber && tableauDeChiffres.includes(valeurInput) == false){
            console.log("else if");
            console.log(valeurInput);
            if (randomNumber < valeurInput + 3 && randomNumber > valeurInput - 3) {
                body.style.backgroundImage = bgBrulant;
                message.textContent = "C'est Brûlant !!! 🔥🔥🔥 ";
            } else if (randomNumber < valeurInput + 6 && randomNumber > valeurInput - 6) {
                body.style.backgroundImage = bgChaud;
                message.textContent = "C'est Chaud ! 🔥 ";
            } else if (randomNumber < valeurInput + 11 && randomNumber > valeurInput - 11) {
                body.style.backgroundImage = bgTiède;
                message.textContent = "C'est Tiède 😐 ";
            } else {
                body.style.backgroundImage = bgFroid;
                message.textContent = "C'est Froid ❄️ "; 
            }
            vies--;
            verifyLoose();
            tableauDeChiffres.push(valeurInput);
        }else{
            console.log("else");
            erreur.textContent = "Veuillez saisir un nouveau chiffre.";  
        }

        
        actualiseCoeurs(vies);

    })

    const verifyLoose = () => {
        if (vies === 0) {
            body.style.backgroundImage = bgLoose;
            body.style.color = '#990000';
            essayerBtn.setAttribute("disabled", "");
            message.textContent = `Vous avez perdu. La réponse était ${randomNumber}`;
            rejouerBtn.style.display = "block";
        }
    }


    const actualiseCoeurs = (vies) => {  // total : 6; vies : 4
        divVies.innerHTML = "";
        let tableauDeVies = [];
        for (let i = 0; i < vies; i++) {
            tableauDeVies.push(coeurPlein);
        }
        for (let i = 0; i < totalVies - vies; i++) {
            tableauDeVies.push(coeurVide);
        }
        tableauDeVies.forEach(coeur => {
            divVies.innerHTML += coeur;
        })
    }
    actualiseCoeurs(vies);

    rejouerBtn.addEventListener('click', () => {
        message.style.display = 'none';
        document.location.reload(true);
    })


    indiceBtn.addEventListener ('click', () => {
        message.textContent = `Vous perdrez une vie en échange de l'indice.`;
        indiceBtn.addEventListener('click', () => {
            if (randomNumber > 50) {
                message.textContent = `Le numéro est superieur à 50 !`;
            }else {
                message.textContent = `Le numéro est inferieur à 50 !`;
            }
            vies--;
            actualiseCoeurs(vies);
        }, {once: true});
    }, {once: true});


    difficileBtn.style.display = "none";
}

play();