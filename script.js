const criptografar = () => {
  let textCriptografia = document.getElementById("criptografar-text");
  let text = textCriptografia.value;

  let nenhumaMensagem = document.querySelector('.resultado')
  nenhumaMensagem.removeChild(nenhumaMensagem.lastChild)

  let button = document.createElement('button')
  button.textContent = "Copiar";
  button.style.height = "20px"
  button.style.backgroundColor = "#0a3871"
  button.style.border = "none"
  button.style.outline = "none"
  button.style.color = "#fff"
  button.style.width = "70%"
  button.style.margin = "0 auto"

  button.addEventListener('click', () => {
    console.log('clicou')
  })
  

  text = text.replace(/e/g, "enter");
  text = text.replace(/i/g, "imes");
  text = text.replace(/o/g, "ober");
  text = text.replace(/u/g, "ufat");
  text = text.replace(/a/g, "ai");
  nenhumaMensagem.innerHTML = text;
  nenhumaMensagem.appendChild(button)
};

const descriptografar = () => {
  let nenhumaMensagem = document.querySelector('.resultado')

  let textDescriptografia = document.getElementById("criptografar-text");
  let text = textDescriptografia.value;

  text = text.replace(/enter/g, "e");
  text = text.replace(/imes/g, "i");
  text = text.replace(/ober/g, "o");
  text = text.replace(/ufat/g, "u");
  text = text.replace(/ai/g, "a");

  nenhumaMensagem.innerHTML = text;
};

const copiar = () => {
  console.log('copiou')
}
