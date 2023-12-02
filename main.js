const objetoDeposito = new Deposito();
/** Recordar comentar los console.log() al finalizar */
//console.log(objetoDeposito.deposito, " linea 3");
objetoDeposito.renderizarProductos(objetoDeposito.deposito);
/** Ordenar producto por precio */
const ordenarPorPrecio = (e) => {
    let resultado;
    const eventoBtn = e.target.dataset.id;
    //console.log(eventoBtn, " eventoBtn linea 289")
    if (eventoBtn === "descendente") {
        resultado = objetoDeposito.ordenarProductosPorPrecioDescendente();
    } else {
        resultado = objetoDeposito.ordenarProductosPorPrecioAscendente();
    }
    //console.log(resultado);
    objetoDeposito.renderizarProductos(resultado);
}
function ordenarproducto() {
    const botonOrdenPrecio = document.getElementsByClassName("boton-precio-ordenado");
    for (const boton of botonOrdenPrecio) {
        boton.addEventListener("click", ordenarPorPrecio);
    }
}
ordenarproducto();
/** Fin ordenar producto por precio */
////////////////////////////////////////
/** Buscar producto por nombre */
const buscarProducto = () => {
    const inputProd = document.getElementById("input-producto-filtrado");
    const inputNombre = inputProd.value.toLowerCase();
    ///console.log(inputNombre, " nombreProducto linea 33");
    productoObtenidoPorNombre = objetoDeposito.buscarProductoPorNombre(inputNombre);
    ///console.log(productoObtenidoPorNombre);
    objetoDeposito.renderizarProductos(productoObtenidoPorNombre);
}
function agregarEventoBtnBuscarProducto() {
    const botonBuscarprod = document.getElementById("button-producto-filtrado");
    botonBuscarprod.addEventListener("click", buscarProducto);
}
agregarEventoBtnBuscarProducto(); 
/** Fin buscar producto por nombre */
/////////////////////////////////////
/** Ordenar alfabeticamnete */
const ordenarAlfabeticamente = (e) => {
    const eventoBtn = e.target.dataset.id;
    //console.log(eventoBtn);
    let orden;
    if (eventoBtn === "a") {
        orden = objetoDeposito.ordenarProductoDeAZ();
        //console.log(orden);
    } else {
        orden = objetoDeposito.ordenarProductoDeZA();
        //console.log(orden);
    }
    objetoDeposito.renderizarProductos(orden);
}
function agregarEventoBtnPorOrdenAlfabetico() {
    const btnOrdenAlfabetico = document.getElementsByClassName("btn-orden-alfabetico");
    for (const ordenAlfabetico of btnOrdenAlfabetico) {
        ordenAlfabetico.addEventListener("click", ordenarAlfabeticamente);
    }
}
agregarEventoBtnPorOrdenAlfabetico();
/** Fin ordenar alfabeticamnete */
/** Debo ver el tema de orden alfabetico */