let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: 118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinty War',
}

console.log(personaje);
console.log( 'Nombre:', personaje.nombre );
console.log( 'Nombre:', personaje['nombre'] );
console.log( 'Edad:', personaje.edad );
console.log( 'Coors', personaje.coords.lat, '-', personaje.coords.lng );
console.log( 'Nro. de trajes: ', personaje.trajes.length );
console.log( 'Ultimo traje:', personaje.trajes[personaje.trajes.length - 1] );


const x = 'vivo';
console.log( 'Vivo?', personaje[x] );
console.log( 'Ultima pelicula', personaje['ultima-pelicula'] );

// Borrar llaves del objeto

delete personaje.edad;
console.log( personaje );

// Agregar nuevas llaves al objeto 
personaje.casado = true;

// Convertir el objeto a un Array
const entriesPares = Object.entries( personaje );
console.log( entriesPares );

// Bloquear el objeto para no modificar la informacion

Object.freeze( personaje );
personaje.dinero = 145563221;
console.log( personaje );



// listado de todas las propiedades4
const propiedades = Object.getOwnPropertyNames( personaje );
const valores = Object.values( personaje );
console.log( 'Propiedades: ', propiedades );
console.log( 'Valores: ', valores );