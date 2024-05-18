const imageData = [
    { id: 1, nombre: "Argentina", archivo: "images/Argentina.png", pista: "Messi." },
    { id: 2, nombre: "Brasil", archivo: "images/Brasil.png", pista: "Es famoso por el futbol." },
    { id: 3, nombre: "Canada", archivo: "images/Canadá.png", pista: "Es conocido por su jarabe de arce." },
    { id: 4, nombre: "Chile", archivo: "images/Chile.png", pista: "Tiene una costa larga y angosta en el Pacífico." },
    { id: 5, nombre: "Colombia", archivo: "images/Colombia.png", pista: "Es famoso por su café." },
    { id: 6, nombre: "Cuba", archivo: "images/Cuba.png", pista: "Es conocida por su música salsa." },
    { id: 7, nombre: "Ecuador", archivo: "images/Ecuador.png", pista: "Lleva el nombre de una línea imaginaria." },
    { id: 8, nombre: "EEUU", archivo: "images/EEUU.png", pista: "También se le conoce como Gringolandia." },
    { id: 9, nombre: "Noruega", archivo: "images/Norway.png", pista: "Es famoso por sus fiordos." },
    { id: 10, nombre: "Republica Dominicana", archivo: "images/RD.png", pista: "Es conocida por sus playas caribeñas y comparte isla con Haiti." },
    { id: 11, nombre: "Venezuela", archivo: "images/Venezuela.png", pista: "Es hogar del Salto Ángel(una cascada)." },
    { id: 12, nombre: "Rusia", archivo: "images/Rusia.png", pista: "Es el país más grande del mundo." },
    { id: 13, nombre: "Reino Unido", archivo: "images/Reino Unido.png", pista: "Incluye países como Inglaterra, Escocia, Gales e Irlanda del Norte." },
    { id: 14, nombre: "Portugal", archivo: "images/Portugal.png", pista: "Es famoso por sus pasteles de nata." },
    { id: 15, nombre: "Mexico", archivo: "images/México.png", pista: "Es conocido por tener fondo amarillo y tacos." },
    { id: 16, nombre: "Japon", archivo: "images/Japón.png", pista: "Es conocido por su tecnología avanzada y cultura tradicional." },
    { id: 17, nombre: "Italia", archivo: "images/Italia.png", pista: "Es famosa por su Pizza." },
    { id: 18, nombre: "India", archivo: "images/India.png", pista: "Supero a China como el pais con mas habitantes." },
    { id: 19, nombre: "Francia", archivo: "images/Francia.png", pista: "Es famosa por Mbappe." },
    { id: 20, nombre: "España", archivo: "images/España.png", pista: "Es conocida por robar el oro de America." },
    { id: 21, nombre: "Corea del sur", archivo: "images/Corea del Sur.png", pista: "Es famosa por su tecnología, K-pop y su gastronomía." },
    { id: 22, nombre: "Australia", archivo: "images/Australia.png", pista: "Es conocida por (supuestamente) tener insectos gigantes." },
    { id: 23, nombre: "Arabia Saudita", archivo: "images/Arabia Saudita.png", pista: "Es conocida por sus reservas de petróleo y porque Cristiano Ronaldo esta alla." },
    { id: 24, nombre: "Alemania", archivo: "images/Alemania.png", pista: "Fue la mayor potencia entre 1939 y 1945." }
];

let currentImageIndex = 0;
let score = 0;
let correctStreak = 0;
let timerInterval;
const timerDuration = 10; // Duración del temporizador en segundos

function loadRandomImage() {
    const previousIndex = currentImageIndex;
    currentImageIndex = getRandomIndex();
    if (currentImageIndex === previousIndex) {
        currentImageIndex = getRandomIndex(); // Si se repite la imagen, obtén otra
    }

    const imageElement = document.getElementById('imagen');
    const hintElement = document.getElementById('pista');
    imageElement.src = imageData[currentImageIndex].archivo;
    hintElement.textContent = `Pista: ${imageData[currentImageIndex].pista}`;
    document.getElementById('respuesta').value = '';
}

function getRandomIndex() {
    return Math.floor(Math.random() * imageData.length);
}

function startTimer() {
    let timeLeft = timerDuration;
    const timerElement = document.getElementById('tiempo-restante');

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endGame();
        } else {
            timerElement.textContent = timeLeft;
            timeLeft--;
        }
    }, 1000); // Actualiza el temporizador cada segundo
}


function verifyResponse() {
    const userResponse = document.getElementById('respuesta').value.trim().toLowerCase();
    const correctAnswer = imageData[currentImageIndex].nombre.toLowerCase();
    const messageElement = document.getElementById('mensaje');

    console.log("Respuesta del usuario:", userResponse);
    console.log("Respuesta correcta:", correctAnswer);

    if (userResponse === correctAnswer) {
        score += 10;
        correctStreak++;
        messageElement.textContent = "Incorrecto!";
        if (correctStreak >= 3) {
            score += 5;
        }
        loadRandomImage();
    } if (userResponse != correctAnswer) {
        score -= 10;
        messageElement.textContent = "Correcto!";
        loadRandomImage();
    }
}
function showScore() {
    const scoreElement = document.getElementById('puntuacion');
    scoreElement.textContent = `Puntuación: ${score}`;
}

function endGame() {
    clearInterval(timerInterval);
    const scoreElement = document.getElementById('puntuacion');
    const correctPercentage = Math.round((score / (imageData.length * 10)) * 100);
    scoreElement.textContent = `Puntuación Final: ${score}. Porcentaje de aciertos: ${correctPercentage}%`;
    document.getElementById('respuesta').disabled = true;
    document.getElementById('submit-button').disabled = true;
    document.getElementById('restart').style.display = 'block';
}

function restartGame() {
    score = 0;
    correctStreak = 0;
    document.getElementById('respuesta').disabled = false;
    document.getElementById('submit-button').disabled = false;
    document.getElementById('restart').style.display = 'none';
    loadRandomImage();
    showScore();
    document.getElementById('mensaje').textContent = '';
    startTimer();
}

document.getElementById('submit-button').addEventListener('click', verifyResponse);
document.getElementById('restart').addEventListener('click', restartGame);

// Inicia el juego al cargar la página
loadRandomImage();
showScore();
startTimer();