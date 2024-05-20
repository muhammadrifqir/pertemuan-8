/**
 * import css module navbar
 * disimpan di object styles
 */
import styles from "./Navbar.module.css";
// import link dari react router
import { Link } from "react-router-dom";

/**
 * membuat link/navigasi 
 * menggunakan link component dari react router
 */
function Navbar() {
    /**
     * menggunakan styles yang sudah diimport
     * memanggilnya menggunakan expression
     */
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div>
                    <h1 className={styles.navbar__brand}>Movie App</h1>
                </div>
                <div>
                    <ul className={styles.navbar__list}>
                        <li className={styles.navbar__item}>
                            <link to="/">Home</link></li>
                        <li className={styles.navbar__item}>
                            <link to="/movie/create">Add Movie</link></li>
                        <li className={styles.navbar__item}>
                            <link to="/movie/popular">Popular</link></li>
                        <li className={styles.navbar__item}>
                            <link to="/movie/now">Now Playing</link></li>
                        <li className={styles.navbar__item}>
                            <link to="/movie/top">Top Rated</link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;