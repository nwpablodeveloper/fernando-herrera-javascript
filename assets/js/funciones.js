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

saludar1();
saludar( 'Romina' );
saludar2( 'Pablo' );
saludarFlecha( 'Sophia' )