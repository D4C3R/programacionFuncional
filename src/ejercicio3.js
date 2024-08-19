const numeron = [1,2,3,4]
const numeronClon = [...numeron]
console.log(numeronClon)
///////////////////////////////////////////////////
const Dariel ={
nombre: 'Dariel',
edad:   '20'
}
const DarielClon ={...Dariel}
console.log(DarielClon)
///////////////////////////////////////////////////
function sum(...numeros) {
    let total = 0;
    for (const numero of numeros) {
      total += numero;
    }
    return total;
  }
  console.log(sum(1, 2, 3, 4));
///////////////////////////////////////////////////
  function saludar() {
    let nombre = "desconocido"
    saludo = "hola, " 
    return saludo;
  }
  console.log(saludar()+"dariel");