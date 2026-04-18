import { useEffect, type ReactNode } from "react";
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
        currentIndex,
        move,
        next,
        prev,
    } = useSlider(itemsLength);

        useEffect(() => {
        if (onInit) {
            onInit({ next, prev});
        }
    }, []);

    return (
        <div className={styles.sliderContainer}>
            
            <div className={styles.sliderWrapper}>
                <div
                    className={`${styles.cardsSlider} ${className || ""}`}
                    ref={sliderRef}
                    style={{
                        transform: `translateX(-${currentIndex * move}px)`
                    }}
                >
                {children}
                </div>
            </div>
        </div>
    );
};

export default Slider;