import type { LearnProps } from "../../interfaces"
import styles from "./learn.module.css"

const Learn = ({ LearnCards }: LearnProps) => {
    return (
        <>
            <div className={styles.LearnCards}>
                {LearnCards.map((card, index) => (
                    <div key={index} className={styles.LearnCard}>
                        <div className={styles.rectangular}></div>
                        <img src={card.image} alt={card.subject} className={styles.learnImg}/>
                        <div className={styles.cardContent}>
                            <h2 className={styles.subject}>{card.subject}</h2>
                            <p className={styles.learndesc}>{card.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Learn