import styles from "./Awards.module.css"
import type { BenefitsProps } from "../../interfaces"
import BenefitsCard from "../BenefitsCard/BenefitsCard";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Slider from "../Slider/Slider";
import { useState } from "react";

const Awards = ({ BenefitsCards }: BenefitsProps) => {
    const [controls, setControls] = useState<{
    next: () => void;
    prev: () => void;
} | null>(null);

    return (
        <>
        <Slider itemsLength={BenefitsCards.length} onInit={setControls} className={styles.awardsSlider}>
            {BenefitsCards.map((card, index) => (
                <BenefitsCard key={index} {...card} className={styles.card}/>
            ))}
        </Slider>
            <div className={styles.sliderFooter}>
            <p className={styles.awardsNum}>{BenefitsCards.length} More Awards</p>
            <div className={styles.btnGroup}>
                <button className={styles.sliderBtn} onClick={controls?.prev}><FaArrowLeft /></button>
                <button className={styles.sliderBtn} onClick={controls?.next}><FaArrowRight /></button>
            </div>
            </div>
        </>
    )
}

export default Awards