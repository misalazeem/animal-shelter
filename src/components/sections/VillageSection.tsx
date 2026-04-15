'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { donateUrl } from '@/lib/links';

type Action = {
    num: string;
    title: string;
    lead: string;
    desc: string;
    href: string;
    external?: boolean;
};

const actions: Action[] = [
    {
        num: '01',
        title: 'Donate',
        lead: 'Fund the next rescue.',
        desc: 'Your dollars cover vet bills, vaccines, medication, and the emergencies we cannot plan for. Every amount helps.',
        href: donateUrl,
        external: true,
    },
    {
        num: '02',
        title: 'Foster',
        lead: 'Open your home.',
        desc: 'Give a cat a warm place to rest between street and forever. We cover supplies and support you the whole way.',
        href: '/foster',
    },
    {
        num: '03',
        title: 'Volunteer',
        lead: 'Drive, share, show up.',
        desc: 'Transport cats to vet visits. Share posts. Help at events. Every hand in the village matters.',
        href: '/foster#volunteer',
    },
];

export function VillageSection() {
    return (
        <section id="village" className="relative py-28 md:py-40 bg-bone-white overflow-hidden">
            <div className="container mx-auto">
                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 md:mb-24">
                    <div className="lg:col-span-6">
                        <div className="chapter-mark mb-8">
                            <span className="chapter-mark__num">06</span>
                            <span>Join the Village</span>
                        </div>
                        <h2 className="font-display text-[clamp(2.5rem,5.5vw,5rem)] leading-[0.98] tracking-[-0.02em] text-ink">
                            Rescue takes
                            <br />
                            <span className="text-heartbeat-clay">a village.</span>
                        </h2>
                    </div>
                    <p className="lg:col-span-6 lg:pt-20 text-lg text-ink-soft leading-[1.7] max-w-[52ch]">
                        We don&apos;t have deep pockets. We have you. Foster parents, volunteer drivers,
                        donors — you are why we can say <em className="text-heartbeat-clay not-italic">yes</em> to
                        the next wounded cat on the fence.
                    </p>
                </div>

                {/* Numbered action rows */}
                <div className="border-t border-paper-border">
                    {actions.map((action) => {
                        const content = (
                            <div className="grid grid-cols-12 gap-x-6 gap-y-4 md:gap-x-8 lg:gap-x-10 items-start py-10 md:py-14 group">
                                <div className="col-span-2 md:col-span-1">
                                    <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-timber-gold pt-2">
                                        {action.num}
                                    </div>
                                </div>
                                <div className="col-span-10 md:col-span-5">
                                    <h3 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink group-hover:text-heartbeat-clay transition-colors duration-500 leading-[0.95]">
                                        {action.title}.
                                    </h3>
                                    <p className="mt-3 font-display text-lg md:text-xl text-ink-soft">
                                        {action.lead}
                                    </p>
                                </div>
                                <div className="col-span-12 md:col-span-5 md:pt-2">
                                    <p className="text-ink-soft leading-[1.7] max-w-[42ch]">
                                        {action.desc}
                                    </p>
                                </div>
                                <div className="col-span-12 md:col-span-1 md:justify-self-end md:pt-2">
                                    <div className="w-11 h-11 rounded-full border border-ink/20 group-hover:bg-ink group-hover:border-ink flex items-center justify-center transition-all duration-300">
                                        <ArrowUpRight className="w-4 h-4 text-ink group-hover:text-cream transition-colors" />
                                    </div>
                                </div>
                            </div>
                        );

                        const wrapClasses = "block border-b border-paper-border hover:bg-cream transition-colors duration-500";

                        return action.external ? (
                            <a
                                key={action.title}
                                href={action.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={wrapClasses}
                            >
                                {content}
                            </a>
                        ) : (
                            <Link key={action.title} href={action.href} className={wrapClasses}>
                                {content}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
