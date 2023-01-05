const button = document.querySelector('.btn-container button');
const factText = document.querySelector('.container .fact');
const sourceText = document.querySelector('.container span');

button.addEventListener('click', getFact);

async function getFact() {
    const factData = await fetch('https://uselessfacts.jsph.pl/random.json?language=en')
    const factObject = await factData.json();
    factText.innerHTML = factObject.text;
    sourceText.innerHTML = factObject.source;
}
