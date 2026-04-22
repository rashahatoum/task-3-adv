import { useState } from "react";
import styles from "./Questions.module.css"
import { FiPlus } from "react-icons/fi";
import { BiMinus } from "react-icons/bi";
import type { questionsProps } from "../../interfaces";


const Questions = ({ questions }: questionsProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleOpen = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            <div className={styles.freqCards}>
                {questions.map((question, index) => {
                    return (
                        <div className={`${styles.freqCard} ${openIndex === index ? styles.opened : ""}`} key={index}>                            <div className={styles.asked} onClick={() => toggleOpen(index)}>
                                <p className={styles.question}>{question.question}</p>
                                <div className={styles.askedIcon}>
                                    {openIndex === index ? (
                                        <BiMinus />
                                    ) : (
                                        <FiPlus />
                                    )}
                                </div>
                            </div>
                            {openIndex === index && <p className={styles.answer}>{question.answer}</p>}
                            </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Questions