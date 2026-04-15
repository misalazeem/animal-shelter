'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { AnimalCard } from '@/components/animals/AnimalCard';
import { animals } from '@/data/animals';

type FilterType = 'all' | 'available' | 'kittens' | 'young' | 'adults' | 'seniors' | 'medical';

const filters: { id: FilterType; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'available', label: 'Available' },
    { id: 'kittens', label: 'Kittens' },
    { id: 'young', label: 'Young' },
    { id: 'adults', label: 'Adults' },
    { id: 'seniors', label: 'Seniors' },
    { id: 'medical', label: 'Medical' },
];

export default function AnimalsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState<FilterType>('all');

    const filteredAnimals = animals.filter((animal) => {
        const q = searchQuery.toLowerCase();
        const matchesSearch = !q
            || animal.name.toLowerCase().includes(q)
            || animal.breed?.toLowerCase().includes(q)
            || animal.personality.some(p => p.toLowerCase().includes(q));

        let matchesFilter = true;
        switch (activeFilter) {
            case 'available': matchesFilter = animal.status === 'available'; break;
            case 'kittens': matchesFilter = animal.ageCategory === 'kitten'; break;
            case 'young': matchesFilter = animal.ageCategory === 'young'; break;
            case 'adults': matchesFilter = animal.ageCategory === 'adult'; break;
            case 'seniors': matchesFilter = animal.ageCategory === 'senior'; break;
            case 'medical': matchesFilter = !!(animal.medicalNeeds && animal.medicalNeeds.length > 0); break;
        }

        return matchesSearch && matchesFilter;
    });

    return (
        <div className="min-h-screen pt-28 md:pt-36 bg-cream">
            {/* Editorial header */}
            <section className="container mx-auto pb-16 md:pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                    <div className="lg:col-span-7">
                        <div className="chapter-mark mb-8">
                            <span className="chapter-mark__num">§</span>
                            <span>The Directory</span>
                        </div>
                        <h1 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.95] tracking-[-0.02em] text-ink mb-6">
                            Cats looking
                            <br />
                            <span className="text-heartbeat-clay">for forever.</span>
                        </h1>
                    </div>
                    <div className="lg:col-span-5 lg:pt-16">
                        <p className="text-lg text-ink-soft leading-[1.7] max-w-[42ch]">
                            Every cat on this page is living in a foster home, waiting for their
                            forever family. Read their stories, find the one who picks you.
                        </p>
                    </div>
                </div>
            </section>

            {/* Sticky filters bar */}
            <section className="sticky top-16 md:top-20 z-30 bg-cream/95 backdrop-blur-xl border-y border-paper-border">
                <div className="container mx-auto py-4 md:py-5">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-stretch md:items-center justify-between">
                        {/* Search */}
                        <div className="relative w-full md:w-72 lg:w-80 flex-shrink-0">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-muted pointer-events-none" />
                            <input
                                type="text"
                                placeholder="Search by name, trait, breed..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-11 pr-4 py-2.5 bg-transparent border border-paper-border rounded-full text-sm placeholder:text-ink-muted focus:border-ink outline-none transition-colors"
                            />
                        </div>

                        {/* Filters */}
                        <div className="flex items-center gap-1 overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
                            {filters.map((filter) => (
                                <button
                                    key={filter.id}
                                    onClick={() => setActiveFilter(filter.id)}
                                    className={`flex-shrink-0 px-4 py-2 font-mono text-[10px] tracking-[0.18em] uppercase rounded-full transition-all ${activeFilter === filter.id
                                        ? 'bg-ink text-cream'
                                        : 'text-ink-soft hover:text-ink hover:bg-bone-white'
                                        }`}
                                >
                                    {filter.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Results count */}
            <section className="container mx-auto pt-10">
                <div className="flex items-baseline justify-between border-b border-paper-border pb-5">
                    <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-muted">
                        {filteredAnimals.length} {filteredAnimals.length === 1 ? 'cat' : 'cats'}
                        {activeFilter !== 'all' && ` · ${filters.find(f => f.id === activeFilter)?.label}`}
                    </div>
                    <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-muted hidden md:block">
                        Updated weekly
                    </div>
                </div>
            </section>

            {/* Grid */}
            <section className="container mx-auto py-12 md:py-16">
                {filteredAnimals.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
                        {filteredAnimals.map((animal, index) => (
                            <AnimalCard key={animal.id} animal={animal} index={index} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-24">
                        <div className="font-display text-5xl text-ink mb-4">No matches.</div>
                        <p className="text-ink-soft mb-8">Try adjusting your search or clearing filters.</p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setActiveFilter('all');
                            }}
                            className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink border-b border-ink pb-1 hover:text-heartbeat-clay hover:border-heartbeat-clay transition-colors"
                        >
                            Reset filters
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
}
