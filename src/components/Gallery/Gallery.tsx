import { useState } from 'react';
import Slider from '../Slider/Slider';
import styles from './Gallery.module.css'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import type { GalleryProps } from '../../interfaces';


const Gallery = ({ Galleries }: GalleryProps) => {
    const [controlsMap, setControlsMap] = useState<{
        [key: number]: {
            next: () => void;
            prev: () => void;
        };
    }>({});

    return (
        <>
            {Galleries.map((item) => (
                <div className={styles.galleryItem} key={item.id}>
                    <div className={styles.images}>
                    <Slider itemsLength={item.images.length} onInit={(ctrl) => setControlsMap((prev) => ({...prev,[item.id]: ctrl,}))}>
                        {item.images.map((img, index) => (
                            <img key={index} src={img} alt={`Gallery ${item.id} Image ${index + 1}`} className={styles.galleryImage} />
                        ))}
                    </Slider>
                    </div>
                    <div className={styles.sliderFooter}>
                        <h2 className={styles.sliderTitle}>{item.title}</h2>
                        <div className={styles.btnGroup}>
                            <button className={styles.sliderBtn} onClick={controlsMap[item.id]?.prev}><FaArrowLeft /></button>
                            <button className={styles.sliderBtn} onClick={controlsMap[item.id]?.next}><FaArrowRight /></button>
                        </div>
                    </div>
                    <p className={styles.sliderDesc}>{item.desc}</p>
                </div>
            ))}
        </>
    )
}

export default Gallery