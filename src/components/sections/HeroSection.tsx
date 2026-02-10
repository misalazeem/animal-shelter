'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { ArrowDown, Heart } from 'lucide-react';

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
            {/* Full-bleed Hero Image with Parallax */}
            <motion.div
                style={{ y, scale }}
                className="absolute inset-0"
            >
                <Image
                    src="/cats/IMG-20240912-WA0006.jpg"
                    alt="Sully - A rescued orange tabby"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
                {/* Dramatic gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
                {/* Top gradient for nav readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent" />
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-32"
            >
                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-4xl">
                        {/* Subtle label */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="mb-6"
                        >
                            <span className="text-timber-gold text-sm md:text-base font-medium tracking-[0.2em] uppercase">
                                Foster-Based Cat Rescue
                            </span>
                        </motion.div>

                        {/* Main headline - MASSIVE */}
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-[0.95] mb-8"
                        >
                            Unexpected
                            <br />
                            <span className="text-timber-gold">Rescues.</span>
                        </motion.h1>

                        {/* Subtext */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.8 }}
                            className="text-white/70 text-lg md:text-xl max-w-xl leading-relaxed mb-10"
                        >
                            Where every overlooked cat finds compassion.
                            Seniors, medical cases, the ones others pass by—we see them.
                        </motion.p>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1, duration: 0.8 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link
                                href="/animals"
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold text-sm tracking-wide hover:bg-timber-gold transition-all duration-300"
                            >
                                MEET OUR CATS
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                            <Link
                                href="/donate"
                                className="inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white font-semibold text-sm tracking-wide hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                            >
                                <Heart className="w-4 h-4" />
                                SUPPORT THE MISSION
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="flex flex-col items-center gap-2 text-white/40"
                    >
                        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
                        <ArrowDown className="w-4 h-4" />
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Stats bar at bottom */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.8 }}
                className="absolute bottom-0 left-0 right-0 z-20"
            >
                <div className="bg-black/80 backdrop-blur-md border-t border-white/10">
                    <div className="container mx-auto px-6 md:px-12">
                        <div className="grid grid-cols-3 divide-x divide-white/10">
                            {[
                                { num: '200+', label: 'CATS RESCUED' },
                                { num: '2018', label: 'FOUNDED' },
                                { num: '50+', label: 'FOSTER HOMES' },
                            ].map((stat) => (
                                <div key={stat.label} className="py-5 md:py-6 text-center">
                                    <div className="text-white text-2xl md:text-3xl font-bold">{stat.num}</div>
                                    <div className="text-white/40 text-[10px] md:text-xs tracking-[0.15em] mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
