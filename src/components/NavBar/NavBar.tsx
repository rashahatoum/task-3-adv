import styles from "./NavBar.module.css"
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import type { NavBarProps } from "../../interfaces";



const NavBar = ({ bannerText, logo, items }: NavBarProps) => {
    const [showMenu, setShowMenu] = useState(false)
    const { pathname } = useLocation()

    const getNavLinkClassName = ({ isActive }: { isActive: boolean }) =>
        `${isActive ? styles.active : ""} ${styles.itemLink}`.trim()

    const renderNavItems = (itemClassName?: string) =>
        items.map((item , index) => (
            <li key={index} className={itemClassName}>
                <NavLink className={getNavLinkClassName} to={item.path}>
                    {item.pageName}
                </NavLink>
            </li>
        ))

    useEffect(() => {
        setShowMenu(false)
    }, [pathname])

    return (
        <>
        <div className={styles.navGroup}>
            <div className={styles.banner}>
                <p>{bannerText}</p>
                <FaArrowRight />
            </div>
            <nav className={styles.navBar}>
                <div className={styles.logo}>
                    <img src={logo} className={styles.logoImg} alt="logo" />
                </div>
                <ul className={styles.navList}>{renderNavItems()}</ul>
                <button className={styles.bars} onClick={() => setShowMenu((current) => !current)}>
                    <HiBars3BottomRight />
                </button>
            </nav>
        </div>
        <ul className={`${styles.navMenu} ${showMenu ? styles.showMenu : ""}`}>
                {renderNavItems(styles.item)}
            </ul>
        </>
    )
}

export default NavBar