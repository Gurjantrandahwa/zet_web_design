import './globals.css'
import {Inter} from 'next/font/google'
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'ZET: Web Design',
    description: 'Become a Financial Advisor',

}

export default function RootLayout({children}) {
    return <>

        <html lang="en">
        <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
        </html>
    </>
}
