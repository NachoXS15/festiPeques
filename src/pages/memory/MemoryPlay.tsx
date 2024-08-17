import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import cards from '../../config/Cards'
import Card from '../../components/Card';
import CardProps from '../../config/CardProps';
// import ResultModal from './ResultModal';
import getPhrase from './getPhrase';
import bg from '../../assets/bgs/memorygame_bg.webp'
import bgResult from '../../assets/bgs/memorygame_result.webp'
export default function MemoryPlay() {
    const [cardsA, setCardsA] = useState<CardProps[]>([]);
    const [firstCard, setFirstCard] = useState<CardProps | null>(null);
    const [SecondCard, setSecondCard] = useState<CardProps | null>(null);
    const [disabledCards, setDisabledCards] = useState<number[]>([]);
    const [unFlippedCards, setUnFlippedCards] = useState<number[]>([]);
    const [score, setScore] = useState(0)
    const [timeLeft, setTimeLeft] = useState(120)
    const [isFinished, setIsFinished] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [phrase, setPhrase] = useState({ title: '', desc: '' })
    const [hasGameEnded, setHasGameEnded] = useState(false)
    const navigate = useNavigate();

    const closeModal = () => {
        navigate('/memorygame-rules')
    }

    //baraja las cartas aleatoriamente
    const shuffleCards = (array: CardProps[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp
        }
    }

    //asigna las cartas a voltear en caso de no estarlo
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

    //revisa si las cartas selecciondas coinciden
    const checkCards = () => {
        if (firstCard && SecondCard) {
            const match = firstCard.cardName === SecondCard.cardName;
            match ? disableCards() : unFlipCards();
            if (match) {
                setScore(score + 1)
            }
        }
    };

    //define una frase en base al score
    const phraseCatch = (score: number) => {
        const finalPhrase = getPhrase(score)
        setPhrase(finalPhrase)
    }

    //deshabilita las cartas disponibles para jugar
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

    //resetea las cartas en caso de no coindicir
    const resetCards = () => {
        setFirstCard(null);
        setSecondCard(null);
    };

    useEffect(() => {
        shuffleCards(cards);
        setCardsA([...cards]);
    }, []);

    //en base a la segunda carta, ejecuta checkCards
    useEffect(() => {
        if (SecondCard) {
            checkCards();
        }
    }, [SecondCard]);
    //contador de tiempo
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(timeLeft - 1)
        }, 1000)

        if (timeLeft == 0 || hasGameEnded) {
            clearTimeout(timer)
        }

    }, [timeLeft, hasGameEnded]);

    //condiciones para terminar el juego y mostrar resultados
    useEffect(() => {
        if ((score === 10 || timeLeft === 0) && !hasGameEnded) {
            setHasGameEnded(true); // Evitar múltiples ejecuciones
            setIsFinished(true);
            setShowResults(true);
            phraseCatch(score);
        }
    }, [score, timeLeft, hasGameEnded]);




    return (
        <>
            <div className='w-full h-screen bg-slate-500 flex flex-col py-10 justify-between items-center text-white bg-cover bg-center' style={{ fontFamily: 'gambado-sans', backgroundImage: `url(${bg})` }}>
                <h1 className='text-6xl text-center mt-10 mb-2 underline'>Juego de la Memoria</h1>
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
                    <h2 className='text-4xl pb-10 pr-10'>Tiempo restante: <span className={`${timeLeft < 30 ? "text-red-600" : "text-white"}`}>{timeLeft}</span>s</h2>
                    <h2 className='text-4xl pb-10 pr-10'>Puntuacion: {score}/10</h2>
                </div>

            </div>
            {
                isFinished && showResults ? <>
                    <div
                        className="w-4/6 h-[600px] rounded-3xl m-auto overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none bg-cover bg-center focus:outline-none"
                        style={{ backgroundImage: `url(${bgResult})`, fontFamily: 'gambado-sans' }}
                    >
                        <div className="w-auto my-12 bg-cover bg-center flex flex-col items-start pl-16 text-white">
                            {/*content*/}
                            <h2 className='text-6xl text-green-600'>¡Juego terminado!</h2>
                            <p className='text-4xl mt-3'>Esperamos que te hayas divertido</p>
                            <div className='mt-14'>
                                <h2 className='text-5xl'>{phrase.title}</h2>
                                <h2 className='w-4/5 text-3xl'>{phrase.desc}</h2>
                            </div>
                            <button
                                onClick={() => closeModal()}
                                className='text-3xl mt-14 bg-purple px-3 py-4 rounded-full active:scale-105 transition'
                            >
                                Volver a inicio
                            </button>
                        </div>
                    </div>
                    <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
                </>
                    : null
            }
        </>
    )
}