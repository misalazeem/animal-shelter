'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { donateUrl, links } from '@/lib/links';
import { Logo } from '@/components/brand/Logo';

const navLinks = [
    { href: '/animals', label: 'Adopt', num: '01' },
    { href: '/about', label: 'About', num: '02' },
    { href: '/foster', label: 'Foster', num: '03' },
    { href: '/contact', label: 'Contact', num: '04' },
];

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'bg-cream/85 backdrop-blur-xl border-b border-paper-border'
                    : 'bg-cream/60 backdrop-blur-sm'
                    }`}
            >
                <nav className="container mx-auto">
                    <div className="flex items-center justify-between gap-6 h-16 md:h-20">
                        {/* Logo */}
                        <Link href="/" className="relative group flex items-center gap-3 flex-shrink-0" aria-label="Random Rescuer home">
                            <Logo size={40} glow />
                            <span className="font-display text-lg md:text-xl text-ink leading-none tracking-tight whitespace-nowrap hidden sm:inline">
                                Random Rescuer
                            </span>
                        </Link>

                        {/* Desktop Nav — flex-center so it doesn't overlap CTAs */}
                        <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="group flex items-baseline gap-2 text-ink-soft hover:text-ink transition-colors whitespace-nowrap"
                                >
                                    <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-timber-gold">
                                        {link.num}
                                    </span>
                                    <span className="font-body text-sm font-medium">
                                        {link.label}
                                    </span>
                                </Link>
                            ))}
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden lg:flex items-center gap-5 flex-shrink-0">
                            <a
                                href={links.linktree}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-muted hover:text-ink transition-colors inline-flex items-center gap-1 whitespace-nowrap"
                            >
                                All links
                                <ArrowUpRight className="w-3 h-3" />
                            </a>
                            <a
                                href={donateUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-cream font-mono text-[10px] tracking-[0.18em] uppercase rounded-full hover:bg-heartbeat-clay transition-all duration-300 whitespace-nowrap"
                            >
                                Donate
                                <ArrowUpRight className="w-3 h-3 group-hover:rotate-45 transition-transform duration-300" />
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden w-10 h-10 flex items-center justify-center text-ink relative z-[60] flex-shrink-0"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 lg:hidden bg-cream"
                    >
                        {/* Paper texture */}
                        <div className="absolute inset-0 paper-texture pointer-events-none" />

                        <div className="relative h-full flex flex-col pt-24 pb-10 px-6">
                            <div className="chapter-mark mb-10">
                                <span className="chapter-mark__num">00</span>
                                <span>Menu</span>
                            </div>

                            <nav className="flex-1">
                                <ul className="space-y-1">
                                    {navLinks.map((link, index) => (
                                        <motion.li
                                            key={link.href}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 + index * 0.07, duration: 0.5 }}
                                            className="border-b border-paper-border"
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className="group flex items-baseline justify-between gap-4 py-5"
                                            >
                                                <div className="flex items-baseline gap-4">
                                                    <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-timber-gold">
                                                        {link.num}
                                                    </span>
                                                    <span className="font-display text-4xl md:text-5xl text-ink group-hover:text-heartbeat-clay transition-colors">
                                                        {link.label}
                                                    </span>
                                                </div>
                                                <ArrowUpRight className="w-5 h-5 text-ink-muted" />
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                            </nav>

                            {/* Bottom CTA */}
                            <div className="space-y-4 pt-8">
                                <motion.a
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                    href={donateUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-between gap-4 w-full px-6 py-5 bg-ink text-cream rounded-full"
                                >
                                    <span className="font-mono text-xs tracking-[0.18em] uppercase">Donate now</span>
                                    <ArrowUpRight className="w-5 h-5" />
                                </motion.a>
                                <motion.a
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.45, duration: 0.5 }}
                                    href={links.linktree}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between gap-4 w-full px-6 py-4 border border-ink/20 text-ink rounded-full"
                                >
                                    <span className="font-mono text-xs tracking-[0.18em] uppercase">All our links</span>
                                    <ArrowUpRight className="w-4 h-4" />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
