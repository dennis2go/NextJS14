import Image from "next/image";
import styles from "./page.module.css";
import Products from "../_components/products/Products";
import {getProducts} from "../../lib/data"
import {fillProducts} from "../../lib/action"

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

// const getData = async() => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos', {next:{revalidate:3600}});
//     return res.json();
// }

export default async function PageList() {
    const products = await getProducts();
    return (
        <>
            <div className={styles.homeProducts}>
            {products.map( (product:Product) => (<Products product={product} key={product.id}/> ))}
            </div>
        </>
    );
}