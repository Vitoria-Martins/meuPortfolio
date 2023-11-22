/* codigo mov de navegacao */

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

/*the end */

/* navecao entre as paginas */

async function includeHTML() {
  try {
    const response = await fetch("header.html");
    const html = await response.text();
    document.getElementById("header-container").innerHTML = html;
  } catch (error) {
    console.error("Erro ao carregar o conteúdo do header:", error);
  }
}

includeHTML();
/*the end  */
