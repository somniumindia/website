import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    display: 'swap',
});

const openSans = Open_Sans({
    subsets: ['latin'],
    variable: '--font-open-sans',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://somnium.india'),
    title: {
        default: 'Somnium Management Consulting',
        template: '%s | Somnium Management Consulting',
    },
    description: 'Engineering Innovation with Environmental Stewardship. Somnium India leads in sustainable management consulting and AI automation solutions.',
    keywords: ['Management Consulting', 'Sustainable Engineering', 'AI Automation', 'Environmental Stewardship', 'India Consulting', 'Business Strategy'],
    authors: [{ name: 'Somnium Management Consulting' }],
    creator: 'Somnium Management Consulting',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://somnium.india',
        siteName: 'Somnium Management Consulting',
        title: 'Somnium Management Consulting',
        description: 'Engineering Innovation with Environmental Stewardship',
        images: [
            {
                url: '/og-image.jpg', // Ensure this image exists or is added later
                width: 1200,
                height: 630,
                alt: 'Somnium Management Consulting',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Somnium Management Consulting',
        description: 'Engineering Innovation with Environmental Stewardship',
        images: ['/twitter-image.jpg'], // Ensure this image exists or is added later
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/favicon/favicon.ico',
        shortcut: '/favicon/favicon-16x16.png',
        apple: '/favicon/apple-touch-icon.png',
    },
    manifest: '/favicon/site.webmanifest',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${montserrat.variable} ${openSans.variable} font-sans flex flex-col min-h-screen`} suppressHydrationWarning={true}>
                <Navbar />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
                <Analytics />
            </body>
        </html>
    );
}
