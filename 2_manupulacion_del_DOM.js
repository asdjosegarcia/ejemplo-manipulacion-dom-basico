const h1=document.querySelector('h1');
const input1=document.querySelector('#calculo1');
const input2=document.querySelector('#calculo2');
const btn=document.querySelector('#btnCalcular');
const pResult=document.querySelector('#result')

function btnOnClick(){
   /*  input1=parseInt(input1.value)
    input2=parseInt(input2.value)  */
    console.log(+input1.value+ +input2.value)
    const sumaInputs=parseInt(input1.value)+parseInt(input2.value);
    pResult.innerText='Resultado:'+sumaInputs
}
