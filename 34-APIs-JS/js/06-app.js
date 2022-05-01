const microfonoBtn = document.querySelector("#microfono");
const salidaDiv = document.querySelector("#salida");

microfonoBtn.addEventListener("click", () => {
  let recognition = new webkitSpeechRecognition();
  recognition.start();

  recognition.onstart = () => {
    salidaDiv.textContent = "Escuchando...";
  };

  recognition.onspeechend = () => {
    salidaDiv.textContent = "Se dejo de grabar";
    recognition.stop();
  };

  recognition.onresult = (event) => {
    let result = event.results[0][0].transcript;
    console.log(result);
    salidaDiv.textContent = result;
  };
});
