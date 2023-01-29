// forma larga
function crearPersona ( nombre, apellido ) {
    return {
        nombre,
        apellido
    }
}

const crearPersona2 = ( nombre, apellido ) => ( { nombre, apellido } )

const persona = crearPersona( 'Pablo', 'Veiga' );
console.log( persona );

console.log( crearPersona2( 'Pablo', 'Veiga' ) );

// forma larga
function imprimirArgumentos(){
    console.log( arguments );
}


// con funcion de flecha
imprimirArgumentos( 10, true, 'Pablo', 'Sophi', 0.07);

const imprimirArgumentos2 = ( edad, ...args ) => {
    return args
}

const argumentos = imprimirArgumentos2(  34, false, true, 7, 'Malgrat de mar', 'Italiana' );
console.log( argumentos );

// desestructurar el arreglo
const [ casado, hijos, edadHijo, localidad, nac ]  =  imprimirArgumentos2( 34, false, true, 7, 'Malgrat de mar', 'Italiana' );
console.log( { casado, hijos, edadHijo, localidad, nac } );


const { apellido: nuevoApellido } = crearPersona( 'Pablo', 'Veiga' );
console.log( nuevoApellido );


// destructuración de argumentos
const imprimePropiedades = ( { nombre, codeName, vivo, edad, trajes } ) => {
    return {
        nombre, codeName, vivo, edad, trajes
    }
}


const tony = {
    nombre: 'Tony Stark',
    codeName: 'Iroman',
    vivo: false,
    edad: 40,
    trajes: [ 'Mark I', 'Mark V', 'Hulkbuster' ]
}

const personajeDesestructurado = imprimePropiedades( tony );
console.log(personajeDesestructurado);