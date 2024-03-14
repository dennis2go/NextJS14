"use client"
import Link from 'next/link';
import Image from 'next/image';
import pic from "../../../../public/pullover.png"
import styles from "./products.module.css"
import {deleteProduct, deleteAllProduct} from "../../../lib/action"
import { connectToDb } from '@/lib/connectToDb';
import Product from '@/app/products/[productId]/page';
import React, { useState, useEffect } from 'react';

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

let isAdmin = true;

export default function Products({product}:ProductsProps) {
    const deleteProduct = async (id:any) => {
        try {
            const response = await fetch(`/api/products/${id}`, {
                method: 'DELETE',
            });
            const data = await response.json();
            if (response.ok) {
                // Hier könntest du z.B. eine Benachrichtigung anzeigen
                console.log(data.message);
                // Hier könntest du den Zustand aktualisieren oder die Seite neu laden, um die Änderung widerzuspiegeln
                // window.location.reload(); // Einfacher Weg, aber nicht ideal für Nutzererfahrung
            } else {
                throw new Error(data.message || 'Ein Fehler ist aufgetreten');
            }
        } catch (error) {
            console.error('Fehler beim Löschen des Produkts:', error);
        }
    };

    return (
        (isAdmin) ? (
        <div className={styles.container}>
            <button className={styles.button} onClick={() => deleteProduct(product.id)}> X </button>
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
