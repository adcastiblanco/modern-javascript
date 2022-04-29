const notificarBtn = document.querySelector("#notificar");
const verNotificacionBtn = document.querySelector("#verNotificacion");

notificarBtn.addEventListener("click", () => {
  Notification.requestPermission().then((result) => {
    console.log(result);
  });
});

verNotificacionBtn.addEventListener("click", () => {
  console.log("jaja");

  new Notification("Esta es la notificacion", {
    body: "Esta es la notificacion",
    icon: "https://i.imgur.com/7yUvePI.png",
    requireInteraction: true,
  });
});
