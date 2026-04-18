import type { BenefitsProps } from "../../interfaces"
import BenefitsCard from "../BenefitsCard/BenefitsCard"
import styles from "./Benefits.module.css"



const Benefits = ({ BenefitsCards }: BenefitsProps) => {
    return (
        <>
            <div className={styles.BenefitsCards}>
                {BenefitsCards.map((card, index) => (
                    <BenefitsCard key={index} {...card} />
                ))}
            </div>
        </>
    )
}

export default Benefits