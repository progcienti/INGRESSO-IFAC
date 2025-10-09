// Botões de acessibilidade
const contrasteBtn = document.getElementById("contrast-toggle");
const fontIncBtn = document.getElementById("font-inc");
const fontDecBtn = document.getElementById("font-dec");

// Alternar modo alto contraste
contrasteBtn.addEventListener("click", () => {
  document.body.classList.toggle("alto-contraste");

  // Salva preferência no navegador
  localStorage.setItem(
    "altoContraste",
    document.body.classList.contains("alto-contraste")
  );
});

// Aumentar tamanho da fonte
fontIncBtn.addEventListener("click", () => {
  document.body.classList.remove("font-pequena");
  document.body.classList.add("font-grande");
  localStorage.setItem("tamanhoFonte", "grande");
});

// Diminuir tamanho da fonte
fontDecBtn.addEventListener("click", () => {
  document.body.classList.remove("font-grande");
  document.body.classList.add("font-pequena");
  localStorage.setItem("tamanhoFonte", "pequena");
});

// Restaurar preferências ao recarregar a página
window.addEventListener("DOMContentLoaded", () => {
  const contrasteAtivo = localStorage.getItem("altoContraste") === "true";
  const tamanhoFonte = localStorage.getItem("tamanhoFonte");

  if (contrasteAtivo) document.body.classList.add("alto-contraste");
  if (tamanhoFonte === "grande") document.body.classList.add("font-grande");
  if (tamanhoFonte === "pequena") document.body.classList.add("font-pequena");
});
