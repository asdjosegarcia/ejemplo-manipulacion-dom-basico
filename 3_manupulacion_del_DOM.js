const h1=document.querySelector('h1');
const form=document.querySelector('#form')
const input1=document.querySelector('#calculo1');
const input2=document.querySelector('#calculo2');
const btn=document.querySelector('#btnCalcular');
const pResult=document.querySelector('#result')

/* form.addEventListener('submit',sumarInputValues)//ejecuta el codigo cada vez que le digamos
//btn.addEventListener('click',sumarInputValues)
//agrega el evento clik a btn, y ejecuta la funcion btnOnClick al hacer click en el boton

function sumarInputValues(event){
    event.preventDefault();
    console.log(+input1.value+ +input2.value)
    const sumaInputs=parseInt(input1.value)+parseInt(input2.value);
    pResult.innerText='Resultado:'+sumaInputs
} */

btn.addEventListener('click',sumarInputValues) //forma mas recomendada :D
//agrega el evento clik a btn, y ejecuta la funcion btnOnClick al hacer click en el boton

function sumarInputValues(event){
    event.preventDefault();
    console.log(+input1.value+ +input2.value)
    const sumaInputs=parseInt(input1.value)+parseInt(input2.value);
    pResult.innerText='Resultado:'+sumaInputs
}



/*
eventos mas usados:
click: al hacer clik ejecuta una funcion
focus: al entrar a el cuadro de input ejecuta
blur: al salir del cuadro de input ejecuta
change: al salir del cuadro ejecuta si el usiario realizo cambios (este no me funciono :c)


*/
