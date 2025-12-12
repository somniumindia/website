'use client';
import React, { useState } from 'react';
import { motion as motionOriginal } from 'framer-motion';
import { Target, ShieldCheck, Award, Briefcase } from 'lucide-react';
import { TeamMember } from '../types';

const motion = motionOriginal as any;

// Helper component for Team Member to handle image state locally
const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
    const [imgError, setImgError] = useState(false);

    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map(n => n[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 group">
            <div className="relative h-80 overflow-hidden bg-slate-200">
                {!imgError ? (
                    <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-300 text-slate-500">
                        <span className="text-6xl font-bold tracking-widest opacity-50">{getInitials(member.name)}</span>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#107b9d]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-[#e38e26] font-semibold mb-4 flex items-center gap-2">
                    <Briefcase size={16} /> {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
            </div>
        </div>
    );
};

export default function About() {
    const team: TeamMember[] = [
        {
            id: '1',
            name: 'Abhishek Shukla',
            role: 'Director',
            bio: 'IIT Graduate with 20+ years of experience in the mineral processing industry, covering plant operations, process design, and equipment selection for coal and iron ore. Successfully established and scaled two multinational companies in India. Proven ability to blend technical expertise with strategic business leadership.',
            imageUrl: "/images/abhishek-shukla.png"
        },
        {
            id: '2',
            name: 'Priyank Gupta',
            role: 'Head Consulting',
            bio: 'IIT Graduate & MS (USA). 20+ years of industrial and management consulting experience including sales, strategy, procurement, operations. Worked with firms like McKinsey & Company, Bain & Company, Sandvik Asia, Metso minerals and Tata Steel. Expert in driving market growth and operational efficiency.',
            imageUrl: "/images/priyank-gupta.jpg"
        },
        {
            id: '3',
            name: 'Ankur Kumar',
            role: 'Head, Process Solutions & Market Development',
            bio: 'IIT Graduate with 15+ years of experience in coal and mineral beneficiation. Led 20+ major beneficiation projects across India. Proficient in Heavy Media Cyclones, Ball mill, Jigs, Spirals, Flotation, Screening, Crushing, and plant process integration. Expert in process calculations, yield estimation, material balances, and techno-commercial support.',
            imageUrl: "/images/ankur-kumar.jpg"
        }
    ];

    return (
        <div className="bg-white">
            {/* Header */}
            <div className="bg-gradient-to-br from-slate-50 via-teal-50/60 to-slate-100 py-24 relative overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#107b9d]/25 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#e38e26]/25 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.2]"></div>

                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold mb-6 text-[#107b9d]"
                    >
                        About Somnium
                    </motion.h1>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 96 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="h-1.5 bg-[#e38e26] mx-auto mb-8 rounded-full shadow-sm"
                    ></motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed"
                    >
                        We prioritize innovation, sustainability, and excellence to deliver tailored solutions that optimize operations while championing environmental stewardship.
                    </motion.p>
                </div>
            </div>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 20 }}
                            className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#107b9d]"
                        >
                            <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mb-6">
                                <Target className="text-[#107b9d]" size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-900">Our Mission</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                We enable our clients to enhance mineral processing and raw material handling for efficiency, environmental stewardship, and enduring prosperity. We deliver tailored, comprehensive solutions ensuring operations remain sustainable while maximizing overall effectiveness.
                            </p>
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 20 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#e38e26]"
                        >
                            <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mb-6">
                                <ShieldCheck className="text-[#e38e26]" size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-900">Our Vision</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                To revolutionize the mining sector through innovative, sustainable engineering solutions. Aspiring to be the foremost global authority in mineral beneficiation, we aim to catalyze meaningful transformation and foster a future characterized by responsible resource stewardship.
                            </p>
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 20 }}
                            transition={{ delay: 0.4 }}
                            className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#107b9d]"
                        >
                            <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mb-6">
                                <Award className="text-[#107b9d]" size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-900">Our Expertise</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Our team comprises experienced engineers and industry experts dedicated to delivering superior engineering solutions. We stay at the forefront of technological advancements to provide innovative and sustainable solutions.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-[#107b9d] font-bold tracking-wider uppercase text-sm">Who We Are</span>
                        <h2 className="text-3xl font-bold mt-2 mb-4 text-gray-900">Expert Leadership Team</h2>
                        <div className="w-20 h-1 bg-[#e38e26] mx-auto rounded-full"></div>
                        <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                            We have put together a team with deep expertise, informing our offerings through multiple stakeholder conversations.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {team.map((member) => (
                            <TeamMemberCard key={member.id} member={member} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
