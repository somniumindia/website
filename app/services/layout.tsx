import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Services',
    description: 'Comprehensive support covering Pre-Tender, Project Execution, and Operation phases.',
    keywords: ['Pre-Tender Consulting', 'Project Execution', 'Operation Management', 'Mining Services', 'Engineering Consulting', 'Feasibility Studies', 'DPR', 'EIA', 'CAPEX OPEX Costing'],
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
