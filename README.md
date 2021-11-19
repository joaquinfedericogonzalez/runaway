# MI PROYECTO DE REACT JS - RUNAWAY

Este es mi proyecto para el curso, se trata de una tienda e-commerce de ropa sin etiquetas de genero, reciclada y confeccionada a nueva con el objetivo de reducir la contaminacion textil.

## Librerias

En librerias usadas se puede ver como se implemento la de react-bootstrap para conformar todo lo que es lo visual del proyecto.
Tambien fue usada la galeria mostrada en clase de SweetAlert2 para lo que seria todo lo de avisos, como por ejemplo compra realizada, datos mal conformados, etc.

## Navegabilidad

Toda la navegacion fue lograda gracias a la dependecia de react-router-dom, con esta se logra no desmontar componentes y refrescar la pagina de manera constante al cambiar de categorias o itemsId.

## Filtrado

Se filtra los productos segun su categorias utilizando el useParams y un useEffect para detectar los posibles cambios de ruta, volviendo asi a disparar los promises.
Tambien se usan loaders para simular una carga de productos mientras se resuelve la logica y se intenta no sobre-optimizar para mantenerse con un aspecto simple.
Tambien se separa por archivos diferentes la logica de la vista usuario para mantener un orden en el codigo.

## Cart
Se desabilitan los campos hasta la respuesta que da firebase sobre el stock, dejandolos asi inutilizables hasta dicha respuesta. Terminada esta compra se regresa al usuario al inicio vaciando dicho carrito para asi estar listo si quiere comprar algo mas despues, sin que su compra anterior se mantenga en el carrito, evitando asi confusiones y compras indeseadas.

## Link de la pagina hosteada: 
https://gallant-knuth-0034d2.netlify.app/