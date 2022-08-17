//INGRESO DEL USUARIO

alert("Registrese para acceder al carrito de compras");

let ingreso = prompt("Elija un usuario para su registro");

while (ingreso === "") {
  alert("Debe ingresar un usuario para acceder al carrito de compras");
  ingreso = prompt("Elija un usuario  para su registro");
}
alert("Bienvenido al carrito de compras " + ingreso);

class producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

const producto1 = new producto("silla", "50");
const producto2 = new producto("mesa", "100");
const producto3 = new producto("televisor", "150");
const producto4 = new producto("lampara", "25");
const producto5 = new producto("cocina", "200");

function selecProd() {
  let costo = prompt(
    "Seleccione un producto de la lista \n -silla \n -mesa \n -televisor \n -lampara \n -cocina "
  );

  while (
    costo == "" ||
    (costo != producto1.nombre &&
      costo != producto2.nombre &&
      costo != producto3.nombre &&
      costo != producto4.nombre &&
      costo != producto5.nombre)
  ) {
    alert("Debe elegir un producto de la lista");
    costo = prompt(
      "Seleccione un producto de la lista \n -silla \n -mesa \n -televisor \n -lampara \n -cocina "
    );
  }
  switch (costo) {
    case producto1.nombre:
      costo = Number(producto1.precio);
      alert("Ha agregado $" + producto1.precio);
      console.log("Agregaste $" + producto1.precio);
      break;
    case producto2.nombre:
      costo = Number(producto2.precio);
      alert("Ha agregado $" + producto2.precio);
      console.log("Agregaste $" + producto2.precio);
      break;
    case producto3.nombre:
      costo = Number(producto3.precio);
      alert("Ha agregado $" + producto3.precio);
      console.log("Agregaste $" + producto3.precio);
      break;
    case producto4.nombre:
      costo = Number(producto4.precio);
      alert("Ha agregado $" + producto4.precio);
      console.log("Agregaste $" + producto4.precio);
      break;
    case producto5.nombre:
      costo = Number(producto5.precio);
      alert("Ha agregado $" + producto5.precio);
      console.log("Agregaste $" + producto5.precio);
      break;
    default:
      alert("No está en la lista");
      break;
  }
  return costo;
}

const listaCosto = [];
let cantidad = 5;
do {
  let entrada = Number(selecProd());
  listaCosto.push(entrada);
  console.log(listaCosto);
} while (listaCosto.length != cantidad);

const total = listaCosto.reduce((a, b) => a + b, 0);
alert("El total de tu compra es $ " + total);
console.log(total);

class medioDePago {
  constructor(id, nombre) {
    this.id = id;
    this.nombre = nombre;
  }
}

const medioDePago1 = new medioDePago(1, "debito");
const medioDePago2 = new medioDePago(2, "credito");
const medioDePago3 = new medioDePago(3, "efectivo");

let pago = Number(
  prompt(
    "Elija un medio de pago: \n 1- Tarjeta de débito \n 2- Tarjeta de crédito \n 3-Efectivo"
  )
);
while (
  pago == "" ||
  (pago != medioDePago1.id &&
    pago != medioDePago2.id &&
    pago != medioDePago3.id)
) {
  alert("Debe elegir un medio de pago de nuestra lista");
  pago = Number(
    prompt(
      "Elija un medio de pago: \n 1- Tarjeta de débito \n 2- Tarjeta de crédito \n 3-Efectivo"
    )
  );
}
switch (pago) {
  case medioDePago1.id:
    alert("El total de su compra es $ " + total);
    break;
  case medioDePago2.id:
    let cuotas = Number(
      prompt("Elija en cuantas cuotas quiere abonar \n 3 \n 6 \n 12")
    );
    while (cuotas == "" || (cuotas != 3 && cuotas != 6 && cuotas != 12)) {
      alert("Debe elegir una cantidad de cuotas de la lista");
      cuotas = Number(
        prompt("Elija en cuantas cuotas quiere abonar \n 3 \n 6 \n 12")
      );
    }
    if (cuotas === 3) {
      alert("Pagará 3 cuotas de $ " + (total * 1.2) / 3);
    } else if (cuotas === 6) {
      alert("Pagara 6 cuotas de $ " + (total * 1.4) / 6);
    } else if (cuotas === 12) {
      alert("Pagara 12 cuotas de $ " + (total * 1.5) / 12);
    }
    break;

  case medioDePago3.id:
    alert(
      "El total de su compras es $ " +
        total +
        " y lo cobraremos en el domicilio"
    );
    break;
}

alert("Gracias por su compra");
