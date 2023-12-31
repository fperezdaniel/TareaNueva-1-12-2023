const productos =  [
    {
        categoria: "carne",
        nombre: "bife de chorizo",
        marca: "coto",
        codigo: "AUR980",
        stock: 100,
        precio: 1000,
    },
    {
        categoria: "carne",
        nombre: "vacio",
        marca: "coto",
        codigo: "AUR981",
        stock: 100,
        precio: 3000,
    },
    {
        categoria: "carne",
        nombre: "entraña",
        marca: "coto",
        codigo: "AUR982",
        stock: 200,
        precio: 1500,
    },
    {
        categoria: "carne",
        nombre: "tira de asado",
        marca: "coto",
        codigo: "AUR983",
        stock: 300,
        precio: 2500,
    },
    {
        categoria: "carne",
        nombre: "chorizo",
        marca: "coto",
        codigo: "AUR984",
        stock: 100,
        precio: 2000,
    },
    {
        categoria: "panificado",
        nombre: "lactal",
        marca: "fargo",
        codigo: "ABC228",
        stock: 100,
        precio: 900,
    },
    {
        categoria: "panificado",
        nombre: "facturas de manteca",
        marca: "coto",
        codigo: "ABC229",
        stock: 100,
        precio: 1800,
    },
    {
        categoria: "panificado",
        nombre: "donas",
        marca: "bonafide",
        codigo: "ABC230",
        stock: 100,
        precio: 1500,
    },
    {
        categoria: "panificado",
        nombre: "baguette",
        marca: "coto",
        codigo: "ABC231",
        stock: 100,
        precio: 200,
    },
    {
        categoria: "panificado",
        nombre: "boule",
        marca: "coto",
        codigo: "ABC232",
        stock: 100,
        precio: 300,
    },
    {
        categoria: "electronicos",
        nombre: "QLED Samsung 55",
        marca: "samsung",
        codigo: "ADR997",
        stock: 10,
        precio: 370050,
    },
    {
        categoria: "electronicos",
        nombre: "dvd",
        marca: "sony",
        codigo: "ADR998",
        stock: 10,
        precio: 100000,
    },
    {
        categoria: "electronicos",
        nombre: "playstation 5",
        marca: "sony",
        codigo: "ADR999",
        stock: 10,
        precio: 1000000,
    },
    {
        categoria: "electronicos",
        nombre: "parlante bluetooth",
        marca: "philco",
        codigo: "ADR1000",
        stock: 4,
        precio: 32000,
    },
    {
        categoria: "electronicos",
        nombre: "monitor led",
        marca: "noblex",
        codigo: "ADR1001",
        stock: 20,
        precio: 100000,
    }
];
localStorage.setItem("productos", JSON.stringify(productos));