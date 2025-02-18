// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos=[];

function agregarAmigo()
{
    console.log(amigos);
    let AmigoNuevo = document.getElementById('amigo');
    
    if(AmigoNuevo.value=="")
        {
            alert("Porfavor , ingrese un nombre valido");
        }
else{
        if(amigos.includes(AmigoNuevo.value))
        {
            alert('El nombre de este amigo ya ha sido digitado');  
        }
        else{
           limpiarGanadordelsorteo();
    amigos.push(AmigoNuevo.value); 
    agregarAmigoALaLista(AmigoNuevo.value);
    limpiarcaja();
    return AmigoNuevo;    
    }
    }
}
function sortearAmigo()
{
if(amigos.length==0)
    {
        alert('No hay amigos para sortear');
    return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceAleatorio];
   limpiarListaDeAmigos();
   let resultado = document.getElementById('resultado');
   let li = document.createElement('li');
   li.textContent = 'El amigo sorteado es: ' + amigoSeleccionado;;
   resultado.appendChild(li);
   amigos=[];
}
function limpiarcaja()
{
    let valorcaja=document.querySelector('#amigo');
    valorcaja.value='';
}
function asignarTextoElemento(elemento,texto)
{
    let elementoHtml=document.querySelector(elemento);
    elementoHtml.innerHTML=texto;
return;
}
function agregarAmigoALaLista(nombreAmigo) {
    let lista = document.getElementById('listaAmigos');
    let li = document.createElement('li');
    li.textContent = nombreAmigo;
    lista.appendChild(li);
}

function limpiarListaDeAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';  
}
function limpiarGanadordelsorteo()
{
    let ganador = document.getElementById('resultado');
    ganador.innerHTML = '';  
}