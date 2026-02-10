'use client';

import { motion } from 'framer-motion';

export function MissionSection() {
    return (
        <section className="py-20 md:py-28 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Label */}
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-timber-gold text-xs md:text-sm font-medium tracking-[0.3em] uppercase block mb-8"
                    >
                        Our Mission
                    </motion.span>

                    {/* Mission Statement - Big and bold */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-rescue-olive leading-[1.2]"
                    >
                        A safe haven for the overlooked.
                        <br />
                        <span className="text-rescue-olive/50">Seniors. Medical cases. The forgotten.</span>
                    </motion.p>

                    {/* Divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="w-16 h-0.5 bg-timber-gold mx-auto mt-10"
                    />
                </div>
            </div>
        </section>
    );
}
