
let arrayPalabras =["GUITARRA", "ELEFANTE", "TURQUESA", "MARIELA", "TECLADO", "INGLATERRA","PIZZA", "COCODRILO", "AMARILLO", "CARLOS", "MOUSE","CAMISETA", "LEON", "VERDE", "ANA", "RATÓN", 
"CELULAR", "LIBRO", "ROJO", "DAVID", "PERRO", "CASA", "AZUL", "MIGUEL", "GATO", "NARANJA","FLOR", "BLANCO", "SARA", "JIRAFA", "NATACION"];

let ayudas = [
    "Instrumento Musical",
    "Animal de la selva",
    "Es un color entre el azul y el verde",
    "Nombre de mujer",
    "Hardware de computadora",
    "Es un Pais",
    "Comida italiana popular",
    "Reptil semiacuático",
    "Color primario",
    "Nombre de hombre",
    "Dispositivo de entrada de computadora",
    "Prenda de vestir",
    "Rey de la selva",
    "Color de la naturaleza",
    "Nombre de mujer",
    "Roedor pequeño",
    "Dispositivo móvil",
    "Objeto para leer",
    "Color intenso",
    "Nombre de hombre",
    "Mascota popular",
    "Lugar de residencia",
    "Color del cielo",
    "Nombre de hombre",
    "Mascota doméstica",
    "Color de fruta cítrica",
    "Planta con flores",
    "Color básico",
    "Nombre de mujer",
    "Animal alto con largo cuello",
    "Deporte acuático"
]
//variable que guarda la cantidad de palabras ya jugadas
let cantPalabrasJugadas = 0;

//Variable que guarda la cantidad de intentos restantes
let intentosRestantes = 10;

//variable que guarda el indice de la Palabra actual
let posActual;

let arrayPalabraActual = [];

//Cantidad de de letras acertadas por cada jugada
let cantidadAcertadas = 0;

//Arreglo que guarda cada letra en divs
let divsPalabraActual = [];

//Cantidad de palabras que debe acertar en cada jugada.
let totalQueDebeAcertar;

//Funcion que carga la  palabra nueva para jugar
function cargarNuevaPalabra() {
    // Aumento en uno cantidad de palabras jugadas y controlo si llegó a su límite
    location.reload 
    cantPalabrasJugadas++;
    if (cantPalabrasJugadas > 6) {
        // Volvemos a cargar el arreglo
        arrayPalabras = [
            "GUITARRA", "ELEFANTE", "TURQUESA", "MARIELA", "TECLADO", "INGLATERRA","PIZZA", "COCODRILO", "AMARILLO", "CARLOS", "MOUSE","CAMISETA", "LEON", "VERDE", "ANA", "RATÓN", 
            "CELULAR", "LIBRO", "ROJO", "DAVID", "PERRO", "CASA", "AZUL", "MIGUEL", "GATO", "NARANJA","FLOR", "BLANCO", "SARA", "JIRAFA", "NATACION"
        ];
        ayudas = [
            "Instrumento Musical",
            "Animal de la selva",
            "Es un color",
            "Nombre de mujer",
            "Hardware de computadora",
            "Es un Pais",
            "Comida italiana popular",
            "Reptil semiacuático",
            "Color primario",
            "Nombre de hombre",
            "Dispositivo de entrada de computadora",
            "Prenda de vestir",
            "Rey de la selva",
            "Color de la naturaleza",
            "Nombre de mujer",
            "Roedor pequeño",
            "Dispositivo móvil",
            "Objeto para leer",
            "Color intenso",
            "Nombre de hombre",
            "Mascota popular",
            "Lugar de residencia",
            "Color del cielo",
            "Nombre de hombre",
            "Mascota doméstica",
            "Color de fruta cítrica",
            "Planta con flores",
            "Color básico",
            "Nombre de mujer",
            "Animal alto con largo cuello",
            "Deporte acuático"
        ];
    }
}


    //Selecciono una posicion random
    posActual = Math.floor(Math.random()*arrayPalabras.length);

    //Tomamos la palabra nueva
    let palabra = arrayPalabras[posActual];
    totalQueDebeAcertar = palabra.length;
    cantidadAcertadas = 0;

    //Guardamos la palabra que esta en formato string en un arreglo
    arrayPalabraActual = palabra.split('');

    //limpiamos los contenedores que quedaron cargadas con la palabra anterior
    document.getElementById("palabra").innerHTML = "";
    document.getElementById("letrasIngresadas").innerHTML = "";

    //Cargamos la cantidad de divs (letras) que tiene la palabra
    for(i=0;i<palabra.length;i++){
        var divLetra = document.createElement("div");
        divLetra.className = "letra";
        document.getElementById("palabra").appendChild(divLetra);
    }

    //Selecciono todos los divs de la palabra
    divsPalabraActual = document.getElementsByClassName("letra");

    //setemos los intentos
    intentosRestantes = 10;
    document.getElementById("intentos").innerHTML = intentosRestantes;

    //Cargamos la ayuda de la pregunta
    document.getElementById("ayuda").innerHTML = ayudas[posActual];

   //elimino el elemento ya seleccionado del arreglo.
    //splice(posActual,1): A partir de la posicon posActual elimino 1 elemento
    arrayPalabras.splice(posActual,1);
    ayudas.splice(posActual,1);



//Llamada para cargar la primera palabra del juego
cargarNuevaPalabra();

//Detecto la tecla que el usuario presion
document.addEventListener("keydown", event => {
    //Controlo si la tecla presionada es una letra
    if(isLetter(event.key)){
        //Tomo las letras ya ingresadas hasta el momento
        let letrasIngresadas = document.getElementById("letrasIngresadas").innerHTML;
        letrasIngresadas = letrasIngresadas.split('');
        //controlo si la letra presionada ya ha sido ingresada
       
        if(letrasIngresadas.lastIndexOf(event.key.toUpperCase()) === -1){
            //variable bandera para saber si la letra ingresada esta en la palabra a descrubir
            let acerto = false;

            //Recorro el arreglo que ocntiene la palabra para verificar si la palabra ingresada esta
            for(i=0;i<arrayPalabraActual.length;i++){
                if(arrayPalabraActual[i] == event.key.toUpperCase()){//acertó
                    divsPalabraActual[i].innerHTML = event.key.toUpperCase();
                    acerto = true;
                    //Aumento en uno la cantidad de letras acertadas 
                    cantidadAcertadas = cantidadAcertadas + 1;
                }
            }
        
            //Controlo si acerto al menos una letra
            if(acerto==true){
                //controlamos si ya acerto todas
                if(totalQueDebeAcertar == cantidadAcertadas){
                    //asigno a cada div de la palabra la clase pintar para ponerlo en verde cada div
                    for(i=0;i<arrayPalabraActual.length;i++){
                        divsPalabraActual[i].className="letra pintar";
                    }
                }
            }else{
                //No acerto, decremento los intentos restantes
                intentosRestantes = intentosRestantes - 1;
                document.getElementById("intentos").innerHTML = intentosRestantes;

                //controlamos si ya acabo todas la oportunidades
                if(intentosRestantes<=0){
                    for(i=0;i<arrayPalabraActual.length;i++){
                        divsPalabraActual[i].className="letra pintarError";
                    }
                }
            }

            //agrega la letra ingresada a las letras ya ingresadas que se visualizan
            document.getElementById("letrasIngresadas").innerHTML += event.key.toLocaleUpperCase() + " - ";
        }
    }
});

//Funcion que me determina si un caracter es una letra
function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}