'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { href: '/animals', label: 'ADOPT' },
    { href: '/about', label: 'ABOUT' },
    { href: '/foster', label: 'FOSTER' },
    { href: '/donate', label: 'DONATE' },
    { href: '/contact', label: 'CONTACT' },
];

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'bg-black/90 backdrop-blur-md'
                    : 'bg-transparent'
                    }`}
            >
                <nav className="container mx-auto px-6 md:px-12">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo - Text-based for dark theme */}
                        <Link href="/" className="relative group">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="flex items-center gap-3"
                            >
                                <span className="text-2xl md:text-3xl font-heading font-bold text-white tracking-tight">
                                    RANDOM
                                    <span className="text-timber-gold">RESCUER</span>
                                </span>
                            </motion.div>
                        </Link>

                        {/* Desktop Navigation - Centered */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-white/80 hover:text-white text-xs font-medium tracking-[0.15em] transition-colors relative group"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-timber-gold group-hover:w-full transition-all duration-300" />
                                </Link>
                            ))}
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden lg:flex items-center gap-4">
                            <Link
                                href="/admin"
                                className="text-white/60 hover:text-white text-xs tracking-[0.1em] transition-colors"
                            >
                                ADMIN
                            </Link>
                            <Link
                                href="/animals"
                                className="px-5 py-2 border border-white/30 text-white text-xs tracking-[0.1em] hover:bg-white hover:text-black transition-all duration-300"
                            >
                                ADOPT A CAT
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 text-white"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </motion.button>
                    </div>
                </nav>
            </motion.header>

            {/* Mobile Menu - Full screen overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black z-40 lg:hidden flex flex-col"
                    >
                        {/* Close Button */}
                        <div className="flex justify-end p-6">
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsOpen(false)}
                                className="text-white"
                            >
                                <X className="w-8 h-8" />
                            </motion.button>
                        </div>

                        {/* Mobile Links - Centered */}
                        <nav className="flex-1 flex flex-col items-center justify-center gap-6">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-white text-2xl md:text-3xl font-medium tracking-[0.2em] hover:text-timber-gold transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        {/* Mobile CTA */}
                        <div className="p-8 text-center">
                            <Link
                                href="/animals"
                                onClick={() => setIsOpen(false)}
                                className="inline-block px-10 py-4 border border-white text-white text-sm tracking-[0.15em] hover:bg-white hover:text-black transition-all"
                            >
                                ADOPT A CAT
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
