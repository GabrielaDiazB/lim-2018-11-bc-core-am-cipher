
document.getElementById("cipher-box").style.display="none";
document.getElementById("results").style.display="none";

const buttonStart = document.getElementById("button-start");
buttonStart.addEventListener('click',functionStartApp);

function functionStartApp(){
    document.getElementById("start").style.display="none";
    document.getElementById("cipher-box").style.display="block";
    document.getElementById("results").style.display="block";
}

const resultados = document.getElementById("resultados");


//Botón para Cifrar+Evento
const button1 = document.getElementById("cifrado-de-texto");
button1.addEventListener('click', function(event){
    event.preventDefault();
    const text = document.getElementById("text-box").value;
    const offset = document.getElementById("offset-box").value;
    const code = cipher.encode(offset, text);
    resultados.innerHTML = code;
});

//Botón para Descifrar+Evento
const button2 = document.getElementById("descifrado-de-texto");
button2.addEventListener('click',function(event){
    event.preventDefault();
    const text = document.getElementById("text-box").value;
    const offset = document.getElementById("offset-box").value;
    const code = cipher.decode(offset, text);
    resultados.innerHTML = code;
});

//Botón para copiar el resultado
const button3 = document.getElementById('copy-btn');

button3.addEventListener('click', () => {
   const copyText = document.getElementById("resultados");
   copyText.select();
   document.execCommand("copy");
});





