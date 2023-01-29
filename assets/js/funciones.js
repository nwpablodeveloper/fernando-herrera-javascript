function saludar1() {
    console.log( 'Hola Mundo' );
}

function saludar( nombre ) {
    console.log( arguments );
    console.log( 'Hola', nombre );
}

const saludar2 = function ( nombre ) {
    console.log('Hola ', nombre);
} 

const saludarFlecha = ( nombre ) => {
    console.log('Saludar con flecha ', nombre);
}

// forma larga 
const sumar = ( a, b ) => {
    return a + b;
}

// forma corta 
const sumar2 = ( a, b ) => a + b;

// forma larga
function getAleatorio() {
    return Math.random();
}

// forma corta
const getAleatorio2 = () => Math.random();

saludar1();
saludar( 'Romina' );
saludar2( 'Pablo' );
saludarFlecha( 'Sophia' );
console.log(sumar( 7, 34 ));
console.log(sumar2( 7, 34 ));
console.log( getAleatorio() );
console.log( getAleatorio2() );