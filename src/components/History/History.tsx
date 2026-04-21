import { useEffect, useRef, useState } from 'react';
import type { HistoryProps } from '../../interfaces'
import styles from './History.module.css'

const History = ({ HistoryLines }: HistoryProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [linStyle, setLineStyle] = useState<{ top: number, height: number, left: number }>({ top: 0, height: 0, left: 0 });

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const updateLine = () => {
            const circles = container.querySelectorAll(`.${styles.circleR}`);
            if (circles.length < 2) return;
            const first = circles[0] as HTMLElement;
            const last = circles[circles.length - 1] as HTMLElement;

            const containerRect = container.getBoundingClientRect();
            const firstRect = first.getBoundingClientRect();
            const lastRect = last.getBoundingClientRect();

            setLineStyle({
                top: firstRect.top - containerRect.top + firstRect.height / 2,
                height: lastRect.top - firstRect.top,
                left: firstRect.left - containerRect.left + firstRect.width / 2
            });
        }

        updateLine();
        window.addEventListener('resize', updateLine);
        return () => {
            window.removeEventListener('resize', updateLine);
        }
    }, [HistoryLines]);

    return (
        <>
            <div className={styles.historyLines}>
                <div className={styles.container} ref={containerRef}>
                    <div className={styles.bigLine}
                        style={{ top: linStyle.top, height: linStyle.height, left: linStyle.left, transform: 'translateX(-50%)' }}
                    ></div>
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