import type { MemberProps } from '../../interfaces'
import styles from './Members.module.css'
import { MdEmail } from "react-icons/md";


const Members = ({ MemberCards }: MemberProps) => {
    return (
        <>
        <div className={styles.MemberCards}>
            {MemberCards.map((card, index) => {
                return (
                    <div key={index} className={styles.MemberCard}>
                        <div className={styles.CardHead}>
                            <div className={styles.nameImg}>
                                <img src={card.img} alt={card.name} className={styles.memberImg}/>
                                <h2>{card.name}</h2>
                            </div>
                            <div className={styles.emailIcon}>
                            <MdEmail />
                            </div>
                        </div>
                        <div className={styles.qualifier}>
                            <h3 className={styles.cardTitle}>{card.title}</h3>
                            <p className={styles.cardDesc}>{card.desc}</p>
                        </div>
                    </div>
                )
            })}
            </div>
        </>
    )
}

export default Members