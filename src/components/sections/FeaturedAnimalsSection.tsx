'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Animal } from '@/types';

interface FeaturedAnimalsSectionProps {
    animals: Animal[];
}

export function FeaturedAnimalsSection({ animals }: FeaturedAnimalsSectionProps) {
    const featuredAnimals = animals.filter(a => a.featured && a.status !== 'adopted').slice(0, 4);
    const [lead, ...rest] = featuredAnimals;

    return (
        <section id="feature" className="relative py-28 md:py-40 bg-cream overflow-hidden">
            <div className="container mx-auto">
                {/* Section header */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-20">
                    <div className="lg:col-span-6">
                        <div className="chapter-mark mb-8">
                            <span className="chapter-mark__num">03</span>
                            <span>The Feature</span>
                        </div>

                        <h2 className="font-display text-[clamp(2.5rem,5vw,4.75rem)] leading-[1.02] tracking-[-0.02em] text-ink">
                            Meet the
                            <br />
                            <span className="text-heartbeat-clay">cats of the month.</span>
                        </h2>
                    </div>

                    <div className="lg:col-span-6 lg:pt-20 flex flex-col justify-between gap-6">
                        <p className="text-base md:text-lg text-ink-soft leading-[1.7] max-w-[52ch]">
                            Every cat on this page is living in a foster home, waiting for their
                            forever family. Read their stories, meet their personalities, and find
                            the one who picks you.
                        </p>

                        <div>
                            <Link
                                href="/animals"
                                className="group inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] uppercase text-ink hover:text-heartbeat-clay transition-colors"
                            >
                                <span>Browse the full directory</span>
                                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Magazine spread — lead on the left, 3 stacked on the right */}
                <div className="flex flex-col lg:flex-row gap-10 md:gap-12 lg:gap-16">
                    {/* Lead feature */}
                    {lead && (
                        <div className="lg:w-[58%] flex-shrink-0">
                            <Link href={`/animals/${lead.id}`} className="group block">
                                <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-bone-white mb-6">
                                    {lead.images && lead.images.length > 0 && (
                                        <Image
                                            src={lead.images[0]}
                                            alt={lead.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                            sizes="(max-width: 1024px) 100vw, 58vw"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500" />

                                    {/* Issue badge */}
                                    <div className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 bg-cream/95 backdrop-blur-sm rounded-full">
                                        <span className="w-1.5 h-1.5 rounded-full bg-heartbeat-clay" />
                                        <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink">
                                            Featured · 01
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-start justify-between gap-6">
                                    <div className="flex-1 min-w-0">
                                        <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-muted mb-3">
                                            {lead.breed} · {lead.age} · {lead.gender === 'male' ? 'Boy' : 'Girl'}
                                        </div>
                                        <h3 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[0.95] mb-4 group-hover:text-heartbeat-clay transition-colors">
                                            {lead.name}
                                        </h3>
                                        <p className="text-ink-soft leading-relaxed max-w-[48ch]">
                                            {lead.shortDescription}
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-ink/25 bg-cream/60 text-ink group-hover:bg-heartbeat-clay group-hover:border-heartbeat-clay group-hover:text-cream flex items-center justify-center transition-[background-color,border-color,color] duration-300">
                                        <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )}

                    {/* Secondary column */}
                    <div className="lg:flex-1 flex flex-col">
                        {rest.map((animal, index) => (
                            <div
                                key={animal.id}
                                className={`${index > 0 ? 'border-t border-paper-border pt-8' : ''} ${index < rest.length - 1 ? 'pb-8' : ''}`}
                            >
                                <Link href={`/animals/${animal.id}`} className="group block">
                                    <div className="grid grid-cols-[120px_1fr] md:grid-cols-[140px_1fr] gap-5 md:gap-6 items-start">
                                        <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-bone-white">
                                            {animal.images && animal.images.length > 0 && (
                                                <Image
                                                    src={animal.images[0]}
                                                    alt={animal.name}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                    sizes="140px"
                                                />
                                            )}
                                        </div>
                                        <div className="min-w-0 pt-1">
                                            <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-muted mb-2">
                                                0{index + 2} · {animal.age}
                                            </div>
                                            <h3 className="font-display text-3xl md:text-4xl text-ink leading-[0.95] mb-2 group-hover:text-heartbeat-clay transition-colors">
                                                {animal.name}
                                            </h3>
                                            <p className="text-sm text-ink-soft line-clamp-2 leading-relaxed mb-3">
                                                {animal.shortDescription}
                                            </p>
                                            <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase text-ink group-hover:text-heartbeat-clay transition-colors">
                                                <span>Read more</span>
                                                <ArrowUpRight className="w-3 h-3 group-hover:rotate-45 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
