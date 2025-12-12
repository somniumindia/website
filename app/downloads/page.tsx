'use client';
import React, { useState } from 'react';
import { FileText, Download, Check, FileDown } from 'lucide-react';
import { Button } from '../../components/Button';
import { DownloadItem } from '../../app/types';
import { motion as motionOriginal, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const motion = motionOriginal as any;

export default function Downloads() {
    const [downloading, setDownloading] = useState(false);
    const [downloaded, setDownloaded] = useState(false);

    // ---------------------------------------------------------
    // TODO: PASTE YOUR BROCHURE LINK HERE
    // Option 1 (Local): Put file in 'public' folder and use "/filename.pdf"
    // Option 2 (External): Use full URL "https://example.com/file.pdf"
    // ---------------------------------------------------------
    const BROCHURE_LINK = "/files/brochure.pdf";

    // Simplified list - just the company brochure
    const item: DownloadItem = {
        id: '1',
        title: "Somnium Corporate Brochure",
        type: "PDF",
        size: "22 MB"
    };

    const handleDownload = () => {
        setDownloading(true);
        // Simulate network delay for better UX
        setTimeout(() => {
            setDownloading(false);
            setDownloaded(true);

            // Trigger download
            const link = document.createElement('a');
            link.href = BROCHURE_LINK;
            // The 'download' attribute suggests a filename to the browser
            link.setAttribute('download', 'Somnium_Corporate_Brochure.pdf');
            // Target blank ensures that if the browser tries to open it (instead of download), it opens in a new tab
            link.setAttribute('target', '_blank');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Reset state after a few seconds
            setTimeout(() => setDownloaded(false), 3000);
        }, 1500);
    };

    return (
        <div className="bg-slate-50 min-h-screen py-24 relative overflow-hidden">
            {/* Background Decoration - Subtle advanced gradients */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#107b9d]/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#e38e26]/5 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/4"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl mb-6 shadow-xl border border-slate-100 transform hover:scale-110 transition-transform duration-300">
                        <FileDown size={36} className="text-[#107b9d]" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Resource Center</h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
                        Download our detailed corporate profile to explore our capabilities and understanding of the mining value chain.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 relative group"
                >
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#107b9d]"></div>
                    <div className="bg-slate-50/50 px-8 py-6 border-b border-slate-100 flex items-center justify-between backdrop-blur-sm">
                        <h2 className="text-gray-900 font-bold text-sm flex items-center gap-2 uppercase tracking-wider">
                            <span className="w-2 h-2 bg-[#e38e26] rounded-full"></span> Available Documents
                        </h2>
                    </div>

                    <div className="p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="flex items-center gap-8">
                            <div className="w-24 h-32 bg-slate-50 rounded-xl shadow-lg flex flex-col items-center justify-center text-[#107b9d] border border-slate-200 group-hover:-translate-y-2 transition-transform duration-300">
                                <FileText size={40} className="drop-shadow-sm opacity-80" />
                                <span className="text-[10px] font-extrabold mt-3 text-gray-500 uppercase tracking-widest bg-white px-2 py-0.5 rounded shadow-sm border border-slate-100">PDF</span>
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 group-hover:text-[#107b9d] transition-colors">{item.title}</h3>
                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-medium mb-3">
                                    <span className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full border border-teal-100">Updated 2025</span>
                                    <span>•</span>
                                    <span>{item.size}</span>
                                </div>
                                <p className="text-gray-500 text-sm max-w-sm">Comprehensive guide to our engineering services and case studies.</p>
                            </div>
                        </div>

                        <div className="flex-shrink-0 w-full md:w-auto">
                            <Button
                                variant="primary"
                                onClick={handleDownload}
                                disabled={downloading}
                                className={`w-full md:w-56 py-4 text-lg transition-all duration-500 relative overflow-hidden shadow-lg hover:shadow-xl ${downloaded ? '!bg-green-600 !hover:bg-green-700' : ''}`}
                            >
                                <AnimatePresence mode="wait">
                                    {downloading ? (
                                        <motion.div
                                            key="loading"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="flex items-center gap-3"
                                        >
                                            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                            <span>Loading...</span>
                                        </motion.div>
                                    ) : downloaded ? (
                                        <motion.div
                                            key="success"
                                            initial={{ scale: 0.5, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0.5, opacity: 0 }}
                                            className="flex items-center gap-2"
                                        >
                                            <Check size={20} /> <span>Saved</span>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="default"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="flex items-center gap-2"
                                        >
                                            <Download size={20} /> <span>Download PDF</span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </Button>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 flex justify-center"
                >
                    <div className="bg-white rounded-full px-8 py-4 border border-slate-200 shadow-lg flex flex-col sm:flex-row items-center gap-4">
                        <span className="text-gray-600 font-medium text-sm">Looking for specific technical reports?</span>
                        <Button variant="outline" className="py-2 px-6 text-sm hover:bg-[#107b9d] hover:border-[#107b9d] whitespace-nowrap" onClick={() => window.location.href = '/contact'}>
                            Contact Engineering Team
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
