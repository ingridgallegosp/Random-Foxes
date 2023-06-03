'use client';
import { useState } from 'react'
import type { MouseEventHandler } from 'react'
import { RandomFox } from './component/RandomFox'

//funcion para generar elementos random
const random = () => Math.floor(Math.random() * 123) + 1;

//2 formas para tipar 
//1 - array de objetos y cada objeto va a tener id y url
//type ImageItems = Array<{ id: string, url: string }>;
//const [images, setImages] = useState <ImageItems>([])

//2 - minima representacion es el item como tal- solo el elemento que esta dentro del [] => useState + <Array<ImageItem>>
type ImageItem = { id: string, url: string };

//funcion para generar id unicos
const generateId = () => Math.random().toString(36).substring(2,9)

const Home = () => {
    
    const [images, setImages] = useState<Array<ImageItem>>([]);
    
    const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
        //event.preventDefault()
        //const target = event.target
        const newImageItem: ImageItem = {
            id: generateId(),
            url: `https://randomfox.ca/images/${random()}.jpg`
        };
        setImages([...images, newImageItem]);
    }
    return (
        <body>
            <h1 className='text-3xl font-bold underline'>
                Hello world!
            </h1>
            <button
                className='p-2 border rounded-lg'
                onClick={() => addNewFox()}
            >
                Add New Fox
            </button>
            <div>
            {
                    images.map((image) => {
                    return(
                        <div key={image.id} className='p-4'>
                            <RandomFox image = {image.url}/>
                        </div>
                    )
                })
            }
           </div>
        </body>
    )
}

export default Home
