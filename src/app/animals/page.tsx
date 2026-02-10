'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search, Filter, Cat, Dog, Heart } from 'lucide-react';
import { AnimalCard } from '@/components/animals/AnimalCard';
import { animals, getAvailableAnimals } from '@/data/animals';

type FilterType = 'all' | 'available' | 'pending' | 'cats' | 'dogs' | 'seniors' | 'kittens';

export default function AnimalsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState<FilterType>('all');

    const filters = [
        { id: 'all', label: 'All', icon: Heart },
        { id: 'available', label: 'Available', icon: Heart },
        { id: 'cats', label: 'Cats', icon: Cat },
        { id: 'dogs', label: 'Dogs', icon: Dog },
        { id: 'seniors', label: 'Seniors', icon: Heart },
        { id: 'kittens', label: 'Kittens', icon: Cat },
    ];

    const filteredAnimals = animals.filter((animal) => {
        // Search filter
        const matchesSearch =
            animal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            animal.breed?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            animal.personality.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()));

        // Category filter
        let matchesFilter = true;
        switch (activeFilter) {
            case 'available':
                matchesFilter = animal.status === 'available';
                break;
            case 'cats':
                matchesFilter = animal.species === 'cat';
                break;
            case 'dogs':
                matchesFilter = animal.species === 'dog';
                break;
            case 'seniors':
                matchesFilter = animal.ageCategory === 'senior';
                break;
            case 'kittens':
                matchesFilter = animal.ageCategory === 'kitten';
                break;
            default:
                matchesFilter = true;
        }

        return matchesSearch && matchesFilter;
    });

    return (
        <div className="min-h-screen pt-20 md:pt-24 pb-16 bg-bone-white">
            {/* Hero Header */}
            <section className="py-12 md:py-20 bg-gradient-to-br from-cream to-bone-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-timber-gold/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-heartbeat-clay/5 rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <span className="inline-block px-4 py-1 bg-rescue-olive/10 rounded-full text-rescue-olive text-sm font-medium mb-6">
                            Find Your Perfect Match
                        </span>
                        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-rescue-olive mb-4">
                            Cats Looking for{' '}
                            <span className="gradient-text">Forever Homes</span>
                        </h1>
                        <p className="text-rescue-olive/70 text-lg">
                            Every cat has a story. These special souls are waiting to write
                            their next chapter with you.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Search and Filters */}
            <section className="py-8 border-b border-bone-white-dark bg-white sticky top-16 md:top-20 z-20">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        {/* Search */}
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-rescue-olive-light" />
                            <input
                                type="text"
                                placeholder="Search by name, breed, personality..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="input pl-12"
                            />
                        </div>

                        {/* Filters */}
                        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                            {filters.map((filter) => (
                                <motion.button
                                    key={filter.id}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setActiveFilter(filter.id as FilterType)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeFilter === filter.id
                                            ? 'bg-rescue-olive text-white'
                                            : 'bg-bone-white text-rescue-olive hover:bg-rescue-olive/10'
                                        }`}
                                >
                                    <filter.icon className="w-4 h-4" />
                                    {filter.label}
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Results Count */}
            <section className="py-6">
                <div className="container mx-auto px-4 md:px-8">
                    <p className="text-rescue-olive-light">
                        Showing <strong className="text-rescue-olive">{filteredAnimals.length}</strong>{' '}
                        {filteredAnimals.length === 1 ? 'animal' : 'animals'}
                    </p>
                </div>
            </section>

            {/* Animals Grid */}
            <section className="pb-16">
                <div className="container mx-auto px-4 md:px-8">
                    {filteredAnimals.length > 0 ? (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredAnimals.map((animal, index) => (
                                <AnimalCard key={animal.id} animal={animal} index={index} />
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center py-16"
                        >
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="font-heading text-xl font-bold text-rescue-olive mb-2">
                                No animals found
                            </h3>
                            <p className="text-rescue-olive-light mb-6">
                                Try adjusting your search or filters
                            </p>
                            <button
                                onClick={() => {
                                    setSearchQuery('');
                                    setActiveFilter('all');
                                }}
                                className="btn btn-outline"
                            >
                                Clear Filters
                            </button>
                        </motion.div>
                    )}
                </div>
            </section>
        </div>
    );
}
