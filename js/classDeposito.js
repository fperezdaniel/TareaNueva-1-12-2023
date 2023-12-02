class Deposito {
    constructor() {
        this.deposito = JSON.parse(localStorage.getItem("productos"))||[];
    }
    ordenarProductosPorPrecioAscendente() {
        return this.deposito.sort((a, b) => a.precio < b.precio);
    }
    ordenarProductosPorPrecioDescendente() {
        return this.deposito.sort((a, b) => a.precio > b.precio);
    }
    buscarProductoPorNombre(nombre) {
        return this.deposito.filter((el)=> el.nombre.toLowerCase().includes(nombre));
    }
    renderizarProductos(prod) {
        ///console.log(prod, " linea 310");
        const sectionContainer = document.getElementById("section-container");
        sectionContainer.innerHTML = "";
        prod.forEach((el) => {
            const cardProducto = document.createElement("div");
            cardProducto.setAttribute("class", "card-producto");
            cardProducto.innerHTML = `
                                    <p class= "parrafo-producto-renderizado">Categoria: ${el.categoria}</p>
                                    <p class= "parrafo-producto-renderizado">Nombre: ${el.nombre}</p>
                                    <p class= "parrafo-producto-renderizado">Marca: ${el.marca}</p>
                                    <p class= "parrafo-producto-renderizado">Codigo: ${el.codigo}</p>
                                    <p class= "parrafo-producto-renderizado">Stock: ${el.stock}</p>
                                    <p class= "parrafo-producto-renderizado">Precio: $${el.precio}</p>`;
            sectionContainer.appendChild(cardProducto);
        });
    }
    ordenarProductoDeAZ(){
    return this.deposito.sort((a, b) => a.nombre.localeCompare(b.nombre));

    }
    ordenarProductoDeZA(){
        return this.deposito.sort((a, b) => b.nombre.localeCompare(a.nombre)); 

    }
}