'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Animal } from '@/types';

interface FeaturedAnimalsSectionProps {
    animals: Animal[];
}

export function FeaturedAnimalsSection({ animals }: FeaturedAnimalsSectionProps) {
    const featuredAnimals = animals.filter(a => a.featured && a.status !== 'adopted').slice(0, 4);

    return (
        <section className="relative py-24 md:py-32 bg-bone-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
                    <div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-timber-gold text-xs md:text-sm font-medium tracking-[0.3em] uppercase block mb-4"
                        >
                            Available Now
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-rescue-olive"
                        >
                            Meet the Cats
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            href="/animals"
                            className="group inline-flex items-center gap-3 text-rescue-olive font-semibold text-sm tracking-wide hover:text-heartbeat-clay transition-colors"
                        >
                            VIEW ALL CATS
                            <span className="group-hover:translate-x-2 transition-transform">→</span>
                        </Link>
                    </motion.div>
                </div>

                {/* Featured grid - asymmetric */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6">
                    {featuredAnimals.map((animal, index) => {
                        // Asymmetric sizing
                        const gridClass = index === 0
                            ? 'lg:col-span-7 lg:row-span-2'
                            : index === 1
                                ? 'lg:col-span-5'
                                : 'lg:col-span-5';

                        const aspectClass = index === 0
                            ? 'aspect-[4/3] lg:aspect-auto lg:h-full min-h-[400px] lg:min-h-[600px]'
                            : 'aspect-[4/3] lg:aspect-[16/10]';

                        return (
                            <motion.div
                                key={animal.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className={gridClass}
                            >
                                <Link href={`/animals/${animal.id}`} className="group block h-full">
                                    <div className={`relative overflow-hidden bg-rescue-olive/10 ${aspectClass}`}>
                                        {animal.images && animal.images.length > 0 && (
                                            <Image
                                                src={animal.images[0]}
                                                alt={animal.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                sizes={index === 0 ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 100vw, 40vw"}
                                            />
                                        )}

                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                                        {/* Content */}
                                        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                                            <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                                <h3 className="text-white text-2xl md:text-3xl font-heading font-bold mb-2">
                                                    {animal.name}
                                                </h3>
                                                <p className="text-white/70 text-sm mb-3">
                                                    {animal.breed} · {animal.age}
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {animal.personality.slice(0, 2).map(trait => (
                                                        <span
                                                            key={trait}
                                                            className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white/90 text-xs tracking-wide"
                                                        >
                                                            {trait.toUpperCase()}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Hover indicator */}
                                        <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                                            <span className="text-white text-lg">→</span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
