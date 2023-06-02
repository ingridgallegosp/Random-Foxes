'use client';
import { useState } from 'react'
import { RandomFox } from './component/RandomFox'

const random = () => Math.floor(Math.random() * 123) + 1;

const Home = () => {
    const [images, setImages] = useState<string[]>([
        `https://randomfox.ca/images/${random()}.jpg`,
        `https://randomfox.ca/images/${random()}.jpg`,
        `https://randomfox.ca/images/${random()}.jpg`,
        `https://randomfox.ca/images/${random()}.jpg`
    ]);
    
    return (
        <body>
            <h1 className='text-3xl font-bold underline'>
                Hello world!
            </h1>
            <div>
            {
                    images.map((image, index) => {
                    return(
                        <div key={index} className='p-4'>
                            <RandomFox image = {image}/>
                        </div>
                    )
                })
            }
           </div>
        </body>
    )
}

export default Home
