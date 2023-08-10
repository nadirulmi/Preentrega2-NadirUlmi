//MODAL DEL CARRITO//
const pintarCarrito = ()=>{
    modalContainer.style.display = "flex";
    modalContainer.innerHTML = "";
const modalHeader = document.createElement("div");
modalHeader.className = "modal-header";
modalHeader.innerHTML = `
<h1 class = "modal-header-title">Carrito</h1>
` 
modalContainer.append(modalHeader);

const modalButton = document.createElement("p");
modalButton.innerText = "X";
modalButton.className = "modal-header-button";

modalButton.addEventListener("click", ()=>{
    modalContainer.style.display = "none"
})

modalHeader.append(modalButton);


    carrito.forEach((prenda)=>{
    let carritoContent = document.createElement("div")
    carritoContent.className = "modal-content"
    carritoContent.innerHTML = `
        <img src = "${prenda.img}">
        <h3 class= "carrito-letra"> ${prenda.nombre}</h3>
        <p class = "carrito-letra">$${prenda.precio}</p>
    `;
    modalContainer.append(carritoContent)

        //boton para eliminar un producto//
    let eliminar = document.createElement("span")
    eliminar.innerText = "❌"
    eliminar.className = "eliminar-producto"
    eliminar.id = prenda.id
    carritoContent.append(eliminar)

    eliminar.addEventListener("click", eliminarProducto)
        })
    
const total = carrito.reduce((acc,el)=> acc + el.precio, 0);
        const totalCarrito = document.createElement("div")
        totalCarrito.className = "total-carrito"
        totalCarrito.innerHTML = `total a pagar: $ ${total} `

        modalContainer.append(totalCarrito);
}

verCarrito.addEventListener("click",pintarCarrito)
    
//Función para eliminar producto del carrito//
const eliminarProducto = (e) => {
    carrito = carrito.filter((item) => {

        return item.id != e.target.id;

    });
    carritoContador();
    pintarCarrito()

} 


//mostrar contador de productos en el icono carrito
const carritoContador = () => {
    cantidadCarrito.style.display = "block"
    cantidadCarrito.innerText = carrito.length;
}