# MI PROYECTO DE REACT JS - RUNAWAY

Este es mi proyecto para el curso, se trata de una tienda e-commerce de ropa sin etiquetas de genero, reciclada y confeccionada a nueva con el objetivo de reducir la contaminacion textil.

## Librerias

En librerias usadas se puede ver como se implemento la de react-bootstrap para conformar todo lo que es lo visual del proyecto.

## Navegabilidad

Toda la navegacion fue lograda gracias a la dependecia de react-router-dom, con esta se logra no desmontar componentes y refrescar la pagina de manera constante al cambiar de categorias o itemsId

## Filtrado

Se filtra los productos segun su categorias utilizando el useParams y un useEffect para detectar los posibles cambios de ruta, volviendo asi a disparar los primises.
Tambien se usan loaders para simular una carga de productos mientras se resuelve la logica y se intenta no sobre-optimizar para mantenerse con un aspecto simple.

## Video mostrando la navegacion
https://youtu.be/odGxO5B7vOU