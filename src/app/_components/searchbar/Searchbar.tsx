import styles from "./searchbar.module.css"

export default function Searchbar() {
    return (
        <div className={styles.homeDiv}> 
                <ul className={styles.homeUl}> 
                    <li> 
                        <button className={styles.homeButton}> Herren </button>
                    </li>
                    <li> 
                        <button className={styles.homeButton}> Damen </button>
                    </li>
                    <li> 
                        <button className={styles.homeButton}> Kinder </button>
                    </li>
                </ul>
                <form> 
                    <input className={styles.homeInput} type="search" placeholder="Search"/>
                </form>
        </div>
    )
}
