'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Calendar } from 'lucide-react';
import { Animal } from '@/types';

interface AnimalCardProps {
    animal: Animal;
    index?: number;
}

export function AnimalCard({ animal, index = 0 }: AnimalCardProps) {
    const statusColors = {
        available: 'bg-rescue-olive text-white',
        pending: 'bg-timber-gold text-forest-shadow',
        adopted: 'bg-heartbeat-clay text-white',
        fostered: 'bg-rescue-olive-light text-white',
    };

    const statusLabels = {
        available: 'Available',
        pending: 'Adoption Pending',
        adopted: 'Adopted!',
        fostered: 'In Foster Care',
    };

    const hasImage = animal.images && animal.images.length > 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            <Link href={`/animals/${animal.id}`} className="block group">
                <motion.article
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="card overflow-hidden bg-white border border-bone-white-dark/50 hover:border-timber-gold/30 hover:shadow-xl transition-all duration-300"
                >
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-timber-gold/10 to-rescue-olive/10">
                        {hasImage ? (
                            <Image
                                src={animal.images[0]}
                                alt={`${animal.name} - ${animal.breed}`}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-24 h-24 rounded-full bg-timber-gold/30 flex items-center justify-center">
                                    <span className="text-4xl">🐱</span>
                                </div>
                            </div>
                        )}

                        {/* Gradient Overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-forest-shadow/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Status Badge */}
                        <div className="absolute top-3 left-3 z-10">
                            <span className={`px-3 py-1.5 rounded-full text-xs font-bold shadow-lg ${statusColors[animal.status]}`}>
                                {statusLabels[animal.status]}
                            </span>
                        </div>

                        {/* Featured Badge */}
                        {animal.featured && (
                            <div className="absolute top-3 right-3 z-10">
                                <motion.div
                                    animate={{ scale: [1, 1.15, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="w-9 h-9 rounded-full bg-heartbeat-clay flex items-center justify-center shadow-lg"
                                >
                                    <Heart className="w-4 h-4 text-white fill-white" />
                                </motion.div>
                            </div>
                        )}

                        {/* Medical Needs Indicator */}
                        {animal.medicalNeeds && animal.medicalNeeds.length > 0 && (
                            <div className="absolute bottom-3 left-3 z-10">
                                <span className="px-2 py-1 rounded-full bg-amber-500/90 text-white text-xs font-medium shadow">
                                    💊 Special Care
                                </span>
                            </div>
                        )}

                        {/* Quick View Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                        >
                            <span className="px-5 py-2.5 bg-white rounded-full text-rescue-olive font-semibold text-sm shadow-xl hover:bg-timber-gold hover:text-white transition-colors">
                                Meet {animal.name}
                            </span>
                        </motion.div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5">
                        {/* Name and Age */}
                        <div className="flex items-start justify-between mb-2">
                            <h3 className="font-heading font-bold text-xl text-rescue-olive group-hover:text-heartbeat-clay transition-colors">
                                {animal.name}
                            </h3>
                            <span className="text-sm text-rescue-olive-light bg-bone-white px-2 py-0.5 rounded-full">
                                {animal.age}
                            </span>
                        </div>

                        {/* Breed and Gender */}
                        <p className="text-sm text-rescue-olive-light mb-3 flex items-center gap-1.5">
                            <span className={`inline-block w-2 h-2 rounded-full ${animal.gender === 'male' ? 'bg-blue-400' : 'bg-pink-400'}`}></span>
                            {animal.breed} • {animal.gender === 'male' ? 'Boy' : 'Girl'}
                        </p>

                        {/* Short Description */}
                        <p className="text-sm text-rescue-olive/70 line-clamp-2 mb-4 leading-relaxed">
                            {animal.shortDescription}
                        </p>

                        {/* Personality Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                            {animal.personality.slice(0, 3).map((trait) => (
                                <span
                                    key={trait}
                                    className="px-2.5 py-1 bg-timber-gold/10 text-timber-gold-dark rounded-full text-xs font-medium"
                                >
                                    {trait}
                                </span>
                            ))}
                            {animal.personality.length > 3 && (
                                <span className="px-2 py-1 text-rescue-olive-light text-xs">
                                    +{animal.personality.length - 3} more
                                </span>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-4 border-t border-bone-white">
                            <div className="flex items-center gap-1.5 text-xs text-rescue-olive-light">
                                <Calendar className="w-3.5 h-3.5" />
                                <span>Since {new Date(animal.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                            </div>
                            {animal.adoptionFee > 0 && (
                                <span className="text-base font-bold text-timber-gold">
                                    ${animal.adoptionFee}
                                </span>
                            )}
                        </div>
                    </div>
                </motion.article>
            </Link>
        </motion.div>
    );
}
