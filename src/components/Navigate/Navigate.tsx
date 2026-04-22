import styles from "./Navigate.module.css"
import { FaArrowRight } from "react-icons/fa6";
import type { NavigateProps } from "../../interfaces";


const Navigate = ({ pageCards }: NavigateProps) => {
    return (
        <div>
            <div className={styles.pageCards}>
            {pageCards.map((pageCard, index) => {
                return (
                    <div className={styles.pageCard} key={index}>
                        <h2>{pageCard.pageTitle}</h2>
                        <div className={styles.groupLine}>
                            <div className={`${styles.circle} ${styles.circleR}`}></div>
                            <div className={styles.lines}>
                            {Array(6).fill(0).map((_, index) => (
                                <div key={index} className={styles.line}></div>
                            ))}
                            </div>
                            <div className={`${styles.circle} ${styles.circleL}`}></div>
                        </div>
                        <p>{pageCard.pageDesc}</p>
                        <button className={styles.pageBtn}>{pageCard.pageBtn} <FaArrowRight /></button>
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default Navigate
