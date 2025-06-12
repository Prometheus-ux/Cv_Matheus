// Alterna exibição das seções do currículo
function showSection(id) {
  document.querySelectorAll("main section").forEach(section =>
    section.classList.remove("active")
  );
  const target = document.getElementById(id);
  if (target) {
    target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// Accordion: expande/recolhe painéis de forma elegante
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".accordion").forEach(acc => {
    acc.addEventListener("click", function () {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
    // Inicializa painel fechado
    const panel = acc.nextElementSibling;
    panel.style.display = "none";
    panel.style.maxHeight = null;
  });
});

// Exibe certificado em um modal (caso usado no portfólio)
function mostrarCertificado(caminho) {
  const container = document.getElementById("certificado-container");
  const img = document.getElementById("certificado-imagem");
  if (img && container) {
    img.src = caminho;
    container.style.display = "flex";
  }
}

// Fecha o modal de certificado
function fecharCertificado() {
  const container = document.getElementById("certificado-container");
  const img = document.getElementById("certificado-imagem");
  if (img && container) {
    img.src = "";
    container.style.display = "none";
  }
}document.querySelectorAll(".accordion").forEach(acc => {
  acc.addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    panel.classList.toggle("open");
  });
});

