'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function SimonStorySection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

    return (
        <section id="origin" ref={containerRef} className="relative py-28 md:py-40 bg-rescue-olive text-cream overflow-hidden">
            {/* Subtle texture overlay */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
                backgroundImage: `radial-gradient(circle at 30% 20%, rgba(217,119,6,0.4), transparent 60%)`,
            }} />

            <div className="container mx-auto relative z-10">
                {/* Chapter mark */}
                <div className="chapter-mark mb-12 md:mb-16" style={{ color: 'var(--timber-gold-light)' }}>
                    <span className="chapter-mark__num" style={{ color: 'var(--timber-gold)' }}>04</span>
                    <span>The Origin</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Portrait image */}
                    <div className="lg:col-span-5 lg:sticky lg:top-28">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                            <motion.div style={{ y: imageY }} className="absolute inset-0">
                                <Image
                                    src="/cats/PXL_20241004_005144370.jpg"
                                    alt="Simon — the first Random Rescue"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 42vw"
                                />
                            </motion.div>
                            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />

                            {/* Caption plate */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-cream/60 mb-1">
                                    Founding rescue · 2018
                                </div>
                                <div className="font-display text-3xl text-cream">Simon</div>
                            </div>
                        </div>

                        {/* Byline */}
                        <div className="mt-4 flex items-center justify-between font-mono text-[10px] tracking-[0.2em] uppercase text-cream/50">
                            <span>Photographed in foster</span>
                            <span>Mother&apos;s Day, 2018</span>
                        </div>
                    </div>

                    {/* Story column */}
                    <div className="lg:col-span-7">
                        <h2 className="font-display text-[clamp(2.5rem,5.5vw,5rem)] leading-[0.98] tracking-[-0.02em] text-cream mb-10">
                            It started
                            <br />
                            with a wounded
                            <br />
                            <span className="text-timber-gold-light">orange tabby.</span>
                        </h2>

                        <div className="space-y-6 text-lg leading-[1.75] text-cream max-w-[58ch]">
                            <p className="drop-cap-light">
                                Mother&apos;s Day, 2018. A bleeding cat on a fence caught our eye.
                                He hissed, ran, and disappeared. Two weeks later he reappeared
                                under our car — too tired to fight anymore. We named him Simon.
                            </p>
                            <p>
                                His rescue was a rollercoaster: vet bills, foster hopping,
                                behavioral hurdles. But he showed us that even the most jaded
                                street cat wants love. He couch-surfed between homes, landing
                                wherever he could, as long as it wasn&apos;t the streets.
                            </p>
                        </div>

                        {/* Pull quote */}
                        <blockquote
                            className="mt-14 mb-10 pl-8 border-l-[3px]"
                            style={{ borderLeftColor: 'var(--timber-gold-light)' }}
                        >
                            <p className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.15] text-cream">
                                &ldquo;Simon was the leap of faith
                                <br />
                                <span className="text-timber-gold-light">that started it all.&rdquo;</span>
                            </p>
                            <footer className="font-mono text-[10px] tracking-[0.2em] uppercase text-cream/60 mt-5">
                                — Hailey Kartash, Founder
                            </footer>
                        </blockquote>

                        <Link
                            href="/about#simon"
                            className="group inline-flex items-center gap-3 mt-6 font-mono text-[11px] tracking-[0.18em] uppercase text-cream hover:text-timber-gold-light transition-colors"
                        >
                            <span>Read the full story</span>
                            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
