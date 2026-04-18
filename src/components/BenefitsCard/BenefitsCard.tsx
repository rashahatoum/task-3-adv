import type { BenefitsCardProps } from "../../interfaces"
import styles from "../Benefits/Benefits.module.css"

const BenefitsCard = ({ icon, title, desc, className } :BenefitsCardProps) => {
    return (
        <>
            <div className={`${styles.BenefitsCard} ${className || ""}`}>
                <div className={styles.CardIcon}>
                    <img src={icon} alt="" className={styles.icon} />
                </div>
                <h2 className={styles.CardT}>{title}</h2>
                <p>{desc}</p>
            </div>
        </>
    )
}

export default BenefitsCard