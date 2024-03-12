
import Link from 'next/link';
import Image from 'next/image';
import pic from "../../../../public/pullover.png"
import styles from "./products.module.css"
import {deleteProduct} from "../../../lib/action"
import { connectToDb } from '@/lib/connectToDb';
import Product from '@/app/products/[productId]/page';

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

interface ProductsProps {
    product: Product;
}

let isAdmin = false;

export default function Products({product}:ProductsProps) {
    return (
        (isAdmin) ? (
        <div className={styles.container}>
            <button className={styles.button}> X </button>
            <Link href={`/products/${product.id}`}>
                <Image
                src={pic} // The path to your image
                alt="Description of Image" // A short description of the image for accessibility
                width={240} // Desired width of the image (can be adjusted)
                height={240} // Desired height of the image (can be adjusted)
                />
            </Link>
            <h4 className={styles.h4}> {product.brand} </h4>
            <p className={styles.p}> {product.description} </p>
            <p className={styles.p}> {product.price}</p>
        </div>
        ) : (
        <div className={styles.container}>
            <Link href={`/products/${product.id}`}>
                <Image
                src={pic} // The path to your image
                alt="Description of Image" // A short description of the image for accessibility
                width={240} // Desired width of the image (can be adjusted)
                height={240} // Desired height of the image (can be adjusted)
                />
            </Link>
            <h4 className={styles.h4}> {product.brand} </h4>
            <p className={styles.p}> {product.description} </p>
            <p className={styles.p}> {product.price}</p>
        </div>
        )
    )
}
