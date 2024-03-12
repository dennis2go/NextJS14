"use client"
import styles from "./page.module.css";
import {fillProducts, addProduct, deleteAllProduct} from "../../../lib/action";
import React, { useState } from 'react';
import Products from "../../_components/products/Products";

export default function ManagaeProducts() {
    
    return (
    <>
        <h1> manage Products </h1>
        <div >
            {/* {products.map( (product:Product) => (<Products product={product} key={product.id}/> ))} */}
        </div>
    </>
    );
}