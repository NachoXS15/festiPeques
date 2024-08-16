import { useEffect, useState } from 'react';
import Questiones from '../../config/Questions';
import GameOver from './GameOver';
import { useNavigate } from 'react-router-dom';
import getPhrase from './getPhrase';
import AnswersModal from './AnswerModal';
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

        if (isCorrect) setScore(score + 1);
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
            const finalPhrase = getPhrase(score);
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
            <main className='w-full h-full flex flex-col items-center justify-center gap-4 mt-20' style={{fontFamily: 'gambado-sans'}}>
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
            {isFinished && isOpenGo && <GameOver
                isOpen={isOpenGo}
                onClose={closeModalGo}
                content={
                    <>
                        <span>Has conseguido responder correctamente: {score} de 6 preguntas</span>
                        <h2>{phrase.title}</h2>
                        <p>{phrase.desc}</p>
                        <button onClick={closeModalGo} className="green">Ver resultados</button>
                    </>
                }
            ></GameOver>}
            {isFinished && showAnswers && <AnswersModal
                isOpen={showAnswers}
                onClose={closeModalAnswers}
                content={
                    <>
                        <h1>Verificá tus respuestas</h1>
                        <section>
                            {optionsPicked.map((picked, index) => (
                                <div key={index}>
                                    <p><strong className='yellow'><span>Pregunta: </span></strong>{picked.question}</p>
                                    <p><strong className='violet-text'><span>Respuesta Elegida: </span></strong>{picked.answer} - <span className={picked.isCorrect ? 'correct' : 'incorrect'}>({picked.answer === "" ? 'No respondió' : picked.isCorrect ? 'Correcto' : 'Incorrecto'})</span></p>
                                </div>
                            ))}

                        </section>
                        <button onClick={closeModalAnswers} className="green">Volver a empezar</button>
                    </>
                }
            ></AnswersModal>}
        </>
    );
}