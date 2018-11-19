let n; // n es el offset
let i; //letra por letra
let texto;
let string = ["ABC"]; 
let codigo = [];
let nuevoCodigo = []; //aquí rebotará el código

//función que codificará el texto
function cifradoDeTexto()
{
    for(i=0; i<string.length; i++){
        string.push((texto.charCodeAt(i)-65+1)%26+65);
        return string;
    };
    //if (condition) {} else {};
};
//función que decodificará el texto
function decifradoDeTexto(){}
//Eventos para dar mostrar u ocultar divs

//Eventos para dar funcionabilidad a los botones