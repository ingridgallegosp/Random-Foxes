import { useRef, useEffect, useState } from 'react'
import type { ImgHTMLAttributes } from 'react'

//tipado Explicito - Tipa lo que retorna la funcion (un elemento de React) // es el que se debe usar
type LazyImageProps = { srcs: string };

type ImageNative = ImgHTMLAttributes<HTMLImageElement>;

type Props = LazyImageProps & ImageNative;



/* export const RandomFox = (props:Props): JSX.Element => {
     return (
         <img width={320} height='auto' className='rounded' src={props.image} alt='' />
    ) 
} */

//cambio en tipado
export const LazyImage = ({ src, ...imgProps }: Props): JSX.Element => {
    //etiqueta de imagen => HTMLImageElement
    const node = useRef<HTMLImageElement>(null) //ojo:  con TS se inicializa en null siempre que no conozca el valor inicial

    //state - la imagen es fondo gris hasta que se intersecta o es visible en pantalla
    const transparentImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4='
    const [currentSrc, setCurrentSrc] = useState(transparentImage)
    
    //se ejecuta cuando la imagen es visible en pantalla
    //(tiene interseccion con el browser)
    useEffect(() => {
    //new watcher
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                //on Interseccion => console.log()
                if (entry.isIntersecting) {
                    console.log('si funk')
                    setCurrentSrc(src)
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
    
    }, [src])
    
    return (
        //inicializa con el valor original de src => lazyImage y carga la imagen solo cuadno se intersecta con browser
        <img ref={node} src={currentSrc} {...imgProps}
        />
   ) 
}
