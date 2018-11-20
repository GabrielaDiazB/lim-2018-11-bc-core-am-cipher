let n; // n es el offset
let i; //letra por letra
let texto;//primer texto que es ingresado
let string = []; //aquí se va a guardar push del texto en ascii
let codigo = []; //
let nuevoCodigo = []; //aquí rebotará el código

n = document.getElementById("offsetBox").value;
texto = document.getElementById("textBox").value;
//función que codificará el texto
function cifradoDeTexto(){
    for(i=0; i<texto.length; i++){
        string.push((texto.charCodeAt(i)-65+n)%26+65);
        if (texto.charCodeAt(i) >= 65 && texto.charCodeAt(i) >= 77) {
            codigo.push(string.fromCharcodeAt(texto.charCodeAt(i)))
        };    
    };
    nuevoCodigo = codigo.join(" ");
    document.getElementById("resultsBox").innerHTML = (nuevoCodigo.toUpperCase());
   
     

};
//función que decodificará el texto
function decifradoDeTexto(){}
//Eventos para dar mostrar u ocultar divs

//Eventos para dar funcionabilidad a los botones