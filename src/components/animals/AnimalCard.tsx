'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Animal } from '@/types';

interface AnimalCardProps {
    animal: Animal;
    index?: number;
}

/* index kept for future staggered reveal; currently not used */


const statusCopy: Record<Animal['status'], string> = {
    available: 'Available',
    pending: 'Pending',
    adopted: 'Adopted',
    fostered: 'Fostered',
};

export function AnimalCard({ animal }: AnimalCardProps) {
    const hasImage = animal.images && animal.images.length > 0;

    return (
        <div>
            <Link href={`/animals/${animal.id}`} className="group block">
                <article>
                    {/* Image */}
                    <div className="relative aspect-[4/5] overflow-hidden bg-bone-white rounded-sm mb-5">
                        {hasImage ? (
                            <Image
                                src={animal.images[0]}
                                alt={`${animal.name} — ${animal.breed}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="font-display text-6xl text-paper-border">{animal.name.charAt(0)}</div>
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Status + medical strip */}
                        <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-2">
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-cream/95 backdrop-blur-sm rounded-full">
                                <span className={`w-1.5 h-1.5 rounded-full ${animal.status === 'available' ? 'bg-heartbeat-clay' :
                                    animal.status === 'pending' ? 'bg-timber-gold' :
                                        'bg-ink-muted'
                                    }`} />
                                <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-ink">
                                    {statusCopy[animal.status]}
                                </span>
                            </div>

                            {animal.medicalNeeds && animal.medicalNeeds.length > 0 && (
                                <div className="px-3 py-1.5 bg-rescue-olive/90 backdrop-blur-sm rounded-full">
                                    <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-timber-gold-light">
                                        Medical
                                    </span>
                                </div>
                            )}
                        </div>

                        {animal.featured && (
                            <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-heartbeat-clay rounded-full">
                                <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-cream">
                                    ★ Featured
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Meta + name */}
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                            <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-muted mb-1.5">
                                {animal.breed} · {animal.gender === 'male' ? 'Boy' : 'Girl'} · {animal.age}
                            </div>
                            <h3 className="font-display text-3xl md:text-4xl text-ink leading-[0.95] group-hover:text-heartbeat-clay transition-colors">
                                {animal.name}
                            </h3>
                        </div>
                        <div className="flex-shrink-0 w-10 h-10 rounded-full border border-ink/20 group-hover:bg-ink group-hover:border-ink flex items-center justify-center transition-all">
                            <ArrowUpRight className="w-3.5 h-3.5 text-ink group-hover:text-cream transition-colors" />
                        </div>
                    </div>

                    {/* Description */}
                    <p className="mt-3 text-sm text-ink-soft leading-relaxed line-clamp-2">
                        {animal.shortDescription}
                    </p>

                    {/* Personality traits */}
                    <div className="mt-4 pt-4 border-t border-paper-border">
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                            {animal.personality.slice(0, 3).map((trait, i) => (
                                <span
                                    key={trait}
                                    className="font-mono text-[9px] tracking-[0.15em] uppercase text-ink-muted inline-flex items-center gap-2"
                                >
                                    {i > 0 && <span aria-hidden className="text-paper-border">·</span>}
                                    {trait}
                                </span>
                            ))}
                        </div>
                    </div>
                </article>
            </Link>
        </div>
    );
}
