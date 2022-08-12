//h1 {}    
//.clase {}
//#id {}
const h1=document.querySelector('h1')//etiqueta
const parrafito=document.querySelector('.parrafito')//clase
const pid0=document.querySelector('#pid')//id

const parrafito2=document.querySelectorAll('p')//Selecciona todas las etiquetas p
const pid=document.getElementById('pid')
const parrafito3=document.getElementsByClassName('parrafito')


const input=document.querySelector('input')

console.log(input.value)

console.log({
    h1,
    parrafito,
    pid,
    input,
    parrafito3
})

//cambia el contenido del h1 por 'patito' 
h1.innerHTML='Patito <br> cuack!'//cambia el HTMl (no recomendable usar)
h1.innerText='pato cuack!'//cambia el texto
/* h1.getAttribute('pantalla')//lee los atributos de nuestros elementos
console.log(h1.getAttribute('class'));
h1.setAttribute('class','rojo')//modifica la clase por rojo */

h1.classList.add('rojo')//funcion espefcifica para clases
h1.classList.remove('rojo')
//h1.classList.toggle('verde')//si al clase esta la remueve, si no esta la agrega
//h1.classList. contains('verde')//devuelve true o false dependiendo si tiene la clase

input.value='456'//cambia el contenido del input
const img= document.createElement('img');//crea la etiqueta de html y la mete en una variable
const img2= document.createElement('img');
img.setAttribute('src','')
img.setAttribute('src','https://fondosmil.com/fondo/67343.jpg')//agrega en el atributo src una imagen
console.log(img)

pid.innerText='';//borra el texto del pid
pid.append(img);//mete la imagen dentro de pid
pid.replaceWith(img);

