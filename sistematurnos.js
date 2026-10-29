class ColaTurnos {
  constructor(capacidad) {
    this.items = [];
    this.capacidad = capacidad;
    this.x = 1;
  }

  estaLlena() {
    return this.items.length === this.capacidad;
  }

  estaVacia() {
    return this.items.length === 0;
  }

  insertar(cliente) {
    if (this.estaLlena()) {
      alert("Error: La cola de turnos está llena.");
      return false;
    }
    this.items.push(cliente);
    this.x = this.x + 1;
    // alert(`Turno asignado a: ${cliente}`);
    return true;
  }

  atender() {
    if (this.estaVacia()) {
      alert("Error: No hay turnos pendientes para atender.");
      return null;
    }
    const clienteAtendido = this.items.shift();
    this.x = this.x - 1;
    //  alert(`Atendiendo a: ${clienteAtendido}`);
    return clienteAtendido;
  }
}

const cola = new ColaTurnos(5);
cola.x = 1;

// cola.insertar("Juan");
// cola.insertar("Pedro");
// cola.insertar("Mariano");
// cola.insertar("Papirus");
// cola.insertar("Sans");

//cola.atender();
//cola.atender();
//cola.atender();

console.log(cola.items);

const espacio1 = document.getElementById("e1");
const espacio2 = document.getElementById("e2");
const espacio3 = document.getElementById("e3");
const espacio4 = document.getElementById("e4");
const espacio5 = document.getElementById("e5");

espacio1.innerHTML = cola.items[4]==undefined ? "_": cola.items[4];
espacio2.innerHTML = cola.items[3]==undefined ? "_": cola.items[3];
espacio3.innerHTML = cola.items[2]==undefined ? "_": cola.items[2];
espacio4.innerHTML = cola.items[1]==undefined ? "_": cola.items[1];
espacio5.innerHTML = cola.items[0]==undefined ? "_": cola.items[0];

function ejecutarEsperar(){
  if(cola.insertar(cola.x - 1)){
    actualizarCola(1);
  }
}

function ejecutarAtender(){
  if(cola.atender()!= null){
    actualizarCola(2);
  }
}

function actualizarCola(accion){
  const pos = cola.x - 1;

  if(accion == 1){
    switch(pos){
      case 1:
        espacio5.innerHTML = pos;
        break;
      case 2:
        espacio4.innerHTML = pos;
        break;
      case 3:
        espacio3.innerHTML = pos;
        break;
      case 4:
        espacio2.innerHTML = pos;
        break;
      case 5:
        espacio1.innerHTML = pos;
        break;
      default:
        break;
    }
  }
  else{
    switch (pos){
      case 4:
        espacio1.innerHTML = "_";
        break;
      case 3:
        espacio2.innerHTML = "_";
        break;
      case 2:
        espacio3.innerHTML = "_";
        break;
      case 1:
        espacio4.innerHTML = "_";
        break;
      case 0:
        espacio5.innerHTML = "_";
        break;
      default:
        break;
    }
  }
}