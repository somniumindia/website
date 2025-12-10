'use client';
import React, { useRef } from 'react';
import { motion as motionOriginal } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ClipboardCheck, Settings, TrendingUp, RefreshCw, BarChart, ShieldCheck, Zap, Pickaxe, Factory, Leaf } from 'lucide-react';
import { Button } from '../components/Button';

const motion = motionOriginal as any;

export default function Home() {
    const heroRef = useRef<HTMLDivElement>(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } // Custom cubic bezier for smooth feel
        }
    };

    const services = [
        {
            icon: ClipboardCheck,
            title: "Pre-Tender Consulting",
            points: ["Feasibility Studies & DPR", "EIA & Regulatory Compliance"]
        },
        {
            icon: Settings,
            title: "Project Execution",
            points: ["Basic & Detailed Engineering", "Construction Supervision"]
        },
        {
            icon: TrendingUp,
            title: "Process Optimization",
            points: ["Debottlenecking Studies", "Throughput Enhancement"]
        },
        {
            icon: BarChart,
            title: "Management Consulting",
            points: ["Continuous Improvement Program (CIP)", "Contract Optimization"]
        }
    ];

    const impactMetrics = [
        {
            label: "Contract Spend",
            value: "10-15%",
            desc: "Reduction in contracts spend through strategic negotiation and LPP analysis",
            icon: ShieldCheck
        },
        {
            label: "MRO Inventory",
            value: "10-15%",
            desc: "Reduction in Maintenance, Repair, and Operations inventory costs",
            icon: RefreshCw
        },
        {
            label: "EBITDA Impact",
            value: "5-10%",
            desc: "Potential annual improvement per increase in OEE",
            icon: Zap
        }
    ];

    const industriesPreview = [
        {
            title: "Mining & Processing",
            image: "https://lh3.google.com/u/0/d/1C-mK_LpW9zkqxRD1BqqfjaveY1v_CKVS=w1227-h892-iv1?auditContext=prefetch",
            icon: Pickaxe
        },
        {
            title: "Metallurgy & Smelting",
            image: "https://lh3.google.com/u/0/d/16OF11UEvkh7djpkKlzfwNL-BZ1ANOsWt=w1227-h892-iv1?auditContext=prefetch",
            icon: Factory
        },
        {
            title: "ESG",
            image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?fit=crop&w=800&q=80",
            icon: Leaf,
        }
    ];

    return (
        <div className="flex flex-col w-full overflow-hidden">
            {/* Hero Section - Static Background */}
            <section ref={heroRef} className="relative h-[700px] w-full flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://photos.fife.usercontent.google.com/pw/AP1GczMj-nCOJkAA5iiey7uaWxd7oh07TcjJb-AWBivfAt--dtwf_3hfpSU=w778-h519-s-no-gm?authuser=1"
                        alt="Mining Operation"
                        className="w-full h-full object-cover scale-110"
                    />
                </div>

                {/* Advanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-900/90 z-0"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#107b9d]/30 via-transparent to-transparent z-0 pointer-events-none"></div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white flex flex-col items-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight drop-shadow-lg tracking-tight"
                    >
                        Engineering Innovation with <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e38e26] to-yellow-400">Environmental Stewardship</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-lg md:text-2xl mb-12 max-w-3xl mx-auto text-gray-200 font-light leading-relaxed"
                    >
                        A one-stop integrated solution provider for the mining value chain. From feasibility to operation & optimization.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                    >
                        <Link href="/contact">
                            <Button variant="primary" className="text-lg px-10 py-4 shadow-[0_0_30px_-5px_rgba(227,142,38,0.5)] hover:shadow-[0_0_40px_-5px_rgba(227,142,38,0.7)] hover:-translate-y-1 transition-all duration-300">Discuss Your Project</Button>
                        </Link>
                        <Link href="/services">
                            <Button variant="outline" className="text-white border-white hover:bg-[#107b9d] hover:border-[#107b9d] hover:text-white text-lg px-10 py-4 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm bg-white/5">
                                Explore Services
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Why Somnium / Expertise - with decorative background */}
            <section className="py-24 bg-white relative overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-teal-50 rounded-full blur-3xl opacity-50 -z-10"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-orange-50 rounded-full blur-3xl opacity-50 -z-10"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                        className="text-center mb-20"
                    >
                        <motion.span variants={itemVariants} className="text-[#e38e26] font-bold tracking-widest uppercase text-sm border border-[#e38e26]/30 px-3 py-1 rounded-full bg-[#e38e26]/5">Why Somnium</motion.span>
                        <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-gray-900 mt-6 mb-6">Well Informed, Fresh & Pragmatic Approach</motion.h2>
                        <motion.div variants={itemVariants} className="w-24 h-1.5 bg-gradient-to-r from-[#107b9d] to-teal-400 mx-auto rounded-full"></motion.div>
                        <motion.p variants={itemVariants} className="mt-8 text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed">
                            Our deep understanding and expertise not just in mining and mineral, but allied sectors allows us to bring a fresh perspective.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={containerVariants}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -15, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
                                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-100 group transition-all duration-300 relative overflow-hidden"
                            >
                                {/* Hover gradient background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-teal-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300 border border-slate-200">
                                        <service.icon className="text-[#107b9d] group-hover:text-[#e38e26] transition-colors duration-300" size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#107b9d] transition-colors">{service.title}</h3>
                                    <ul className="space-y-3 mb-8">
                                        {service.points.map((point, idx) => (
                                            <li key={idx} className="flex items-start text-gray-600 text-sm">
                                                <div className="w-1.5 h-1.5 bg-[#e38e26] rounded-full mr-2 mt-1.5 shrink-0"></div>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="/services" className="text-[#107b9d] font-bold text-sm flex items-center group-hover:translate-x-2 transition-transform duration-300">
                                        View Details <ArrowRight size={16} className="ml-1" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Industries Preview Section - Darker Tone for Contrast */}
            <section className="py-24 bg-slate-50 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <span className="text-[#107b9d] font-bold tracking-wider uppercase text-sm">Where We Operate</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Sectors We Serve</h2>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
                            Delivering specialized engineering and management solutions across the mining and metals value chain.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {industriesPreview.map((industry, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="h-full"
                            >
                                <Link href="/industries" className="group relative overflow-hidden rounded-2xl shadow-xl h-96 block border border-white/20">
                                    <img
                                        src={industry.image}
                                        alt={industry.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                                    {/* Decorative line */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#e38e26] to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>

                                    <div className="absolute bottom-0 left-0 p-8 w-full">
                                        <div className="flex items-center gap-3 mb-3 text-[#e38e26] translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <industry.icon size={24} />
                                            <span className="font-bold text-sm uppercase tracking-wider">Expertise</span>
                                        </div>
                                        <h3 className="text-3xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{industry.title}</h3>
                                        <div className="w-12 h-1 bg-[#107b9d] group-hover:w-full transition-all duration-500 delay-100"></div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <Link href="/industries">
                            <Button variant="secondary" className="px-10 py-4 text-lg hover:shadow-xl hover:-translate-y-1">View All Industries</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Impact Section - Dark & Modern */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                {/* Abstract shapes */}
                <div className="absolute top-0 right-0 w-2/3 h-full bg-[#107b9d]/5 skew-x-12 transform origin-top-right"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#e38e26]/10 rounded-full blur-100"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-[#e38e26] font-bold tracking-wider uppercase text-sm mb-4 block">Proven Results</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Creating Value Through<br /><span className="text-[#107b9d]">Data-Driven Optimization</span></h2>
                            <p className="text-gray-300 text-xl mb-12 leading-relaxed">
                                We don't just advise; we deliver measurable financial impact. By implementing our Diagnostic Workplan and Continuous Improvement Programs (CIP), we help clients achieve operational excellence.
                            </p>

                            <div className="space-y-8">
                                {impactMetrics.map((metric, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (idx * 0.1) }}
                                        className="flex items-start gap-5 group"
                                    >
                                        <div className="p-4 bg-white/5 border border-white/10 rounded-xl group-hover:bg-[#e38e26] group-hover:text-white transition-colors duration-300">
                                            <metric.icon className="text-[#e38e26] group-hover:text-white transition-colors" size={28} />
                                        </div>
                                        <div>
                                            <div className="flex items-baseline gap-3">
                                                <span className="text-4xl font-bold text-white">{metric.value}</span>
                                                <span className="text-sm font-bold text-teal-400 uppercase tracking-widest">{metric.label}</span>
                                            </div>
                                            <p className="text-base text-gray-400 mt-1 group-hover:text-gray-300 transition-colors">{metric.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-14">
                                <Link href="/contact">
                                    <Button variant="primary" className="text-lg px-8 py-4">Start Your Diagnostic</Button>
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative lg:h-[600px] flex items-center justify-center"
                        >
                            <div className="relative z-10">
                                <img
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                                    alt="Data Analytics in Mining"
                                    className="rounded-2xl shadow-2xl border-2 border-white/10 hover:scale-[1.02] transition-transform duration-500 max-h-[500px] object-cover"
                                />
                                {/* Floating Card */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="absolute -bottom-10 -left-10 bg-white p-8 rounded-xl shadow-2xl max-w-xs text-gray-900 hidden md:block border-l-4 border-[#e38e26]"
                                >
                                    <p className="font-bold text-xl mb-3 text-[#107b9d]">Diagnostic Workplan</p>
                                    <p className="text-gray-600 leading-relaxed">A collaborative 3-month approach to finalize savings and kickstart implementation.</p>
                                </motion.div>
                            </div>

                            {/* Decorative elements behind image */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-[#107b9d]/20 blur-3xl rounded-full -z-10"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section - Advanced Gradient */}
            <section className="bg-gradient-to-r from-[#107b9d] to-[#0b5c75] py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-cover opacity-10 mix-blend-overlay" style={{ backgroundImage: `url(https://www.transparenttextures.com/patterns/cubes.png)` }}></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-8"
                    >
                        Ready to optimize your operations?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-teal-50 mb-12 text-2xl font-light"
                    >
                        Schedule a consultation with our experts today to discuss your project requirements.
                    </motion.p>
                    <Link href="/contact">
                        <Button variant="primary" className="mx-auto text-xl shadow-2xl px-12 py-5 hover:bg-white hover:text-[#e38e26] transition-colors duration-300">Schedule a Dialogue</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};
