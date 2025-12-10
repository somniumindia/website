'use client';
import React from 'react';
import { motion as motionOriginal } from 'framer-motion';
import { Handshake, Globe2, Cog, Settings2 } from 'lucide-react';
import { Button } from '../../components/Button';
import Link from 'next/link';

const motion = motionOriginal as any;

export default function Collaborations() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="bg-slate-900 text-white relative overflow-hidden py-24">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="images/collab-bg.jpeg"
                        alt="Global Partnerships"
                        className="w-full h-full object-cover opacity-30"
                    />
                </div>

                {/* Decorative Gradients */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent z-10"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#107b9d]/20 border border-[#107b9d] text-[#107b9d] text-sm font-semibold mb-6">
                            <Globe2 size={16} />
                            <span>Global Expertise</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e38e26] to-yellow-400">Collaborations</span>
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed mb-8">
                            We leverage world-class technology partners to deliver superior results. By combining our engineering expertise with global leaders in equipment and technology, we ensure our clients access the most efficient and innovative solutions available.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Intro Stats/Benefits */}
            <div className="bg-white py-12 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6">
                            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Handshake className="text-[#e38e26]" size={24} />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Trusted Partnerships</h3>
                            <p className="text-sm text-gray-600">Working with established global leaders to bring reliability to your plant.</p>
                        </div>
                        <div className="p-6 border-l border-r border-gray-100">
                            <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Cog className="text-[#107b9d]" size={24} />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Advanced Technology</h3>
                            <p className="text-sm text-gray-600">Access to cutting-edge separation and material handling innovations.</p>
                        </div>
                        <div className="p-6">
                            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Settings2 className="text-blue-600" size={24} />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Process Efficiency</h3>
                            <p className="text-sm text-gray-600">Optimized flowsheets integrating the best-in-class equipment.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Partners Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">

                {/* Partner 1: Eriez */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col lg:flex-row gap-12 items-center"
                >
                    <div className="flex-1 w-full relative">
                        <div className="absolute top-0 -left-4 w-20 h-20 bg-[#e38e26] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                        <div className="absolute top-0 -right-4 w-20 h-20 bg-[#107b9d] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 relative z-10">
                            <div className="h-80 overflow-hidden">
                                <img
                                    src="images/eriez.jpg"
                                    alt="Industrial Separation Equipment"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-3xl font-bold tracking-tight">ERIEZ</h3>
                                    <p className="text-orange-200 font-medium">Separation Technologies</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="inline-block px-3 py-1 bg-orange-50 text-[#e38e26] rounded-full text-sm font-semibold mb-4">Equipment Partner</div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Separation & Material Handling</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            We collaborate with <strong>Eriez</strong> to bring state-of-the-art separation technologies to the Indian mining sector. This partnership focuses on deploying superior magnetic separation, flotation, and metal detection equipment.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-[#e38e26] rounded-full mt-2.5"></div>
                                <span className="text-gray-700">High-intensity magnetic separators for ferrous and non-ferrous ores.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-[#e38e26] rounded-full mt-2.5"></div>
                                <span className="text-gray-700">Advanced column flotation technologies for fine particle recovery.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-[#e38e26] rounded-full mt-2.5"></div>
                                <span className="text-gray-700">Heavy duty vibratory feeders and material handling solutions.</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-200"></div>

                {/* Partner 2: DISA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col lg:flex-row-reverse gap-12 items-center"
                >
                    <div className="flex-1 w-full relative">
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 relative z-10">
                            <div className="h-80 overflow-hidden">
                                <img
                                    src="images/disa.jpg"
                                    alt="HPSA Technology"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-3xl font-bold tracking-tight">DISA USA</h3>
                                    <p className="text-teal-200 font-medium">HPSA Technology</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="inline-block px-3 py-1 bg-teal-50 text-[#107b9d] rounded-full text-sm font-semibold mb-4">Technology Partner</div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">High Pressure Slurry Ablation (HPSA)</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Our collaboration with <strong>DISA (USA)</strong> introduces the groundbreaking High Pressure Slurry Ablation (HPSA) technology. This advanced attrition capabilities significantly enhance mineral liberation compared to conventional grinding.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-[#107b9d] rounded-full mt-2.5"></div>
                                <span className="text-gray-700">Improved liberation of valuable minerals from gangue.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-[#107b9d] rounded-full mt-2.5"></div>
                                <span className="text-gray-700">Reduction in energy consumption for downstream processing.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-[#107b9d] rounded-full mt-2.5"></div>
                                <span className="text-gray-700">Enhanced surface chemistry for better flotation performance.</span>
                            </li>
                        </ul>
                        <Button variant="primary" onClick={() => window.location.href = '/contact'}>Enquire About HPSA</Button>
                    </div>
                </motion.div>

            </div>

            {/* CTA Section */}
            <section className="bg-slate-50 py-16 border-t border-gray-200">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Interested in implementing these technologies?</h2>
                    <p className="text-gray-600 mb-8">Contact our engineering team to evaluate how Eriez equipment or DISA HPSA technology fits into your flowsheet.</p>
                    <Link href="/contact">
                        <Button variant="secondary">Contact Us</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};
