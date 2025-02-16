window.onload = function(){
let botonRojo = document.querySelector('#cajita1');
botonRojo.addEventListener('click',clickIzquierdo);

let botonAzul = document.querySelector('#cajita2');
botonAzul.addEventListener('contextmenu',clickDerecho);

let botonVerde = document.querySelector('#cajita3');
botonVerde.addEventListener('mouseover',pasarEncima);

document.addEventListener('keydown',cualquierTecla);

document.addEventListener('keydown', ultimaTecla);

document.addEventListener('keydown', contarTeclaG)

let botonCrear = document.querySelector('#button1');
botonCrear.addEventListener('click',crearLi);

crearTarjeta();
}

let contadorRojo = 1;
let contadorAzul = 1;
let contadorVerde = 1;
let contadorNaranja = 1;
let contadorLila = 1;
let contadorLi = 1;
function clickIzquierdo () {
    botonRojo = document.querySelector('#cajita1');
    botonRojo.innerHTML = contadorRojo++;
}

function clickDerecho (event){
    event.preventDefault();
    botonAzul = document.querySelector('#cajita2');
    botonAzul.innerHTML = contadorAzul++;
}

function pasarEncima (){
    botonVerde = document.querySelector('#cajita3');
    botonVerde.innerHTML = contadorVerde++;
}

function cualquierTecla() {
    botonNaranja = document.querySelector('#cajita4');
    botonNaranja.innerHTML = contadorNaranja++;
}

function ultimaTecla(event) {
    botonAmarillo = document.querySelector('#cajita5');
    botonAmarillo.innerHTML = event.key;
}

function contarTeclaG(event) {
    if ((event.key == 'g' )||(event.key == 'G')) {
        botonLila = document.querySelector('#cajita6');
        botonLila.innerHTML = contadorLila++;
    }
}

function crearLi(){
    let nuevoElemento = document.createElement('li');
    nuevoElemento.innerHTML = `este es el elemento ${contadorLi} de la lista`
    nuevoElemento.classList.add('element');

    nuevoElemento.id = `element${contadorLi}`;
    let lista = document.querySelector('#lista');
    lista.append(nuevoElemento);
    contadorLi ++;   

}

let user = { 
    nombre: "Roberto", 
    apellido: "Heras",
    edad: 35,
    aficiones: ["escalada","sushi","papiroflexia"] 
}

function crearTarjeta(){

    let tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta')
    let body = document.querySelector('body');
    body.append(tarjeta);

    let nombre = document.createElement('h1');
    nombre.innerHTML = user.nombre + ' '+user.apellido;
    tarjeta.append(nombre);

    let edad = document.createElement('h2');
    edad.innerHTML = `edad : ${user.edad}`
    tarjeta.append(edad);

    let aficiones = document.createElement('h2');
    aficiones.innerHTML = `aficiones : ${user.aficiones} `
    tarjeta.append(aficiones);
    
}