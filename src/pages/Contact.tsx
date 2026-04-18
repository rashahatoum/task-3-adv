import HeroSections from "../components/HeroSections/HeroSections"
import type { contactHeroCard } from "../interfaces"
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";



const Contact = () => {
        const contentCards: Array<contactHeroCard> = [
        {
            icon:<MdEmail/>,
            contactMethod:"hello@littlelearners.com"
        },
                {
            icon:<FaPhoneAlt/>,
            contactMethod:"+91 91813 23 2309"
        },
                {
            icon:<FaLocationDot/>,
            contactMethod:"Somewhere in the World"
        },
                {
            icon:<FaClock />,
            contactMethod:"Office Hours - 9am - 6pm"
        },
    ]
    return (
        <>
        <section className="section">
            <div className="container">
                <HeroSections
                    img="/assets/imgs/hero-squares.png"
                    btn="Contact Us"
                    title="Feel Free To Connect With Us"
                    desc="We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods"
                    contactHeroCards={contentCards}
                />
            </div>
            </section>
        </>
    )
}

export default Contact