// FLEXBOX

// .contenedor {
    // display: flex;
    // flex-wrap: wrap
// }

// cual elemento del contenedor, le doy esa propiedad para decirle que es un flex item. 
// se aplica a los hijos del elemento contenedor.

// por defecto viene la propiedad flex-wrap: nowrap
// hay que cambiar de eso a flex-wrap: wrap, asi se respeta el width de cada elemento

// Ejes

// Main axis (horizontal por defecto), el main axis star esta del lado izquierdo y el main axis end es derecho
// Cross axis por defecto es el vertical - tiene cross axis start (arriba) y end (abajo)

// propiedades en el css:

// flex direction: row; (main horizontal y start es izq, es el que viene por defecto)
// flex direction: column (el main es el vertical y start arriba)
// flex direction: row-reverse (main horizontal pero al reves)
// flex-direction: column-reverse (vertical, de abajo hacia arriba)

// propiedades para alinear los elementos:

// a traves del main axis con justify-content
// alineamos los items en el horizontal - si no le aclaramos, se alinean por decto como justify-content: flex-start (se alinean respecto al inicio)
// justify-content: flex-end - se alinean respecto al final del main axis
// justify-content: center - se alinean al centro
// justify-content: space-between - sse distribuyen de manera uniforme dejando un espacio entre los items, quedando uno en el start y el ultimo en el end
// justify-content: space-around - genera espacio igual que el anterior, pero deja un espacio entre el primer elemento y el start, y entre el ultimo y el main axis end

// a traves del cross axis con align-items
//  align-items: stretch es el valor por defecto, se ajustan para abarcar todo el contenedor. - los items se estiran para tomar todos el valor del elemento mas alto del contenedor
// align-items: flex-start , todos se alinean al start, se alinean todos al punto mas alto de la caja
// align-items: flex-end , todos se alinean al start, se alinean todos al punto mas bajo de la caja
// align-items: center, se alinean al eje medio central

// ESTRUCTURA BASICA



// primero definimos el contendor padre que seria un flex-container, y dentro de este trabaja,ps con los hujos directos del elemento que serian los flex-items
// 

// .contenedor-padre{
    // display: flex;
// }

// por defecto todos los flex-items van a tratar de entrar todos en la misma linea 
// si queremos que respeten su valor de width, le agregamos la propiedad:
// flex-wrap: wrap; si no entran caen a la linea de abajo


// ITEMS

// order, recibe un entero

// todos los items vienen por defecto en 0
// si a uno le pongo el valor 1, pasara al final de la fila por ser el valor mas alto
// .caja-q{
    // order: 1;
// }
// y con -1, pasa al principio

// align-self, recibe mismos parametros que align-items

// alinea items en el cross axis

// flex-grow

// define cuanto puede llegar a crecer un item en caso de disponer de un espacio libre en el contenedor
// si ambos items tienen flex-grow:1; iran creciendo en partes iguales
// si uno solo lo tiene, este va a crecer mas que el otro
// recibe valores entre 1 y 0 , siendo 1 el 100%

// solo afectan a los items asignados