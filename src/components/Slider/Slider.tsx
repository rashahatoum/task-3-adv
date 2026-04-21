import { useEffect, useRef, type ReactNode } from "react";
import styles from "./Slider.module.css";
import { useSlider } from "../../hooks/useSlider";

interface SliderProps {
    children: ReactNode;
    itemsLength: number;
    className?: string;
    onInit?: (controls: {
        next: () => void;
        prev: () => void;
    }) => void;
}

const Slider = ({ children, itemsLength, onInit, className }: SliderProps) => {
    const {
        sliderRef,
        getTranslateX,
        next,
        prev,
    } = useSlider(itemsLength);


    const controlsRef = useRef({ next, prev });

    useEffect(() => {
        controlsRef.current = { next, prev };
    }, [next, prev]);

    const hasInitialized = useRef(false);

    useEffect(() => {
        if (onInit && !hasInitialized.current) {
            onInit({
                next: () => controlsRef.current.next(),
                prev: () => controlsRef.current.prev(),
            });
            hasInitialized.current = true; 
        }
    }, [onInit]); 

    return (
        <div className={styles.sliderContainer}>
            
            <div className={styles.sliderWrapper}>
                <div
                    className={`${styles.cardsSlider} ${className || ""}`}
                    ref={sliderRef}
                    style={{
                        transform: `translateX(-${getTranslateX()}px)`
                    }}
                >
                {children}
                </div>
            </div>
        </div>
    );
};

export default Slider;