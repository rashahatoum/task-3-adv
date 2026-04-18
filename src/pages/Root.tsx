import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar/NavBar"
import type { navItem } from "../interfaces"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Footer from "../components/Footer/Footer";


const Root = () => {
    const navItem: Array<navItem> = [
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

    return (
        <div>
            <NavBar
                bannerText="Admission is Open, Grab your seat now"
                logo="/task-3-adv/assets/imgs/Logo.png"
                items={navItem}
            />
            <Outlet />
            <Footer
                logo="/task-3-adv/assets/imgs/Logo.png"
                footerDesc="We believe in the power of play to foster creativity, problem-solving skills, and imagination."
                email="hello@littlelearners.com"
                phone="+91 91813 23 2309"
                location="Somewhere in the World"
                sections={[
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
                ]}
                privacy={["Terms of Service", "Privacy Policy", "Cookie Policy"]}
                social={[
                    <FaFacebook />,
                    <FaTwitter />,
                    <FaLinkedin />
                ]}
                copyRight="Copyright © [2023] Little Learners Academy. All rights reserved."
            />
        </div>
    )
}

export default Root