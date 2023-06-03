import { useRef, useEffect } from 'react'

//tipado Explicito - Tipa lo que retorna la funcion (un elemento de React) // es el que se debe usar
type Props = {image: string}

/* export const RandomFox = (props:Props): JSX.Element => {
     return (
         <img width={320} height='auto' className='rounded' src={props.image} alt='' />
    ) 
} */

//cambio en tipado
export const RandomFox = ({ image }: Props): JSX.Element => {
    //etiqueta de imagen => HTMLImageElement
    const node = useRef<HTMLImageElement>(null) //ojo:  con TS se inicializa en null siempre que no conozca el valor inicial

    //se ejecuta cuando la imagen es visible en pantalla
    //(tiene interseccion con el browser)
    useEffect(() => {
    //new watcher
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                //on Interseccion => console.log()
                if (entry.isIntersecting) {
                    console.log('si funk')
                }
            })
        });
    
    //observar nodo
        if (node.current) {
           observer.observe(node.current); 
        }
        
    //desconectar
        return (() => {
            observer.disconnect()
        });
    
    }, [])
    
    return (
        <img ref={node} width={320} height='auto' className='rounded' src={image} alt='' />
   ) 
}
