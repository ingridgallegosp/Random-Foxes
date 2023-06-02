import { RandomFox } from './component/RandomFox'
const random = () => Math.floor(Math.random() * 123) + 1;

const Home = ()  => {
    return (
        <div>
            <h1 className='text-3xl font-bold underline'>
                Hello world!
            </h1>
            <RandomFox image= {`https://randomfox.ca/images/${random()}.jpg`}/>
        </div>
    )
}

export default Home
