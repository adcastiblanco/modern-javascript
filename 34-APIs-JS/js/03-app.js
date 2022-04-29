document.addEventListener("online", actualizarEstado);
document.addEventListener("offline", actualizarEstado);

window.onoffline = actualizarEstado;
window.ononline = actualizarEstado;
function actualizarEstado() {
  const estado = navigator.onLine ? "online" : "offline";
  console.log(estado);
}
