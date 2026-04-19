import type { ReactNode } from "react";

export interface navItem {
    path: string;
    pageName: string
}


export interface NavBarProps {
    bannerText: string;
    logo: string;
    items: Array<navItem>;
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