function abrirSobre() {
  window.location.href = "sobre.html";
}

const imagens = document.querySelectorAll(".imagem");
const textos = document.querySelectorAll(".textMouse");

imagens.forEach((imagem, index) => {
  const texto = textos[index];
  imagem.addEventListener("mouseover", function () {
    texto.style.opacity = "1"; // texto visível
  });

  imagem.addEventListener("mouseout", function () {
    texto.style.opacity = "0"; // texto invisível
  });
});
