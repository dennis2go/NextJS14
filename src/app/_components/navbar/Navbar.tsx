import Image from 'next/image';
import "./navbar.css";
import pic from "../../../../public/pic.png"
import Links from './links/Links';
import Link from 'next/link';


export default function Navbar() {
  return (
    <div className="container">
        <header>
            <Link href="/products">
            <Image
                src={pic}// The path to your image
                alt="Logo" // A short description of the image
                width={45} // Desired width of the image
                height={30} // Desired height of the image
            />
            </Link>
            <Links />
        </header>
        </div>

  )
}
