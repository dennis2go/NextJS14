import Image from "next/image";
import styles from "./page.module.css";
import { signIn } from "../../../lib/auth";

export default function Login() {
const handleGithubLogin = async() => {
    "use server"
    await signIn("github");
};

    return (
        <>  
            <h1> Login </h1>
            <form action={handleGithubLogin}>  
            <button > Login with Github </button>
            </form>
        </>
    );
}