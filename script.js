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
    const panel = acc.nextElementSibling;
    panel.style.display = "none";
    panel.style.maxHeight = null;
  });
});
function mostrarCertificado(caminho) {
  const container = document.getElementById("certificado-container");
  const img = document.getElementById("certificado-imagem");
  if (img && container) {
    img.src = caminho;
    container.style.display = "flex";
  }
}
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

