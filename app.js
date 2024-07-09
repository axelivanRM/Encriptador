function encriptador() {
  const texto = document.querySelector("textarea").value;
  const shift = 3;
  let encriptacion = "";

  for (let i = 0; i < texto.length; i++) {
    let charCode = texto.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      encriptacion += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      encriptacion += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
    } else {
      encriptacion += texto[i];
    }
  }

  document.getElementById("textomodificado").innerText = encriptacion;
  document.getElementById("copiar").removeAttribute('hidden');
}

function desencriptador() {
  const texto = document.querySelector("textarea").value;
  const shift = 3;

  let result = "";
  for (let i = 0; i < texto.length; i++) {
    let charCode = texto.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
    } else {
      result += texto[i];
    }
  }

  document.getElementById("textomodificado").innerText = result;
  console.log(result);
  document.getElementById("copiar").removeAttribute('hidden');

}


function copiar() {
  const texto = document.getElementById("textomodificado").innerText;

  navigator.clipboard.writeText(texto);

}
