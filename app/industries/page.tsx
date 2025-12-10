'use client';
import React from 'react';
import { motion as motionOriginal } from 'framer-motion';
import { Pickaxe, Factory, Truck, Gem, Leaf, Zap } from 'lucide-react';

// Animation variants move to component or outside if static
const motion = motionOriginal as any;

export default function Industries() {
    const industries = [
        {
            name: "Mining & Mineral Processing",
            desc: "Comprehensive support for coal, ferrous, & non ferrous metals operations.",
            icon: Pickaxe,
            color: "bg-stone-100",
            textColor: "text-stone-600",
            image: "https://lh3.google.com/u/0/d/1C-mK_LpW9zkqxRD1BqqfjaveY1v_CKVS=w1227-h892-iv1?auditContext=prefetch"
        },
        {
            name: "Raw Material Handling",
            desc: "Logistics and handling solutions for bulk materials.",
            icon: Truck,
            color: "bg-blue-50",
            textColor: "text-blue-600",
            image: "https://lh3.google.com/u/0/d/1JKtggmL7rudjVRp4iWE6STG30qluFW-i=w1227-h892-iv1?auditContext=prefetch"
        },
        {
            name: "Metallurgy & Smelting",
            desc: "Optimizing pyro and hydro-metallurgical processes for various metal industries.",
            icon: Factory,
            color: "bg-orange-50",
            textColor: "text-[#e38e26]",
            image: "https://lh3.google.com/u/0/d/16OF11UEvkh7djpkKlzfwNL-BZ1ANOsWt=w1227-h892-iv1?auditContext=prefetch"
        },
        {
            name: "Power Plant",
            desc: "Operational efficiency and material handling optimization for thermal and captive power generation facilities.",
            icon: Zap,
            color: "bg-yellow-50",
            textColor: "text-yellow-600",
            image: "https://lh3.google.com/u/0/d/1G9LjUYzmuoQESaQU1sumjX3DE90Nzkvd=w1227-h892-iv1?auditContext=prefetch"
        },
        {
            name: "ESG",
            desc: "Sustainable engineering solutions, tailings management, and environmental compliance strategies.",
            icon: Leaf,
            color: "bg-green-50",
            textColor: "text-green-600",
            image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?fit=crop&w=800&q=80"
        },
        {
            name: "Specialized Commodities",
            desc: "Expertise in high-value, niche sectors including Rare Earth Elements, Heavy Minerals, and Diamonds.",
            icon: Gem,
            color: "bg-teal-50",
            textColor: "text-[#107b9d]",
            image: "https://lh3.google.com/u/0/d/1ZMTyBejBGTNm1Mfhf0L-vnRwseVv5pzO=w1227-h892-iv1?auditContext=prefetch"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gradient-to-b from-slate-50 via-teal-50/60 to-white py-24 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-30"></div>
                <div className="absolute top-10 right-10 w-72 h-72 bg-[#107b9d]/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-52 h-52 bg-[#e38e26]/30 rounded-full blur-3xl"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold mb-6 text-[#107b9d]"
                    >
                        Industries & Materials
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
                        className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Serving mining and metals leaders with specialized expertise across various commodities.
                    </motion.p>
                </div>
            </div>

            {/* Industries Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Sectors Covered</h2>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
                >
                    {industries.map((ind, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="group relative rounded-2xl overflow-hidden shadow-xl h-full flex flex-col"
                        >
                            <div className="h-64 overflow-hidden shrink-0">
                                <img src={ind.image} alt={ind.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/50 transition-colors"></div>
                            </div>

                            <div className="absolute inset-0 flex flex-col pointer-events-none">
                                {/* Overlay content placed absolutely over image for style, but we ensure container sizing with flex */}
                                <div className="mt-auto p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent h-full">
                                    <div className={`w-12 h-12 ${ind.color} rounded-full flex items-center justify-center mb-4 shadow-lg`}>
                                        <ind.icon className={ind.textColor} size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{ind.name}</h3>
                                    <p className="text-gray-200 text-sm leading-relaxed">{ind.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
