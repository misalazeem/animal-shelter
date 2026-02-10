'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function PhilosophySection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ['50px', '-50px']);

    return (
        <section ref={containerRef} className="relative py-32 md:py-48 bg-black overflow-hidden">
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '60px 60px'
            }} />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Section label */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16 md:mb-24"
                    >
                        <span className="text-timber-gold text-xs md:text-sm font-medium tracking-[0.3em] uppercase">
                            Our Philosophy
                        </span>
                    </motion.div>

                    {/* The big quote */}
                    <motion.div
                        style={{ y }}
                        className="text-center mb-16 md:mb-24"
                    >
                        <motion.blockquote
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="relative"
                        >
                            {/* Quote marks */}
                            <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-timber-gold/20 text-[120px] md:text-[180px] font-serif leading-none select-none">
                                "
                            </span>

                            <p className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-8">
                                If we can help,
                                <br />
                                <span className="text-timber-gold">we will.</span>
                            </p>

                            <footer className="text-white/40 text-sm tracking-[0.2em] uppercase">
                                — Founding Principle, 2018
                            </footer>
                        </motion.blockquote>
                    </motion.div>

                    {/* Story snippet */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl mx-auto text-center mb-20"
                    >
                        <p className="text-white/60 text-lg md:text-xl leading-relaxed">
                            We didn't plan to be a rescue. But after Simon appeared wounded on
                            Mother's Day 2018, the calls kept coming. A random cat here, a stray there.
                            Now it's our mission.
                        </p>
                    </motion.div>

                    {/* What we do - minimal grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10"
                    >
                        {[
                            { title: 'TNR', desc: 'Trap, Neuter, Return' },
                            { title: 'FOSTER', desc: 'Temporary loving homes' },
                            { title: 'MEDICAL', desc: 'Care for the sick' },
                            { title: 'ADOPT', desc: 'Forever families' },
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                                className="bg-black p-8 md:p-10 text-center group hover:bg-white/5 transition-colors duration-500"
                            >
                                <h3 className="text-white text-lg md:text-xl font-bold tracking-wide mb-2 group-hover:text-timber-gold transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-white/40 text-xs md:text-sm">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
