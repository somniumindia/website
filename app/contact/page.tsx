'use client';
import React, { useState } from 'react';
import { Mail, MapPin, Loader2, Send } from 'lucide-react';
import { Button } from '../../components/Button';

export default function Contact() {
    const [formState, setFormState] = useState({ name: '', company: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formspree.io/f/mwpgrbee", {
                method: "POST",
                body: JSON.stringify(formState),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                setFormState({ name: '', company: '', email: '', message: '' });
                alert("Thank you for your inquiry. We will contact you shortly.");
            } else {
                const data = await response.json().catch(() => ({}));
                if (data.error || data.errors) {
                    console.error("Submission error:", data);
                }
                alert("Oops! There was a problem submitting your form. Please try again.");
            }
        } catch (error) {
            console.error("Network error:", error);
            alert("Oops! There was a network problem. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen pt-10 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
                    <p className="text-gray-600 text-lg">Ready to optimize your operations? Schedule a consultation today.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Info */}
                    <div className="lg:col-span-1 bg-[#107b9d] text-white rounded-xl p-10 shadow-lg h-fit">
                        <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-lg">
                                    <MapPin className="text-[#e38e26]" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">Our Location</h4>
                                    <p className="text-teal-100 mt-2 text-sm leading-relaxed">
                                        32 A, Block C, New Azad Nagar,<br />
                                        Kalyanpur, Kanpur 208017<br />
                                        India
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-lg">
                                    <Mail className="text-[#e38e26]" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg">Email Us</h4>
                                    <p className="text-teal-100 mt-2">connect@somniumindia.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#107b9d] focus:border-transparent outline-none transition-all"
                                        placeholder="John Doe"
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formState.company}
                                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#107b9d] focus:border-transparent outline-none transition-all"
                                        placeholder="Your Company Ltd."
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Work Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#107b9d] focus:border-transparent outline-none transition-all"
                                    placeholder="john@company.com"
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#107b9d] focus:border-transparent outline-none transition-all"
                                    placeholder="Tell us about your project needs, e.g., 'Optimization of Coal Washery'..."
                                    disabled={isSubmitting}
                                ></textarea>
                            </div>

                            <div className="pt-4">
                                <Button
                                    type="submit"
                                    variant="primary"
                                    className="w-full md:w-auto px-10 py-3 text-lg"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="animate-spin" size={20} />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Inquiry
                                        </>
                                    )}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
