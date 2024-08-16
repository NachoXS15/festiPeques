import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';
import cards from '../../config/Cards'
import Card from '../../components/Card';
import CardProps from '../../config/CardProps';

export default function MemoryPlay() {
  const [cardsA, setCardsA] = useState<CardProps[]>([]);
  const [firstCard, setFirstCard] = useState<CardProps | null>(null);
  const [SecondCard, setSecondCard] = useState<CardProps | null>(null);
  const [disabledCards, setDisabledCards] = useState<number[]>([]);
  const [unFlippedCards, setUnFlippedCards] = useState<number[]>([]);
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(120)
  // const [isFinished, setIsFinished] = useState(false);

  // const navigate = useNavigate();

  // const closeModal = () => {
  //   navigate('/memorygame-rules')
  // }

  const shuffleCards = (array: CardProps[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp
    }
  }

  const flipCards = (cardName: string, index: number) => {
    if (firstCard && firstCard.index === index) {
      return;
    }
    if (!firstCard) {
      setFirstCard({ cardName, index });
    } else if (!SecondCard) {
      setSecondCard({ cardName, index });
    }
  };

  const checkCards = () => {
    if (firstCard && SecondCard) {
      const match = firstCard.cardName === SecondCard.cardName;
      match ? disableCards() : unFlipCards();
      if (match) {
        setScore(score + 1)
      }
    }
  };

  const disableCards = () => {
    if (firstCard && SecondCard) {
      setDisabledCards([...disabledCards, firstCard.index!, SecondCard.index!]);
    }
    resetCards();
  };

  const unFlipCards = () => {
    if (firstCard && SecondCard) {
      setUnFlippedCards([firstCard.index!, SecondCard.index!]);
    }
    resetCards();
  };

  const resetCards = () => {
    setFirstCard(null);
    setSecondCard(null);
  };

  useEffect(() => {
    shuffleCards(cards);
    setCardsA([...cards]);
  }, []);

  useEffect(() => {
    if (SecondCard) {
      checkCards();
    }
  }, [SecondCard]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    if (timeLeft == 0) {
      clearTimeout(timer)
    }
    
  }, [timeLeft]);


  return (
    <>
      <div className='w-full h-screen bg-slate-500 flex flex-col justify-between items-center text-white' style={{ fontFamily: 'gambado-sans' }}>
        <h1 className='text-5xl text-center mt-10 mb-2 underline'>Juego de la Memoria</h1>
        <div className='w-3/5 h-3/5 flex flex-wrap items-center justify-center'>
          {cardsA.map((card, index) => (
            <Card
              key={index}
              cardName={card.cardName}
              index={index}
              img={card.img}
              flipCards={() => flipCards(card.cardName, index)}
              disabledCards={disabledCards}
              unFlippedCards={unFlippedCards}
            />
          ))}
        </div>
        <div className='w-full flex justify-around'>
          <h2 className='text-3xl pb-10 pr-10'>Tiempo restante: <span className={`${timeLeft < 30 ? "text-red-600" :  "text-white"}`}>{timeLeft}</span>s</h2>
          <h2 className='text-3xl pb-10 pr-10'>Puntuacion: {score}/10</h2>
        </div>
      </div>
    </>
  )
}