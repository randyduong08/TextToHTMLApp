import { Inter } from 'next/font/google'
import Header from './header/headerlayout'
import Footer from './footer/footerlayout'
import { SessionProvider } from "next-auth/react";
import './globals.css'
import { HtmlContentProvider } from './context/HtmlContentContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Text to HTML App',
    description: 'Generate HTML code from user input!',
}

export default function RootLayout({session, children }) {
    return (
        <HtmlContentProvider>
            <SessionProvider session={session}>
                <html lang="en">
                    <body className={inter.className}>
                        <Header />
                            {children}
                        <Footer />
                    </body>
                </html>
            </SessionProvider>
        </HtmlContentProvider>
    )
}
