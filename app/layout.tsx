import { Urbanist } from 'next/font/google';

import './globals.css';
import ModalProvider from '@/providers/ModalProvider';
import ToastProvider from '@/providers/ToastProvider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

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
