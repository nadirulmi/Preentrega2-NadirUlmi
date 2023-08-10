
const tiendaContenido = document.getElementById("tiendaContenido")
    const verCarrito = document.getElementById("verCarrito")
    const modalContainer = document.getElementById("modal-container")
    const cantidadCarrito = document.getElementById("cantidadCarrito")

    //utilizando get item para que el carrito siga al refrescar la página//
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


    //Utilizando async/await y fetch
    const getPrendas = async () => {
        const response = await fetch("data.json");
        const data = await response.json();

        data.forEach((prenda) => {
            let contenido = document.createElement("div");
            contenido.className = "card";
            contenido.innerHTML = `
                <img src = " ${prenda.img}">
                <h3>${prenda.producto}</h3>
                <p class = "precio">$ ${prenda.precio} </p>
            `;
            tiendaContenido.append(contenido);
    
            let comprar = document.createElement("button")
            comprar.innerText = "Comprar";
            comprar.className = "comprar"
    
            contenido.append(comprar);
    
            comprar.addEventListener("click", ()=>{
                //sweet alert//
                Swal.fire({
                    title: "Se añadió al carrito!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                })
                carrito.push({
                    id: prenda.id,
                    img: prenda.img,
                    nombre: prenda.producto,
                    precio: prenda.precio,
                });
                carritoLocal();
                carritoContador();
            });

        });
    }

    getPrendas();

    //set item//
    const carritoLocal = () => {
        localStorage.setItem("carrito",JSON.stringify(carrito));
    }


