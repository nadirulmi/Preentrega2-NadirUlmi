const sueters = [
    {id: 1, producto: "Sueter Amatista", precio: 1950},
    {id: 2, producto: "Sueter Rosalía", precio: 2500},
    {id: 3, producto: "Sueter Amelí", precio: 2100}
]

const camisas = [
    {id: 3, producto: "Camisa Lily", precio: 1220},
    {id: 4, producto: "Camisa Miley", precio: 1500},
    {id: 5, producto: "Camisa Amor", precio: 1350}
]

function operacion(){
    let opcion = Number(prompt("Bienvenido a AlmaKira seleccione el número de lo que está buscando y conocé los artículos disponibles! \n 1. Sueters \n 2. Camisas \n 3. Salir"));
    while(opcion != 3){
    switch(opcion){
    case 1: 
    sueters.forEach(function(sueter){
        alert(sueter.producto + ", el precio es de: $"+sueter.precio)
    })

    break;

    case 2: 
        for(let i=0; i < camisas.length; i++){
        alert(camisas[i].producto + ", el precio es de: $"+camisas[i].precio)
    }
    break;
    
    default:
        if (opcion !== Number){
            alert("Marque una opción o el número 3 para salir")
        }
    }
    opcion = Number(prompt("Bienvenido a AlmaKira seleccione lo que está buscando y conocé las ofertas! \n 1. Sueters \n 2. Camisas \n 3. Salir"));
    }
}

operacion();



