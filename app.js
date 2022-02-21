// Elements du DOM
const divVies = document.querySelector(".vies");
const message = document.getElementById("message");
const formulaire = document.getElementById("inputBox");
const input = document.getElementById("input");
const essayerBtn = document.getElementById("essayerBtn");
const rejouerBtn = document.getElementById("rejouer");
const body = document.getElementsByTagName("body")[0];

// Modèle de coeurs
const coeurVide = '<ion-icon name="heart-outline"></ion-icon>';
const coeurPlein = '<ion-icon name="heart"></ion-icon>';

// Fonds

const bgFroid = 'linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)';
const bgTiède = 'linear-gradient(to top, #d299c2 0%, #fef9d7 100%)';
const bgChaud = 'linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)';
const bgBrulant = 'linear-gradient(to top, #ff0844 0%, #ffb199 100%)';

const bgWin = 'linear-gradient(to right, #f83600 0%, #f9d423 100%)';
const bgLoose = 'linear-gradient(to top, #09203f 0%, #537895 100%)';

// PLAY

const play = () => {
    
    // nombre aleatoire
    const randomNumber = Math.floor(Math.random() * 101);
    const totalVies = 6;
    let vies = totalVies;
    console.log(randomNumber);

    //Actualisation
    formulaire.addEventListener('submit',(e) => {
        e.preventDefault();
        const valeurInput = parseint(input.value); 

        if(valeurInput < 0 || valeurInput > 100) return;

        if(valeurInput === randomNumber){
            body.style.backgroundImage = bgWin;
            message.texteContent = `Bravo !!! Le nombre était bien ${randomNumber}`;
            rejouerBtn.style.display = "block";
        }

        if(valeurInput !==randomNumber) {
            if(randomNumber < valeurInput + 3 && randomNumber > valeurInput - 3){
                body.style.backgroundImage = bgBrulant;
                message.textContent = "C'est Brûlant !!!" ;
            }else if(randomNumber < valeurInput + 6 && randomNumber > valeurInput - 6) {
                body.style.backgroundImage = bgChaud;
                message.textContent = "C'est chaud !!!";
            }else if(randomNumber < valeurInput + 11 && randomNumber > valeurInput - 11) {
                body.style.backgroundImage = bgTiède;
                message.textContent = "C'est tiède !!!";
            }else {
                body.style.backgroundImage = bgFroid;
                message.textContent = "C'est froid !!!";
            }
            vies--;
            verifyLoose();
        }

    })
    const verifyLoose = () => {
        if(vies === 0) {
            body.style.backgroundImage = bgLoose;
            body.style.color = 'red';
            essayerBtn.setAttribute("disabled","");
            message.textContent = `Vous avez perdu. La réponse était ${randomNumber}`;
            rejouerBtn.style.display = "block";
        }
    }
}

