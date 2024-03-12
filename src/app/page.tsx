"use client"
import Image from "next/image";
import styles from "./homepage.module.css"
import Products from "./_components/products/Products";
import { useRouter } from "next/navigation";


export default function Home() {
    const router = useRouter();
    router.push("/products");
    
    return (
        <>
           Startseite
        </>
    );
}
