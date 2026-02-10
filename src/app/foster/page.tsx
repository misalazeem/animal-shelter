'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
    Heart,
    Home,
    Clock,
    Shield,
    CheckCircle,
    Users,
    Car,
    ClipboardList
} from 'lucide-react';

const fosterBenefits = [
    {
        icon: Heart,
        title: 'Save Lives',
        description: 'Every foster home opened means another life saved from the streets.',
    },
    {
        icon: Shield,
        title: 'We Cover Costs',
        description: 'Medical care, food, litter, and supplies are all provided.',
    },
    {
        icon: Clock,
        title: 'Flexible Commitment',
        description: 'Foster for as long or short as works for your schedule.',
    },
    {
        icon: Users,
        title: 'Full Support',
        description: 'Our team is always available for questions and guidance.',
    },
];

const volunteerRoles = [
    {
        icon: Home,
        title: 'Foster Parent',
        description: 'Open your home to a cat in need while they await adoption.',
        commitment: 'Varies',
    },
    {
        icon: Car,
        title: 'Transport Volunteer',
        description: 'Help transport cats to vet appointments and adoption events.',
        commitment: '2-4 hours/week',
    },
    {
        icon: ClipboardList,
        title: 'Administrative',
        description: 'Help with social media, applications, and coordination.',
        commitment: '3-5 hours/week',
    },
];

export default function FosterPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        housingType: '',
        hasOtherPets: '',
        otherPetsDetails: '',
        experience: '',
        availability: '',
        preferredType: '',
        specialNeedsOk: false,
        additionalInfo: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        alert('Thank you for your interest in fostering! We will contact you soon.');
    };

    return (
        <div className="min-h-screen pt-20 md:pt-24 bg-bone-white">
            {/* Hero */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-timber-gold/20 to-cream relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-heartbeat-clay/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-rescue-olive/10 rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', delay: 0.2 }}
                            className="w-20 h-20 mx-auto mb-6 rounded-full bg-rescue-olive flex items-center justify-center"
                        >
                            <Home className="w-10 h-10 text-white" />
                        </motion.div>
                        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-rescue-olive mb-6">
                            Become a <span className="gradient-text">Foster Parent</span>
                        </h1>
                        <p className="text-xl text-rescue-olive/80 leading-relaxed">
                            Give a couch-surfer a place to rest. Foster homes are the heart of
                            our rescue—without you, we cannot save lives.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {fosterBenefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-lg border border-bone-white-dark text-center"
                            >
                                <div className="w-14 h-14 mx-auto rounded-full bg-timber-gold/10 flex items-center justify-center mb-4">
                                    <benefit.icon className="w-7 h-7 text-timber-gold" />
                                </div>
                                <h3 className="font-heading text-lg font-bold text-rescue-olive mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-rescue-olive/70 text-sm">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 bg-cream">
                <div className="container mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-rescue-olive mb-4">
                            How Fostering Works
                        </h2>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-4 gap-6">
                            {[
                                { step: '1', title: 'Apply', desc: 'Fill out the foster application form' },
                                { step: '2', title: 'Connect', desc: 'We\'ll reach out to discuss your home' },
                                { step: '3', title: 'Match', desc: 'We\'ll find the perfect cat for you' },
                                { step: '4', title: 'Foster!', desc: 'Welcome your new furry friend home' },
                            ].map((item, index) => (
                                <motion.div
                                    key={item.step}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="w-12 h-12 mx-auto rounded-full bg-heartbeat-clay text-white font-bold text-xl flex items-center justify-center mb-4">
                                        {item.step}
                                    </div>
                                    <h3 className="font-heading font-bold text-rescue-olive mb-1">{item.title}</h3>
                                    <p className="text-sm text-rescue-olive/70">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section className="py-16">
                <div className="container mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        id="apply"
                        className="max-w-3xl mx-auto"
                    >
                        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-bone-white-dark">
                            <h2 className="font-heading text-2xl md:text-3xl font-bold text-rescue-olive mb-2 text-center">
                                Foster Application
                            </h2>
                            <p className="text-rescue-olive/70 text-center mb-8">
                                Tell us about yourself and your home. We&apos;ll be in touch soon!
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Personal Info */}
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-rescue-olive mb-2">
                                            Full Name *
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
                                            Email *
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
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-rescue-olive mb-2">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="input"
                                            placeholder="(555) 123-4567"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-rescue-olive mb-2">
                                            Housing Type *
                                        </label>
                                        <select
                                            required
                                            value={formData.housingType}
                                            onChange={(e) => setFormData({ ...formData, housingType: e.target.value })}
                                            className="input"
                                        >
                                            <option value="">Select...</option>
                                            <option value="house">House</option>
                                            <option value="apartment">Apartment</option>
                                            <option value="condo">Condo</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-rescue-olive mb-2">
                                        Address *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.address}
                                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                        className="input"
                                        placeholder="Your full address"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-rescue-olive mb-2">
                                        Do you have other pets?
                                    </label>
                                    <select
                                        value={formData.hasOtherPets}
                                        onChange={(e) => setFormData({ ...formData, hasOtherPets: e.target.value })}
                                        className="input"
                                    >
                                        <option value="">Select...</option>
                                        <option value="no">No pets</option>
                                        <option value="cats">Cats only</option>
                                        <option value="dogs">Dogs only</option>
                                        <option value="both">Both cats and dogs</option>
                                        <option value="other">Other pets</option>
                                    </select>
                                </div>

                                {formData.hasOtherPets && formData.hasOtherPets !== 'no' && (
                                    <div>
                                        <label className="block text-sm font-medium text-rescue-olive mb-2">
                                            Tell us about your current pets
                                        </label>
                                        <textarea
                                            value={formData.otherPetsDetails}
                                            onChange={(e) => setFormData({ ...formData, otherPetsDetails: e.target.value })}
                                            className="input min-h-[100px]"
                                            placeholder="Describe your pets (species, age, temperament)"
                                        />
                                    </div>
                                )}

                                <div>
                                    <label className="block text-sm font-medium text-rescue-olive mb-2">
                                        Previous experience with cats?
                                    </label>
                                    <textarea
                                        value={formData.experience}
                                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                                        className="input min-h-[100px]"
                                        placeholder="Tell us about your experience with cats"
                                    />
                                </div>

                                <div className="flex items-start gap-3">
                                    <input
                                        type="checkbox"
                                        id="specialNeeds"
                                        checked={formData.specialNeedsOk}
                                        onChange={(e) => setFormData({ ...formData, specialNeedsOk: e.target.checked })}
                                        className="mt-1 w-5 h-5 rounded border-bone-white-dark text-rescue-olive focus:ring-rescue-olive"
                                    />
                                    <label htmlFor="specialNeeds" className="text-sm text-rescue-olive/80">
                                        I&apos;m open to fostering cats with medical or special needs
                                    </label>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-rescue-olive mb-2">
                                        Anything else you&apos;d like us to know?
                                    </label>
                                    <textarea
                                        value={formData.additionalInfo}
                                        onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                                        className="input min-h-[100px]"
                                        placeholder="Any additional information"
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full btn btn-primary py-4 text-lg"
                                >
                                    <Heart className="w-5 h-5" />
                                    Submit Application
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Volunteer Section */}
            <section id="volunteer" className="py-16 bg-rescue-olive">
                <div className="container mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-timber-gold mb-4">
                            Other Ways to Volunteer
                        </h2>
                        <p className="text-bone-white/80 max-w-xl mx-auto">
                            Can&apos;t foster? There are many other ways to help!
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {volunteerRoles.map((role, index) => (
                            <motion.div
                                key={role.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
                            >
                                <div className="w-14 h-14 mx-auto rounded-full bg-timber-gold flex items-center justify-center mb-4">
                                    <role.icon className="w-7 h-7 text-forest-shadow" />
                                </div>
                                <h3 className="font-heading text-lg font-bold text-timber-gold mb-2">
                                    {role.title}
                                </h3>
                                <p className="text-bone-white/80 text-sm mb-3">{role.description}</p>
                                <span className="inline-block px-3 py-1 bg-bone-white/10 rounded-full text-xs text-bone-white/70">
                                    {role.commitment}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
