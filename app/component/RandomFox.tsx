//2 Explicito - Tipa lo que retorna la funcion (un elemento de React) // es el que se debe usar
const random = () => Math.floor(Math.random() * 123) + 1;

export const RandomFox = (): JSX.Element => {

    const url: string = `https://randomfox.ca/images/${random()}.jpg`
    
     return (
         <img width={320} height='auto' className='rounded' src={url} alt='' />
    ) 
}
