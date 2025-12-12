import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch for expert consulting and engineering solutions. Reach out to our consultants today.',
    keywords: ['Contact Mining Consultants', 'Engineering Enquiry', 'Consultation Request', 'Somnium Contact', 'Business Inquiry'],
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
