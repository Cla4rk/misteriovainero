const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Ahora eres mi San Valentín para siempre 🩵";
  gif.src =
    "https://64.media.tumblr.com/c94b2d0a6f0d386100657472993f140d/12dabfe576c71dae-44/s540x810/24ef26d5b8c213f40fe59e9b9356c609f4b36ff0.gif";
  var downloadBtn = document.createElement("butto");
  downloadBtn.innerText = "🩵Descargar Certificado🩵";
  downloadBtn.classList.add("download-btn");

  // Agregar el botón de descarga al documento
  var btnGroup = document.querySelector(".btn-group1");
  btnGroup.appendChild(downloadBtn);

  // Funcionalidad de abrir el documento al hacer clic en el botón
  downloadBtn.addEventListener("click", () => {
    window.open("/Certificado San Valentín.pdf", "_blank"); // Reemplaza "/ruta/al/documento.pdf" con la ruta correcta del documento dentro de tu proyecto
  });
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
