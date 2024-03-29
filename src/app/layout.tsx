import Navbar from "./_components/navbar/Navbar"
import Searchbar from "./_components/searchbar/Searchbar"
import "./globals.css";
// import getServerSession from "next-auth";
// import SessionProvider from "../lib/SessionProvider";
// import { authOptions } from "../app/api/auth/[...nextauth]/route"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    // const session = await getServerSession(authOptions);
  return (
    <html lang="en">
    <body>
        {/* <SessionProvider> */}
        <Navbar/>
        {children}
        {/* </SessionProvider> */}
    </body>
    </html>
  )
}
