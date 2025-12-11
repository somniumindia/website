'use client';
import React from 'react';
import { motion as motionOriginal } from 'framer-motion';
import { Cpu, Activity, FlaskConical, BarChart4, Network, ArrowRight } from 'lucide-react';
import { Button } from '../../components/Button';
import Link from 'next/link';

const motion = motionOriginal as any;

export default function AIAutomation() {
    return (
        <div className="bg-slate-900 min-h-screen text-gray-100 font-sans">

            {/* Hero Section */}
            <div className="relative h-[600px] overflow-hidden flex items-center">
                {/* Background Overlay */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40 z-10"></div>
                    <img
                        src="/images/ai-bg.jpeg"
                        alt="AI & Automation"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-teal-500/50 bg-teal-500/10 text-teal-400 text-sm font-mono mb-6">
                            <Cpu size={14} />
                            <span>INDUSTRY 4.0</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
                            Process <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Automation & AI</span>
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
                            Reducing the reliance on physical lab tests through advanced digital simulation. We bridge the gap between physical operations and digital intelligence.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact">
                                <Button variant="secondary" className="bg-teal-600 hover:bg-teal-500 border-none">Deploy Digital Solutions</Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

                {/* Section 1: Simulation vs Lab */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-16 h-16 bg-teal-900/30 rounded-2xl flex items-center justify-center mb-6 border border-teal-500/30">
                            <FlaskConical className="text-teal-400" size={32} />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Virtualizing the Laboratory</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mb-8"></div>

                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            Traditional metallurgical testing is time-consuming, expensive, and reactive. We utilize advanced <strong>Process Simulation</strong> and Digital Twins to predict outcomes without the constant need for physical samples.
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <div className="mt-1 bg-teal-500/10 p-1 rounded">
                                    <Activity className="text-teal-400" size={18} />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Predictive Modelling</h4>
                                    <p className="text-sm text-gray-400 mt-1">Simulate changes in feed grade or operating parameters to predict recovery before they happen.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 bg-teal-500/10 p-1 rounded">
                                    <BarChart4 className="text-teal-400" size={18} />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">Reduced Lab Dependancy</h4>
                                    <p className="text-sm text-gray-400 mt-1">Drastically cut down the turnaround time and cost associated with routine shift samples.</p>
                                </div>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 blur-3xl opacity-20 -z-10 rounded-full"></div>
                        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-2 shadow-2xl">
                            <img
                                src="/images/ai-lab.jpeg"
                                alt="Data Visualization"
                                className="rounded-xl w-full"
                            />
                            <div className="grid grid-cols-2 gap-2 mt-2">
                                <div className="bg-slate-900 p-4 rounded-lg border border-slate-700 text-center">
                                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Testing Time</p>
                                    <p className="text-xl md:text-2xl font-bold text-red-400 line-through decoration-white/30 decoration-1">High Latency</p>
                                    <p className="text-sm text-gray-400">Physical Lab</p>
                                </div>
                                <div className="bg-slate-900 p-4 rounded-lg border border-teal-500/30 text-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-teal-500/5"></div>
                                    <p className="text-xs text-teal-400 uppercase tracking-widest mb-1">Simulation Time</p>
                                    <p className="text-2xl font-bold text-teal-400">Real-time</p>
                                    <p className="text-sm text-gray-400">Digital Twin</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Section 2: Operational Automation */}
                <div className="bg-slate-800/50 rounded-3xl p-8 md:p-12 border border-slate-700 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 text-blue-400 font-semibold mb-4">
                                <Network size={20} />
                                <span>Process Control</span>
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-6">Operational Automation</h2>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Moving beyond basic PLC logic. We implement intelligent control strategies that adapt to ore variability in real-time. By automating critical loops (like grinding circuit load or reagent dosing), we stabilize the process and maximize throughput.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                                    <h4 className="text-white font-bold mb-1">Stabilization</h4>
                                    <p className="text-xs text-gray-400">Minimize variance in product quality.</p>
                                </div>
                                <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                                    <h4 className="text-white font-bold mb-1">Optimization</h4>
                                    <p className="text-xs text-gray-400">Run closer to equipment constraints safely.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col justify-center border-l border-slate-700 pl-0 md:pl-12">
                            <h3 className="text-xl font-bold text-white mb-6">Our Capabilities</h3>
                            <ul className="space-y-4">
                                {[
                                    "Advanced Process Control (APC) Implementation",
                                    "Instrumentation Gap Analysis",
                                    "Soft-Sensor Development",
                                    "Automated Reporting & Dashboards"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                                        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                                            <ArrowRight size={12} className="text-blue-400" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
