const button = document.querySelector('.btn-container button');
const factText = document.querySelector('.container .fact');
const sourceText = document.querySelector('.container span');
var splitText  = "";
var char = 0;
var timer = 0;

button.addEventListener('click', getFact);

async function getFact() {
    const factData = await fetch('https://uselessfacts.jsph.pl/random.json?language=en')
    const factObject = await factData.json();
    factText.innerHTML = factObject.text;
    sourceText.innerHTML = factObject.source;
    factText.textContent = "";

    splitText = factObject.text;
    for (let i = 0; i < splitText.length; i++) {
        factText.innerHTML += "<span class='animation'>" + splitText[i] + "</span>";
    }

    char = 0;
    timer = setInterval(onTick, 50);
}

function onTick() {
    const span = factText.querySelectorAll('.animation')[char];
    span.classList.add('fade');
    char++;

    if(char === splitText.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}