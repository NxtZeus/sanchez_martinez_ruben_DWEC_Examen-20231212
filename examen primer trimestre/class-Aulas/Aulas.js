// Aqui creamos la clase aula con los atributos numero y capacidad, con el metodo presentarMateriales.
class Aula {
    constructor(numero, capacidad) {
        this.numero = numero;
        this.capacidad = capacidad;
    }
    presentarMateriales() {
        console.log("Bienvenidos al aula 1, la cual tiene capacidad para 20 personas");
    }
}

// Aqui creamos el objeto musica con los atributos de Aula sobreescribiendo el método.
class Musica extends Aula {
    presentarMateriales() {
        console.log("Bienvenidos al aula de música número 2. Hoy presentaremos los materiales necesarios para la clase de saxofón, solamente tenemos 10 plazas");
    }
}

// Aqui creamos el objeto tecnología con los atributos de Aula sobreescribiendo el método.
class Tecnologia extends Aula {
    presentarMateriales() {
        console.log("Bienvenidos al aula de tecnología número 3. El día de hoy hemos comprador 20 ordenadores adicionales para aprender a programar, en total ahora tenemos 30 estudiantes de capacidad");
    }
}

// Guardamos el objeto en una variable para poder mostrarlo.
let aula1 = new Aula();
let aula2 = new Musica();
let aula3 = new Tecnologia();

// Aqui ejecutamos la funcion con cada objeto.
aula1.presentarMateriales();
aula2.presentarMateriales();
aula3.presentarMateriales();


// ¿Cómo se llama la característica de la POO que permite sobrescribir los métodos en herencia? 
console.log("Polimorfismo");