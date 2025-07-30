let sfondo = "chiaro";

async function cambia() {
    let sfondo = localStorage.getItem("sfondo");
    if (sfondo === "chiaro"){
        document.querySelector('body').style.background = "url('IMG/PGD_doodle_nero_v2.png') center center";
        document.querySelector('body').style.backgroundSize = "250%";
        document.querySelector('#CambioTema').style.backgroundImage = "url('IMG/Icona\ chiaro.png')";
        document.querySelector('#CambioTema').style.backgroundPosition = "50% 50%";
        document.querySelector('#CambioTema').style.backgroundColor = "rgb(229, 230, 229)";
        sfondo = "scuro";
        localStorage.setItem("sfondo", "scuro");
    }
    else{
        document.querySelector('body').style.background = "url('IMG/PGD_doodle_grigio_v2.png') center center";
        document.querySelector('body').style.backgroundSize = "250%";
        document.querySelector('#CambioTema').style.backgroundImage = "url('IMG/Icona\ scuro.png')";
        document.querySelector('#CambioTema').style.backgroundPosition = "50% 50%";
        document.querySelector('#CambioTema').style.backgroundColor = "rgb(28, 28, 28)";
        sfondo = "chiaro";
        localStorage.setItem("sfondo", "chiaro");
    }
}
async function cambia2() {
    let sfondo = localStorage.getItem("sfondo");
    if (sfondo === "chiaro"){
        document.querySelector('body').style.background = "url('../IMG/PGD_doodle_nero_v2.png') center center";
        document.querySelector('body').style.backgroundSize = "250%";
        document.querySelector('#CambioTema').style.backgroundImage = "url('../IMG/Icona\ chiaro.png')";
        document.querySelector('#CambioTema').style.backgroundPosition = "50% 50%";
        document.querySelector('#CambioTema').style.backgroundColor = "rgb(229, 230, 229)";
        sfondo = "scuro";
        localStorage.setItem("sfondo", "scuro");
    }
    else{
        document.querySelector('body').style.background = "url('../IMG/PGD_doodle_grigio_v2.png') center center";
        document.querySelector('body').style.backgroundSize = "250%";
        document.querySelector('#CambioTema').style.backgroundImage = "url('../IMG/Icona\ scuro.png')";
        document.querySelector('#CambioTema').style.backgroundPosition = "50% 50%";
        document.querySelector('#CambioTema').style.backgroundColor = "rgb(28, 28, 28)";
        sfondo = "chiaro";
        localStorage.setItem("sfondo", "chiaro");
    }
}

async function TemaSelezionato(){
    let sfondo = localStorage.getItem("sfondo");
    if (sfondo === "chiaro"){
            document.querySelector('body').style.background = "url('IMG/PGD_doodle_grigio_v2.png') center center";
            document.querySelector('body').style.backgroundSize = "250%";
            document.querySelector('#CambioTema').style.backgroundImage = "url('IMG/Icona\ scuro.png')";
            document.querySelector('#CambioTema').style.backgroundPosition = "50% 50%";
            document.querySelector('#CambioTema').style.backgroundColor = "rgb(28, 28, 28)";
            localStorage.setItem("sfondo", "chiaro");
        }
        else{
            document.querySelector('body').style.background = "url('IMG/PGD_doodle_nero_v2.png') center center";
            document.querySelector('body').style.backgroundSize = "250%";
            document.querySelector('#CambioTema').style.backgroundImage = "url('IMG/Icona\ chiaro.png')";
            document.querySelector('#CambioTema').style.backgroundPosition = "50% 50%";
            document.querySelector('#CambioTema').style.backgroundColor = "rgb(229, 230, 229)";
            localStorage.setItem("sfondo", "scuro");
            
        }
}
async function TemaSelezionato2(){
    let sfondo = localStorage.getItem("sfondo");
    if (sfondo === "chiaro"){
            document.querySelector('body').style.background = "url('../IMG/PGD_doodle_grigio_v2.png') center center";
            document.querySelector('body').style.backgroundSize = "250%";
            document.querySelector('#CambioTema').style.backgroundImage = "url('../IMG/Icona\ scuro.png')";
            document.querySelector('#CambioTema').style.backgroundPosition = "50% 50%";
            document.querySelector('#CambioTema').style.backgroundColor = "rgb(28, 28, 28)";
            localStorage.setItem("sfondo", "chiaro");
        }
        else{
            document.querySelector('body').style.background = "url('../IMG/PGD_doodle_nero_v2.png') center center";
            document.querySelector('body').style.backgroundSize = "250%";
            document.querySelector('#CambioTema').style.backgroundImage = "url('../IMG/Icona\ chiaro.png')";
            document.querySelector('#CambioTema').style.backgroundPosition = "50% 50%";
            document.querySelector('#CambioTema').style.backgroundColor = "rgb(229, 230, 229)";
            localStorage.setItem("sfondo", "scuro");
            
        }
}
async function TemaSelezionato3(){
    let sfondo = localStorage.getItem("sfondo");
        Generi.classList.add('visibile');
        Autori.classList.remove('visibile');
        Ruoli.classList.remove('visibile');
        Curiosità.classList.remove('visibile');
        Tutorial.classList.remove('visibile');
        GeneriBTN.style.backgroundColor = 'rgb(0, 255, 213)';
        AutoriBTN.style.backgroundColor = 'rgb(163, 252, 103)';
        RuoliBTN.style.backgroundColor = 'rgb(163, 252, 103)';
        CuriositàBTN.style.backgroundColor = 'rgb(163, 252, 103)';
        TutorialBTN.style.backgroundColor = 'rgb(163, 252, 103)';
    if (sfondo === "chiaro"){
            document.querySelector('body').style.background = "url('../IMG/PGD_doodle_grigio_v2.png') center center";
            document.querySelector('body').style.backgroundSize = "250%";
            document.querySelector('#CambioTema').style.backgroundImage = "url('../IMG/Icona\ scuro.png')";
            document.querySelector('#CambioTema').style.backgroundPosition = "50% 50%";
            document.querySelector('#CambioTema').style.backgroundColor = "rgb(28, 28, 28)";
            localStorage.setItem("sfondo", "chiaro");
        }
        else{
            document.querySelector('body').style.background = "url('../IMG/PGD_doodle_nero_v2.png') center center";
            document.querySelector('body').style.backgroundSize = "250%";
            document.querySelector('#CambioTema').style.backgroundImage = "url('../IMG/Icona\ chiaro.png')";
            document.querySelector('#CambioTema').style.backgroundPosition = "50% 50%";
            document.querySelector('#CambioTema').style.backgroundColor = "rgb(229, 230, 229)";
            localStorage.setItem("sfondo", "scuro");
            
        }
}
async function homeClickEvent(){
    location.href='index.html'
}
async function homeClickEvent2(){
    location.href='../index.html'
}

async function logoClickEvent(){
    setTimeout(() => {
        location.href='index.html'
    }, 700);
}
async function logoClickEvent2(){
    setTimeout(() => {
        location.href='../index.html'
    }, 700);
}
async function socialClickEvent(){
        location.href='HTML/social.html';
}
async function socialClickEvent2(){
    location.href='social.html';
}

async function discordClickEvent(){
    location.href='https://discord.gg/yPkuNrFG92'
}

async function instagramClickEvent(){
    location.href='https://www.instagram.com/pizzagamedev/'
}

async function youtubeClickEvent(){
    location.href='https://www.youtube.com/@PizzaGameDev'
}

async function redditClickEvent(){
    location.href='https://www.reddit.com/r/PizzaGameDev/?rdt=33757'
}

async function teamClickEvent(){
    location.href='HTML/team.html'
}
async function teamClickEvent2(){
    location.href='team.html'
}

async function corsiClickEvent(){
    location.href='HTML/corsi.html'
}
async function corsiClickEvent2(){
    location.href='corsi.html'
}

const logo = document.getElementById('logo');
const Fett0 = document.getElementById('Fett0');

logo.addEventListener('click', () => {
    Fett0.style.display = 'block';
})

const CambioTema = document.getElementById('CambioTema');

CambioTema.addEventListener('mouseover', () =>{
    CambioTema.style.backgroundColor = 'grey';
});

CambioTema.addEventListener('mouseout', () =>{
    if (sfondoChiaro == true){
        CambioTema.style.backgroundColor = '';
    }
    else{
        CambioTema.style.backgroundColor = 'rgb(229, 230, 229)';
    }
});

var Generi = document.getElementById('Generi');
var Autori = document.getElementById('Autori');
var Ruoli = document.getElementById('Ruoli');
var Curiosità = document.getElementById('Curiosità');
var Tutorial = document.getElementById('Tutorial');

async function SezioneGeneri() {
        Generi.classList.add('visibile');
        Autori.classList.remove('visibile');
        Ruoli.classList.remove('visibile');
        Curiosità.classList.remove('visibile');
        Tutorial.classList.remove('visibile');
        GeneriBTN.style.backgroundColor = 'rgb(0, 255, 213)';
        AutoriBTN.style.backgroundColor = 'rgb(163, 252, 103)';
        RuoliBTN.style.backgroundColor = 'rgb(163, 252, 103)';
        CuriositàBTN.style.backgroundColor = 'rgb(163, 252, 103)';
        TutorialBTN.style.backgroundColor = 'rgb(163, 252, 103)';
}

async function SezioneAutori() {
        Generi.classList.remove('visibile');
        Autori.classList.add('visibile');
        Ruoli.classList.remove('visibile');
        Curiosità.classList.remove('visibile');
        Tutorial.classList.remove('visibile');
        GeneriBTN.style.backgroundColor = 'rgb(163, 252, 103)';
        AutoriBTN.style.backgroundColor = 'rgb(0, 255, 213)';
        RuoliBTN.style.backgroundColor = 'rgb(163, 252, 103)';
        CuriositàBTN.style.backgroundColor = 'rgb(163, 252, 103)';
        TutorialBTN.style.backgroundColor = 'rgb(163, 252, 103)';
}

async function SezioneRuoli() {
        Generi.classList.remove('visibile');
        Autori.classList.remove('visibile');
        Ruoli.classList.add('visibile');
        Curiosità.classList.remove('visibile');
        Tutorial.classList.remove('visibile');
        GeneriBTN.style.backgroundColor = 'rgb(163, 252, 103)';
        AutoriBTN.style.backgroundColor = 'rgb(163, 252, 103)';
        RuoliBTN.style.backgroundColor = 'rgb(0, 255, 213)';
        CuriositàBTN.style.backgroundColor = 'rgb(163, 252, 103)';
        TutorialBTN.style.backgroundColor = 'rgb(163, 252, 103)';
}

async function SezioneCuriosità() {
    Generi.classList.remove('visibile');
    Autori.classList.remove('visibile');
    Ruoli.classList.remove('visibile');
    Curiosità.classList.add('visibile');
    Tutorial.classList.remove('visibile');
    GeneriBTN.style.backgroundColor = 'rgb(163, 252, 103)';
    AutoriBTN.style.backgroundColor = 'rgb(163, 252, 103)';
    RuoliBTN.style.backgroundColor = 'rgb(163, 252, 103)';
    CuriositàBTN.style.backgroundColor = 'rgb(0, 255, 213)';
    TutorialBTN.style.backgroundColor = 'rgb(163, 252, 103)';
}

async function SezioneTutorial() {
    Generi.classList.remove('visibile');
    Autori.classList.remove('visibile');
    Ruoli.classList.remove('visibile');
    Curiosità.classList.remove('visibile');
    Tutorial.classList.add('visibile');
    GeneriBTN.style.backgroundColor = 'rgb(163, 252, 103)';
    AutoriBTN.style.backgroundColor = 'rgb(163, 252, 103)';
    RuoliBTN.style.backgroundColor = 'rgb(163, 252, 103)';
    CuriositàBTN.style.backgroundColor = 'rgb(163, 252, 103)';
    TutorialBTN.style.backgroundColor = 'rgb(0, 255, 213)';
}
