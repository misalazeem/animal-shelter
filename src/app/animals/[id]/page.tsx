'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
    ArrowLeft,
    Heart,
    Calendar,
    Cat,
    DollarSign,
    Check,
    X,
    Share2,
    Mail,
    Palette,
    Weight
} from 'lucide-react';
import { getAnimalById, getAvailableAnimals } from '@/data/animals';
import { AnimalCard } from '@/components/animals/AnimalCard';

export default function AnimalDetailPage() {
    const params = useParams();
    const animal = getAnimalById(params.id as string);

    if (!animal) {
        return (
            <div className="min-h-screen pt-24 flex items-center justify-center bg-bone-white">
                <div className="text-center px-4">
                    <div className="text-7xl mb-6">😿</div>
                    <h1 className="font-heading text-3xl font-bold text-rescue-olive mb-3">
                        Animal Not Found
                    </h1>
                    <p className="text-rescue-olive-light mb-8 max-w-md mx-auto">
                        This furry friend may have found their forever home already!
                    </p>
                    <Link href="/animals" className="btn btn-primary">
                        View All Animals
                    </Link>
                </div>
            </div>
        );
    }

    const statusColors = {
        available: 'bg-rescue-olive text-white',
        pending: 'bg-timber-gold text-forest-shadow',
        adopted: 'bg-heartbeat-clay text-white',
        fostered: 'bg-rescue-olive-light text-white',
    };

    const statusLabels = {
        available: 'Available for Adoption',
        pending: 'Adoption Pending',
        adopted: 'Happily Adopted!',
        fostered: 'In Foster Care',
    };

    const relatedAnimals = getAvailableAnimals()
        .filter(a => a.id !== animal.id)
        .slice(0, 3);

    const hasImage = animal.images && animal.images.length > 0;

    return (
        <div className="min-h-screen pt-20 md:pt-24 pb-16 bg-bone-white">
            {/* Breadcrumb */}
            <div className="bg-white border-b border-bone-white-dark">
                <div className="container mx-auto px-4 md:px-8 py-4">
                    <Link
                        href="/animals"
                        className="inline-flex items-center gap-2 text-rescue-olive hover:text-heartbeat-clay transition-colors font-medium"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to All Animals
                    </Link>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        {/* Main Image */}
                        <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-timber-gold/10 to-rescue-olive/10 shadow-2xl">
                            {hasImage ? (
                                <Image
                                    src={animal.images[0]}
                                    alt={`${animal.name} - ${animal.breed}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    priority
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.span
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                        className="text-[150px]"
                                    >
                                        🐱
                                    </motion.span>
                                </div>
                            )}

                            {/* Status Badge */}
                            <div className="absolute top-4 left-4 z-10">
                                <span className={`px-4 py-2 rounded-full text-sm font-bold shadow-lg ${statusColors[animal.status]}`}>
                                    {statusLabels[animal.status]}
                                </span>
                            </div>

                            {/* Share Button */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-rescue-olive hover:text-heartbeat-clay transition-colors z-10"
                            >
                                <Share2 className="w-5 h-5" />
                            </motion.button>

                            {/* Medical Badge */}
                            {animal.medicalNeeds && animal.medicalNeeds.length > 0 && (
                                <div className="absolute bottom-4 left-4 z-10">
                                    <span className="px-3 py-1.5 rounded-full bg-amber-500/90 text-white text-sm font-medium shadow-lg">
                                        💊 Special Care Needed
                                    </span>
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* Details Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-6"
                    >
                        {/* Header */}
                        <div>
                            <h1 className="font-heading text-4xl md:text-5xl font-bold text-rescue-olive mb-3">
                                {animal.name}
                            </h1>
                            <p className="text-xl text-rescue-olive-light flex items-center gap-2">
                                <span className={`inline-block w-3 h-3 rounded-full ${animal.gender === 'male' ? 'bg-blue-400' : 'bg-pink-400'}`}></span>
                                {animal.breed} • {animal.gender === 'male' ? 'Boy' : 'Girl'} • {animal.age}
                            </p>
                        </div>

                        {/* Quick Info Cards */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {[
                                { icon: Cat, label: 'Species', value: animal.species },
                                { icon: Calendar, label: 'Age', value: animal.age },
                                { icon: Palette, label: 'Color', value: animal.color },
                                { icon: DollarSign, label: 'Fee', value: animal.adoptionFee > 0 ? `$${animal.adoptionFee}` : 'Sponsored' },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className="p-4 rounded-2xl bg-white border border-bone-white-dark shadow-sm text-center hover:shadow-md transition-shadow"
                                >
                                    <item.icon className="w-6 h-6 mx-auto mb-2 text-timber-gold" />
                                    <p className="text-xs text-rescue-olive-light uppercase tracking-wide">{item.label}</p>
                                    <p className="font-bold text-rescue-olive capitalize">{item.value}</p>
                                </div>
                            ))}
                        </div>

                        {/* Description */}
                        <div className="space-y-4">
                            <h2 className="font-heading text-2xl font-bold text-rescue-olive">
                                About {animal.name}
                            </h2>
                            <div className="space-y-4">
                                {animal.description.split('\n\n').map((paragraph, i) => (
                                    <p key={i} className="text-rescue-olive/80 leading-relaxed text-lg">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Personality */}
                        <div>
                            <h3 className="font-heading text-xl font-bold text-rescue-olive mb-4">
                                Personality
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {animal.personality.map((trait) => (
                                    <span
                                        key={trait}
                                        className="px-4 py-2 rounded-full bg-timber-gold/15 text-timber-gold-dark font-semibold text-sm border border-timber-gold/20"
                                    >
                                        {trait}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Good With */}
                        <div>
                            <h3 className="font-heading text-xl font-bold text-rescue-olive mb-4">
                                Good With
                            </h3>
                            <div className="grid grid-cols-3 gap-3">
                                {[
                                    { label: 'Other Cats', value: animal.goodWith.cats },
                                    { label: 'Dogs', value: animal.goodWith.dogs },
                                    { label: 'Children', value: animal.goodWith.children },
                                ].map((item) => (
                                    <div
                                        key={item.label}
                                        className={`p-4 rounded-2xl border-2 text-center transition-all ${item.value
                                            ? 'bg-rescue-olive/5 border-rescue-olive/30'
                                            : 'bg-gray-50 border-gray-200'
                                            }`}
                                    >
                                        {item.value ? (
                                            <Check className="w-6 h-6 mx-auto mb-2 text-rescue-olive" />
                                        ) : (
                                            <X className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                                        )}
                                        <p className={`text-sm font-semibold ${item.value ? 'text-rescue-olive' : 'text-gray-400'}`}>
                                            {item.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Medical/Special Needs */}
                        {(animal.medicalNeeds?.length || animal.specialNeeds?.length) && (
                            <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200">
                                <h3 className="font-heading text-xl font-bold text-amber-800 mb-4 flex items-center gap-2">
                                    <span>💊</span> Special Considerations
                                </h3>
                                <ul className="space-y-3">
                                    {animal.medicalNeeds?.map((need) => (
                                        <li key={need} className="flex items-start gap-3 text-amber-900">
                                            <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                                            <span>{need}</span>
                                        </li>
                                    ))}
                                    {animal.specialNeeds?.map((need) => (
                                        <li key={need} className="flex items-start gap-3 text-amber-900">
                                            <span className="w-2 h-2 rounded-full bg-timber-gold mt-2 flex-shrink-0" />
                                            <span>{need}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* CTA Buttons */}
                        {animal.status === 'available' && (
                            <div className="flex flex-col sm:flex-row gap-4 pt-6">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="btn btn-primary flex-1 py-4 text-lg"
                                >
                                    <Heart className="w-5 h-5" />
                                    Apply to Adopt {animal.name}
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="btn btn-outline flex-1 py-4 text-lg"
                                >
                                    <Mail className="w-5 h-5" />
                                    Ask About {animal.name}
                                </motion.button>
                            </div>
                        )}
                    </motion.div>
                </div>

                {/* Related Animals */}
                {relatedAnimals.length > 0 && (
                    <section className="mt-20 pt-16 border-t border-bone-white-dark">
                        <h2 className="font-heading text-3xl font-bold text-rescue-olive mb-10 text-center">
                            You Might Also Love
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {relatedAnimals.map((relatedAnimal, index) => (
                                <AnimalCard key={relatedAnimal.id} animal={relatedAnimal} index={index} />
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}
