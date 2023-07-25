
const tiendaContenido = document.getElementById("tiendaContenido");
    const verCarrito = document.getElementById("verCarrito");
    const modalContainer = document.getElementById("modal-container")

    //utilizando get item para que el carrito siga al refrescar la página//
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    prendas.forEach((prenda) => {
        let contenido = document.createElement("div");
        contenido.className = "card";
        contenido.innerHTML = `
            <img src = " ${prenda.img}">
            <h3>${prenda.producto}</h3>
            <p class = "precio">$ ${prenda.precio} </p>
        `;
        tiendaContenido.append(contenido);

        let comprar = document.createElement("button")
        comprar.innerText = "comprar";
        comprar.className = "comprar"

        contenido.append(comprar);

        comprar.addEventListener("click", ()=>{
            carrito.push({
                id: prenda.id,
                img: prenda.img,
                nombre: prenda.producto,
                precio: prenda.precio,
            });
            console.log(carrito)
            carritoLocal();
            
        });
    });

    //set item//
    const carritoLocal = () => {
        localStorage.setItem("carrito",JSON.stringify(carrito));
    }

