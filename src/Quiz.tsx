import { useEffect, useRef, useState } from 'react'
import Score from './Score';
import { questions } from './questions';

function Quiz() {
    const [index, setIndex] = useState<number>(0);
    const [lock, setLock] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);
    const correctAns = useRef<(HTMLLIElement | null)[]>([]);
    const [time, setTime] = useState<number>(30)
    const timerRef = useRef<HTMLLIElement | null>(null)

    const checkAns = (e: any, ans: number) => {
        if (!lock) {
            setLock(true);
            const selectedOption = e.target;
            const correctOptionIndex = question.ans - 1;
            correctAns.current[correctOptionIndex]?.classList.add("correct_option");

            if (ans === correctOptionIndex) {
                selectedOption.classList.add("correct_option");
                setScore((score) => score + 1);
            } else {
                selectedOption.classList.add("wrong_option");
                correctAns.current[correctOptionIndex]?.classList.add("correct_option");
            }
        }
    };

    const nextQuestion = () => {
        if (lock) {
            setIndex((prev) => prev + 1);
            setLock(false);
            correctAns.current.forEach((option) => {
                option?.classList.remove("correct_option", "wrong_option");
                return null;
            });
            timerRef.current?.classList.remove("time_running");
            setTime(question.time);
        } else {
            alert("Please select an option");
        }
    };

    const question = questions[index];

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prevTime) => {

                if (prevTime < 12) {
                    timerRef.current?.classList.add("time_running");
                }
                if (prevTime <= 1) {
                    clearInterval(timer);
                    correctAns.current[question.ans - 1]?.classList.add("correct_option");
                    setLock(true);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [index]);

    return (
        <>

            {
                index < questions.length ? (
                    <>
                        <div className="header">
                            <p className="total_questions">{index + 1} of {questions.length} Questions</p>
                            <span className="timer_box" ref={timerRef}><i className="bi bi-clock"></i><span className="timer">{time}</span></span>
                            <span className="timer_line"></span>
                        </div>
                        <div className="main_wrapper">
                            <div className="questions"><h3>{index + 1}. {question.question}</h3></div>
                            <ol className="options_list" type='A'>
                                {question.options.map((ans, i) => (
                                    <li ref={(el) => correctAns.current[i] = el} className="option" key={ans} onClick={(e) => checkAns(e, i)}>
                                        {ans}
                                    </li>
                                ))}
                            </ol>
                            <button className="next_question button" onClick={nextQuestion}>
                                {index < questions.length - 1 ? 'Next' : 'Finish'}
                                <i className="bi bi-arrow-right"></i>
                            </button>
                        </div>
                    </>
                ) : (
                    <Score totalQuestions={questions.length} score={score} setIndex={setIndex} />
                )
            }
        </>
    );
}

export default Quiz
