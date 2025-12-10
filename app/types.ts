import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
    id: string;
    title: string;
    icon: LucideIcon;
    description: string;
    bullets: string[];
}

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    bio: string;
    imageUrl: string;
}

export interface Industry {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
}

export interface CaseStudy {
    id: string;
    client: string;
    title: string;
    outcome: string;
    stat: string;
}

export interface DownloadItem {
    id: string;
    title: string;
    type: 'PDF' | 'Report';
    size: string;
}
