const buttonStart = document.getElementById("buttonStart");
buttonStart.addEventListener('click',functionStartApp);
const button1 = document.getElementById("cifradoDeTexto");
button1.addEventListener('click', cifradoDeTexto);
const button2 = document.getElementById("decifradoDeTexto");
button2.addEventListener('click', decifradoDeTexto);
const resultados = document.getElementById("resultados");
document.getElementById("cipherBox").style.display="none";
document.getElementById("results").style.display="none";

function functionStartApp(){
    document.getElementById("start").style.display="none";
    document.getElementById("cipherBox").style.display="block";
    document.getElementById("results").style.display="block";
}


function cifradoDeTexto(){
    let offset = document.getElementById("offsetBox").value;
    let texto = document.getElementById("textBox").value.toUpperCase();
    let stringAscii=[];
    let codigo=[];
    let nuevoCodigo=[];
    for(let i=0; i<texto.length; i++){

        if (texto.charCodeAt(i)>=65 && texto.charCodeAt(i)<=90) {
            stringAscii.push(((texto.charCodeAt(i)-65+parseInt(offset))%26 + 65));
            codigo.push(String.fromCharCode(stringAscii[i]));
        } else if (texto.charCodeAt(i)===32){
            stringAscii.push(texto.charCodeAt(i));
            codigo.push(String.fromCharCode(stringAscii[i]));
        }
        
    };
    nuevoCodigo = codigo.join("");
    resultados.innerHTML = nuevoCodigo;
    //console.log(nuevoCodigo)
}; 

function decifradoDeTexto(){
    let offset = document.getElementById("offsetBox").value;
    let texto = document.getElementById("textBox").value.toUpperCase();
    let stringAscii=[];
    let codigo=[];
    let nuevoCodigo=[];

    for(let i=0; i<texto.length; i++){

        if (texto.charCodeAt(i)>=65 && texto.charCodeAt(i)<=90) {
            stringAscii.push(((texto.charCodeAt(i)-90-parseInt(offset))%26 + 90));
            codigo.push(String.fromCharCode(stringAscii[i]));
        } else if (texto.charCodeAt(i)===32){
            stringAscii.push(texto.charCodeAt(i));
            codigo.push(String.fromCharCode(stringAscii[i]));
        };
    };
    nuevoCodigo = codigo.join("");
    resultados.innerHTML = nuevoCodigo;
    //console.log(nuevoCodigo);
};

