

const button1 = document.getElementById("cifradoDeTexto");
button1.addEventListener('click', cifradoDeTexto);

function cifradoDeTexto(){
    let offset = document.getElementById("offsetBox").value;
    let texto = document.getElementById("textBox").value.toUpperCase();
    let stringAscii=[];
    let codigo=[];
    let nuevoCodigo=[];

    for(let i=0; i<texto.length; i++){

        if (texto.charCodeAt(i)>=65 && texto.charCodeAt(i)<=90) {
            stringAscii.push(((texto.charCodeAt(i)-65+offset)%26 + 65));
            codigo.push(String.fromCharCode(stringAscii[i]));
        };
    };
    nuevoCodigo = codigo.join("");
    console.log(nuevoCodigo);
};



/*function decifradoDeTexto(offset,texto){


    for(let j=0; j<texto.length;j++){
        
    };
    if (stringAscii>=65 && stringAscii<=90){

        
    }

};*/

