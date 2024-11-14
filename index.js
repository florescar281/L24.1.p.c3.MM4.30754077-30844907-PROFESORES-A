const salida = document.getElementById("salida");  

let Profesores = [
    {categoría: 1, nombre: "Ana", sexo: "F"},
    {categoría: 2, nombre: "Carlos", sexo: "M"},
    {categoría: 3, nombre: "Diana", sexo: "F"},
    {categoría: 4, nombre: "Eduardo", sexo: "M"},
    {categoría: 5, nombre: "Fernanda", sexo: "F"},
    {categoría: 3, nombre: "Gustavo", sexo: "M"},
    {categoría: 4, nombre: "Helena", sexo: "F"},
    {categoría: 5, nombre: "Ivan", sexo: "M"},
    {categoría: 1, nombre: "Javier", sexo: "M"},
    {categoría: 2, nombre: "Katherine", sexo: "F"},
    {categoría: 3, nombre: "Luis", sexo: "M"},
    {categoría: 4, nombre: "Mariana", sexo: "F"}
]

let profesoresCategoria = (Profesores, categoria) => {
    return Profesores.filter(profesor => profesor.categoría == categoria);
}

salida.innerHTML = `
    <h1>Profesores de la categoría</h1>
    <p>Los profesores en la categoria 3 son: ${JSON.stringify(profesoresCategoria(Profesores, 3))} <br>
    Los profesores en la categoria 4 son: ${JSON.stringify(profesoresCategoria(Profesores, 4))}<br>
    Los profesores en la categoria 5 son: ${JSON.stringify(profesoresCategoria(Profesores, 5))}<br>
    Los profesores en la categoria 1 son: ${JSON.stringify(profesoresCategoria(Profesores, 1))}<br>
    Los profesores en la categoria 2 son: ${JSON.stringify(profesoresCategoria(Profesores, 2))}<br>
    </p>
`