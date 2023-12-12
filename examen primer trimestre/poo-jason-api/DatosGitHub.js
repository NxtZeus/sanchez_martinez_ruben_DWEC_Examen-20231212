// Creamos una variable en la que guardaremos los datos en formato JSON.
let misDatosGithubJSON = JSON.stringify({
    'login' : 'NxtZeus',
    'id' : 108354906,
    'email' : null,
    'public_repos' : 3
})

// Creamos la clase con los datos del JSON importandolos y definiendolos.
class datosGitHub {
    constructor (datosGitHub){
    this.datos = JSON.parse(misDatosGithubJSON)
    this.login = this.datos.login
    this.id = this.datos.id
    this.email = this.datos.email
    this.public_repos = this.datos.public_repos
    }
    // Definimos este método para que muestre los datos de forma formateada.
    datosRecibidos () {
        console.log(`El Usuario de GitHub ${this.login} tiene un id: ${this.id} cuyo correo es ${this.email} y tiene ${this.public_repos} repositorios públicos. `);
    }
}

// Creamos una variable con los datos para mostrarlos.
let misDatos = new datosGitHub(misDatosGithubJSON);
// Ejecutamos la función con la variable en la que guardamos los datos.
misDatos.datosRecibidos()