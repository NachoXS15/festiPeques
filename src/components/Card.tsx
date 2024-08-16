import { useState } from 'react'
import dorso from '../assets/cards/dorso.webp'
import ReactCardFlip from 'react-card-flip'
import CardProps from '../config/CardProps'

export default function Card({cardName, checkCard, img, index}: CardProps) {
    const [isFlipped, setIsFlipped] = useState(false)

    const handleClick = () => {
        const value = checkCard(cardName, index)
        if (value != 0) {
            setIsFlipped(!isFlipped)
        }
    }
  return (
    <>
        <ReactCardFlip isFlipped={isFlipped}>
            <img src={dorso} width={107} className='m-1' alt="" onClick={handleClick}  />
            <img src={`/src/assets/cards/${img}`} width={107} className='m-1' alt="" onClick={handleClick} />
        </ReactCardFlip>
    </>
  )
}
 