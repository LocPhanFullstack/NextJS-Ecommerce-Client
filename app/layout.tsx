import { Urbanist } from 'next/font/google';

import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ModalProvider from '@/providers/ModalProvider';
import ToastProvider from '@/providers/ToastProvider';

const font = Urbanist({ subsets: ['latin'] });

export const metadata = {
    title: 'Store',
    description: 'Store - The place for all your purchases.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={font.className}>
                <ModalProvider />
                <ToastProvider />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
