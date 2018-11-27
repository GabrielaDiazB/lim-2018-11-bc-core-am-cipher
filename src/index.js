
document.getElementById("cipherBox").style.display="none";
document.getElementById("results").style.display="none";

const buttonStart = document.getElementById("buttonStart");
buttonStart.addEventListener('click',functionStartApp);

function functionStartApp(){
    document.getElementById("start").style.display="none";
    document.getElementById("cipherBox").style.display="block";
    document.getElementById("results").style.display="block";
};

const resultados = document.getElementById("resultados");

const button1 = document.getElementById("cifradoDeTexto");
button1.addEventListener('click', function(event){
    event.preventDefault();
    const texto = document.getElementById("textBox").value.toUpperCase();
    const offset = document.getElementById("offsetBox").value;
    const nuevoCodigo = cipher.encode(texto,offset);
    resultados.innerHTML = nuevoCodigo;
});

const button2 = document.getElementById("descifradoDeTexto");
button2.addEventListener('click',function(event){
    event.preventDefault();
    const texto = document.getElementById("textBox").value.toUpperCase();
    const offset = document.getElementById("offsetBox").value;
    const nuevoCodigo = cipher.decode(texto,offset);
    resultados.innerHTML = nuevoCodigo;
});





