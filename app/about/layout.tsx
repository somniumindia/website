import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about Somnium Management Consulting, our vision, mission, and our pragmatic approach to mining consulting.',
    keywords: ['About Somnium', 'Mining Consultants India', 'Company Vision', 'Mission Statement', 'Management Consulting Team', 'Engineering Experts'],
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
