import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
    // ---------------------------------------------------------
    // SOCIAL MEDIA LINKS
    // ---------------------------------------------------------
    const LINKEDIN_LINK = "https://www.linkedin.com/company/somnium-management-consulting-pvt-ltd/";

    return (
        <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* Company Info - Takes 4/12 columns on large screens */}
                    <div className="col-span-1 lg:col-span-4">
                        <Link href="/" className="inline-block mb-6 bg-white p-3 rounded-lg max-w-[200px]">
                            <img
                                src="logo.png"
                                alt="Somnium Management Consulting Pvt. Ltd."
                                className="w-full h-auto"
                                onError={(e) => {
                                    e.currentTarget.parentElement!.style.display = 'none';
                                    e.currentTarget.parentElement!.nextElementSibling!.classList.remove('hidden');
                                }}
                            />
                        </Link>
                        {/* Fallback Text if image fails */}
                        <div className="hidden mb-6">
                            <h3 className="text-2xl font-bold text-white tracking-tight">SOMNIUM</h3>
                            <p className="text-[10px] text-[#e38e26] font-bold uppercase tracking-widest mt-1">Management Consulting Pvt. Ltd.</p>
                        </div>

                        <p className="text-gray-400 text-sm mb-6 leading-relaxed pr-0 lg:pr-8">
                            Engineering Innovation with Environmental Stewardship. We are your partner in mineral processing, delivering sustainable solutions for efficiency and enduring prosperity.
                        </p>
                        <div className="flex space-x-4">
                            <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#e38e26] hover:text-white transition-all"><Linkedin size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links - Takes 2/12 columns on large screens */}
                    <div className="col-span-1 lg:col-span-2">
                        <h4 className="text-lg font-semibold text-[#e38e26] mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-white text-sm transition-colors">Services</Link></li>
                            <li><Link href="/industries" className="text-gray-400 hover:text-white text-sm transition-colors">Industries</Link></li>
                            <li><Link href="/collaborations" className="text-gray-400 hover:text-white text-sm transition-colors">Collaborations</Link></li>
                            <li><Link href="/ai-automation" className="text-gray-400 hover:text-white text-sm transition-colors">AI & Automation</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Services - Takes 3/12 columns on large screens */}
                    <div className="col-span-1 lg:col-span-3">
                        <h4 className="text-lg font-semibold text-[#e38e26] mb-6">Core Expertise</h4>
                        <ul className="space-y-3">
                            <li className="text-gray-400 text-sm">Pre-Tender Consulting</li>
                            <li className="text-gray-400 text-sm">Project Execution</li>
                            <li className="text-gray-400 text-sm">Process Optimization</li>
                            <li className="text-gray-400 text-sm">Process Simulation</li>
                            <li className="text-gray-400 text-sm">Strategic Partnerships</li>
                        </ul>
                    </div>

                    {/* Contact - Takes 3/12 columns on large screens */}
                    <div className="col-span-1 lg:col-span-3">
                        <h4 className="text-lg font-semibold text-[#e38e26] mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <MapPin size={18} className="mt-1 flex-shrink-0 text-[#107b9d]" />
                                <span>32 A, Block C, New Azad Nagar,<br />Kalyanpur, Kanpur 208017</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Mail size={18} className="text-[#107b9d]" />
                                <span>connect@somniumindia.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
                    <p>&copy; {new Date().getFullYear()} Somnium Management Consulting Pvt. Ltd. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
