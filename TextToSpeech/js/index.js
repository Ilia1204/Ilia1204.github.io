const { speechSynthesis } = window;
const voicesSelect = document.getElementById('voices');
const rate = document.getElementById('rate');
const pitch = document.getElementById('pitch');
const text = document.getElementById('text');

let voices = [];

//Генератор голосов
const generateVoices = () => {
    voices = speechSynthesis.getVoices();

    const voicesList = voices
        .map((voice, index) => `<option value=${index}>${voice.name} (${voice.lang})</option>`)
        .join('');
    
    voicesSelect.innerHTML = voicesList;
};

//Воспроизведение голосов
const speak = () => {
    if (speechSynthesis.speaking) {
        console.error('speechSynthesis.speaking');
        return;
    }
    
    if (text.value !== '') {
        const ssUtterance = new SpeechSynthesisUtterance(text.value);
    
        ssUtterance.addEventListener('end', (event) => console.log('ssUtterance end'))
        ssUtterance.addEventListener('error', (event) => console.log('ssUtterance error'))
        
        ssUtterance.voice = voices[voicesSelect.value];
        ssUtterance.pitch = pitch.value;
        ssUtterance.rate = rate.value;
        
        speechSynthesis.speak(ssUtterance);
    }
};

generateVoices();

document.getElementById('btn-stop').addEventListener('click', () => speechSynthesis.cancel());
document.getElementById('btn-start').addEventListener('click', speak);

rate.addEventListener('change', () => document.querySelector('.rate-value').textContent = rate.value)
pitch.addEventListener('change', () => document.querySelector('.pitch-value').textContent = pitch.value)

voicesSelect.addEventListener('change', speak);

speechSynthesis.addEventListener('voiceschanged', generateVoices);

