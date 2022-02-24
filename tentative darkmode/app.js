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
const niveau = document.getElementById('niveau');
const darkBtn = document.getElementById('darkmode');
const title = document.getElementsByTagName('h1');
const lightBtn = document.getElementById('lightmode');
// Modèle de coeurs
const coeurVide = '<ion-icon name="heart-outline"></ion-icon>';
const coeurPlein = '<ion-icon name="heart"></ion-icon>';

// Fond 
const bgStart = 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)';
const bgStart2 = 'linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%)';
const bgFroid = 'linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)';
const bgFroid2 = 'linear-gradient(to right, #243949 0%, #517fa4 100%)';
const bgTiède = 'linear-gradient(to top, #d299c2 0%, #fef9d7 100%)';
const bgTiède2 = 'linear-gradient(to top left, #003366 77%, #ffcc66 100%)';
const bgChaud = 'linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)';
const bgChaud2 = 'linear-gradient(to top, #003366 77%, #ff6600 100%)';
const bgBrulant = 'linear-gradient(to top, #ff0844 0%, #ffb199 100%)';
const bgBrulant2 = 'linear-gradient(to bottom, #003366 49%, #ff0000 100%';

const bgWin = 'linear-gradient(to right, #f83600 0%, #f9d423 100%)';
const bgWin2 = 'linear-gradient(to bottom, #000099 49%, #99ccff 100%)';
const bgLoose = 'linear-gradient(to top, #09203f 0%, #537895 100%)';
const bgLoose2 = 'linear-gradient(to top, #537895 0%, #09203f 100%)';
let difficulty=1;
let randomNumber;
let max;
let darkmode;


// PLAY : 
const play = () => {

    lightBtn.style.display = 'none';

    darkBtn.addEventListener('click',() => {
        console.log("ici");
        darkmode = true;
        body.style.color = '#FFFF';
        darkBtn.style.display = 'none';
        lightBtn.style.display = 'block';
        body.style.backgroundImage = bgStart2;
    });

    lightBtn.addEventListener('click',() => {
        console.log("ici2");
        darkmode = false;
        body.style.color = '#000';
        lightBtn.style.display = 'none';
        darkBtn.style.display = 'block';
        body.style.backgroundImage = bgStart;
    }); 



    if(difficulty === 1) {
        randomNumber = Math.floor(Math.random() * 101);
        max = 100;     
        indice1();
    }
    else if (difficulty === 2){
        randomNumber = Math.floor(Math.random() * 201); 
        max = 200;
        niveau.textContent = "Trouve le bon nombre entre 0 et 200. Tu as 5 essais !"
        indice2();
    }

    let tableauDeChiffres = [];
    // nombre aléatoire 
    
    const totalVies = 5;
    let vies = totalVies;
    console.log(randomNumber);

    // Actualisation à chaque essai 
    formulaire.addEventListener('submit', (e) => {
        e.preventDefault();
        const valeurInput = parseInt(input.value);
        erreur.textContent = "";
        

        if (valeurInput < 0 || valeurInput > max) return;
        if (valeurInput === randomNumber && darkmode == false) {
            console.log("victoire");
            body.style.backgroundImage = bgWin;
            message.textContent = `BRAVO !!! Le nombre était bien ${randomNumber} !!! Vous avez réussi avec ${vies} vies !!!`;
            rejouerBtn.style.display = "block";
            essayerBtn.setAttribute("disabled", "");
            indiceBtn.style.display = "none";
            indiceBtn.setAttribute("disabled", "");
            difficileBtn.style.display = "inline-block";
        } else if (valeurInput === randomNumber && darkmode == true) {
            console.log("victoire2");
            body.style.backgroundImage = bgWin2;
            message.textContent = `BRAVO !!! Le nombre était bien ${randomNumber} !!! Vous avez réussi avec ${vies} vies !!!`;
            rejouerBtn.style.display = "block";
            essayerBtn.setAttribute("disabled", "");
            indiceBtn.style.display = "none";
            indiceBtn.setAttribute("disabled", "");
            difficileBtn.style.display = "inline-block";
        }
        else if (valeurInput !== randomNumber && tableauDeChiffres.includes(valeurInput) == false){
            if (randomNumber < valeurInput + 3 && randomNumber > valeurInput - 3 && darkmode == false) {
                body.style.backgroundImage = bgBrulant;
                message.textContent = "C'est Brûlant !!! 🔥🔥🔥 ";
            } else if (randomNumber < valeurInput + 3 && randomNumber > valeurInput - 3 && darkmode == false) {
                body.style.backgroundImage = bgBrulant2;
                message.textContent = "C'est Brûlant !!! 🔥🔥🔥 ";
            } else if (randomNumber < valeurInput + 6 && randomNumber > valeurInput - 6 && darkmode == true) {
                body.style.backgroundImage = bgChaud2;
                message.textContent = "C'est Chaud ! 🔥 ";
            } else if (randomNumber < valeurInput + 6 && randomNumber > valeurInput - 6 && darkmode == false) {
                body.style.backgroundImage = bgChaud;
                message.textContent = "C'est Chaud ! 🔥 ";
            } else if (randomNumber < valeurInput + 11 && randomNumber > valeurInput - 11 && darkmode == false) {
                body.style.backgroundImage = bgTiède;
                message.textContent = "C'est Tiède 😐 ";
            } else if (randomNumber < valeurInput + 11 && randomNumber > valeurInput - 11 && darkmode == true) {
                body.style.backgroundImage = bgTiède2;
                message.textContent = "C'est Tiède 😐 ";
            } 
            else {
                if (darkmode == true) {
                    body.style.backgroundImage = bgFroid2;
                message.textContent = "C'est Froid 😐 ";
                } else {
                body.style.backgroundImage = bgFroid;
                message.textContent = "C'est Froid ❄️ "; 
                }
            }
            vies--;
            verifyLoose();
            tableauDeChiffres.push(valeurInput);
        } 
        else {
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
            indiceBtn.style.display = "none";
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
        reset();
        play();
    });

    difficileBtn.addEventListener('click',() => {
        difficulty = 2;
        reset();
        niveau2();
        play();
    }, {once: true});

    function reset() {
        essayerBtn.removeAttribute('disabled');
        rejouerBtn.style.display = 'none';
        indiceBtn.removeAttribute('disabled');
        indiceBtn.style.display = 'inline-block';
        input.value = "";
        body.style.backgroundImage = bgStart2;
        message.textContent = "";
        body.style.color = "#000000";
    };


    // indiceBtn.addEventListener ('click', () => {
    //     message.textContent = `Vous perdrez une vie en échange de l'indice.`;
    //     indiceBtn.addEventListener('click', () => {
    //         console.log("la");
    //         if (randomNumber > 50) {
    //             message.textContent = `Le numéro est superieur à 50 !`;
    //         }else {
    //             message.textContent = `Le numéro est inferieur à 50 !`;
    //         }
    //         vies--;
    //         actualiseCoeurs(vies);
    //     }, {once: true});
    // }, {once: true});

    function niveau2() {
        difficulty = 2;
    };

    function indice1(){
        indiceBtn.addEventListener ('click', function showIndice1(){
            message.textContent = `Vous perdrez une vie en échange de l'indice.`;
            indiceBtn.addEventListener('click', () => {
                test();
                indiceBtn.removeEventListener('click', showIndice1);
            }, {once: true});
        }, {once: true});
    }

    function test(){
        if (randomNumber > (max/2)) {
            message.textContent = `Le numéro est supérieur à ${max/2} !`;
        }
        else if (randomNumber == (max/2)) {
            message.textContent = `Le numéro se trouve entre ${(max/2)-25} et ${(max/2)+25} !`;
        }   
        else {
            message.textContent = `Le numéro est inférieur à ${max/2} !`;
        }
        vies--;
        actualiseCoeurs(vies);
    }

    function indice2(){
        difficileBtn.addEventListener('click', () => {
            indiceBtn.addEventListener ('click', function showIndice2() {
                console.log("la2 indice");
                message.textContent = `Vous perdrez une vie en échange de l'indice.`;
                indiceBtn.addEventListener('click', () => {
                    console.log("la2");
                    test();
                    indiceBtn.removeEventListener('click', showIndice2);
                }, {once: true});
            }, {once: true});
        });
    }

    


    // SCORE BOARD
    // S'ajoute au passage du niveau 2 : Montre le nombre d'essais


    difficileBtn.style.display = "none";
}

play();