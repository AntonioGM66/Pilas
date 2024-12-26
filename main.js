/*ESTRUCTURA PARA EL ARMADO DE UNA PILA
class stack{
    #stack

    constructor(){
        this.#stack=[];
    }

    push(data){
        this.#stack=[...this.#stack,data];
    }

    pop(){
        let popElement=this.#stack[this.#stack.length - 1];
        let newstack=[];
        for(let i; i<this.#stack.length-1; i++)
        {
            newstack[i]=this.#stack[i];
        }
        this.#stack=newstack;
        return popElement;
    }

    peek(){
        return this.#stack[this.#stack.length-1];
    }

    size(){
        return this.#stack.length;
    }

    print(){
        this.#stack.forEach((stackElement) => console.log(stackElement))
    }
}*/

/*EJERCCIO 1 DE PILAS
function miFuncion() {
    // Pedimos los datos de la pila al usuario como una cadena separada por comas
    let fruits = prompt("Ingrese los datos de la pila, separados por comas (ej: Manzana,Cebolla,Apio)").split(",");

    console.log(fruits);

    // Pedimos el número de elementos a eliminar
    let parametros = parseInt(prompt("Ingrese el número de parámetros a eliminar"), 10);

    // Validamos que el número sea un entero válido
    if (isNaN(parametros) || parametros < 0) {
        console.log("Por favor, ingrese un número válido.");
        return;
    }

    // Verificamos si el número de elementos a eliminar excede la longitud de la pila
    if (parametros > fruits.length) {
        console.log("El número de parámetros excede el tamaño de la pila.");
    } else {
        // Eliminamos elementos de la pila
        for (let i = 0; i < parametros; i++) {
            if (fruits.length > 0) {
                fruits.pop(); // Quitamos el último elemento
            } else {
                console.log("La pila está vacía.");
                break;
            }
        }
    }

    // Mostramos la pila actualizada
    console.log("Pila actual:", fruits);
}

// Llamamos a la función
miFuncion();*/

/*function recorrido(caminos) {
    let ida = [...caminos]; // Copia del camino de ida
    let regreso = []; // Pila para el camino de regreso

    // Mostrar el camino de ida
    console.log("Ida: " + ida.join(" → "));

    // Apilar los pueblos para el regreso
    while (ida.length > 0) {
        regreso.push(ida.pop());
    }

    // Mostrar el camino de regreso
    console.log("Regreso: " + regreso.join(" → "));
}

// Ejemplo de uso
let pueblos = ["Pueblo Origen", "Pueblo 1", "Pueblo 2", "Destino"];
recorrido(pueblos);*/

class Almacen {
    constructor(capacidad) {
        this.pilaPrincipal = []; // Pila donde se apilan los contenedores
        this.pilaAuxiliar = [];  // Pila temporal para mover contenedores
        this.capacidad = capacidad; // Capacidad máxima del almacén
    }

    apilar(contenedor) {
        if (this.pilaPrincipal.length < this.capacidad) {
            this.pilaPrincipal.push(contenedor);
            console.log(`Contenedor ${contenedor} apilado.`);
        } else {
            console.log(`El almacén está lleno. No se puede apilar el contenedor ${contenedor}.`);
        }
    }

    retirar(contenedorID) {
        if (!this.pilaPrincipal.includes(contenedorID)) {
            console.log(`El contenedor ${contenedorID} no se encuentra en el almacén.`);
            return;
        }

        // Mover los contenedores que están encima del contenedor deseado
        while (this.pilaPrincipal[this.pilaPrincipal.length - 1] !== contenedorID) {
            let contenedor = this.pilaPrincipal.pop();
            console.log(`Moviendo contenedor ${contenedor} a la pila auxiliar.`);
            this.pilaAuxiliar.push(contenedor);
        }

        // Retirar el contenedor deseado
        console.log(`Retirando contenedor ${contenedorID}.`);
        this.pilaPrincipal.pop();

        // Regresar los contenedores a su lugar original
        while (this.pilaAuxiliar.length > 0) {
            let contenedor = this.pilaAuxiliar.pop();
            console.log(`Regresando contenedor ${contenedor} a la pila principal.`);
            this.pilaPrincipal.push(contenedor);
        }
    }

    mostrarEstado() {
        console.log("Pila principal:", this.pilaPrincipal);
        console.log("Pila auxiliar:", this.pilaAuxiliar);
    }
}

// Ejemplo de uso
const almacen = new Almacen(5);
almacen.apilar(1);
almacen.apilar(2);
almacen.apilar(3);
almacen.apilar(4);
almacen.apilar(5);

console.log("\nEstado inicial del almacén:");
almacen.mostrarEstado();

console.log("\nRetirando contenedor 103:");
almacen.retirar(3);

console.log("\nEstado final del almacén:");
almacen.mostrarEstado();