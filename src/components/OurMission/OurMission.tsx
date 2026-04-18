import styles from "./OurMission.module.css"
import type { ourMissionCard } from "../../interfaces"


const OurMission = ({ ourMissionCards }: { ourMissionCards: ourMissionCard[] }) => {
    return (
        <div className={styles.MissionCards}>
        {ourMissionCards.map((card , index)=>{
            return(
            <div key={index} className={styles.MissionCard}>
                <div className={styles.cardHead}>
                    <h2 className={styles.HeadTitle}>{card.title}</h2>
                    <img src={card.icon} className={styles.HeadIcon}/>
                </div>
                <p>{card.desc}</p>
            </div>
            )
        })}
        </div>
    )
}

export default OurMission