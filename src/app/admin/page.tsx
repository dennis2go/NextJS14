"use client"
import styles from "./page.module.css";
import {fillProducts, addProduct, deleteAllProduct} from "../../lib/action";
import React, { useState } from 'react';
import Link from "next/link";

export default function Admin() {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedValue(event.target.value);
    };

    return (
    <>
        <h1> Admin-Panel </h1>
        <form action={addProduct} >
            <input type="text" placeholder="brand" name="brand"/> 
            <input type="text" placeholder="description" name="description"/> 
            <select value={selectedValue} onChange={handleChange} name="gender">
                <option value="" disabled selected>choose Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            <input type="number" placeholder="price" name="price"/> 
            <button> ADD</button>
        </form>
        <form action={deleteAllProduct} >
            <button className={styles.button}> Delete all Articles</button>
        </form>
        <form action={fillProducts} >
            <button className={styles.button}> Create new Articles</button>
        </form>
        <Link className={styles.link} href={`/admin/manageProducts`}> manage Products </Link>
    </>
    );
}

