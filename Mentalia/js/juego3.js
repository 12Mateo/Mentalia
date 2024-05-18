const quizData = [
    {
        question: "¿Cuál es la capital de Francia?",
        options: ["Madrid", "París", "Roma", "Londres"],
        correctAnswer: "París"
    }, 
    {
        question: "¿Quién escribió 'Don Quijote de la Mancha'?",
        options: ["Miguel de Cervantes", "Gabriel García Márquez", "William Shakespeare", "Federico García Lorca"],
        correctAnswer: "Miguel de Cervantes"
    },
    {
        question: "¿En qué año se produjo la Independencia de Estados Unidos?",
        options: ["1776", "1812", "1789", "1821"],
        correctAnswer: "1776"
    },
    {
        question: "¿Cuál es el río más largo del mundo?",
        options: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"],
        correctAnswer: "Amazonas"
    },
    {
        question: "¿Quién pintó la 'Mona Lisa'?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question: "¿Cuál es la montaña más alta del mundo?",
        options: ["Monte Everest", "Monte Kilimanjaro", "Monte McKinley", "Monte Aconcagua"],
        correctAnswer: "Monte Everest"
    },
    {
        question: "¿Quién es el autor de 'Cien años de soledad'?",
        options: ["Gabriel García Márquez", "Pablo Neruda", "Mario Vargas Llosa", "Jorge Luis Borges"],
        correctAnswer: "Gabriel García Márquez"
    },
    {
        question: "¿Cuál es el país más grande del mundo por territorio?",
        options: ["Rusia", "China", "Estados Unidos", "Canadá"],
        correctAnswer: "Rusia"
    },
    {
        question: "¿Quién fue el primer presidente de Estados Unidos?",
        options: ["George Washington", "Thomas Jefferson", "John Adams", "Abraham Lincoln"],
        correctAnswer: "George Washington"
    },
    {
        question: "¿Cuál es el océano más grande del mundo?",
        options: ["Pacífico", "Atlántico", "Índico", "Ártico"],
        correctAnswer: "Pacífico"
    },
    {
        question: "¿Cuál es la capital de Italia?",
        options: ["Madrid", "Roma", "París", "Berlín"],
        correctAnswer: "Roma"
    },
    {
        question: "¿En qué año comenzó la Segunda Guerra Mundial?",
        options: ["1939", "1941", "1945", "1943"],
        correctAnswer: "1939"
    },
    {
        question: "¿Quién fue el primer hombre en pisar la luna?",
        options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"],
        correctAnswer: "Neil Armstrong"
    },
    {
        question: "¿Cuál es el animal más grande del mundo?",
        options: ["Elefante africano", "Ballena azul", "Tiburón ballena", "Oso polar"],
        correctAnswer: "Ballena azul"
    },
    {
        question: "¿Cuál es el metal más caro del mundo?",
        options: ["Platino", "Oro", "Rodio", "Rutenio"],
        correctAnswer: "Rodio"
    },
    {
        question: "¿Cuál es la capital de Australia?",
        options: ["Sídney", "Melbourne", "Brisbane", "Canberra"],
        correctAnswer: "Canberra"
    },
    {
        question: "¿Quién es el autor de 'El Principito'?",
        options: ["Antoine de Saint-Exupéry", "J.K. Rowling", "Charles Dickens", "Mark Twain"],
        correctAnswer: "Antoine de Saint-Exupéry"
    },
    {
        question: "¿Cuál es el desierto más grande del mundo?",
        options: ["Desierto del Sahara", "Desierto de Kalahari", "Desierto de Gobi", "Desierto de Atacama"],
        correctAnswer: "Desierto del Sahara"
    },
    {
        question: "¿Quién fue el primer hombre en la historia en orbitar la Tierra?",
        options: ["Yuri Gagarin", "John Glenn", "Neil Armstrong", "Alan Shepard"],
        correctAnswer: "Yuri Gagarin"
    },
    {
        question: "¿Cuál es el instrumento musical más antiguo del mundo?",
        options: ["Flauta", "Lira", "Tambor", "Arpa"],
        correctAnswer: "Flauta"
    },
    {
        question: "¿Quién es la autora de la saga 'Harry Potter'?",
        options: ["J.K. Rowling", "Stephenie Meyer", "J.R.R. Tolkien", "George R.R. Martin"],
        correctAnswer: "J.K. Rowling"
    },
    {
        question: "¿Cuál es la montaña más alta de Sudamérica?",
        options: ["Monte Aconcagua", "Monte Fitz Roy", "Monte Huascarán", "Monte Pissis"],
        correctAnswer: "Monte Aconcagua"
    },
    {
        question: "¿Quién escribió 'Romeo y Julieta'?",
        options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Oscar Wilde"],
        correctAnswer: "William Shakespeare"
    },

    {
        question: "¿Cuál es la isla más grande del mundo?",
        options: ["Groenlandia", "Australia", "Borneo", "Madagascar"],
        correctAnswer: "Groenlandia"
    },
    {
        question: "¿En qué año finalizó la Primera Guerra Mundial?",
        options: ["1918", "1914", "1921", "1919"],
        correctAnswer: "1918"
    },
    {
        question: "¿Cuál es la capital de España?",
        options: ["Madrid", "Barcelona", "Sevilla", "Valencia"],
        correctAnswer: "Madrid"
    },
    {
        question: "¿Quién escribió 'Orgullo y prejuicio'?",
        options: ["Jane Austen", "Charlotte Brontë", "Emily Brontë", "Leo Tolstoy"],
        correctAnswer: "Jane Austen"
    },
    {
        question: "¿En qué año se fundó Google?",
        options: ["1996", "1998", "2000", "2002"],
        correctAnswer: "1998"
    },
    {
        question: "¿Cuál es el país más poblado del mundo?",
        options: ["China", "India", "Estados Unidos", "Brasil"],
        correctAnswer: "China"
    },
    {
        question: "¿Quién escribió 'El gran Gatsby'?",
        options: ["F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain", "Charles Dickens"],
        correctAnswer: "F. Scott Fitzgerald"
    },
    {
        question: "¿En qué año se estrenó la película 'El Padrino'?",
        options: ["1972", "1974", "1976", "1978"],
        correctAnswer: "1972"
    },
    {
        question: "¿Cuál es el metal más liviano?",
        options: ["Litio", "Aluminio", "Titanio", "Magnesio"],
        correctAnswer: "Litio"
    },
    {
        question: "¿Quién escribió '1984'?",
        options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Philip K. Dick"],
        correctAnswer: "George Orwell"
    },
    {
        question: "¿Cuál es la ciudad más poblada del mundo?",
        options: ["Tokio", "Shanghái", "Mumbai", "Sao Paulo"],
        correctAnswer: "Tokio"
    },
    {
        question: "¿Quién descubrió América?",
        options: ["Vasco da Gama", "Amerigo Vespucci", "Fernando de Magallanes", "Cristóbal Colón"],
        correctAnswer: "Cristóbal Colón"
    },
    {
        question: "¿Cuál es la capital de Canadá?",
        options: ["Toronto", "Montreal", "Ottawa", "Vancouver"],
        correctAnswer: "Ottawa"
    },
    {
        question: "¿Quién fue el primer hombre en el espacio?",
        options: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "Alan Shepard"],
        correctAnswer: "Yuri Gagarin"
    },
    {
        question: "¿En qué año se fundó Apple Inc.?",
        options: ["1974", "1976", "1978", "1980"],
        correctAnswer: "1976"
    },
    {
        question: "¿Cuál es el metal más abundante en la corteza terrestre?",
        options: ["Aluminio", "Hierro", "Oro", "Plata"],
        correctAnswer: "Aluminio"
    },
    {
        question: "¿Quién escribió 'La Odisea'?",
        options: ["Homero", "Virgilio", "Sófocles", "Eurípides"],
        correctAnswer: "Homero"
    },
    {
        question: "¿En qué continente se encuentra el río Nilo?",
        options: ["África", "Asia", "Europa", "América"],
        correctAnswer: "África"
    },
    {
        question: "¿Cuál es el elemento químico con el número atómico 1?",
        options: ["Hidrógeno", "Helio", "Litio", "Oxígeno"],
        correctAnswer: "Hidrógeno"
    },
    {
        question: "¿Quién pintó 'La noche estrellada'?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correctAnswer: "Vincent van Gogh"
    },
    {
        question: "¿En qué país se encuentra la Torre Eiffel?",
        options: ["Francia", "Italia", "España", "Alemania"],
        correctAnswer: "Francia"
    },
    {
        question: "¿Cuál es la moneda oficial de Japón?",
        options: ["Yen", "Dólar", "Euro", "Rupia"],
        correctAnswer: "Yen"
    }
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const shuffledQuizData = shuffleArray(quizData);

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');

function displayQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    
    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(optionElement);
    });
}



function checkAnswer(option) {
    const currentQuestion = quizData[currentQuestionIndex];
    const correctOption = currentQuestion.correctAnswer;

    const optionElements = document.querySelectorAll('.option');
    optionElements.forEach(element => {
        element.classList.remove('correct', 'incorrect');
        if (element.textContent === correctOption) {
            element.classList.add('correct');
        } else {
            element.classList.add('incorrect');
        }
        element.onclick = null; 
    });

    if (option === correctOption) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        nextButton.style.display = 'block';
    } else {
        showResult();
    }
}


nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < quizData.length) {
        nextButton.style.display = 'none';
        displayQuestion();
    }
});



function showResult() {
    const percentageScore = (score / quizData.length) * 100;
    resultContainer.style.display = 'block';
    scoreElement.textContent = `Tu puntaje es ${percentageScore.toFixed(2)}%`;
}


displayQuestion();