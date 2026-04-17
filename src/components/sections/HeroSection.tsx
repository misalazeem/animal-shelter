'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { donateUrl } from '@/lib/links';

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
    const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

    return (
        <section
            ref={containerRef}
            className="relative w-full bg-cream overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24"
        >
            {/* Masthead strip */}
            <div className="container mx-auto mb-12 md:mb-16">
                <div className="flex items-center justify-between gap-4 text-ink-muted pb-5 border-b border-paper-border">
                    <span className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase">
                        Vol. VII · Est. 2018
                    </span>
                    <span className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase hidden sm:block">
                        Toronto, ON · Canada
                    </span>
                    <span className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase">
                        Foster-Based
                    </span>
                </div>
            </div>

            {/* Main grid: text + image */}
            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Text column */}
                    <div className="lg:col-span-7 flex flex-col ">
                        {/* Chapter mark */}
                        <div className="chapter-mark mb-8 md:mb-10">
                            <span className="chapter-mark__num">01</span>
                            <span>The Cover Story</span>
                        </div>

                        {/* Display headline — sized to avoid overflow */}
                        <h1 className="font-display text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.94] tracking-[-0.02em] text-ink mb-8">
                            Unexpected
                            <br />
                            <span className="text-heartbeat-clay">rescues.</span>
                            <br />
                            <span className="text-ink-soft">Unconditional love.</span>
                        </h1>

                        {/* Lead paragraph */}
                        <p className="text-base md:text-lg text-ink-soft leading-[1.7] max-w-[52ch] mb-9">
                            A foster home-based cat rescue born from a single wounded tabby named Simon.
                            We care for seniors, medical cases, and the overlooked adults the streets left behind.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-3 mb-10">
                            <Link
                                href="/animals"
                                className="group inline-flex items-center gap-2 px-7 py-4 bg-ink text-cream font-mono text-[10px] md:text-[11px] tracking-[0.18em] uppercase rounded-full hover:bg-heartbeat-clay transition-all duration-300"
                            >
                                Meet our cats
                                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                            </Link>
                            <a
                                href={donateUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 px-7 py-4 bg-transparent text-ink font-mono text-[10px] md:text-[11px] tracking-[0.18em] uppercase border border-ink/30 rounded-full hover:bg-heartbeat-clay hover:text-cream hover:border-heartbeat-clay transition-[background-color,border-color,color] duration-300"
                            >
                                Support the mission
                                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                            </a>
                        </div>

                        {/* Stats strip */}
                        <div className="grid grid-cols-3 gap-4 max-w-lg border-t border-paper-border pt-6">
                            {[
                                { num: '200+', label: 'Rescued' },
                                { num: '2018', label: 'Founded' },
                                { num: '50+', label: 'Fosters' },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <div className="font-display text-3xl md:text-4xl text-ink leading-none">
                                        {stat.num}
                                    </div>
                                    <div className="font-mono text-[9px] md:text-[10px] tracking-[0.18em] uppercase text-ink-muted mt-2">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image column */}
                    <div className="lg:col-span-5 relative lg:mt-2">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                            <motion.div
                                style={{ y: imgY, scale: imgScale }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src="/cats/IMG-20240912-WA0006.jpg"
                                    alt="Sully — a rescued orange tabby cat"
                                    fill
                                    className="object-cover"
                                    priority
                                    quality={92}
                                    sizes="(max-width: 1024px) 100vw, 42vw"
                                />
                            </motion.div>
                            {/* Warm vignette */}
                            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-ink/5 to-transparent pointer-events-none" />

                            {/* Caption plate */}
                            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
                                <div className="flex items-end justify-between gap-4">
                                    <div className="min-w-0">
                                        <div className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-cream/70 mb-1">
                                            Meet
                                        </div>
                                        <div className="font-display text-3xl md:text-4xl text-cream leading-none">
                                            Sully
                                        </div>
                                        <div className="font-body text-xs text-cream/70 mt-1.5 truncate">
                                            Orange tabby · Asthmatic · Looking for home
                                        </div>
                                    </div>
                                    <Link
                                        href="/animals/sully"
                                        className="flex items-center justify-center w-11 h-11 rounded-full bg-cream text-ink hover:bg-heartbeat-clay hover:text-cream transition-[background-color,color] duration-300 flex-shrink-0"
                                        aria-label="Meet Sully"
                                    >
                                        <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Small caption strip */}
                        <div className="flex items-center justify-between mt-3 pl-1 gap-4">
                            <span className="font-mono text-[9px] md:text-[10px] tracking-[0.18em] uppercase text-ink-muted">
                                Cover · Issue 01
                            </span>
                            <span className="font-mono text-[9px] md:text-[10px] tracking-[0.18em] uppercase text-ink-muted">
                                Foster home
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
