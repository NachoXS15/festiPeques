import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import cards from '../../config/Cards'
import Card from '../../components/Card';
import CardProps from '../../config/CardProps';

export default function MemoryPlay() {
  const [cardsA, setCardsA] = useState<CardProps[]>([])
  const [firstCard, setFirstCard] = useState<CardProps>()
  const [SecondCard, setSecondCard] = useState<CardProps>()

  const [disabledCards, setDisabledCards] = useState([])
  const [unFlippedCards, setUnFlippedCards] = useState([])
  // const [score, setScore] = useState(0)
  // const [timeLeft, setTimeLeft] = useState(120)
  // const [isFinished, setIsFinished] = useState(false);

  // const navigate = useNavigate();

  // const closeModal = () => {
  //   navigate('/memorygame-rules')
  // }

  const shuffleCards = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp
      }
  }

  const flipCards = (nombre, index) => {
    if (firstCard?.cardName === nombre && firstCard?.index === index ) {
      return 0;
    }
    if (!firstCard?.cardName) {
      setFirstCard({nombre, index})
    }
    else if(!SecondCard?.cardName){
      setSecondCard({nombre, index})
    }
    return 1;
  }

  const checkCards = () => {
    if (firstCard?.cardName && SecondCard?.cardName) {
      const match = firstCard.cardName === SecondCard.cardName;
      match ? disableCards() : unFlipCards()
    }
  }

  const disableCards = () => {
    setDisabledCards([firstCard?.index, SecondCard?.index])
    resetCards()
  };

  const unFlipCards = () => {
    setUnFlippedCards([firstCard?.index, SecondCard?.index])
    resetCards()
  };

  const resetCards = () => {
    setFirstCard(null)
    setSecondCard(null)
  };

  useEffect(() => {
    // const interval = setInterval((prev) => {
    //     setTimeLeft(prev => timeLeft - 1)
    // }, 1000);

    shuffleCards(cards)
    setCardsA(cards)
  })


  return (
    <>
      <div className='w-full h-screen bg-slate-500 flex flex-col justify-between items-center text-white' style={{ fontFamily: 'gambado-sans' }}>
        <h1 className='text-5xl text-center mt-10 mb-2 underline'>Juego de la Memoria</h1>
        <div className='w-3/5 h-3/5 flex flex-wrap items-center justify-center'>
          {
            cardsA.map((card, index) => (
              <Card cardName={card.cardName} index={index} img={card.img} flipCards={flipCards(card.cardName, card.index)}/>
            ))
          }
        </div>
        {/* <div className='w-full flex justify-around'>
          <h2 className='text-3xl pb-10 pr-10'>Tiempo restante: s</h2>
          <h2 className='text-3xl pb-10 pr-10'>Puntuacion: {score}/10</h2>
        </div> */}
      </div>
    </>
  )
}