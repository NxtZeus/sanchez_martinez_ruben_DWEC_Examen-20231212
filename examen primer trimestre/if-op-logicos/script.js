
function saludarSegunHora() {
    // Guardamos la hora actual en una variable.
    let hora = new Date().getHours();

    // Con este condicional definimos lo que va a devolver la función dependiendo de la hora del día.
    if ((hora >= 5) && (hora <= 12)) {
        console.log('Buenos dias')
    } else if ((hora >= 12) && (hora <= 18)) {
        console.log('Buenas tardes')
    } else {
        console.log('Buenas noches')
    }
}

//Ejecutamos la función.
saludarSegunHora()