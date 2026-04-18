import type { HistoryProps } from '../../interfaces'
import styles from './History.module.css'

const History = ({ HistoryLines }: HistoryProps) => {
    
    return (
        <>
            <div className={styles.historyLines}>
                <div className={styles.container}>
                <div className={styles.bigLine}></div>
                {HistoryLines.map((line, index) => (
                    <div key={index} className={styles.historyLine}>
                        <div className={styles.yearSide}>

                            <div className={styles.groupLine}>
                                <div className={`${styles.circle} ${styles.circleR}`}></div>
                                <div className={styles.line}></div>
                                <div className={`${styles.circle} ${styles.circleL}`}></div>
                            </div>

                            <div className={styles.yearCard}>
                                <img src={line.img} alt={line.year} className={styles.img} />
                                <h1 className={styles.year}>{line.year}</h1>
                            </div>

                        </div>

                        <div className={styles.content}>
                            <h2 className={styles.title}>{line.title}</h2>
                            <p className={styles.desc}>{line.desc}</p>
                        </div>

                    </div>
                ))}
                </div>
                </div>
        </>
    )
}

export default History