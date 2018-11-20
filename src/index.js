

function cifradoDeTexto(offset,texto){
    let stringAscii=[];
    let codigo=[];
    

    for(let i=0; i<texto.length; i++){
        texto.toUpperCase();
        stringAscii = texto.charCodeAt(i);

    };
    if (stringAscii>=65 && stringAscii<=90) {
        ((stringAscii-65+offset)%26+65);
        codigo.push(stringAscii.fromCharcodeAt(texto.charCodeAt(i)));
    };


};
function decifradoDeTexto(offset,texto){


    for(let j=0; j<texto.length;j++){
        
    };
    if (stringAscii>=65 && stringAscii<=90){

        
    }

};












/*function cifradoDeTexto(){
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


    nuevoCodigo = nuevoCodigo.concat(texto[i]);
    document.getElementById("resultsBox").innerHTML = (nuevoCodigo.toUpperCase());*/

};


