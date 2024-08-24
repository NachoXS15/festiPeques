import puzzle from '../../assets/bgs/puzzleImg.webp'
export default function MemoryRules() {
  return (
    <div className='w-full h-screen bg-center bg-cover flex flex-col justify-between items-start pl-20 py-20' style={{fontFamily: 'gambado-sans',backgroundImage: `url(${puzzle})`}}>
      <h1 className='text-8xl font-bold text-purple'>PuzzleMania</h1>
      <div>
        <h3 className='text-4xl text-lightpurple'>Objetivo del juego:</h3>
        <p className='text-4xl text-white'>Para ganar Puzzlemania debes divertirte<br />armando un rompecabezas</p>
      </div>
      <a href='https://nachoxs15.github.io/puzzleMania/' className="active:scale-105 transition text-5xl bg-orange px-16 py-5 rounded-full text-white">
        Jugar
      </a>
    </div>
  )
}
