'use client';

import { Instagram, Facebook, Link as LinkIcon, Heart, Home, Mail, ArrowUpRight } from 'lucide-react';
import { links, donateUrl } from '@/lib/links';

type ConnectLink = {
    num: string;
    icon: typeof Instagram;
    label: string;
    sub: string;
    href: string;
    external: boolean;
};

const connectLinks: ConnectLink[] = [
    { num: '01', icon: Heart, label: 'Donate', sub: 'Fuel the next rescue', href: donateUrl, external: true },
    { num: '02', icon: Instagram, label: 'Instagram', sub: '@randomrescuer', href: links.instagram, external: true },
    { num: '03', icon: Facebook, label: 'Facebook', sub: 'randomrescuer7', href: links.facebook, external: true },
    { num: '04', icon: LinkIcon, label: 'All Our Links', sub: 'linktr.ee/randomrescuer', href: links.linktree, external: true },
    { num: '05', icon: Home, label: 'Foster', sub: 'Open your heart & home', href: '/foster', external: false },
    { num: '06', icon: Mail, label: 'Contact', sub: links.email, href: '/contact', external: false },
];

export function ConnectSection() {
    return (
        <section id="connect" className="relative py-28 md:py-40 bg-ink text-cream overflow-hidden">
            {/* Warm ambient glow */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-timber-gold/20 blur-[140px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-heartbeat-clay/15 blur-[140px]" />
            </div>

            <div className="container mx-auto relative z-10">
                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 md:mb-20">
                    <div className="lg:col-span-6">
                        <div className="chapter-mark mb-8" style={{ color: 'var(--timber-gold-light)' }}>
                            <span className="chapter-mark__num" style={{ color: 'var(--timber-gold)' }}>07</span>
                            <span>Stay Connected</span>
                        </div>
                        <h2 className="font-display text-[clamp(2.5rem,5.5vw,5rem)] leading-[0.98] tracking-[-0.02em] text-cream">
                            One village.
                            <br />
                            <span className="text-timber-gold-light">Many ways to help.</span>
                        </h2>
                    </div>
                    <p className="lg:col-span-6 lg:pt-20 text-lg text-cream/60 leading-[1.7] max-w-[48ch]">
                        Follow along, reach out, or send a donation. Every tap is one more paw on solid ground.
                    </p>
                </div>

                {/* Link grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 border-t border-cream/10">
                    {connectLinks.map((link, index) => {
                        const Icon = link.icon;
                        const isLeftCol = index % 2 === 0;
                        const content = (
                            <div className={`group relative flex items-center justify-between gap-6 py-7 md:py-8 px-1 md:px-6 border-b border-cream/10 ${isLeftCol ? 'md:border-r md:border-cream/10' : ''} hover:bg-cream/[0.03] transition-colors duration-500`}>
                                <div className="flex items-center gap-6 min-w-0">
                                    <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-timber-gold-light flex-shrink-0">
                                        {link.num}
                                    </div>
                                    <div className="w-11 h-11 rounded-full border border-cream/15 text-cream/70 group-hover:text-timber-gold-light group-hover:border-timber-gold-light group-hover:bg-timber-gold-light/10 flex items-center justify-center flex-shrink-0 transition-[background-color,border-color,color] duration-300">
                                        <Icon className="w-4 h-4" />
                                    </div>
                                    <div className="min-w-0">
                                        <div className="font-display text-2xl md:text-3xl text-cream leading-none group-hover:text-timber-gold-light transition-colors">
                                            {link.label}
                                        </div>
                                        <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-cream/40 mt-2 truncate">
                                            {link.sub}
                                        </div>
                                    </div>
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-cream/40 group-hover:text-timber-gold-light group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                            </div>
                        );

                        return link.external ? (
                            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                                {content}
                            </a>
                        ) : (
                            <a key={link.label} href={link.href}>{content}</a>
                        );
                    })}
                </div>

                {/* Closing tag */}
                <div className="mt-20 text-center font-mono text-[11px] tracking-[0.3em] uppercase text-cream/30">
                    If we can help · <span className="text-timber-gold-light/70">we will</span>
                </div>
            </div>
        </section>
    );
}
