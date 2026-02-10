'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, Home, Users } from 'lucide-react';

export function VillageSection() {
    const actions = [
        {
            icon: Heart,
            title: 'DONATE',
            desc: 'Cover medical bills for the next Simon',
            href: '/donate',
        },
        {
            icon: Home,
            title: 'FOSTER',
            desc: 'Give a couch-surfer a place to rest',
            href: '/foster',
        },
        {
            icon: Users,
            title: 'VOLUNTEER',
            desc: 'Drive, transport, and support',
            href: '/foster#volunteer',
        },
    ];

    return (
        <section className="py-24 md:py-32 bg-bone-white relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-timber-gold text-xs md:text-sm font-medium tracking-[0.3em] uppercase block mb-6"
                    >
                        Join The Village
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-rescue-olive mb-6"
                    >
                        Rescue takes a village
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-rescue-olive/60 text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        We don't have deep pockets. We have you. Foster parents, volunteer drivers,
                        donors—you are why we can say "yes" to the next wounded cat.
                    </motion.p>
                </div>

                {/* Action Cards - Minimal */}
                <div className="grid md:grid-cols-3 gap-px bg-rescue-olive/10 max-w-4xl mx-auto mb-16">
                    {actions.map((action, index) => (
                        <motion.div
                            key={action.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className="h-full"
                        >
                            <Link
                                href={action.href}
                                className="flex flex-col items-center justify-center h-full min-h-[200px] bg-white p-8 md:p-10 text-center group border-2 border-transparent hover:border-timber-gold transition-all duration-300"
                            >
                                <action.icon className="w-8 h-8 mb-4 text-rescue-olive group-hover:text-timber-gold transition-colors" />
                                <h3 className="text-lg font-bold tracking-wide text-rescue-olive group-hover:text-timber-gold transition-colors mb-2">
                                    {action.title}
                                </h3>
                                <p className="text-rescue-olive/60 text-sm">
                                    {action.desc}
                                </p>
                                <span className="mt-4 text-timber-gold opacity-0 group-hover:opacity-100 transition-opacity">
                                    →
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Main CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center"
                >
                    <Link
                        href="/donate"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-rescue-olive text-white font-semibold text-sm tracking-wide hover:bg-heartbeat-clay transition-colors duration-300"
                    >
                        <Heart className="w-5 h-5" />
                        SUPPORT OUR MISSION
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
