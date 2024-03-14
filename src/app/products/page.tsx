import Image from "next/image";
import styles from "./page.module.css";
import Products from "../_components/products/Products";
import {getProducts} from "../../lib/data"
import {fillProducts} from "../../lib/action"
import Searchbar from "../_components/searchbar/Searchbar"
import { useState, useEffect } from 'react'; 

const getFProducts = async () => {
    const res = await fetch("http://localhost:3000/api/products", {next:{revalidate:3600}});
  
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
  
    return res.json();
};

type Product = {
    id: number,
    brand: string,
    description: string,
    gender: string,
    price: number,
    completed: boolean,
    firstImage: string,
    secondImage: string,
}


export default async function PageList() {
    const products = await getProducts();

    
    
    return (
        <>
            <Searchbar/>
            <div className={styles.homeProducts}>
                {products.map( (product:Product) => (<Products product={product} key={product.id}/> ))}
            </div>
        </>
    );
}