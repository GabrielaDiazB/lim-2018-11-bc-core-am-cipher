//función de cifrado de texto

const cifradoDeTexto =(offset, text)=>{
  let stringAscii=[];//texto en ascii codificado
  let code=[];//resultado

  for(let i=0; i<text.length; i++){

    //primera condición para cifrar letras mayúsuclas
    if (text.charCodeAt(i)>=65 && text.charCodeAt(i)<=90) { 
    stringAscii.push(((text.charCodeAt(i)-65+parseInt(offset))%26 + 65)); //cifrado en ascii
    code.push(String.fromCharCode(stringAscii[i])); //resultado final
  } 
    //segunda condición (espacios)
    else if (text.charCodeAt(i)==32) { 
    stringAscii.push(text.charCodeAt(i));
    code.push(String.fromCharCode(stringAscii[i]));
  } 
    //tercera condición para cifrar letras minúsculas
    else if (text.charCodeAt(i)>=97 && text.charCodeAt(i)<=122) {
    stringAscii.push(((text.charCodeAt(i)-97+parseInt(offset))%26 + 97)); //cifrado en ascii
    code.push(String.fromCharCode(stringAscii[i])); //resultado final
  } 
    //cuarta condición para devolver letras no especificadas tal cual
    else {stringAscii.push(text.charCodeAt(i)); 
    code.push(String.fromCharCode(stringAscii[i]))}
  }

  return code.join("");
};


//función de decifrado de texto

const descifradoDeTexto = (offset, text)=>{
  let stringAscii=[];//texto en ascii codificado
  let code=[];//resultado

  for(let i=0; i<text.length; i++){

    //Primera condición para descifrar letras mayúsculas
    if (text.charCodeAt(i)>=65 && text.charCodeAt(i)<=90) {
      stringAscii.push(((text.charCodeAt(i)-90-parseInt(offset))%26 + 90)); //descifrado en ascii
      code.push(String.fromCharCode(stringAscii[i])); //resultado final
    } 
    //Segunda condición (espacios)
      else if (text.charCodeAt(i)==32) {
      stringAscii.push(text.charCodeAt(i));
      code.push(String.fromCharCode(stringAscii[i]));
    } 
    //Tercera condición para descifrar letras minúsculas
      else if (text.charCodeAt(i)>=97 && text.charCodeAt(i)<=122){
      stringAscii.push(((text.charCodeAt(i)-122-parseInt(offset))%26 + 122)); //descifrado en ascii
      code.push(String.fromCharCode(stringAscii[i])); //resultado final
    }
    //Cuarta condición para devolver letras no especificadas tal cual
      else {stringAscii.push(text.charCodeAt(i));
      code.push(String.fromCharCode(stringAscii[i]))}
  }

  return code.join("");
};

window.cipher = {
  encode: cifradoDeTexto,
  decode: descifradoDeTexto
}
