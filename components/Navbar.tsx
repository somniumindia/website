'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Download } from 'lucide-react';

// ----------------------------------------------------------------------
// UPDATE YOUR LOGO URL HERE
// ----------------------------------------------------------------------
const LOGO_URL = "/images/logo.png";

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Industries', path: '/industries' },
        { name: 'Collaborations', path: '/collaborations' },
        { name: 'AI & Automation', path: '/ai-automation' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <img
                                src={LOGO_URL}
                                alt="Somnium Management Consulting"
                                className="h-10 md:h-12 w-auto object-contain"
                                onError={(e) => {
                                    // Fallback if image is missing
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                    e.currentTarget.nextElementSibling?.classList.add('flex');
                                }}
                            />
                            {/* Fallback Text Logo (hidden by default if image loads) */}
                            <div className="hidden flex-col">
                                <span className="text-2xl font-bold text-[#107b9d] tracking-tight">SOMNIUM</span>
                                <span className="text-[10px] text-[#e38e26] font-bold uppercase tracking-widest">Management Consulting</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden xl:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                className={`text-sm font-medium transition-colors duration-200 ${isActive(link.path)
                                    ? 'text-[#e38e26] border-b-2 border-[#e38e26]'
                                    : 'text-gray-700 hover:text-[#107b9d]'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/downloads"
                            className="flex items-center gap-1 text-sm font-medium text-[#107b9d] border border-[#107b9d] px-4 py-2 rounded hover:bg-[#107b9d] hover:text-white transition-colors"
                        >
                            <Download size={16} />
                            <span>Downloads</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button - Show on LG and smaller since menu is longer now */}
                    <div className="flex items-center xl:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-[#107b9d] focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="xl:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full max-h-[80vh] overflow-y-auto">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path)
                                    ? 'text-[#e38e26] bg-orange-50'
                                    : 'text-gray-700 hover:text-[#107b9d] hover:bg-gray-50'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/downloads"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 rounded-md text-base font-medium text-[#107b9d] hover:bg-gray-50"
                        >
                            Client Downloads
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};
