'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
    };

    return (
        <div className="min-h-screen pt-20 md:pt-24 bg-bone-white">
            {/* Hero */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-cream to-bone-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-timber-gold/10 rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h1 className="font-heading text-4xl md:text-5xl font-bold text-rescue-olive mb-6">
                            Get in Touch
                        </h1>
                        <p className="text-xl text-rescue-olive/80">
                            Have questions about adoption, fostering, or how to help?
                            We&apos;d love to hear from you!
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-16">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="font-heading text-2xl font-bold text-rescue-olive mb-6">
                                    Contact Information
                                </h2>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-timber-gold/10 flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-5 h-5 text-timber-gold" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-rescue-olive">Email</h3>
                                            <a href="mailto:info@randomrescuer.org" className="text-rescue-olive/70 hover:text-heartbeat-clay transition-colors">
                                                info@randomrescuer.org
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-timber-gold/10 flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-5 h-5 text-timber-gold" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-rescue-olive">Phone</h3>
                                            <a href="tel:+15551234567" className="text-rescue-olive/70 hover:text-heartbeat-clay transition-colors">
                                                (555) 123-4567
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-timber-gold/10 flex items-center justify-center flex-shrink-0">
                                            <Clock className="w-5 h-5 text-timber-gold" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-rescue-olive">Response Time</h3>
                                            <p className="text-rescue-olive/70">
                                                We typically respond within 24-48 hours
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-timber-gold/10 flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-5 h-5 text-timber-gold" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-rescue-olive">Location</h3>
                                            <p className="text-rescue-olive/70">
                                                Foster-based rescue serving our local community
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* FAQ Section */}
                            <div className="bg-rescue-olive/5 rounded-2xl p-6">
                                <h3 className="font-heading text-lg font-bold text-rescue-olive mb-4">
                                    Quick Answers
                                </h3>
                                <div className="space-y-3">
                                    {[
                                        { q: 'How do I adopt?', a: 'Fill out an adoption application from any cat\'s profile page.' },
                                        { q: 'Do you have a shelter?', a: 'We are 100% foster-based. All cats live in homes.' },
                                        { q: 'What are your adoption fees?', a: 'Fees range from $75-$200 depending on the cat.' },
                                    ].map((item) => (
                                        <div key={item.q}>
                                            <p className="font-semibold text-rescue-olive text-sm">{item.q}</p>
                                            <p className="text-rescue-olive/70 text-sm">{item.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-bone-white-dark">
                                <h2 className="font-heading text-2xl font-bold text-rescue-olive mb-6">
                                    Send a Message
                                </h2>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label className="block text-sm font-medium text-rescue-olive mb-2">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="input"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-rescue-olive mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="input"
                                            placeholder="you@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-rescue-olive mb-2">
                                            Subject *
                                        </label>
                                        <select
                                            required
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            className="input"
                                        >
                                            <option value="">Select a topic...</option>
                                            <option value="adoption">Adoption Inquiry</option>
                                            <option value="fostering">Fostering Questions</option>
                                            <option value="volunteering">Volunteering</option>
                                            <option value="donation">Donation Questions</option>
                                            <option value="lost-cat">Lost/Found Cat</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-rescue-olive mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            required
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="input min-h-[150px]"
                                            placeholder="How can we help you?"
                                        />
                                    </div>

                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full btn btn-primary py-4"
                                    >
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </motion.button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
