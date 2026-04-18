import type { heroSectionsProps } from "../../interfaces"
import styles from "./HeroSections.module.css"



const HeroSections = ({ img, btn, title, desc, contactHeroCards }: heroSectionsProps) => {
    return (
        <div className={styles.heroSections}>
            <img src={img} alt="heroSquares" className={styles.heroSquares} />
            <div className={styles.heroContent}>
                <div className={styles.btnTitle}>
                    <button className={styles.btn}>{btn}</button>
                    <h1 className={styles.Title}>{title}</h1>
                </div>
                <div className={styles.descSide}>
                    <p className={styles.desc}>{desc}</p>
                    {contactHeroCards && (
                        <div className={styles.contactGrid}>
                            {contactHeroCards.map((contactMethod, index) => {
                                return (
                                    <div key={index} className={styles.contactMethod}>
                                        <div className={styles.contentIcon}>
                                            {contactMethod.icon}
                                        </div>
                                        <p>{contactMethod.contactMethod}</p>
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default HeroSections