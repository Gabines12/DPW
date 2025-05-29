// Funcionalidad adicional para el collage
document.addEventListener("DOMContentLoaded", function () {
  const photoItems = document.querySelectorAll(".photo-item");

  // Agregar funcionalidad de clic para expandir imagen
  photoItems.forEach((item) => {
    item.addEventListener("click", function () {
      const img = this.querySelector("img");
      const modal = document.createElement("div");
      modal.className = "position-fixed top-0 start-0 w-100 h-100";
      modal.style.cssText = `
                        background: rgba(0,0,0,0.9);
                        z-index: 9999;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                    `;

      const expandedImg = document.createElement("img");
      expandedImg.src = img.src;
      expandedImg.style.cssText = `
                        max-width: 90%;
                        max-height: 90%;
                        border-radius: 10px;
                        box-shadow: 0 20px 60px rgba(0,0,0,0.5);
                        animation: scaleIn 0.3s ease;
                    `;

      // Agregar animación CSS
      const style = document.createElement("style");
      style.textContent = `
                        @keyframes scaleIn {
                            from { transform: scale(0.5); opacity: 0; }
                            to { transform: scale(1); opacity: 1; }
                        }
                    `;
      document.head.appendChild(style);

      modal.appendChild(expandedImg);
      document.body.appendChild(modal);

      // Cerrar modal al hacer clic
      modal.addEventListener("click", function () {
        document.body.removeChild(modal);
        document.head.removeChild(style);
      });
    });
  });
});
