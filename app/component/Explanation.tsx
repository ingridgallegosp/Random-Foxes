//1 Implicito - infiere que funcion retorna un elemento jsx
/* export const RandomFox = () => {
    return (
        <img/>
    )
} */

//2 Explicito - Tipa lo que retorna la funcion (un elemento de React) // es el que se debe usar
export const RandomFox = (): JSX.Element => {
    //return 39 //arriba le digo q retorna elemento de React y aqui marca error porq regresa un numero
     return (
        <img/>
    ) 
}

//3 Tipos que vienen de TS- ayudas - Tipa la constante
/* import type { FunctionComponent, FC } from 'react';

export const RandomFox: FunctionComponent = () => {
     return (
        <img/>
    ) 
} */ 

/* import type { FC } from 'react';

export const RandomFox: FC = () => {
     return (
        <img/>
    ) 
}  */


