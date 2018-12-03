
document.getElementById("cipherBox").style.display="none";
document.getElementById("results").style.display="none";

const buttonStart = document.getElementById("buttonStart");
buttonStart.addEventListener('click',functionStartApp);

function functionStartApp(){
    document.getElementById("start").style.display="none";
    document.getElementById("cipherBox").style.display="block";
    document.getElementById("results").style.display="block";
}

const resultados = document.getElementById("resultados");


//Botón para Cifrar+Evento
const button1 = document.getElementById("cifradoDeTexto");
button1.addEventListener('click', function(event){
    event.preventDefault();
    const text = document.getElementById("textBox").value;
    const offset = document.getElementById("offsetBox").value;
    const code = cipher.encode(offset, text);
    resultados.innerHTML = code;
});

//Botón para Descifrar+Evento
const button2 = document.getElementById("descifradoDeTexto");
button2.addEventListener('click',function(event){
    event.preventDefault();
    const text = document.getElementById("textBox").value;
    const offset = document.getElementById("offsetBox").value;
    const code = cipher.decode(offset, text);
    resultados.innerHTML = code;
});

//Botón para copiar el resultado
/*const button3 = document.getElementById('copyBtn');

button3.addEventListener('click', () => {
   const copyText = document.getElementById('resultados');
   copyText=document.execCommand('copy');
});*/





