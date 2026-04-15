'use client';

import Link from 'next/link';
import { ArrowUpRight, Instagram, Facebook, Link as LinkIcon, Heart } from 'lucide-react';
import { links, donateUrl } from '@/lib/links';
import { Logo } from '@/components/brand/Logo';

const exploreLinks = [
    { label: 'Adopt a cat', href: '/animals' },
    { label: 'About us', href: '/about' },
    { label: 'Foster', href: '/foster' },
    { label: 'Contact', href: '/contact' },
];

const supportLinks = [
    { label: 'Donate via PayPal', href: donateUrl, external: true },
    { label: 'Adoption form', href: links.adoptForm, external: true },
    { label: 'Foster form', href: links.fosterForm, external: true },
    { label: 'All our links', href: links.linktree, external: true },
];

const socials = [
    { icon: Instagram, label: 'Instagram', href: links.instagram },
    { icon: Facebook, label: 'Facebook', href: links.facebook },
    { icon: LinkIcon, label: 'Linktree', href: links.linktree },
];

export function Footer() {
    return (
        <footer id="final" className="relative bg-ink text-cream">
            {/* Big CTA masthead */}
            <div className="container mx-auto pt-24 md:pt-32 pb-24 md:pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Left — heading */}
                    <div className="lg:col-span-8">
                        <div className="chapter-mark mb-8" style={{ color: 'var(--timber-gold-light)' }}>
                            <span className="chapter-mark__num" style={{ color: 'var(--timber-gold)' }}>∞</span>
                            <span>The Final Word</span>
                        </div>
                        <h2 className="font-display text-[clamp(2.75rem,7vw,6rem)] leading-[0.94] tracking-[-0.02em] text-cream">
                            Help us say
                            <br />
                            <span className="text-timber-gold-light">yes</span> to the next cat.
                        </h2>
                    </div>

                    {/* Right — copy + CTAs */}
                    <div className="lg:col-span-4 flex flex-col gap-8 lg:pt-8">
                        <p className="text-cream/70 text-base md:text-lg leading-[1.75] max-w-[38ch]">
                            Every donation, foster bed, and share helps us keep the door open for
                            the next wounded stray crossing our path.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <a
                                href={donateUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-timber-gold-light text-ink font-mono text-[10px] tracking-[0.18em] uppercase rounded-full hover:bg-cream transition-all duration-300"
                            >
                                <Heart className="w-3.5 h-3.5 fill-ink" />
                                Donate now
                                <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
                            </a>
                            <Link
                                href="/foster"
                                className="inline-flex items-center gap-2 px-6 py-3.5 border border-cream/25 text-cream font-mono text-[10px] tracking-[0.18em] uppercase rounded-full hover:bg-cream hover:text-ink hover:border-cream transition-all"
                            >
                                Become a foster
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hairline divider — large breathing room on both sides */}
            <div className="container mx-auto">
                <div className="h-px bg-cream/10" />
            </div>

            {/* Main masthead grid */}
            <div className="container mx-auto pt-20 md:pt-24 pb-16 md:pb-20">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 lg:gap-12">
                    {/* Brand */}
                    <div className="md:col-span-5 lg:col-span-5">
                        <div className="flex items-center gap-3 mb-6">
                            <Logo size={48} />
                            <span className="font-display text-xl text-cream leading-none">
                                Random Rescuer
                            </span>
                        </div>
                        <p className="text-cream/65 leading-[1.75] max-w-[38ch] mb-8">
                            A foster home-based cat rescue. We help where we can, when we can,
                            for anyone who crosses our path.
                        </p>

                        {/* Contact meta */}
                        <div className="space-y-2 font-mono text-[10px] tracking-[0.18em] uppercase text-cream/50">
                            <div>{links.location}</div>
                            <a
                                href={links.emailHref}
                                className="block hover:text-timber-gold-light transition-colors"
                            >
                                {links.email}
                            </a>
                            <div>Established 2018</div>
                        </div>
                    </div>

                    {/* Explore */}
                    <div className="md:col-span-3 lg:col-span-2">
                        <h3 className="font-mono text-[10px] tracking-[0.22em] uppercase text-timber-gold-light mb-6">
                            Explore
                        </h3>
                        <ul className="space-y-3.5">
                            {exploreLinks.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-cream/75 hover:text-cream transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="md:col-span-4 lg:col-span-3">
                        <h3 className="font-mono text-[10px] tracking-[0.22em] uppercase text-timber-gold-light mb-6">
                            Support
                        </h3>
                        <ul className="space-y-3.5">
                            {supportLinks.map((item) => (
                                <li key={item.label}>
                                    {item.external ? (
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group inline-flex items-center gap-1.5 text-sm text-cream/75 hover:text-cream transition-colors"
                                        >
                                            {item.label}
                                            <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                                        </a>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="text-sm text-cream/75 hover:text-cream transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="md:col-span-12 lg:col-span-2">
                        <h3 className="font-mono text-[10px] tracking-[0.22em] uppercase text-timber-gold-light mb-6">
                            Follow
                        </h3>
                        <div className="flex lg:flex-col gap-3">
                            {socials.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group inline-flex items-center gap-2.5 text-sm text-cream/75 hover:text-cream transition-colors"
                                        aria-label={social.label}
                                    >
                                        <div className="w-9 h-9 rounded-full border border-cream/15 group-hover:border-cream/50 flex items-center justify-center transition-colors">
                                            <Icon className="w-3.5 h-3.5" />
                                        </div>
                                        <span className="hidden lg:inline">{social.label}</span>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-cream/10">
                <div className="container mx-auto py-7">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
                        <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-cream/40">
                            © {new Date().getFullYear()} Random Rescuer · All rights reserved
                        </p>
                        <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-cream/40 italic">
                            &ldquo;If we can help, we will&rdquo; — Est. 2018
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
