import { useEffect, useState } from 'react';
import Questiones from '../../config/Questions';
// import GameOver from './GameOver';
import bgResult from '../../assets/bgs/qa_result.webp'
import bgAnswers from '../../assets/bgs/qa_answers.webp'
import { useNavigate } from 'react-router-dom';
import getPhrase from './getPhrase';
// import AnswersModal from './AnswerModal';
import Header from '../../components/Header';
import TimerBar from '../../components/Timebar';

export default function QAPlay() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [optionsPicked, setOptionsPicked] = useState<{ question: string, answer: string, isCorrect: boolean }[]>([]);
    const [isOpenGo, setIsOpenGo] = useState(false);
    const [showAnswers, setShowAnswers] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [phrase, setPhrase] = useState({ title: '', desc: '' });
    const [timeLeft, setTimeLeft] = useState(15);
    const navigate = useNavigate()
    console.log(timeLeft);

    const blocks = [1, 2, 3];
    const blockIndex = blocks[Math.floor(Math.random() * blocks.length)];
    const qaBlock = Questiones.filter(question => question.block === blockIndex);
    useEffect(() => {
        setTimeLeft(15);
        if (!isFinished) {
            const timer = setTimeout(() => {
                handleAnswer(false, null)
            }, 15000);
            return () => clearTimeout(timer)
        }
    }, [currentQuestion, isFinished])


    const handleAnswer = (isCorrect: boolean, e: React.MouseEvent<HTMLButtonElement> | null) => {
        if (isFinished) return;
        const updatedScore = isCorrect ? score + 1 : score;

        if (isCorrect) setScore(updatedScore);
        if (e) {
            const target = e.target as HTMLButtonElement | null;
            if (target) {
                setOptionsPicked(prev => [
                    ...prev,
                    {
                        question: qaBlock[currentQuestion].question,
                        answer: target.textContent || '',
                        isCorrect
                    }
                ]);
            }
        } else {
            setOptionsPicked(prev => [
                ...prev,
                {
                    question: qaBlock[currentQuestion].question,
                    answer: '',
                    isCorrect: false
                }
            ]);
        }
        if (currentQuestion === qaBlock.length - 1) {
            const finalPhrase = getPhrase(updatedScore);
            setPhrase(finalPhrase);
            setIsFinished(true);
            setIsOpenGo(true);
        } else {
            setCurrentQuestion(prev => prev + 1);
        }
    };
    const closeModalGo = () => {
        setIsOpenGo(false)
        setShowAnswers(true)
    }

    const closeModalAnswers = () => {
        setShowAnswers(false)
        navigate('/qagame-rules')
    }

    return (
        <>
            <Header />
            <main className='w-full h-full flex flex-col items-center justify-center gap-4 mt-20' style={{ fontFamily: 'gambado-sans' }}>
                <div className="w-3/5 h-44 border-2 flex flex-col items-center justify-center text-center rounded-full border-black px-10">
                    <h4 className='text-xl underline'>Pregunta {currentQuestion + 1} de {qaBlock.length}</h4>
                    <div id='question-display'>
                        <h2 className='text-3xl'>{qaBlock[currentQuestion].question}</h2>
                    </div>
                </div>
                <TimerBar key={currentQuestion} />
                <div className='w-3/6 flex flex-col gap-2'>
                    {qaBlock[currentQuestion].answers.map((answer) => (
                        <button
                            key={answer.answer}
                            onClick={(e) => handleAnswer(answer.isCorrect, e)}
                            // className={showAnswers ? (answer.isCorrect ? 'correct' : 'incorrect') : ''}
                            className='w-full h-20 rounded-full border border-black px-10 text-2xl active:bg-blue-700 active:text-white'
                            disabled={showAnswers}
                        >
                            {answer.answer}
                        </button>
                    ))}
                </div>
            </main>
            {isFinished && isOpenGo && <>
                <div
                    className="w-5/6 h-[700px] rounded-3xl m-auto overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none bg-cover bg-center focus:outline-none"
                    style={{ backgroundImage: `url(${bgResult})`, fontFamily: 'gambado-sans' }}
                >
                    <div className="w-auto my-12 bg-cover bg-center flex flex-col items-start pl-28 mt-20 text-white">
                        {/*content*/}
                        <h2 className='text-6xl text-green-600'>¡Juego terminado!</h2>
                        <p className='text-4xl mt-3'>Esperamos que te hayas divertido</p>
                        <div className='mt-14'>
                            <h2 className='text-5xl'>{phrase.title}</h2>
                            <h2 className='w-4/5 text-3xl'>{phrase.desc}</h2>
                        </div>
                        <div className='mt-10'>
                            <h2 className='text-5xl'>Acertaste:</h2>
                            <h2 className='text-4xl'><span className='text-green-600'>{score} </span>de 5 preguntas</h2>
                        </div>
                        <button
                            onClick={() => closeModalGo()}
                            className='text-4xl mt-14 bg-purple px-3 py-4 rounded-full active:scale-105 transition'
                        >
                            Ver resultados
                        </button>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>}
            {isFinished && showAnswers && <>
                <div
                    className="w-5/6 h-[750px] rounded-3xl m-auto overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none bg-cover bg-center focus:outline-none"
                    style={{ backgroundImage: `url(${bgAnswers})`, fontFamily: 'gambado-sans' }}
                >
                    <div className="w-full h-[600px] my-16 gap-5 bg-cover bg-center flex flex-col items-center justify-center text-white">
                        {/*content*/}
                        <h1 className='text-5xl'>Verificá tus respuestas</h1>
                        <section className='w-full flex flex-wrap items-center justify-center gap-2'>
                            {optionsPicked.map((picked, index) => (
                                <div key={index} className='w-1/3'>
                                    <p className='text-xl'><strong><span className='text-2xl'>Pregunta: </span></strong><br />{picked.question}</p>
                                    <p className='text-xl'><strong><span>Respuesta Elegida: </span></strong>{picked.answer} - <span className={picked.isCorrect ? 'bg-green-600 text-xl' : 'bg-red-600 text-xl'}>({picked.answer === "" ? 'No respondió' : picked.isCorrect ? 'Correcto' : 'Incorrecto'})</span></p>
                                </div>
                            ))}
                        </section>
                        <button onClick={closeModalAnswers} className="text-3xl mt-5 bg-purple px-3 py-4 rounded-full active:scale-105 transition">Volver a empezar</button>
                    </div>
                </div>
                <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
            </>}
        </>
    );
}