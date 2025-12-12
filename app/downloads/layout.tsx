import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Downloads',
    description: 'Access our capability statements, brochures, and technical resources.',
    keywords: ['Mining Capability Statement', 'Technical Resources', 'Downloads', 'Company Brochures', 'Engineering Documents'],
};

export default function DownloadsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
