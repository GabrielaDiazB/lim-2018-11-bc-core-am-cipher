
//función que codificará el texto


function cifradoDeTexto(){
    let n; // n es el offset
    let texto = '' ;//primer texto que es ingresado
    let stringAscii = [] //aquí se va a guardar push del texto en ascii
    let codigo = []; 
    
    n = document.getElementById("offsetBox").value;
    texto = document.getElementById("textBox").value;
    
    for(let i=0; i<texto.length; i++){
        stringAscii = texto.toUpperCase().charCodeAt(i); 
          
    };
   
   
    if (stringAscii>=65 && stringAscii>=90) {
        ((stringAscii-65+n)%26+65);
        codigo.push(stringAscii.fromCharcodeAt(texto.charCodeAt(i)));
    }; 
    console.log(codigo)


    /*nuevoCodigo = nuevoCodigo.concat(texto[i]);
    document.getElementById("resultsBox").innerHTML = (nuevoCodigo.toUpperCase());*/

};

//función que decodificará el texto
//function descifradoDeTexto(){}
//Eventos para dar mostrar u ocultar divs

//Eventos para dar funcionabilidad a los botones