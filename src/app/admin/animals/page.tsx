'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import {
    ArrowLeft,
    PlusCircle,
    Search,
    Filter,
    Edit,
    Trash2,
    Eye,
    MoreVertical,
    Cat,
} from 'lucide-react';
import { animals } from '@/data/animals';
import { Animal } from '@/types';

export default function AdminAnimalsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState<string>('all');
    const [selectedAnimals, setSelectedAnimals] = useState<string[]>([]);

    const filteredAnimals = animals.filter((animal) => {
        const matchesSearch = animal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            animal.breed?.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = statusFilter === 'all' || animal.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const toggleSelect = (id: string) => {
        setSelectedAnimals(prev =>
            prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
        );
    };

    const toggleSelectAll = () => {
        if (selectedAnimals.length === filteredAnimals.length) {
            setSelectedAnimals([]);
        } else {
            setSelectedAnimals(filteredAnimals.map(a => a.id));
        }
    };

    return (
        <div className="min-h-screen bg-bone-white lg:ml-64 pt-16 lg:pt-0">
            <div className="p-6 lg:p-10 pb-32 lg:pb-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <Link
                            href="/admin/dashboard"
                            className="inline-flex items-center gap-2 text-rescue-olive hover:text-heartbeat-clay transition-colors mb-2"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Dashboard
                        </Link>
                        <h1 className="font-heading text-2xl lg:text-3xl font-bold text-rescue-olive">
                            Manage Animals
                        </h1>
                        <p className="text-rescue-olive-light">
                            {filteredAnimals.length} animals in database
                        </p>
                    </div>

                    <Link href="/admin/animals/new">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn btn-primary"
                        >
                            <PlusCircle className="w-5 h-5" />
                            Add New Animal
                        </motion.button>
                    </Link>
                </div>

                {/* Filters Bar */}
                <div className="bg-white rounded-2xl p-4 shadow-lg border border-bone-white-dark mb-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Search */}
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-rescue-olive-light" />
                            <input
                                type="text"
                                placeholder="Search by name or breed..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="input pl-12"
                            />
                        </div>

                        {/* Status Filter */}
                        <div className="flex items-center gap-2">
                            <Filter className="w-5 h-5 text-rescue-olive-light" />
                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="input w-auto"
                            >
                                <option value="all">All Status</option>
                                <option value="available">Available</option>
                                <option value="pending">Pending</option>
                                <option value="adopted">Adopted</option>
                                <option value="fostered">Fostered</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Bulk Actions */}
                {selectedAnimals.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-rescue-olive text-white rounded-xl p-4 mb-6 flex items-center justify-between"
                    >
                        <span>{selectedAnimals.length} animal(s) selected</span>
                        <div className="flex gap-2">
                            <button className="px-3 py-1 bg-white/20 rounded-lg hover:bg-white/30 transition-colors text-sm">
                                Change Status
                            </button>
                            <button className="px-3 py-1 bg-heartbeat-clay rounded-lg hover:bg-heartbeat-clay-dark transition-colors text-sm">
                                Delete Selected
                            </button>
                        </div>
                    </motion.div>
                )}

                {/* Animals Table */}
                <div className="bg-white rounded-2xl shadow-lg border border-bone-white-dark overflow-hidden">
                    {/* Table Header */}
                    <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-bone-white border-b border-bone-white-dark font-medium text-sm text-rescue-olive">
                        <div className="col-span-1">
                            <input
                                type="checkbox"
                                checked={selectedAnimals.length === filteredAnimals.length && filteredAnimals.length > 0}
                                onChange={toggleSelectAll}
                                className="w-4 h-4 rounded border-bone-white-dark text-rescue-olive focus:ring-rescue-olive"
                            />
                        </div>
                        <div className="col-span-4">Animal</div>
                        <div className="col-span-2">Status</div>
                        <div className="col-span-2">Age</div>
                        <div className="col-span-2">Added</div>
                        <div className="col-span-1">Actions</div>
                    </div>

                    {/* Table Body */}
                    <div className="divide-y divide-bone-white-dark">
                        {filteredAnimals.map((animal, index) => (
                            <motion.div
                                key={animal.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 hover:bg-bone-white/50 transition-colors"
                            >
                                {/* Checkbox */}
                                <div className="hidden md:flex col-span-1 items-center">
                                    <input
                                        type="checkbox"
                                        checked={selectedAnimals.includes(animal.id)}
                                        onChange={() => toggleSelect(animal.id)}
                                        className="w-4 h-4 rounded border-bone-white-dark text-rescue-olive focus:ring-rescue-olive"
                                    />
                                </div>

                                {/* Animal Info */}
                                <div className="col-span-4 flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-timber-gold/20 to-rescue-olive/20 flex items-center justify-center flex-shrink-0">
                                        <span className="text-xl">🐱</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-rescue-olive">{animal.name}</p>
                                        <p className="text-sm text-rescue-olive-light">{animal.breed}</p>
                                    </div>
                                </div>

                                {/* Status */}
                                <div className="col-span-2 flex items-center">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${animal.status === 'available' ? 'bg-rescue-olive/10 text-rescue-olive' :
                                            animal.status === 'pending' ? 'bg-timber-gold/10 text-timber-gold-dark' :
                                                animal.status === 'adopted' ? 'bg-green-100 text-green-700' :
                                                    'bg-blue-100 text-blue-700'
                                        }`}>
                                        {animal.status.charAt(0).toUpperCase() + animal.status.slice(1)}
                                    </span>
                                </div>

                                {/* Age */}
                                <div className="col-span-2 flex items-center text-rescue-olive-light">
                                    {animal.age}
                                </div>

                                {/* Added Date */}
                                <div className="col-span-2 flex items-center text-rescue-olive-light text-sm">
                                    {new Date(animal.createdAt).toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric',
                                    })}
                                </div>

                                {/* Actions */}
                                <div className="col-span-1 flex items-center gap-2">
                                    <Link href={`/animals/${animal.id}`}>
                                        <button className="p-2 rounded-lg hover:bg-bone-white transition-colors text-rescue-olive-light hover:text-rescue-olive">
                                            <Eye className="w-4 h-4" />
                                        </button>
                                    </Link>
                                    <button className="p-2 rounded-lg hover:bg-bone-white transition-colors text-rescue-olive-light hover:text-rescue-olive">
                                        <Edit className="w-4 h-4" />
                                    </button>
                                    <button className="p-2 rounded-lg hover:bg-heartbeat-clay/10 transition-colors text-rescue-olive-light hover:text-heartbeat-clay">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredAnimals.length === 0 && (
                        <div className="p-12 text-center">
                            <Cat className="w-16 h-16 mx-auto mb-4 text-rescue-olive-light" />
                            <h3 className="font-heading text-lg font-bold text-rescue-olive mb-2">
                                No animals found
                            </h3>
                            <p className="text-rescue-olive-light mb-4">
                                {searchQuery || statusFilter !== 'all'
                                    ? 'Try adjusting your search or filters'
                                    : 'Add your first animal to get started'}
                            </p>
                            {!searchQuery && statusFilter === 'all' && (
                                <Link href="/admin/animals/new">
                                    <button className="btn btn-primary">
                                        <PlusCircle className="w-5 h-5" />
                                        Add First Animal
                                    </button>
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
