import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Collaborations',
    description: 'Strategic partnerships and collaborations delivering exceptional value to our clients.',
};

export default function CollaborationsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
