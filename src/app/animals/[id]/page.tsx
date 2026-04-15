'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Check, X, Heart, Mail } from 'lucide-react';
import { getAnimalById, getAvailableAnimals } from '@/data/animals';
import { AnimalCard } from '@/components/animals/AnimalCard';
import { adoptApplicationUrl, links } from '@/lib/links';

export default function AnimalDetailPage() {
    const params = useParams();
    const animal = getAnimalById(params.id as string);

    if (!animal) {
        return (
            <div className="min-h-screen pt-28 flex items-center justify-center bg-cream">
                <div className="text-center px-4">
                    <div className="chapter-mark justify-center mb-6">
                        <span className="chapter-mark__num">404</span>
                        <span>Not Found</span>
                    </div>
                    <h1 className="font-display text-5xl text-ink mb-4">
                        This cat has flown.
                    </h1>
                    <p className="text-ink-soft mb-8 max-w-md mx-auto">
                        They may have found their forever home, or the page moved.
                    </p>
                    <Link
                        href="/animals"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-cream font-mono text-[11px] tracking-[0.18em] uppercase rounded-full"
                    >
                        Back to directory
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        );
    }

    const relatedAnimals = getAvailableAnimals()
        .filter(a => a.id !== animal.id)
        .slice(0, 3);

    const hasImage = animal.images && animal.images.length > 0;

    const statusLabels = {
        available: 'Available',
        pending: 'Adoption Pending',
        adopted: 'Adopted',
        fostered: 'In Foster',
    };

    return (
        <div className="min-h-screen pt-28 md:pt-32 bg-cream">
            {/* Breadcrumb */}
            <div className="container mx-auto pb-8">
                <Link
                    href="/animals"
                    className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase text-ink-muted hover:text-ink transition-colors"
                >
                    <ArrowLeft className="w-3 h-3" />
                    Back to directory
                </Link>
            </div>

            {/* Main layout */}
            <div className="container mx-auto pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                    {/* Image — sticky */}
                    <div className="lg:col-span-6 lg:sticky lg:top-28 lg:self-start">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-bone-white">
                            {hasImage ? (
                                <Image
                                    src={animal.images[0]}
                                    alt={`${animal.name} — ${animal.breed}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    priority
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="font-display text-[8rem] text-paper-border">
                                        {animal.name.charAt(0)}
                                    </div>
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent pointer-events-none" />

                            {/* Status tag */}
                            <div className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 bg-cream/95 backdrop-blur-sm rounded-full">
                                <span className={`w-1.5 h-1.5 rounded-full ${animal.status === 'available' ? 'bg-heartbeat-clay' : 'bg-ink-muted'}`} />
                                <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink">
                                    {statusLabels[animal.status]}
                                </span>
                            </div>
                        </div>

                        {/* Image caption */}
                        <div className="mt-4 flex items-center justify-between font-mono text-[10px] tracking-[0.18em] uppercase text-ink-muted">
                            <span>Photographed in foster</span>
                            <span>{new Date(animal.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                        </div>
                    </div>

                    {/* Details */}
                    <div className="lg:col-span-6 space-y-10">
                        {/* Name + meta */}
                        <div>
                            <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-timber-gold mb-4">
                                {animal.breed} · {animal.gender === 'male' ? 'Boy' : 'Girl'} · {animal.age}
                            </div>
                            <h1 className="font-display text-[clamp(3.5rem,9vw,7rem)] leading-[0.92] tracking-[-0.02em] text-ink mb-6">
                                {animal.name}.
                            </h1>
                            <div className="flex items-baseline gap-6 text-sm">
                                <div>
                                    <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-ink-muted">Color</div>
                                    <div className="font-display text-lg text-ink capitalize mt-1">{animal.color}</div>
                                </div>
                                <div className="w-px h-10 bg-paper-border" />
                                <div>
                                    <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-ink-muted">Weight</div>
                                    <div className="font-display text-lg text-ink mt-1">{animal.weight} lbs</div>
                                </div>
                                <div className="w-px h-10 bg-paper-border" />
                                <div>
                                    <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-ink-muted">Species</div>
                                    <div className="font-display text-lg text-ink mt-1 capitalize">{animal.species}</div>
                                </div>
                            </div>
                        </div>

                        {/* Description with drop cap */}
                        <div>
                            <div className="chapter-mark mb-5">
                                <span className="chapter-mark__num">§</span>
                                <span>The Story</span>
                            </div>
                            <div className="space-y-5 text-ink-soft leading-[1.75] text-base md:text-lg">
                                {animal.description.split('\n\n').map((paragraph, i) => (
                                    <p key={i} className={i === 0 ? 'drop-cap' : ''}>
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Personality */}
                        <div className="border-t border-paper-border pt-8">
                            <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-timber-gold mb-4">
                                Personality
                            </div>
                            <div className="flex flex-wrap gap-x-3 gap-y-2">
                                {animal.personality.map((trait, i) => (
                                    <span key={trait} className="font-display text-xl md:text-2xl text-ink">
                                        {trait}{i < animal.personality.length - 1 && <span className="text-timber-gold ml-3">·</span>}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Good with */}
                        <div className="border-t border-paper-border pt-8">
                            <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-timber-gold mb-4">
                                Good With
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                {[
                                    { label: 'Other cats', value: animal.goodWith.cats },
                                    { label: 'Dogs', value: animal.goodWith.dogs },
                                    { label: 'Children', value: animal.goodWith.children },
                                ].map((item) => (
                                    <div
                                        key={item.label}
                                        className={`p-5 border ${item.value ? 'border-ink/30 bg-cream' : 'border-paper-border'}`}
                                    >
                                        <div className="flex items-center gap-2">
                                            {item.value ? (
                                                <Check className="w-4 h-4 text-heartbeat-clay" />
                                            ) : (
                                                <X className="w-4 h-4 text-ink-muted" />
                                            )}
                                            <span className={`font-mono text-[10px] tracking-[0.15em] uppercase ${item.value ? 'text-ink' : 'text-ink-muted'}`}>
                                                {item.label}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Medical */}
                        {(animal.medicalNeeds?.length || animal.specialNeeds?.length) ? (
                            <div className="border-t border-paper-border pt-8">
                                <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-timber-gold mb-4">
                                    Special Considerations
                                </div>
                                <ul className="space-y-3 text-ink-soft">
                                    {animal.medicalNeeds?.map((need) => (
                                        <li key={need} className="flex items-start gap-3">
                                            <span className="font-mono text-[10px] text-heartbeat-clay mt-1.5 flex-shrink-0">◆</span>
                                            <span>{need}</span>
                                        </li>
                                    ))}
                                    {animal.specialNeeds?.map((need) => (
                                        <li key={need} className="flex items-start gap-3">
                                            <span className="font-mono text-[10px] text-timber-gold mt-1.5 flex-shrink-0">◆</span>
                                            <span>{need}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : null}

                        {/* CTAs */}
                        {animal.status === 'available' && (
                            <div className="border-t border-paper-border pt-8 flex flex-col sm:flex-row gap-3">
                                <a
                                    href={adoptApplicationUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-ink text-cream font-mono text-[10px] tracking-[0.18em] uppercase rounded-full hover:bg-heartbeat-clay transition-all"
                                >
                                    <Heart className="w-3.5 h-3.5" />
                                    Apply to adopt
                                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
                                </a>
                                <a
                                    href={`mailto:${links.email}?subject=Adoption%20inquiry%20about%20${encodeURIComponent(animal.name)}`}
                                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 border border-ink/30 text-ink font-mono text-[10px] tracking-[0.18em] uppercase rounded-full hover:bg-ink hover:text-cream transition-all"
                                >
                                    <Mail className="w-3.5 h-3.5" />
                                    Ask about {animal.name}
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Related */}
            {relatedAnimals.length > 0 && (
                <section className="border-t border-paper-border py-20 md:py-28">
                    <div className="container mx-auto">
                        <div className="chapter-mark mb-6">
                            <span className="chapter-mark__num">Also</span>
                            <span>Read on</span>
                        </div>
                        <h2 className="font-display text-4xl md:text-5xl text-ink mb-12">
                            You might also fall for…
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
                            {relatedAnimals.map((relatedAnimal, index) => (
                                <AnimalCard key={relatedAnimal.id} animal={relatedAnimal} index={index} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
