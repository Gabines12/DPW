// navbar-loader.js
document.addEventListener("DOMContentLoaded", () => {
    const container = document.createElement("div");
    container.id = "navbar-container";
    document.body.insertBefore(container, document.body.firstChild);
  
    fetch("/pages/Navbar.html")
      .then(res => res.text())
      .then(html => {
        container.innerHTML = html;
      })
      .catch(err => {
        console.error("Error al cargar la barra de navegación:", err);
      });
  });
  