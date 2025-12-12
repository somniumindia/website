import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Industries',
    description: 'Specialized solutions for Mining, Metallurgy, and allied sectors. Expertise across the value chain.',
    keywords: ['Mining Industry', 'Metallurgy', 'Smelting', 'ESG', 'Environmental Stewardship', 'Mineral Processing', 'Sustainable Mining', 'Metal Production'],
};

export default function IndustriesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
