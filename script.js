const verificarTexto = (texto) => {
  const regex = /^[a-z\u00E0-\u00FC\s]+$/;
  return regex.test(texto);
};

const criptografar = () => {
  let textCriptografia = document.getElementById("criptografar-text");
  let text = textCriptografia.value;

  if (!verificarTexto(text)) {
    alert("Por favor, digite apenas letras minúsculas e sem acento.");
    return;
  }

  let nenhumaMensagem = document.querySelector(".resultado");
  nenhumaMensagem.removeChild(nenhumaMensagem.lastChild);

  text = text.replace(/e/g, "enter");
  text = text.replace(/i/g, "imes");
  text = text.replace(/o/g, "ober");
  text = text.replace(/u/g, "ufat");
  text = text.replace(/a/g, "ai");
  nenhumaMensagem.innerHTML = text;
};

const descriptografar = () => {
  let nenhumaMensagem = document.querySelector(".resultado");

  let textDescriptografia = document.getElementById("criptografar-text");
  let text = textDescriptografia.value;

  if (!verificarTexto(text)) {
    alert("Por favor, digite apenas letras minúsculas e sem acento.");
    return;
  }

  text = text.replace(/enter/g, "e");
  text = text.replace(/imes/g, "i");
  text = text.replace(/ober/g, "o");
  text = text.replace(/ufat/g, "u");
  text = text.replace(/ai/g, "a");
  nenhumaMensagem.innerHTML = text;
  nenhumaMensagem.appendChild(button);
};

const copiar = () => {
  let resultado = document.querySelector(".resultado");
  let text = resultado.textContent;
  let tempInput = document.createElement("textarea");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  tempInput.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  text = '';
  alert("Texto copiado para a área de transferência!");
};