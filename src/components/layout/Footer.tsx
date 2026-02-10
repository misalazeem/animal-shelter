'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const footerLinks = [
    { label: 'ADOPT', href: '/animals' },
    { label: 'ABOUT', href: '/about' },
    { label: 'FOSTER', href: '/foster' },
    { label: 'DONATE', href: '/donate' },
    { label: 'CONTACT', href: '/contact' },
];

const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/randomrescuer', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/randomrescuer', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/randomrescuer', label: 'Twitter' },
];

export function Footer() {
    return (
        <footer className="bg-black text-white">
            {/* Main Footer */}
            <div className="container mx-auto px-6 md:px-12 py-20 md:py-28">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left - Brand */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="mb-8"
                        >
                            <div className="mb-6">
                                <span className="text-2xl md:text-3xl font-heading font-bold text-white tracking-tight">
                                    RANDOM<span className="text-timber-gold">RESCUER</span>
                                </span>
                            </div>
                            <p className="text-white/50 text-sm leading-relaxed max-w-md">
                                A foster home-based cat rescue. We help where we can, when we can,
                                for anyone who crosses our path. Every life matters.
                            </p>
                        </motion.div>

                        {/* Contact */}
                        <div className="space-y-2 text-sm text-white/40">
                            <a
                                href="mailto:info@randomrescuer.org"
                                className="block hover:text-white transition-colors"
                            >
                                info@randomrescuer.org
                            </a>
                            <p>Serving our local community since 2018</p>
                        </div>
                    </div>

                    {/* Right - Links & Social */}
                    <div className="flex flex-col justify-between">
                        {/* Navigation */}
                        <nav className="flex flex-wrap gap-x-8 gap-y-3 mb-12">
                            {footerLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-white/60 hover:text-white text-xs tracking-[0.15em] transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Social */}
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1 }}
                                    className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-4 h-4" />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-6 md:px-12 py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
                        <p>
                            © {new Date().getFullYear()} Random Rescuer. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <Link href="/privacy" className="hover:text-white transition-colors">
                                PRIVACY
                            </Link>
                            <Link href="/terms" className="hover:text-white transition-colors">
                                TERMS
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
