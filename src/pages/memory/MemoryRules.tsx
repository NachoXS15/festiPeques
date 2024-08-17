import { NavLink } from 'react-router-dom'
import memory from '../../assets/bgs/memoriaImg.webp'
import { ArrowBack } from '../../components/ui/svgs'
export default function MemoryRules() {
  return (
    <div className='w-full h-screen relative bg-center bg-cover flex flex-col justify-between items-start pl-20 py-20' style={{ fontFamily: 'gambado-sans', backgroundImage: `url(${memory})` }}>
      <NavLink to="/" className="absolute right-28"><ArrowBack /></NavLink>
      <h1 className='text-6xl font-bold text-lightorange line-clamp-4'>Reglas del Juego <br /> de la Memoria</h1>
      <div>
        <h3 className='text-4xl text-lightorange'>Objetivo del juego:</h3>
        <p className='text-4xl text-white'>Para ganar debes encontrar todos <br /> los pares de cartas iguales</p>
      </div>
      <NavLink to="/memorygame-play" className="active:scale-105 transition text-5xl px-16 py-5 rounded-full text-white bg-lightpurple">
        Jugar
      </NavLink>
    </div>
  )
}
