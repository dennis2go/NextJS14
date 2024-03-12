import Link from 'next/link';
const linksAdmin =[{name: "Home", path: "/products"}, {name: "Warenkorb", path: "/warenkorb"},{name: "Admin", path: "/admin"}];
const linksNoAdmin =[{name: "Home", path: "/products"}, {name: "Warenkorb", path: "/warenkorb"}];

let isAdmin = true;
let isLoggedIn = true;

export default function Links() {
    return (
        (!isLoggedIn) ?(
        <>
            <ul className="linksUl">
                {linksNoAdmin.map((link, index) => (
                    <li key={index}>
                        <Link href={link.path}>
                            {link.name} 
                        </Link>
                    </li>
                ))}
            <button> Log In</button>
            </ul>
        </>
        ) : (!isAdmin && isLoggedIn) ?(
            <>
            <ul className="linksUl">
                {linksNoAdmin.map((link, index) => (
                    <li key={index}>
                        <Link href={link.path}>
                            {link.name} 
                        </Link>
                    </li>
                ))}
            <button> Log Out</button>
            </ul>
        </>
        ) : (
            <>
            <ul className="linksUl">
                {linksAdmin.map((link, index) => (
                    <li key={index}>
                        <Link href={link.path}>
                            {link.name}
                        </Link>
                    </li>
                ))}
            <button> Log Out</button>
            </ul>
        </>
        )
    )
}