// comentarios con doble barra
console.log('Hola mundo')

/* forma larga de declarar bariables
let a = 10;
let b = 10;
let c = 10;
let d = 10;
let x = a + b;*/

// forma corta de declarar variables
let a = 10, 
    b = 20, 
    c = 30, 
    d = 40, 
    e = 'Hola ',
    f = 'Spiderman',
    x = a + b;

const saludo = e + f;

// mostrar datos en consola y saber de que variable es
console.log('%c Mis variables', 'color: green; font-weight: bold');
console.log( 'a: ', a );
console.warn( 'b: ', b );
console.error( 'c: ', c );
console.info( 'd: ', d);

console.log('  ');

// opción b mostrar datos en consola y saber de que variable es
console.log('%c Mis variables', 'color: orange; font-weight: bold');
console.log({ a });
console.log({ b });
console.log({ c });
console.log({ d });

console.log('  ');
// imprimir variables en una tabla
console.log('%c Mis variables en una tabla', 'color: blue; font-weight: bold');
console.table({a, b, c, d, e, f});