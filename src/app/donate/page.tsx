'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
    Heart,
    DollarSign,
    Gift,
    Repeat,
    Shield,
    CreditCard,
    Sparkles,
    Cat
} from 'lucide-react';

const donationAmounts = [10, 25, 50, 100, 250];

const donationOptions = [
    {
        icon: Gift,
        title: 'One-Time Gift',
        description: 'Make an immediate impact with a single donation.',
        color: 'bg-heartbeat-clay',
    },
    {
        icon: Repeat,
        title: 'Monthly Giving',
        description: 'Become a sustaining supporter with recurring donations.',
        color: 'bg-timber-gold',
    },
    {
        icon: Cat,
        title: 'Sponsor a Cat',
        description: 'Cover the care costs for a specific rescue.',
        color: 'bg-rescue-olive',
    },
];

const impactItems = [
    { amount: 10, description: 'Provides one week of food for a foster cat' },
    { amount: 25, description: 'Covers basic vaccinations for one cat' },
    { amount: 50, description: 'Helps with spay/neuter surgery costs' },
    { amount: 100, description: 'Covers a vet checkup and treatment' },
    { amount: 250, description: 'Funds emergency medical care' },
];

export default function DonatePage() {
    const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(50);
    const [customAmount, setCustomAmount] = useState('');
    const [donationType, setDonationType] = useState<'once' | 'monthly'>('once');

    const finalAmount = selectedAmount === 'custom' ? Number(customAmount) || 0 : selectedAmount;

    return (
        <div className="min-h-screen pt-20 md:pt-24 bg-bone-white">
            {/* Hero */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-rescue-olive to-rescue-olive-dark text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 20% 80%, rgba(198, 156, 109, 0.4) 0%, transparent 50%)`,
                    }} />
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
                            className="w-20 h-20 mx-auto mb-6 rounded-full bg-heartbeat-clay flex items-center justify-center"
                        >
                            <Heart className="w-10 h-10 text-white fill-white" />
                        </motion.div>
                        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-timber-gold mb-6">
                            Donate to the Village
                        </h1>
                        <p className="text-xl text-bone-white/90 leading-relaxed">
                            Your generosity keeps our rescue moving forward. Every dollar goes
                            directly to the care, medical treatment, and rehoming of cats in need.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Donation Form */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="lg:col-span-3"
                        >
                            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-bone-white-dark">
                                <h2 className="font-heading text-2xl font-bold text-rescue-olive mb-6">
                                    Choose Your Gift
                                </h2>

                                {/* Donation Type Toggle */}
                                <div className="flex rounded-full bg-bone-white p-1 mb-8">
                                    <button
                                        onClick={() => setDonationType('once')}
                                        className={`flex-1 py-3 px-4 rounded-full font-medium transition-all ${donationType === 'once'
                                                ? 'bg-rescue-olive text-white shadow-lg'
                                                : 'text-rescue-olive hover:bg-rescue-olive/10'
                                            }`}
                                    >
                                        One-Time
                                    </button>
                                    <button
                                        onClick={() => setDonationType('monthly')}
                                        className={`flex-1 py-3 px-4 rounded-full font-medium transition-all ${donationType === 'monthly'
                                                ? 'bg-rescue-olive text-white shadow-lg'
                                                : 'text-rescue-olive hover:bg-rescue-olive/10'
                                            }`}
                                    >
                                        Monthly
                                    </button>
                                </div>

                                {/* Amount Selection */}
                                <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-6">
                                    {donationAmounts.map((amount) => (
                                        <motion.button
                                            key={amount}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setSelectedAmount(amount)}
                                            className={`py-4 rounded-xl font-bold text-lg transition-all ${selectedAmount === amount
                                                    ? 'bg-heartbeat-clay text-white shadow-lg'
                                                    : 'bg-bone-white text-rescue-olive hover:bg-heartbeat-clay/10'
                                                }`}
                                        >
                                            ${amount}
                                        </motion.button>
                                    ))}
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setSelectedAmount('custom')}
                                        className={`py-4 rounded-xl font-bold transition-all col-span-3 md:col-span-5 ${selectedAmount === 'custom'
                                                ? 'bg-heartbeat-clay text-white shadow-lg'
                                                : 'bg-bone-white text-rescue-olive hover:bg-heartbeat-clay/10'
                                            }`}
                                    >
                                        Custom Amount
                                    </motion.button>
                                </div>

                                {/* Custom Amount Input */}
                                {selectedAmount === 'custom' && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        className="mb-6"
                                    >
                                        <div className="relative">
                                            <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-rescue-olive-light" />
                                            <input
                                                type="number"
                                                value={customAmount}
                                                onChange={(e) => setCustomAmount(e.target.value)}
                                                placeholder="Enter amount"
                                                className="input pl-12 text-xl font-bold"
                                            />
                                        </div>
                                    </motion.div>
                                )}

                                {/* Donation Button */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={finalAmount <= 0}
                                    className="w-full btn btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <CreditCard className="w-5 h-5" />
                                    Donate ${finalAmount} {donationType === 'monthly' ? '/month' : ''}
                                </motion.button>

                                {/* Security Note */}
                                <div className="flex items-center justify-center gap-2 mt-4 text-sm text-rescue-olive-light">
                                    <Shield className="w-4 h-4" />
                                    <span>Secure, encrypted donation</span>
                                </div>

                                {/* Payment Options */}
                                <div className="mt-6 pt-6 border-t border-bone-white-dark">
                                    <p className="text-sm text-rescue-olive-light text-center">
                                        We accept all major credit cards, PayPal, and e-transfer
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Impact Sidebar */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="lg:col-span-2"
                        >
                            <div className="bg-timber-gold/10 rounded-3xl p-6 md:p-8 border border-timber-gold/20">
                                <h3 className="font-heading text-xl font-bold text-rescue-olive mb-6 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-timber-gold" />
                                    Your Impact
                                </h3>

                                <div className="space-y-4">
                                    {impactItems.map((item) => (
                                        <div
                                            key={item.amount}
                                            className={`p-4 rounded-xl transition-all ${finalAmount >= item.amount
                                                    ? 'bg-white shadow-md border-2 border-timber-gold'
                                                    : 'bg-white/50 border border-transparent'
                                                }`}
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${finalAmount >= item.amount ? 'bg-timber-gold text-white' : 'bg-bone-white text-rescue-olive-light'
                                                    }`}>
                                                    {finalAmount >= item.amount ? '✓' : '$'}
                                                </div>
                                                <div>
                                                    <p className={`font-semibold ${finalAmount >= item.amount ? 'text-rescue-olive' : 'text-rescue-olive-light'
                                                        }`}>
                                                        ${item.amount}
                                                    </p>
                                                    <p className={`text-sm ${finalAmount >= item.amount ? 'text-rescue-olive/80' : 'text-rescue-olive-light'
                                                        }`}>
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Quote */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="mt-6 p-6 bg-rescue-olive rounded-2xl text-white"
                            >
                                <blockquote className="italic text-bone-white/90 mb-3">
                                    &ldquo;Rescue is about community, teamwork and the village that is
                                    built around the animals.&rdquo;
                                </blockquote>
                                <p className="text-timber-gold font-medium text-sm">— Hailey Kartash</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Ways to Give */}
            <section id="sponsor" className="py-16 bg-cream">
                <div className="container mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-rescue-olive mb-4">
                            Other Ways to Give
                        </h2>
                        <p className="text-rescue-olive/70 max-w-xl mx-auto">
                            Can&apos;t donate right now? There are many ways to support our mission.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {donationOptions.map((option, index) => (
                            <motion.div
                                key={option.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-2xl p-6 shadow-lg border border-bone-white-dark text-center"
                            >
                                <div className={`w-14 h-14 mx-auto rounded-xl ${option.color} flex items-center justify-center mb-4`}>
                                    <option.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="font-heading text-lg font-bold text-rescue-olive mb-2">
                                    {option.title}
                                </h3>
                                <p className="text-rescue-olive/70 text-sm">{option.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Wishlist */}
            <section id="wishlist" className="py-16">
                <div className="container mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h2 className="font-heading text-3xl font-bold text-rescue-olive mb-4">
                            🎁 Wishlist Items
                        </h2>
                        <p className="text-rescue-olive/70 mb-8">
                            We always need supplies for our foster cats. Consider donating:
                        </p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {[
                                'Cat Food (Wet & Dry)',
                                'Litter',
                                'Cat Carriers',
                                'Blankets',
                                'Cat Toys',
                                'Scratching Posts',
                                'Grooming Supplies',
                                'Veterinary Gift Cards',
                            ].map((item) => (
                                <span
                                    key={item}
                                    className="px-4 py-2 bg-bone-white rounded-full text-rescue-olive font-medium"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
