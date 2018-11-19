let n; // n es el offset
let letras;
let texto;
let string = []; 
let codigo = [];
let nuevoCodigo = []; //aquí rebotará el código

//función que codificará el texto
function cifradoDeTexto()
{
    for(let letras=0; letras<string.length; letras++){
        (texto.charCodeAt(letras)-65+n)%26+65
    }
};
//función que decodificará el texto