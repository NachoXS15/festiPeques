import { NavLink } from 'react-router-dom'
import qa from '../../assets/bgs/qaImg.webp'
import { ArrowBack } from '../../components/ui/svgs'
export default function QARules() {
  return (
    <div className='w-full h-screen relative bg-center bg-cover flex flex-col justify-between items-start pl-20 py-20' style={{fontFamily: 'gambado-sans',backgroundImage: `url(${qa})`}}>
      <NavLink to="/" className="absolute right-28"><ArrowBack /></NavLink>
      <h1 className='text-8xl font-bold text-cyan'>Mentes Brillantes</h1>
      <div>
        <h3 className='text-4xl text-lightorange'>Objetivo del juego:</h3>
        <p className='text-4xl text-white'>Para ganar debes resopnder la mayor cantidad <br /> de preguntas de manera correcta</p>
      </div>
      <NavLink to="/qagame-play" className="active:scale-105 transition text-5xl bg-cyan px-16 py-5 rounded-full text-white">
        Jugar
      </NavLink>
    </div>
  )
}
