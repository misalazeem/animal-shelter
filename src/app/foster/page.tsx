'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { fosterApplicationUrl, adoptApplicationUrl } from '@/lib/links';

const benefits = [
    { num: '01', title: 'We cover costs', desc: 'Food, litter, medical, supplies — all on us. You bring the home.' },
    { num: '02', title: 'Flexible commitment', desc: 'Two weeks or six months. We match you with cats that fit your life.' },
    { num: '03', title: 'Full support', desc: 'Questions, emergencies, pet-intro coaching. Our team is one text away.' },
    { num: '04', title: 'Save a life', desc: 'Every foster bed we fill is one more cat who gets a second chance.' },
];

const steps = [
    { num: '01', title: 'Apply', desc: 'Fill out our short application form.' },
    { num: '02', title: 'Connect', desc: 'We review and reach out to chat.' },
    { num: '03', title: 'Match', desc: 'We find the right cat for your home.' },
    { num: '04', title: 'Foster', desc: 'Welcome them home.' },
];

const volunteerRoles = [
    { num: '01', title: 'Transport', desc: 'Help move cats to vet appointments and events.', commit: '2–4h / week' },
    { num: '02', title: 'Admin', desc: 'Applications, social media, coordination.', commit: '3–5h / week' },
    { num: '03', title: 'Events', desc: 'Adoption events, fundraisers, photo days.', commit: 'Monthly' },
];

export default function FosterPage() {
    return (
        <div className="min-h-screen pt-28 md:pt-36 bg-cream">
            {/* Hero */}
            <section className="container mx-auto pb-20 md:pb-28">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                    <div className="lg:col-span-7">
                        <div className="chapter-mark mb-8">
                            <span className="chapter-mark__num">01</span>
                            <span>Become a Foster</span>
                        </div>
                        <h1 className="font-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.94] tracking-[-0.02em] text-ink">
                            Open
                            <br />
                            <span className="text-heartbeat-clay">your home.</span>
                        </h1>
                    </div>
                    <div className="lg:col-span-5 lg:pt-16">
                        <p className="text-lg text-ink-soft leading-[1.7] max-w-[42ch]">
                            Foster homes are the heart of our rescue. You give a couch-surfer a
                            place to rest while they wait for forever. We handle the rest.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href={fosterApplicationUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-ink text-cream font-mono text-[10px] tracking-[0.18em] uppercase rounded-full hover:bg-heartbeat-clay transition-all"
                            >
                                Apply to foster
                                <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
                            </a>
                            <Link
                                href="#how-it-works"
                                className="inline-flex items-center gap-2 px-6 py-3.5 border border-ink/25 text-ink font-mono text-[10px] tracking-[0.18em] uppercase rounded-full hover:bg-ink hover:text-cream transition-all"
                            >
                                How it works
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="border-t border-paper-border py-20 md:py-28 bg-bone-white">
                <div className="container mx-auto">
                    <div className="chapter-mark mb-12">
                        <span className="chapter-mark__num">02</span>
                        <span>What&apos;s Included</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                        {benefits.map((b) => (
                            <div key={b.num} className="border-t border-paper-border pt-8">
                                <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-timber-gold mb-3">
                                    {b.num}
                                </div>
                                <h3 className="font-display text-3xl md:text-4xl text-ink mb-3">{b.title}</h3>
                                <p className="text-ink-soft leading-[1.7] max-w-[38ch]">{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section id="how-it-works" className="border-t border-paper-border py-20 md:py-28">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-12">
                        <div className="lg:col-span-6">
                            <div className="chapter-mark mb-6">
                                <span className="chapter-mark__num">03</span>
                                <span>How It Works</span>
                            </div>
                            <h2 className="font-display text-4xl md:text-6xl text-ink leading-[0.98]">
                                Four steps
                                <br />
                                <span className="text-heartbeat-clay">to foster.</span>
                            </h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-paper-border border border-paper-border">
                        {steps.map((step) => (
                            <div key={step.num} className="bg-cream p-8 md:p-10">
                                <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-timber-gold mb-4">
                                    {step.num}
                                </div>
                                <h3 className="font-display text-2xl md:text-3xl text-ink mb-2">{step.title}</h3>
                                <p className="text-sm text-ink-soft leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application CTA (hands off to Google Form) */}
            <section id="apply" className="border-t border-paper-border bg-ink text-cream py-20 md:py-28">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                        <div className="lg:col-span-6">
                            <div className="chapter-mark mb-6" style={{ color: 'var(--timber-gold-light)' }}>
                                <span className="chapter-mark__num" style={{ color: 'var(--timber-gold)' }}>04</span>
                                <span>The Application</span>
                            </div>
                            <h2 className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.98] tracking-[-0.02em] text-cream">
                                Ready to
                                <br />
                                <span className="text-timber-gold-light">foster a cat?</span>
                            </h2>
                        </div>

                        <div className="lg:col-span-6 lg:pt-20 space-y-8">
                            <p className="text-lg text-cream/70 leading-[1.7] max-w-[46ch]">
                                Our foster application is a short Google Form. Tell us about your
                                home, your pets, and your experience. We&apos;ll follow up within
                                24–48 hours to find the right match.
                            </p>

                            <ul className="space-y-3 text-cream/60">
                                {[
                                    'Takes about 5 minutes',
                                    'No financial commitment required',
                                    'We cover all supplies and medical',
                                    'You can pause anytime between fosters',
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3">
                                        <span className="w-1 h-1 rounded-full bg-timber-gold-light flex-shrink-0" />
                                        <span className="text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-3 pt-2">
                                <a
                                    href={fosterApplicationUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-2 px-7 py-4 bg-timber-gold-light text-ink font-mono text-[10px] tracking-[0.18em] uppercase rounded-full hover:bg-cream transition-all"
                                >
                                    Open the foster form
                                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
                                </a>
                                <a
                                    href={adoptApplicationUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-2 px-7 py-4 border border-cream/25 text-cream font-mono text-[10px] tracking-[0.18em] uppercase rounded-full hover:bg-cream hover:text-ink transition-all"
                                >
                                    Adoption form
                                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Volunteer */}
            <section id="volunteer" className="border-t border-paper-border py-20 md:py-28">
                <div className="container mx-auto">
                    <div className="chapter-mark mb-6">
                        <span className="chapter-mark__num">05</span>
                        <span>Other Ways</span>
                    </div>
                    <h2 className="font-display text-4xl md:text-6xl text-ink leading-[0.98] mb-12 max-w-3xl">
                        Can&apos;t foster?
                        <br />
                        <span className="text-heartbeat-clay">You can still help.</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {volunteerRoles.map((role) => (
                            <div key={role.num} className="border-t border-paper-border pt-8">
                                <div className="flex items-baseline justify-between mb-3">
                                    <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-timber-gold">{role.num}</span>
                                    <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-ink-muted">{role.commit}</span>
                                </div>
                                <h3 className="font-display text-3xl text-ink mb-3">{role.title}</h3>
                                <p className="text-ink-soft leading-[1.7]">{role.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
