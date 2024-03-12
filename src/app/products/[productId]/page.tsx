import Image from "next/image";
import styles from "./page.module.css";
import firstPic from "../../../../public/pullover.png";
import secondPic from "../../../../public/pullover.png";
import {getProduct} from "../../../lib/data"


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


export default async function Product( {params} : any) {
    // const getData = async() => {
    //     const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.productId}`);
    //     return res.json();
    // }
    const { slug } = params;
    const product:Product = await getProduct(params.productId);
    const lett = "<";
    const realPrice = product.price + "€";

  return (
      <div className={styles.container}>
        <div className={styles.pictures}>
        <Image
                src={firstPic} // The path to your image
                alt="Description of Image" // A short description of the image for accessibility
                width={240} // Desired width of the image (can be adjusted)
                height={240} // Desired height of the image (can be adjusted)
        />
        <Image
                src={secondPic} // The path to your image
                alt="Description of Image" // A short description of the image for accessibility
                width={240} // Desired width of the image (can be adjusted)
                height={240} // Desired height of the image (can be adjusted)
        />
        </div>
        <div className={styles.infos}>
            <h3 className={styles.h3}> {product.brand} </h3>
            <p className={styles.p1}> {product.description} </p>
            <p className={styles.p2}> {realPrice}</p>
            <p className={styles.p3}> inkl. MwSt. </p>
            <form>
                <select className={styles.select} id="category" name="category" required>
                    <option value="" disabled selected>choose Size</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                </select>
            </form>
            <div className={styles.buttonContainer}>
                <button className={styles.button2}> {lett} </button>
                <button className={styles.button}>in den Warenkorb</button>
            </div>
        </div>
    </div>
  );
}



