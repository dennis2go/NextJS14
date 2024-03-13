"use client"
import Image from "next/image";
import styles from "./login.module.css";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// import { signIn } from "../../../lib/auth";
// import { login } from "@/lib/action";

export default function Login() {
const router = useRouter();
const [error, setError] = useState("");
const { data: session, status: sessionStatus } = useSession();

const handleSubmit = async (e: any) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (res?.error) {
      setError("Invalid username or password");
    }
    if (res?.url) {
    router.replace("/products")
    } else {
        setError("didnt funktionieren");
    }
}

    return (
        <div className={styles.container}>  
            <h1 className={styles.h1}> Login </h1>
            <form  className={styles.form}>  
                <button > Login with Github </button>
            </form>
            <form onSubmit= {handleSubmit} className={styles.form}>
                <input className={styles.input} type="text"  placeholder="Username"  />
                <input className={styles.input} type="password" placeholder="Password" />
                <button type= "submit" className={styles.button}>Login</button>
            </form>
        </div>
    );
}