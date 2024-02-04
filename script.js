const criptografar = () => {
  let textCriptografia = document.getElementById("criptografar-text");
  let text = textCriptografia.value;

  let nenhumaMensagem = document.querySelector(".resultado");
  nenhumaMensagem.removeChild(nenhumaMensagem.lastChild);

  let button = document.createElement("button");
  button.textContent = "Copiar";
  button.style.backgroundColor = "#0a3871";
  button.style.border = "none";
  button.style.outline = "none";
  button.style.color = "#fff";
  button.style.width = "70%";
  button.style.margin = "0 auto";
  button.style.padding = "15px 25px";
  button.style.fontSize = "18px";
  button.style.borderRadius = "24px";
  button.style.cursor = "pointer";
  button.style.marginTop = "150%";

  button.addEventListener("click", () => {
    let textoParaCopiar = document.createElement("textarea");
    textoParaCopiar.value = nenhumaMensagem.textContent;
    document.body.appendChild(textoParaCopiar);
    textoParaCopiar.select();
    document.execCommand("copy");
    document.body.removeChild(textoParaCopiar);
  });

  text = text.replace(/e/g, "enter");
  text = text.replace(/i/g, "imes");
  text = text.replace(/o/g, "ober");
  text = text.replace(/u/g, "ufat");
  text = text.replace(/a/g, "ai");
  nenhumaMensagem.innerHTML = text;
  nenhumaMensagem.appendChild(button);
};

const descriptografar = () => {
  let nenhumaMensagem = document.querySelector(".resultado");

  let textDescriptografia = document.getElementById("criptografar-text");
  let text = textDescriptografia.value;

  let button = document.createElement("button");
  button.textContent = "Copiar";
  button.style.backgroundColor = "#0a3871";
  button.style.border = "none";
  button.style.outline = "none";
  button.style.color = "#fff";
  button.style.width = "70%";
  button.style.margin = "0 auto";
  button.style.padding = "15px 25px";
  button.style.fontSize = "18px";
  button.style.borderRadius = "24px";
  button.style.cursor = "pointer";
  button.style.marginTop = "150%";

  button.addEventListener("click", () => {
    let textoParaCopiar = document.createElement("textarea");
    textoParaCopiar.value = nenhumaMensagem.textContent;
    document.body.appendChild(textoParaCopiar);
    textoParaCopiar.select();
    document.execCommand("copy");
    document.body.removeChild(textoParaCopiar);
  });

  text = text.replace(/enter/g, "e");
  text = text.replace(/imes/g, "i");
  text = text.replace(/ober/g, "o");
  text = text.replace(/ufat/g, "u");
  text = text.replace(/ai/g, "a");

  nenhumaMensagem.innerHTML = text;
  nenhumaMensagem.appendChild(button);
};

const copiar = () => {
  console.log("copiou");
};
