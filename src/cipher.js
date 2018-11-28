//función de cifrado de texto
const cifradoDeTexto =(texto,offset)=>{
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
    nuevoCodigo = codigo.join("");  
  }
return nuevoCodigo;
};

//función de decifrado de texto
const descifradoDeTexto = (texto,offset)=>{
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
    }
    nuevoCodigo = codigo.join("");
  }
  return nuevoCodigo;
};

window.cipher = {
  encode: cifradoDeTexto,
  decode: descifradoDeTexto
}
