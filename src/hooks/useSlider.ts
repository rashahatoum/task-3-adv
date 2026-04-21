import { useEffect, useRef, useState } from "react";

export const useSlider = (itemsLength: number) => {
    const sliderRef = useRef<HTMLDivElement>(null);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [move, setMove] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);

    const getMoveAmount = () => {
        if (!sliderRef.current) return 0;
        const firstCard = sliderRef.current.children[0] as HTMLElement;
        const cardWidth = firstCard.offsetWidth;
        const gap = parseFloat(getComputedStyle(sliderRef.current).gap || "0");

        return cardWidth + gap;
    };

    const getVisibleCards = () => {
        if (!sliderRef.current) return 3;

        const wrapperWidth = sliderRef.current.parentElement?.offsetWidth ?? 0;
        const firstCard = sliderRef.current.children[0] as HTMLElement;
        const cardWidth = firstCard.offsetWidth;
        const gap = parseFloat(getComputedStyle(sliderRef.current).gap || "0");

        return Math.max(1, Math.floor((wrapperWidth + gap) / (cardWidth + gap)));
    };

    const maxIndex = Math.max(0, itemsLength - visibleCards);

    useEffect(() => {
        const update = () => {
            setMove(getMoveAmount());
            setVisibleCards(getVisibleCards());
        };

        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    useEffect(() => {
        if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
    }, [maxIndex]);

    const getTranslateX = () => {
        if (!sliderRef.current) return currentIndex * move;
        const totalwidth = sliderRef.current.scrollWidth;
        const wrapperWidth = sliderRef.current.parentElement?.offsetWidth ?? 0;
        const maxTranslate = totalwidth - wrapperWidth;
        return Math.min(currentIndex * move, Math.max(0, maxTranslate));
    }

    const next = () =>
        setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));

    const prev = () =>
        setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));

    return {
        sliderRef,
        currentIndex,
        move,
        next,
        prev,
        maxIndex,
        getTranslateX,
    };
};