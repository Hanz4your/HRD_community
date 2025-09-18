function Menujuigdimas() {
    alert("Menuju instagram Dimas");
}

function Menujuigharis() {
    alert("Menuju instagram haris");
}

function Menujuigtoro() {
    alert("Menuju instagram toro");
}

function qrbayar() {
    alert("Hati-Hati Penipuan!!!! QR yang asli hanya atas nama HRD Community");
}

function showText(elementId) {
    const textElement = document.getElementById(elementId);
    textElement.classList.add('visible');
}

function hideText(elementId) {
    const textElement = document.getElementById(elementId);
    textElement.classList.remove('visible');
}

const resetButton = document.getElementById('button');
const iframe = document.querySelector('iframe[name="nama"]');
const initialSrc = 'editingfoto/bg-iframe.html';
resetButton.addEventListener('click', () => {
    iframe.src = initialSrc;
});