import type { ReactNode } from "react";

export interface NavItem {
    path: string;
    pageName: string
}


export interface NavBarProps {
    bannerText: string;
    logo: string;
    items: Array<NavItem>;
}

export interface TestimonialsCard {
    img: string;
    name: string;
    rating: number;
    desc: string
}

export interface TestimonialsSectionProps {
    TestimonialsCards: TestimonialsCard[];
}

export interface BenefitsCardProps {
    icon: string;
    title: string;
    desc: string;
    className?: string;
}
export interface BenefitsProps {
    BenefitsCards: BenefitsCardProps[]
}

export interface contactHeroCard {
    icon: ReactNode;
    contactMethod: string;

}
export interface heroSectionsProps {
    img: string;
    btn: string;
    title: string;
    desc: string
    contactHeroCards?: Array<contactHeroCard>
}


export interface ourMissionCard {
    title: string;
    icon: string;
    desc: string,
}

export interface HistoryLineProps {
    year: string;
    img: string;
    title: string;
    desc: string;
}

export interface HistoryProps {
    HistoryLines: HistoryLineProps[]
}

export interface MemberCardProps {
    img: string;
    name: string;
    title: string;
    desc: string;
}

export interface MemberProps {
    MemberCards: MemberCardProps[]
}

export interface LearnCardProps {
    image: string;
    subject: string;
    desc: string;
}

export interface LearnProps {
    LearnCards: LearnCardProps[]
}

export interface GalleryItem {
    images: string[];
    id: number;
    title: string;
    desc: string;
}

export interface GalleryProps {
    Galleries: GalleryItem[];
}

export interface HeroCards {
    title: string;
    desc: string;
}

export interface HeroProps {
    heroImg: string;
    subTitle: string;
    title: string;
    titleSpan: string;
    heroP: string;
    HeroCards: HeroCards[]
}

export interface question {
    question: string;
    answer?: string;
}

export interface questionsProps {
    questions: question[]
}

export interface SliderProps {
    children: ReactNode;
    itemsLength: number;
    className?: string;
    onInit?: (controls: {
        next: () => void;
        prev: () => void;
    }) => void;
}

export interface HeaderSectionsProps {
    sectionBtn: string;
    sectionTitle: string;
    sectionParagraph: string;
}

export interface FooterSection {
    title: string;
    items: string[];
}

export interface footerProps {
    logo: string;
    footerDesc: string;
    email: string;
    phone: string;
    location: string;
    sections: FooterSection[];
    privacy: Array<string>;
    social: Array<React.ReactNode>;
    copyRight: string;
}

export interface FiltersProps<T> {
    items: T[];
    filters: string[];
    filterKey?: keyof T;
    onChange: (filtered: T[]) => void;
}

export interface pageCard {
    pageTitle: string;
    pageDesc: string;
    pageBtn: string;
}

export interface NavigateProps {
    pageCards: pageCard[];
}

export interface OurMissionProps {
    ourMissionCards: ourMissionCard[];
}