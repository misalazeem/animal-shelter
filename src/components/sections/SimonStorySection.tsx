'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import Link from 'next/link';

export function SimonStorySection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);

    return (
        <section ref={containerRef} className="relative min-h-screen bg-rescue-olive overflow-hidden">
            {/* Full-bleed image side */}
            <div className="absolute inset-0 lg:left-1/2 lg:right-0">
                <motion.div style={{ y: imageY }} className="relative w-full h-full">
                    <Image
                        src="/cats/PXL_20241004_005144370.jpg"
                        alt="Simon - The cat who started it all"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-rescue-olive via-rescue-olive/80 to-transparent lg:via-rescue-olive/60" />
                </motion.div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="lg:w-1/2 min-h-screen flex items-center py-20 md:py-32">
                    <div className="max-w-lg">
                        {/* Label */}
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-timber-gold text-xs md:text-sm font-medium tracking-[0.3em] uppercase block mb-6"
                        >
                            The Origin Story
                        </motion.span>

                        {/* Headline */}
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.05] mb-8"
                        >
                            It Started
                            <br />
                            with <span className="text-timber-gold">Simon</span>
                        </motion.h2>

                        {/* Story */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6 text-white/70 text-lg leading-relaxed mb-10"
                        >
                            <p>
                                Mother's Day, 2018. A wounded orange tabby crossed our path.
                                Tired of the streets, tired of fighting. We named him Simon.
                            </p>
                            <p>
                                He was a "couch surfer," bouncing between homes—yet he showed us
                                that even the most jaded street cat wants love, comfort, and safety.
                            </p>
                        </motion.div>

                        {/* Quote */}
                        <motion.blockquote
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="border-l-2 border-timber-gold pl-6 mb-10"
                        >
                            <p className="text-white text-xl md:text-2xl font-heading italic">
                                "Simon was the leap of faith that started it all."
                            </p>
                        </motion.blockquote>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <Link
                                href="/about#simon"
                                className="group inline-flex items-center gap-3 text-white font-semibold text-sm tracking-wide hover:text-timber-gold transition-colors"
                            >
                                READ SIMON'S FULL STORY
                                <span className="group-hover:translate-x-2 transition-transform">→</span>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
