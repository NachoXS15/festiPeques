// import bg from '../../assets/bgs/puzzle_result.webp'
import { useEffect, useState } from "react"
import pieces from "../../config/PuzzlePieces"
import PieceProps from "../../config/PieceProps";
export default function PuzzlePlay() {
  const [selectedBlock, setSelectedBlock] = useState<PieceProps>()
  
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * pieces.length);
    setSelectedBlock(pieces[randomIndex])
  }, [selectedBlock])

  return (
    <>
      <div className='w-full h-screen bg-slate-400 bg-cover bg-center flex gap-2 flex-col items-center justify-center'
        style={{fontFamily: 'gambado-sans'}}
      >
        {/* <div className="w-full  flex justify-around">
          <h2 className="text-4xl">PuzzleMania</h2>
          <p className="text-4xl">Piezas faltantes: {21} de {21}</p>
        </div> */}
        <div className="w-full h-fit px-4 flex flex-col gap-3 justify-around">
          <div id="board" className="w-full h-[500px] border-2 bg-cover bg-center"
            style={{backgroundImage: `url(/assets/pieces/${selectedBlock?.referenceImg})`}}
          >
            
          </div>
          <div className="w-full h-[200px] border-2 flex flex-wrap" id="pick">
            {selectedBlock && selectedBlock.pieces.map(piece => (
              <img key={piece.pieceID} src={`/assets/pieces/${piece.pieceImg}`} alt={`Pieza ${piece.pieceID}`} className="w-24 h-fit border"/>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
