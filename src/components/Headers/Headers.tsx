import styles from "./Headers.module.css"
import type { HeaderSectionsProps } from "../../interfaces";

const Headers = ({ sectionBtn, sectionTitle, sectionParagraph }: HeaderSectionsProps) => {
    return (
        <div className={styles.HeaderSections}>
            <button className={styles.sectionBtn}>{sectionBtn}</button>
            <h1 className={styles.sectionTitle}>{sectionTitle}</h1>
            <p className={styles.sectionParagraph}>{sectionParagraph}</p>
        </div>
    )
}

export default Headers
