import styles from "./page.module.css"
import {register} from "../../../lib/action"
export default function RegisterPage() {

    
        return (
            <div className={styles.container}>  
                <h1 className={styles.h1}> Register </h1>
                <form className={styles.form} action={register}>  
                    <input className={styles.input} type="text" placeholder="username" name="username" />
                    <input className={styles.input} type="email" placeholder="email" name="email" />
                    <input className={styles.input} type="password" placeholder="password" name="password" />
                    <input className={styles.input} type="password" placeholder="password again" name="passwordRepeat"/>
                    <button className={styles.button}>Register</button>
                </form>
            </div>
        );
    }
