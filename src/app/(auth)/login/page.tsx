import Image from "next/image";
import styles from "./page.module.css";
import { signIn } from "../../../lib/auth";
import LoginForm from "@/app/_components/loginForm/loginForm";
import { login } from "@/lib/action";

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
            <form action={login}>
            <input type="text" placeholder="username" name="username" />
            <input type="password" placeholder="password" name="password" />
            <button>Login</button>
            </form>
        </>
    );
}