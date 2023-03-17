const costos=[
    IVA=1.21,
    envio=500,
] 

class Gaseosas{
    constructor(nombre, tamaño, precio){
        this.nombre = nombre;
        this.tamaño = tamaño;
        this.precio = precio;
    }
}

class Jugos{
    constructor(nombre, tamaño, precio){
        this.nombre = nombre;
        this.tamaño = tamaño;
        this.precio = precio;
    }
}

class Aguas{
    constructor(nombre, tamaño, precio){
        this.nombre = nombre;
        this.tamaño = tamaño;
        this.precio = precio;
    }
}

const cocaCola= new Gaseosas ("Coca Cola", "500", 200);
const sprite = new Gaseosas ("Sprite", "500", 225);
const fanta = new Gaseosas ("Fanta", "500", 225);

const cepitaTetra = new Jugos ("Cepita Tetra", "1000", 250);
const cepitaBotella = new Jugos ("Cepita Botella", "995", 275);
const hiC = new Jugos ("Hi-C", "1500", 150);

const aquarius = new Aguas ("Aquarius", "500", 180);
const kin = new Aguas ("Kin", "500", 120);
const smartWater = new Aguas ("Smart Water", "591", 150);

const arrayBebidas = [cocaCola, sprite, fanta, cepitaTetra, cepitaBotella, aquarius, kin, smartWater];

const arrayBebidasConIva = arrayBebidas.map ((precioMasIva => {
    return{
        nombre: precioMasIva.nombre,
        tamaño: precioMasIva.tamaño,
        precioMasIva: (precioMasIva.precio * IVA),
    }
}))
console.log(arrayBebidasConIva);

//BIENVENIDA / INGRESO
alert ("Bienvenidx a Tienda de bebidas JS")

let nombre = prompt("Por favor ingrese su nombre");
while (nombre == ""){
    alert ("Por favor ingrese un nombre válido")
    nombre = prompt ("Por favor ingrese su nombre");
}
    
let apellido = prompt("Por favor ingrese su apellido");
while (apellido == ""){
    alert ("Por favor ingrese un apellido válido")
    apellido = prompt("Por favor ingrese su apellido");
}
   
let correoElectronico = prompt("Ingrese su correo electrónico");
while (correoElectronico == ""){
    alert ("Por favor ingrese una dirección de correo electrónico válida");
    correoElectronico = prompt("Ingrese su correo electrónico");
}
    
let zonaDeEntrega = parseInt(prompt("Seleccione su zona de entrega: \n 1 - CABA \n 2 - Gran Buenos Aires \n Le recordamos que el costo de envío es de $500.-"));
while (zonaDeEntrega !=1 && zonaDeEntrega !=2){
    alert ("Por favor ingrese una zona de entrega válida")
    zonaDeEntrega = parseInt(prompt("Seleccione su zona de entrega: \n 1 - CABA \n 2 - Gran Buenos Aires "));
}

let direccionDeEntrega = prompt("Ingrese la dirección donde recibirá el pedido");
while (direccionDeEntrega == ""){
    alert ("Por favor ingrese una dirección de entrega válida");
    direccionDeEntrega = prompt("Ingrese la dirección donde recibirá el pedido");
}

console.log ("Nombre: " + nombre + " Apellido: " + apellido + " Dirección de e-mail: " + correoElectronico + " Zona de entrega seleccionada: " + zonaDeEntrega + " Dirección de entrega: " + direccionDeEntrega);


//SELECCIÓN DE BEBIDAS
let seleccionBebidas = parseInt(prompt("Por favor seleccione la categoría de bebidas que desea comprar:\n 1 - Gaseosas \n 2- Jugos \n 3 - Aguas"));
while (seleccionBebidas !=1 && seleccionBebidas !=2 && seleccionBebidas != 3){
    alert ("Por favor seleccione una opción válida");
    seleccionBebidas = parseInt(prompt("Por favor seleccione la categoría de bebidas que desea comprar:\n 1 - Gaseosas \n 2 - Jugos \n 3 - Aguas"));
}

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
        
            let cantidadGaseosas = parseInt(prompt("Por favor indique cuántas unidades desea comprar"));
            while (cantidadGaseosas <1 && cantidadGaseosas ==""){
                alert ("Por favor indique una cantidad válida")
                cantidadGaseosas = parseInt(prompt("Por favor indique cuántas unidades desea comprar"));
            }

            function precioGaseosas (precio, cantidad, nombreGaseosa, tamaño){
                let subtotalGaseosas = precio * cantidad;
                let subtotalMasIva = subtotalGaseosas * IVA;
                alert ("Usted ha seleccionado " + cantidadGaseosas + " " + nombreGaseosa + " de " + tamaño + " mL" + ". \nEl valor de su pedido es " + "$" + subtotalGaseosas + " + IVA. \nSubtotal= $"  + subtotalMasIva.toFixed(2));
            }

            if (seleccionGaseosas >=1 && seleccionGaseosas <=3){
                switch (seleccionGaseosas){
                    case 1: 
                    if (seleccionGaseosas==1){
                        precioGaseosas(cocaCola.precio, cantidadGaseosas, cocaCola.nombre, cocaCola.tamaño);
                    }
                    break;

                    case 2:
                    if (seleccionGaseosas==2){
                        precioGaseosas(sprite.precio, cantidadGaseosas, sprite.nombre, sprite.tamaño);
                    }
                    break;

                    case 3: 
                    if (seleccionGaseosas==3){
                        precioGaseosas(fanta.precio, cantidadGaseosas, fanta.nombre, fanta.tamaño);
                    }
                    break;
                    default:
                    break;
                }
            }
        }

        case 2:
        if (seleccionBebidas==2){
            //SELECCIÓN DE JUGOS
            let seleccionJugos = parseInt(prompt("Por favor indique qué jugos desea comprar:\n 1 - Cepita Tetra 1 L \n 2 - Cepita Botella 995 mL \n 3 - Hi C diluible 1,5 L"));
            while (seleccionJugos !=1 && seleccionJugos !=2 && seleccionJugos !=3){
                alert ("Por favor seleccione una opción válida")
                seleccionJugos = parseInt(prompt("Por favor indique qué jugos desea comprar:\n 1 - Cepita Tetra 1 L \n 2 - Cepita Botella 995 mL \n 3 - Hi C diluible 1,5 L"));
            }
           
            let cantidadJugos = parseInt(prompt("Por favor indique cuántas unidades desea comprar"));
            while (cantidadJugos <1 && cantidadJugos ==""){
                alert ("Por favor indique una cantidad válida")
                cantidadJugos = parseInt(prompt("Por favor indique cuántas unidades desea comprar"));
            }

            function precioJugos (precio, cantidad, nombreJugo, tamaño){
                let subtotalJugos = precio * cantidad;
                let subtotalMasIva = subtotalJugos * IVA;
                alert ("Usted ha seleccionado " + cantidadJugos + " " + nombreJugo + " de " + tamaño + " mL" + ". \nEl valor de su pedido es " + "$" + subtotalJugos + " + IVA. \nSubtotal= $"  + subtotalMasIva.toFixed(2));
            }

            if (seleccionJugos >=1 && seleccionJugos <=3){
                switch (seleccionJugos){
                    case 1: 
                    if (seleccionJugos==1){
                        precioJugos(cepitaTetra.precio, cantidadJugos, cepitaTetra.nombre, cepitaTetra.tamaño);
                    }
                    break;

                    case 2:
                    if (seleccionJugos==2){
                        precioJugos(cepitaBotella.precio, cantidadJugos, cepitaBotella.nombre, cepitaBotella.tamaño);
                    }
                    break;

                    case 3: 
                    if (seleccionJugos==3){
                        precioJugos(hiC.precio, cantidadJugos, hiC.nombre, hiC.tamaño);
                    }
                    break;
                    default:
                    break;
                }
            }
        }
                    
        case 3: 
        if (seleccionBebidas==3){
            //SELECCIÓN DE AGUAS
            let seleccionAguas = parseInt(prompt("Por favor indique qué aguas desea comprar:\n 1 - Aquarius 500 mL \n 2 - Kin 500 mL \n 3 - Smart Water 591 mL"));
            while (seleccionAguas !=1 && seleccionAguas !=2 && seleccionAguas !=3){
                alert ("Por favor seleccione una opción válida")
                seleccionAguas = parseInt(prompt("Por favor indique qué aguas desea comprar:\n 1 - Aquarius 500 mL \n 2 - Kin 500 mL \n 3 - Smart Water 591 mL"));
            }

            let cantidadAguas = parseInt(prompt("Por favor indique cuántas unidades desea comprar"));
            while (cantidadAguas <1 && cantidadAguas ==""){
                alert ("Por favor indique una cantidad válida")
                cantidadAguas = parseInt(prompt("Por favor indique cuántas unidades desea comprar"));
            }

            function precioAguas (precio, cantidad, nombreAgua, tamaño){
                let subtotalAguas = precio * cantidad;
                let subtotalMasIva = subtotalAguas * IVA;
                alert ("Usted ha seleccionado " + cantidadAguas + " " + nombreAgua + " de " + tamaño + " mL" + ". \nEl valor de su pedido es " + "$" + subtotalAguas + " + IVA. \nSubtotal= $"  + subtotalMasIva.toFixed(2));
            }

            if (seleccionAguas >=1 && seleccionAguas <=3){
                switch (seleccionAguas){
                    case 1: 
                    if (seleccionAguas==1){
                        precioAguas(aquarius.precio, cantidadAguas, aquarius.nombre, aquarius.tamaño);
                    }
                    break;

                    case 2:
                    if (seleccionAguas==2){
                        precioAguas(kin.precio, cantidadAguas, kin.nombre, kin.tamaño);
                    }
                    break;

                    case 3: 
                    if (seleccionAguas==3){
                        precioAguas(smartWater.precio, cantidadAguas, smartWater.nombre, smartWater.tamaño);
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


    const arraySubtotales=[];
    


}

