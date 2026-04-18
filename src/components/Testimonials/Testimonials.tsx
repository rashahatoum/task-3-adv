import styles from "./Testimonials.module.css"
import { VscStarFull } from "react-icons/vsc";
import { VscStarEmpty } from "react-icons/vsc";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import type { TestimonialsSectionProps } from "../../interfaces";
import { useState } from "react";
import Slider from "../Slider/Slider";



const Testimonials = ({ TestimonialsCards }: TestimonialsSectionProps) => {
const [controls, setControls] = useState<{
    next: () => void;
    prev: () => void;
} | null>(null);
    return (
        <>
            <div className={styles.sliderContainer}>
                <button className={`${styles.sliderBtn} ${styles.lapLeftBtn}`} onClick={controls?.prev}><FaArrowLeft /></button>
                <Slider
                    itemsLength={TestimonialsCards.length}
                    onInit={setControls}
                >
                        {TestimonialsCards.map((TestimonialsCard, index) => (
                            <div key={index} className={styles.card}>
                                <div className={styles.profile}>
                                    <img src={TestimonialsCard.img} alt={TestimonialsCard.name} className={styles.profileImg} />
                                    <h3>{TestimonialsCard.name}</h3>
                                </div>
                                <div className={styles.stars}>
                                    {Array(5).fill(0).map((_, index) => (
                                        <div key={index}>
                                            {index < TestimonialsCard.rating ? <VscStarFull /> : <VscStarEmpty />}
                                        </div>
                                    ))}
                                </div>
                                <p>{TestimonialsCard.desc}</p>
                            </div>
                        ))}
                        </Slider>
                    
                <div className={styles.btnGroup}>
                    <button className={`${styles.sliderBtn} ${styles.mobileLeftBtn}`} onClick={controls?.prev}><FaArrowLeft /></button>
                    <button className={styles.sliderBtn} onClick={controls?.next}>
                        <FaArrowRight /></button>
                </div>
            </div>
        </>
    )
}

export default Testimonials