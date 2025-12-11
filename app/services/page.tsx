'use client';
import React from 'react';
import { motion as motionOriginal } from 'framer-motion';
import { ClipboardList, Cog, BarChart3, LineChart, CheckCircle2, Factory, HardHat, TrendingUp } from 'lucide-react';
import { Button } from '../../components/Button';
import Link from 'next/link';

const motion = motionOriginal as any;

export default function Services() {
    const services = [
        {
            id: "pre-tender",
            title: "Pre-Tender Stage",
            icon: ClipboardList,
            description: "Comprehensive support enabling sound investment decisions before the project begins.",
            bullets: [
                "Pre-Feasibility Reports: Infrastructure & Land Assessment",
                "Detailed Project Reports (DPR): Technical Viability",
                "Owner Consultant: Engaging with Engineering Firms",
                "Tender Support: Conceptual Design & PFDs",
                "Environmental Impact Assessment (EIA)",
                "Technology Selection for Beneficiation",
                "CAPEX and OPEX Costing"
            ],
            image: "/images/pts.jpg",
            imageCaption: "Strategic Foundation & Feasibility"
        },
        {
            id: "project-execution",
            title: "During Project Execution",
            icon: HardHat,
            description: "End-to-end engineering and management to ensure timely and cost-effective delivery.",
            bullets: [
                "Basic Engineering: PFDs, Material Balances & Layouts",
                "Detailed Engineering: P&IDs, Civil, Structural & Electrical",
                "Equipment Specifications & Selection",
                "Procurement Oversight & Contractual Obligations",
                "Project Management: Planning, Scheduling & Monitoring",
                "Construction Supervision",
                "Quality Assurance & Control (QA/QC)"
            ],
            image: "/images/de.jpg",
            imageCaption: "Building with Precision & Safety"
        },
        {
            id: "operation",
            title: "During Operation",
            icon: Factory,
            description: "Maximizing throughput and efficiency while minimizing downtime in active plants.",
            bullets: [
                "Process Optimization: Troubleshooting & Analysis",
                "Efficiency Improvement: Reduce Waste & Energy",
                "Debottlenecking Studies: Identify Constraints",
                "Throughput & Productivity Enhancement",
                "Asset Utilization Improvement",
                "Cost Reduction Strategies",
                "Preventive Maintenance Planning"
            ],
            image: "/images/do.jpg",
            imageCaption: "Operational Excellence & Efficiency"
        },
        {
            id: "management-consulting",
            title: "Management Consulting",
            icon: LineChart,
            description: "Strategic interventions to improve the bottom line through commercial and operational levers.",
            bullets: [
                "Continuous Improvement Program (CIP)",
                "Contracts and SLA Optimization",
                "Procurement Best Practices & Negotiation",
                "Reduction in MRO Inventory & Spend",
                "Manpower Productivity Analysis",
                "Financial Modeling & Sensitivity Analysis",
                "Asset Optimization & Dashboard Preparation"
            ],
            image: "/images/mcd.jpeg",
            imageCaption: "Data-Driven Business Growth"
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Header */}
            <div className="bg-gradient-to-br from-white via-teal-50/60 to-slate-50 py-20 relative overflow-hidden border-b border-gray-100">
                {/* Decorative elements */}
                <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#107b9d]/30 rounded-full blur-3xl -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-[#e38e26]/30 rounded-full blur-3xl translate-y-1/2"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.2]"></div>

                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold mb-6 text-[#107b9d]"
                    >
                        Our Services
                    </motion.h1>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 96 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="h-1.5 bg-[#e38e26] mx-auto mb-8 rounded-full shadow-sm"
                    ></motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed"
                    >
                        Somnium is a one-stop integrated solution provider for the mining value chain, offering expertise from feasibility to operational turnaround.
                    </motion.p>
                </div>
            </div>

            {/* Intro Graphic Area */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-7xl mx-auto px-4 -mt-10 mb-16 relative z-20"
            >
                <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border-b-4 border-[#e38e26]">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Somnium Value Chain</h2>
                        <p className="text-gray-600 mb-6">
                            We support clients through three critical phases: <strong>Pre-Tender</strong>, <strong>Project Execution</strong>, and <strong>Operation</strong>, underpinned by our robust Management Consulting framework.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-teal-50 text-[#107b9d] rounded-full text-sm font-semibold">Engineering Excellence</span>
                            <span className="px-3 py-1 bg-orange-50 text-[#e38e26] rounded-full text-sm font-semibold">Sustainability</span>
                            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold">Innovation</span>
                        </div>
                    </div>
                    <div className="flex-1 w-full">
                        {/* Abstract Process Flow Visualization */}
                        <div className="flex justify-between items-center text-center relative">
                            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10"></div>
                            <div className="bg-white p-2 relative z-10 transform hover:scale-110 transition-transform duration-300">
                                <div className="w-12 h-12 bg-[#107b9d] rounded-full flex items-center justify-center text-white mx-auto mb-2 shadow-lg"><ClipboardList size={20} /></div>
                                <span className="text-xs font-bold text-gray-600">Plan</span>
                            </div>
                            <div className="bg-white p-2 relative z-10 transform hover:scale-110 transition-transform duration-300">
                                <div className="w-12 h-12 bg-[#e38e26] rounded-full flex items-center justify-center text-white mx-auto mb-2 shadow-lg"><HardHat size={20} /></div>
                                <span className="text-xs font-bold text-gray-600">Build</span>
                            </div>
                            <div className="bg-white p-2 relative z-10 transform hover:scale-110 transition-transform duration-300">
                                <div className="w-12 h-12 bg-[#107b9d] rounded-full flex items-center justify-center text-white mx-auto mb-2 shadow-lg"><Factory size={20} /></div>
                                <span className="text-xs font-bold text-gray-600">Operate</span>
                            </div>
                            <div className="bg-white p-2 relative z-10 transform hover:scale-110 transition-transform duration-300">
                                <div className="w-12 h-12 bg-[#e38e26] rounded-full flex items-center justify-center text-white mx-auto mb-2 shadow-lg"><TrendingUp size={20} /></div>
                                <span className="text-xs font-bold text-gray-600">Optimize</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Service Blocks */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-20">
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-stretch`}
                    >
                        <div className="flex-1 flex flex-col justify-center w-full py-4">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-4 bg-gradient-to-br from-orange-100 to-white rounded-xl shadow-sm border border-orange-100">
                                    <service.icon className="text-[#e38e26]" size={36} />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                            </div>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8 border-l-4 border-[#107b9d] pl-4">
                                {service.description}
                            </p>

                            <div className="flex flex-col gap-3">
                                {service.bullets.map((bullet, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ x: 5 }}
                                        className="flex items-start gap-3 p-2 rounded-lg hover:bg-white hover:shadow-md transition-all cursor-default"
                                    >
                                        <CheckCircle2 className="text-[#107b9d] mt-1 shrink-0" size={20} />
                                        <span className="text-gray-700 text-base font-medium leading-relaxed">{bullet}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="flex-1 w-full lg:min-h-[550px] min-h-[400px]">
                            <div className="w-full h-full bg-white rounded-2xl shadow-xl overflow-hidden relative group">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 absolute inset-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#107b9d]/80 via-transparent to-transparent opacity-90"></div>
                                <div className="absolute bottom-0 left-0 p-8 text-white z-10">
                                    <p className="font-bold text-lg mb-2">Expertise in Action</p>
                                    <p className="text-sm opacity-90 max-w-sm">{service.imageCaption}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* CTA Bottom */}
            <section className="bg-slate-900 py-16 text-white border-t border-slate-800">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold mb-6"
                    >
                        Start Your Continuous Improvement Program
                    </motion.h3>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                        Identify leakages, reduce costs, and improve EBITDA with our specialized Diagnostic Workplan.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact">
                            <Button variant="primary" className="w-full sm:w-auto">Contact Consultants</Button>
                        </Link>
                        <Link href="/downloads">
                            <Button variant="outline" className="text-white border-gray-600 hover:bg-gray-800 w-full sm:w-auto">
                                Download Capability Statement
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
