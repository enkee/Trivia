function pintarNombre() {
    document.getElementById("saludo").innerHTML += localStorage.getItem("name");
}

pintarNombre()

const temas = [
    "peliculas", "series", "novelas"
]