import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AI & Automation',
    description: 'Transforming mining with AI-driven analytics, automation, and data-driven insights.',
    keywords: ['AI in Mining', 'Mining Automation', 'Data Analytics', 'Predictive Maintenance', 'Machine Learning in Mining', 'Industrial Automation', 'Process Optimization'],
};

export default function AIAutomationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
