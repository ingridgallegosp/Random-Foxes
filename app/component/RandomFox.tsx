//2 Explicito - Tipa lo que retorna la funcion (un elemento de React) // es el que se debe usar
type Props = {image: string}

/* export const RandomFox = (props:Props): JSX.Element => {
     return (
         <img width={320} height='auto' className='rounded' src={props.image} alt='' />
    ) 
} */

//cambio en tipado
export const RandomFox = ({image}:Props): JSX.Element => {
    return (
        <img width={320} height='auto' className='rounded' src={image} alt='' />
   ) 
}
