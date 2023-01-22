// creo un arreglo de 11 lugares
// const arr = new Array(10); 
// const arr = [];
// console.log(arr);

let videoJuegos = [ 'Mario 3', 'Megaman', 'Chrono Trigger' ];
console.log({ videoJuegos });
console.log( videoJuegos[0] );

let arregloCosas = [
    true,
    123,
    'Pablo',
    1 + 2,
    function(){},
    () => {},
    { a: 1, nombre: 'Sophia' },
    ['X', 'Megaman', 'Zero', 'Dr. Light']
];
console.log( arregloCosas );
console.log( '%c Tarea imprimir Dr. Light que esta en al array adentro del array: ', 'color: red; font-weight:bold' );

console.log( arregloCosas[7][3] );

