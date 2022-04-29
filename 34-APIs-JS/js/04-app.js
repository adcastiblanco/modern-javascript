let openFullscreenBtn = document.querySelector("#abrir-pantalla-completa");
let closeFullscreenBtn = document.querySelector("#salir-pantalla-completa");

openFullscreenBtn.addEventListener("click", () => {
  document.documentElement.requestFullscreen();
});

closeFullscreenBtn.addEventListener("click", () => {
  document.exitFullscreen();
});
