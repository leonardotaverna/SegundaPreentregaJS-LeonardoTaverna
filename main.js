const costos=[
    IVA=1.21,
] 

const bebidas=[
    cocaCola=200, 
    sprite=225,
    fanta=225,
    cepitaTet=250,
    cepitaBot=275,
    hiC=150,
    aquarius=180,
    kin=120,
    smartWater=150,
]

alert("Bienvenidx a Tienda de bebidas JS")

let nombre = prompt("Por favor ingrese su nombre");
while (nombre == ""){
    alert ("Por favor ingrese un nombre válido")
    nombre = prompt("Por favor ingrese su nombre");
}
console.log ("Nombre: " + nombre);

let apellido = prompt("Por favor ingrese su apellido");
while (apellido == ""){
  alert ("Por favor ingrese un apellido válido")
  apellido = prompt("Por favor ingrese su apellido");
}
console.log ("Apellido: " + apellido);

let correoElectronico = prompt("Ingrese su correo electrónico");
console.log ("Dirección de e-mail: " + correoElectronico);

let zonaDeEntrega = parseInt(prompt("Seleccione su zona de entrega: \n 1 - CABA \n 2 - Gran Buenos Aires \n Le recordamos que el costo de envío es de $500.-"));
while (zonaDeEntrega !=1 && zonaDeEntrega !=2){
    alert ("Por favor ingrese una zona de entrega válida")
    zonaDeEntrega = parseInt(prompt("Seleccione su zona de entrega: \n 1 - CABA \n 2 - Gran Buenos Aires "));
}
console.log("Zona de entrega seleccionada: " + zonaDeEntrega);

let direccionDeEntrega = prompt("Ingrese la dirección donde recibirá el pedido");

console.log ("Dirección de entrega: " + direccionDeEntrega);


//SELECCIÓN DE BEBIDAS
let seleccionBebidas = parseInt(prompt("Por favor seleccione la categoría de bebidas que desea comprar:\n 1 - Gaseosas \n 2- Jugos \n 3 - Aguas"));
while (seleccionBebidas !=1 && seleccionBebidas !=2 && seleccionBebidas != 3){
    alert ("Por favor seleccione una opción válida");
    seleccionBebidas = parseInt(prompt("Por favor seleccione la categoría de bebidas que desea comprar:\n 1 - Gaseosas \n 2 - Jugos \n 3 - Aguas"));
}
console.log("Selecciona bebida: " + seleccionBebidas); 

if (seleccionBebidas >=1 && seleccionBebidas <=3){
    switch (seleccionBebidas){
        case 1: 
        if (seleccionBebidas==1){
            //SELECCIÓN DE GASEOSAS
            let seleccionGaseosas = parseInt(prompt("Por favor indique qué gaseosas desea comprar:\n 1 - Coca Cola 500 mL \n 2 - Sprite 500 mL \n 3 - Fanta 500 mL"));
            while (seleccionGaseosas !=1 && seleccionGaseosas !=2 && seleccionGaseosas !=3){
                alert ("Por favor seleccione una opción válida")
                seleccionGaseosas = parseInt(prompt("Por favor indique qué gaseosas desea comprar:\n 1 - Coca Cola 500 mL \n 2 - Sprite 500 mL \n 3 - Fanta 500 mL"));
            }
            console.log("Selecciona gaseosa: " + seleccionGaseosas);

            let cantidadGaseosas = parseInt(prompt("Por favor indique cuántas unidades desea comprar"));
            while (cantidadGaseosas <1 && cantidadGaseosas ==""){
                alert ("Por favor indique una cantidad válida")
                cantidadGaseosas = parseInt(prompt("Por favor indique cuántas unidades desea comprar"));
            }
            console.log("Selecciona unidades: " + cantidadGaseosas);

            function precioGaseosas (bebida, cantidad, imp){
                let subtotal= bebida * cantidad * imp;
                alert ("El subtotal de su pedido es " + "$ " + subtotal);
            }

            if (seleccionGaseosas >=1 && seleccionGaseosas <=3){
                switch (seleccionGaseosas){
                    case 1: 
                    if (seleccionGaseosas==1){
                        precioGaseosas(cocaCola, cantidadGaseosas, IVA);
                    }
                    break;

                    case 2:
                    if (seleccionGaseosas==2){
                        precioGaseosas(sprite, cantidadGaseosas, IVA);
                    }
                    break;

                    case 3: 
                    if (seleccionGaseosas==3){
                        precioGaseosas(fanta, cantidadGaseosas, IVA);
                    }
                    break;
                    default:
                    break;
                }
            }
        }
        break;

        case 2:
        if (seleccionBebidas==2){
            //SELECCIÓN DE JUGOS
            let seleccionJugos = parseInt(prompt("Por favor indique qué jugos desea comprar:\n 1 - Cepita Tetra 1 L \n 2 - Cepita Botella 995 mL \n 3 - Hi C diluible 1,5 L"));
            while (seleccionJugos !=1 && seleccionJugos !=2 && seleccionJugos !=3){
                alert ("Por favor seleccione una opción válida")
                seleccionJugos = parseInt(prompt("Por favor indique qué jugos desea comprar:\n 1 - Cepita Tetra 1 L \n 2 - Cepita Botella 995 mL \n 3 - Hi C diluible 1,5 L"));
            }
            console.log("Selecciona jugo: " + seleccionJugos);

            let cantidadJugos = parseInt(prompt("Por favor indique cuántas unidades desea comprar"));

            console.log("Selecciona unidades: " + cantidadJugos);

            function precioJugos (bebida, cantidad, imp){
                let subtotal= bebida * cantidad * imp;
                alert ("El subtotal de su pedido es " + "$ " + subtotal);
            }

            if (seleccionJugos >=1 && seleccionJugos <=3){
                switch (seleccionJugos){
                    case 1: 
                    if (seleccionJugos==1){
                        precioJugos(cepitaTet, cantidadJugos, IVA);
                    }
                    break;

                    case 2:
                    if (seleccionJugos==2){
                        precioJugos(cepitaBot, cantidadJugos, IVA);
                    }
                    break;

                    case 3: 
                    if (seleccionJugos==3){
                        precioJugos(hiC, cantidadJugos, IVA);
                    }
                    break;
                    default:
                    break;
                }
            }
        }
        break;

        case 3: 
        if (seleccionBebidas==3){
            //SELECCIÓN DE AGUAS
            let seleccionAguas = parseInt(prompt("Por favor indique qué aguas desea comprar:\n 1 - Aquarius 500 mL \n 2 - Kin 500 mL \n 3 - Smart Water 591 mL"));
            while (seleccionAguas !=1 && seleccionAguas !=2 && seleccionAguas !=3){
                alert ("Por favor seleccione una opción válida")
                seleccionAguas = parseInt(prompt("Por favor indique qué aguas desea comprar:\n 1 - Aquarius 500 mL \n 2 - Kin 500 mL \n 3 - Smart Water 591 mL"));
            }
            console.log("Selecciona agua: " + seleccionAguas);

            let cantidadAguas = parseInt(prompt("Por favor indique cuántas unidades desea comprar"));

            console.log("Selecciona unidades: " + cantidadAguas);

            function precioAguas (bebida, cantidad, imp){
                let subtotal= bebida * cantidad * imp;
                alert ("El subtotal de su pedido es " + "$ " + subtotal);
            }

            if (seleccionAguas >=1 && seleccionAguas <=3){
                switch (seleccionAguas){
                    case 1: 
                    if (seleccionAguas==1){
                        precioAguas(aquarius, cantidadAguas, IVA);
                    }
                    break;

                    case 2:
                    if (seleccionAguas==2){
                        precioAguas(kin, cantidadAguas, IVA);
                    }
                    break;

                    case 3: 
                    if (seleccionAguas==3){
                        precioAguas(smartWater, cantidadAguas, IVA);
                    }
                    break;
                    default:
                    break;
                }
            }
        }
        break;
        default:
        break;
    }
}