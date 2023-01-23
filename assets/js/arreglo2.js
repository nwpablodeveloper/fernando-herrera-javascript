let colorCss = 'color: black; font-weight: bold';

let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log( 'Largo: ', juegos.length );

console.log('%c 1er elemento', colorCss);
console.log( juegos[0] );

console.log('%c ultimo elemento', colorCss);
console.log( juegos[juegos.length - 1] );

console.log('%c Imprimir todo el array', colorCss);
juegos.forEach( ( elemento, indice, arr ) => {
    console.log(elemento);
});

// agregar elementos al arreglo
console.log('%c Agrego Sonic y muestro nueva longitud', colorCss);
console.log(juegos.length);
let longitud = juegos.push('Sonic');
console.log( { longitud }, juegos  );

// agrego al principio del 
console.log('%c Agrego al principio Tetris', colorCss);
longitud = juegos.unshift( 'Tetris' );
console.log( { longitud }, juegos  );

console.log('%c Borrar lo de la ultima posición', colorCss);
let juegoBorrado = juegos.pop();
console.log( { juegoBorrado } );

console.log('%c Borrar elementos desde un indice', colorCss);
let elementoBorrados = juegos.splice( 1, 2 )
console.log( { elementoBorrados },  juegos  );

console.log('%c Buscar si existe el elemento, (muestra posición)', colorCss);
let resBusqueda = juegos.indexOf('Chrono');
console.log({resBusqueda});