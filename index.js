const express = require ("express");
const app = express ();


app.use(express.json());

const productos = [
    {id:1, title:"lechuga", precio:100, enroll: true},
    {id:2, title:"banana", precio:200, enroll: true},
    {id:3, title:"manzana", precio:150, enroll: true},
    {id:4, title:"naranja", precio:50, enroll: false}
];

app.get("/", (req,res) =>{
    res.send("JS api")
});

app.get("/api/productos/:id", (req,res) => {
    const productos = productos.find(c => c.id === parseInt(req.params.id));
    if (!productos) return res.status(404).send("Producto no encontrado");
    else res.send(productos);
});

app.get("/api/productos", (req,res) =>{
    res.send(productos);
});


app.post("/api/productos", (req,res) => {
    const productos = {
        id: productos.length +1,
        title: req.body.title,
        precio:parseInt(req.body.precio),
        enroll:(req.body.enroll === "true")
    };

    productos.push(productos);
    res.send(productos)
});

app.delete("/api/productos/:id", (req, res) =>{
    const productos = productos.find(c=> c.id === pareseInt(req.params.id));
    if (!productos) return res.status(404).send("Producto no encontrado");

    const index = productos.indexOF(productos)
    productos.splice(index, 1);
    res.send(productos);
});

const port = process.env.port || 80;
app.listen(port,() => console.log(`Escuchando en puerto ${port}.`));
