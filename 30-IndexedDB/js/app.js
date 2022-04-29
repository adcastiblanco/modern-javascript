let DB;
document.addEventListener("DOMContentLoaded", () => {
  crmDB();
  setTimeout(() => {
    crearCliente();
  }, 2000);
});

function crmDB() {
  let db = indexedDB.open("crmDB", 1);

  db.onsuccess = function () {
    console.log("Conectado a la base de datos");
    DB = db.result;
  };

  db.onupgradeneeded = function (e) {
    let db = e.target.result;
    const objectStore = db.createObjectStore("crm", {
      keyPath: "crm",
      autoIncrement: true,
    });

    objectStore.createIndex("nombre", "nombre", { unique: false });
    objectStore.createIndex("email", "email", { unique: true });
    objectStore.createIndex("telefono", "telefono", { unique: false });

    console.log("Base de datos creada");
  };
}

function crearCliente() {
  let transaction = DB.transaction(["crm"], "readwrite");

  transaction.oncomplete = function () {
    console.log("Transacción completada");
  };

  let objectStore = transaction.objectStore("crm");

  let nuevoCliente = {
    nombre: "Angel",
    email: "angel@gmail.com",
    telefono: "123456789",
  };
  const peticion = objectStore.add(nuevoCliente);
  console.log(peticion);
}
