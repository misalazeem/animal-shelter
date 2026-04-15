'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import {
    ArrowLeft,
    Upload,
    Cat,
    Save,
    Facebook,
    Instagram,
    Twitter,
    Share2,
    Check,
    Image as ImageIcon,
} from 'lucide-react';

const personalities = [
    'Playful', 'Calm', 'Affectionate', 'Independent', 'Curious',
    'Talkative', 'Gentle', 'Energetic', 'Loyal', 'Sweet',
    'Cuddly', 'Social', 'Shy', 'Brave', 'Friendly'
];

const socialPlatforms = [
    { id: 'facebook', name: 'Facebook', icon: Facebook, color: 'bg-blue-600' },
    { id: 'instagram', name: 'Instagram', icon: Instagram, color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
    { id: 'twitter', name: 'X (Twitter)', icon: Twitter, color: 'bg-black' },
];

export default function AddAnimalPage() {
    const [formData, setFormData] = useState({
        name: '',
        species: 'cat',
        breed: '',
        age: '',
        ageCategory: '',
        gender: '',
        weight: '',
        color: '',
        description: '',
        shortDescription: '',
        personality: [] as string[],
        medicalNeeds: '',
        goodWithCats: false,
        goodWithDogs: false,
        goodWithChildren: false,
        featured: false,
    });

    const [selectedSocials, setSelectedSocials] = useState<string[]>(['facebook', 'instagram']);
    const [autoPost, setAutoPost] = useState(true);
    const [customCaption, setCustomCaption] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const togglePersonality = (trait: string) => {
        setFormData(prev => ({
            ...prev,
            personality: prev.personality.includes(trait)
                ? prev.personality.filter(p => p !== trait)
                : [...prev.personality, trait]
        }));
    };

    const toggleSocial = (id: string) => {
        setSelectedSocials(prev =>
            prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
        );
    };

    const generateCaption = () => {
        return `🐱 Meet ${formData.name || '[Name]'}!

This ${formData.age || 'adorable'} ${formData.breed || 'cat'} is looking for their forever home! ${formData.shortDescription || ''}

${formData.personality.length > 0 ? `Personality: ${formData.personality.join(', ')}` : ''}

🏠 Apply to adopt at randomrescuer.org/animals

#AdoptDontShop #CatRescue #RandomRescuer #CatsOfInstagram #AdoptACat`;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        // In production, this would:
        // 1. Save the animal to the database
        // 2. Upload images
        // 3. Trigger social media posts via API

        setIsSubmitting(false);
        setShowSuccess(true);
    };

    if (showSuccess) {
        return (
            <div className="min-h-screen bg-bone-white lg:ml-64 pt-16 lg:pt-0 flex items-center justify-center p-6">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-white rounded-3xl p-10 shadow-xl text-center max-w-md"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', delay: 0.2 }}
                        className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500 flex items-center justify-center"
                    >
                        <Check className="w-10 h-10 text-white" />
                    </motion.div>
                    <h2 className="font-heading text-2xl font-bold text-rescue-olive mb-2">
                        Animal Added Successfully!
                    </h2>
                    <p className="text-rescue-olive-light mb-6">
                        {formData.name} has been added to the system.
                        {autoPost && selectedSocials.length > 0 && (
                            <><br />Posts scheduled for: {selectedSocials.map(s =>
                                socialPlatforms.find(p => p.id === s)?.name
                            ).join(', ')}</>
                        )}
                    </p>
                    <div className="flex gap-3 justify-center">
                        <Link href="/admin/animals/new" onClick={() => setShowSuccess(false)}>
                            <button className="btn btn-outline">Add Another</button>
                        </Link>
                        <Link href="/admin/dashboard">
                            <button className="btn btn-primary">Back to Dashboard</button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-bone-white lg:ml-64 pt-16 lg:pt-0">
            <div className="p-6 lg:p-10 pb-32 lg:pb-10">
                {/* Header */}
                <div className="mb-8">
                    <Link
                        href="/admin/dashboard"
                        className="inline-flex items-center gap-2 text-rescue-olive hover:text-heartbeat-clay transition-colors mb-4"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Dashboard
                    </Link>
                    <h1 className="font-heading text-2xl lg:text-3xl font-bold text-rescue-olive">
                        Add New Animal
                    </h1>
                    <p className="text-rescue-olive-light">
                        Fill in the details below. Posts will be created automatically on selected platforms.
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="grid lg:grid-cols-3 gap-6">
                        {/* Main Form */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Basic Info */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-bone-white-dark">
                                <h2 className="font-heading font-bold text-lg text-rescue-olive mb-6 flex items-center gap-2">
                                    <Cat className="w-5 h-5 text-timber-gold" />
                                    Basic Information
                                </h2>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-rescue-olive mb-2">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="input"
                                            placeholder="e.g., Whiskers"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-rescue-olive mb-2">
                                            Species *
                                        </label>
                                        <select
                                            required
                                            value={formData.species}
                                            onChange={(e) => setFormData({ ...formData, species: e.target.value })}
                                            className="input"
                                        >
                                            <option value="cat">Cat</option>
                                            <option value="dog">Dog</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-rescue-olive mb-2">
                                            Breed
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.breed}
                                            onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                                            className="input"
                                            placeholder="e.g., Domestic Shorthair"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-rescue-olive mb-2">
                                            Age *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.age}
                                            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                                            className="input"
                                            placeholder="e.g., 3 years"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-rescue-olive mb-2">
                                            Age Category *
                                        </label>
                                        <select
                                            required
                                            value={formData.ageCategory}
                                            onChange={(e) => setFormData({ ...formData, ageCategory: e.target.value })}
                                            className="input"
                                        >
                                            <option value="">Select...</option>
                                            <option value="kitten">Kitten</option>
                                            <option value="young">Young</option>
                                            <option value="adult">Adult</option>
                                            <option value="senior">Senior</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-rescue-olive mb-2">
                                            Gender *
                                        </label>
                                        <select
                                            required
                                            value={formData.gender}
                                            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                                            className="input"
                                        >
                                            <option value="">Select...</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-rescue-olive mb-2">
                                            Color
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.color}
                                            onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                                            className="input"
                                            placeholder="e.g., Orange Tabby"
                                        />
                                    </div>

                                </div>

                                <div className="mt-4">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={formData.featured}
                                            onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                                            className="w-5 h-5 rounded border-bone-white-dark text-rescue-olive focus:ring-rescue-olive"
                                        />
                                        <span className="text-sm text-rescue-olive">Feature this animal on the homepage</span>
                                    </label>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-bone-white-dark">
                                <h2 className="font-heading font-bold text-lg text-rescue-olive mb-6">
                                    Description
                                </h2>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-rescue-olive mb-2">
                                            Short Description *
                                        </label>
                                        <textarea
                                            required
                                            value={formData.shortDescription}
                                            onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                                            className="input min-h-[80px]"
                                            placeholder="A brief, catchy description for cards and social posts"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-rescue-olive mb-2">
                                            Full Description *
                                        </label>
                                        <textarea
                                            required
                                            value={formData.description}
                                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                            className="input min-h-[200px]"
                                            placeholder="Tell the full story. Include personality, history, ideal home..."
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Personality & Compatibility */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-bone-white-dark">
                                <h2 className="font-heading font-bold text-lg text-rescue-olive mb-6">
                                    Personality & Compatibility
                                </h2>

                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-rescue-olive mb-3">
                                        Personality Traits (select all that apply)
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        {personalities.map((trait) => (
                                            <button
                                                key={trait}
                                                type="button"
                                                onClick={() => togglePersonality(trait)}
                                                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${formData.personality.includes(trait)
                                                        ? 'bg-timber-gold text-white'
                                                        : 'bg-bone-white text-rescue-olive hover:bg-timber-gold/20'
                                                    }`}
                                            >
                                                {trait}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-rescue-olive mb-3">
                                        Good With
                                    </label>
                                    <div className="grid grid-cols-3 gap-4">
                                        {[
                                            { key: 'goodWithCats', label: 'Cats' },
                                            { key: 'goodWithDogs', label: 'Dogs' },
                                            { key: 'goodWithChildren', label: 'Children' },
                                        ].map((item) => (
                                            <label key={item.key} className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={formData[item.key as keyof typeof formData] as boolean}
                                                    onChange={(e) => setFormData({ ...formData, [item.key]: e.target.checked })}
                                                    className="w-5 h-5 rounded border-bone-white-dark text-rescue-olive focus:ring-rescue-olive"
                                                />
                                                <span className="text-sm text-rescue-olive">{item.label}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Photo Upload */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-bone-white-dark">
                                <h2 className="font-heading font-bold text-lg text-rescue-olive mb-6 flex items-center gap-2">
                                    <ImageIcon className="w-5 h-5 text-timber-gold" />
                                    Photos
                                </h2>

                                <div className="border-2 border-dashed border-bone-white-dark rounded-xl p-8 text-center hover:border-timber-gold transition-colors cursor-pointer">
                                    <Upload className="w-10 h-10 mx-auto mb-4 text-rescue-olive-light" />
                                    <p className="font-medium text-rescue-olive">
                                        Click to upload or drag and drop
                                    </p>
                                    <p className="text-sm text-rescue-olive-light mt-1">
                                        PNG, JPG up to 10MB. First image will be the primary photo.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Sidebar */}
                        <div className="space-y-6">
                            {/* Social Auto-Post */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-white rounded-2xl p-6 shadow-lg border border-bone-white-dark sticky top-6"
                            >
                                <h2 className="font-heading font-bold text-lg text-rescue-olive mb-4 flex items-center gap-2">
                                    <Share2 className="w-5 h-5 text-timber-gold" />
                                    Social Media Auto-Post
                                </h2>

                                <div className="mb-4">
                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={autoPost}
                                            onChange={(e) => setAutoPost(e.target.checked)}
                                            className="w-5 h-5 rounded border-bone-white-dark text-rescue-olive focus:ring-rescue-olive"
                                        />
                                        <span className="text-sm text-rescue-olive font-medium">
                                            Automatically post when animal is added
                                        </span>
                                    </label>
                                </div>

                                {autoPost && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                    >
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-rescue-olive mb-2">
                                                Post to:
                                            </label>
                                            <div className="space-y-2">
                                                {socialPlatforms.map((platform) => (
                                                    <button
                                                        key={platform.id}
                                                        type="button"
                                                        onClick={() => toggleSocial(platform.id)}
                                                        className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all ${selectedSocials.includes(platform.id)
                                                                ? 'border-rescue-olive bg-rescue-olive/5'
                                                                : 'border-bone-white-dark hover:border-rescue-olive-light'
                                                            }`}
                                                    >
                                                        <div className={`w-8 h-8 rounded-lg ${platform.color} flex items-center justify-center`}>
                                                            <platform.icon className="w-4 h-4 text-white" />
                                                        </div>
                                                        <span className="text-sm font-medium text-rescue-olive flex-1 text-left">
                                                            {platform.name}
                                                        </span>
                                                        {selectedSocials.includes(platform.id) && (
                                                            <Check className="w-5 h-5 text-rescue-olive" />
                                                        )}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-rescue-olive mb-2">
                                                Caption Preview:
                                            </label>
                                            <div className="bg-bone-white rounded-xl p-4 text-sm text-rescue-olive/80 whitespace-pre-line">
                                                {customCaption || generateCaption()}
                                            </div>
                                            <button
                                                type="button"
                                                className="text-xs text-heartbeat-clay hover:underline mt-2"
                                                onClick={() => setCustomCaption(generateCaption())}
                                            >
                                                Edit caption
                                            </button>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full btn btn-primary py-4 mt-6 disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                        />
                                    ) : (
                                        <>
                                            <Save className="w-5 h-5" />
                                            Save & Post
                                        </>
                                    )}
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
