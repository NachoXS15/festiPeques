import { useState } from 'react'
import cards from '../../config/Cards'
import dorso from '../../assets/cards/dorso.webp'
export default function MemoryPlay() {
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(120)

  return (
      <>
        <div className='w-full h-screen bg-slate-500 flex flex-col justify-between items-center text-white' style={{fontFamily: 'gambado-sans'}}>
          <h1 className='text-5xl text-center mt-10 mb-2 underline'>Juego de la Memoria</h1>
          <div className='w-3/5 h-3/5 flex flex-wrap items-center justify-center'>
            {
              cards.map((card) => (
                // <img src={`/src/assets/cards/${card}`} width={107} className='m-1 hover:scale-105 transition active:scale-105 transition' alt="" />
                <img src={dorso} width={107} className='m-1 hover:scale-105 active:scale-105 transition' alt="" />
              ))
            }
          </div>
          <div className='w-full flex justify-around'>
            <h2 className='text-3xl pb-10 pr-10'>Tiempo restante: {timeLeft}s</h2>
            <h2 className='text-3xl pb-10 pr-10'>Puntuacion: {score}/10</h2>
          </div>
        </div>
      </>
  )
}
