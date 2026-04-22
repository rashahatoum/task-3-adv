import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar/NavBar"
import type { NavItem } from "../interfaces"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Footer from "../components/Footer/Footer";

const ASSETS_BASE_PATH = "/task-3-adv/assets/imgs"

const navItems: NavItem[] = [
    {
        path: "/",
        pageName: "Home"
    },
    {
        path: "about",
        pageName: "About Us"
    },
    {
        path: "academics",
        pageName: "Academics"
    },
    {
        path: "admissions",
        pageName: "Admissions"
    },
    {
        path: "studentlife",
        pageName: "Student Life"
    },
    {
        path: "contact",
        pageName: "Contact"
    },
]

const footerSections = [
    {
        title: "Home",
        items: ["Features", "Our Testimonials", "FAQ"],
    },
    {
        title: "About Us",
        items: ["Our Mission", "Our Vission", "Awards and Recognitions", "History", "Teachers"],
    },
    {
        title: "Academics",
        items: ["Special Features", "Gallery"],
    },
    {
        title: "Contact Us",
        items: ["Information", "Map & Direction"],
    }
]

const footerPolicies = ["Terms of Service", "Privacy Policy", "Cookie Policy"]

const socialLinks = [
                    <FaFacebook />,
                    <FaTwitter />,
                    <FaLinkedin />
]

const Root = () => {
    return (
        <div>
            <NavBar
                bannerText="Admission is Open, Grab your seat now"
                logo={`${ASSETS_BASE_PATH}/Logo.png`}
                items={navItems}
            />
            <Outlet />
            <Footer
                logo={`${ASSETS_BASE_PATH}/Logo.png`}
                footerDesc="We believe in the power of play to foster creativity, problem-solving skills, and imagination."
                email="hello@littlelearners.com"
                phone="+91 91813 23 2309"
                location="Somewhere in the World"
                sections={footerSections}
                privacy={footerPolicies}
                social={socialLinks}
                copyRight="Copyright © [2023] Little Learners Academy. All rights reserved."
            />
        </div>
    )
}

export default Root