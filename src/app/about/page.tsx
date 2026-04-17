'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { donateUrl } from '@/lib/links';

const timeline = [
    { year: '2018', title: 'Simon changes everything', desc: 'A wounded tabby crossed our path on Mother\'s Day. Rescue began with one cat who refused to give up.' },
    { year: '2019', title: 'Growing the village', desc: 'Foster families joined the mission. A community began to form around every rescued cat.' },
    { year: '2020', title: 'The COVID plunge', desc: 'Street cats needed help more than ever. We took the leap — all in, no safety net, sink or swim.' },
    { year: '2022', title: '100+ rescues', desc: 'Every one of them a story. Every one of them a village moment.' },
    { year: 'Now', title: 'Still going strong', desc: 'If we can help, we will. That hasn\'t changed. It won\'t.' },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-28 md:pt-36 bg-cream">
            {/* Hero */}
            <section className="container mx-auto pb-20 md:pb-28">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                    <div className="lg:col-span-7">
                        <div className="chapter-mark mb-8">
                            <span className="chapter-mark__num">01</span>
                            <span>Who We Are</span>
                        </div>
                        <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.92] tracking-[-0.02em] text-ink">
                            A rescue built
                            <br />
                            <span className="text-heartbeat-clay">by the village</span>
                            <br />
                            <span className="text-ink-soft">it serves.</span>
                        </h1>
                    </div>
                    <div className="lg:col-span-5 lg:pt-20">
                        <p className="text-lg text-ink-soft leading-[1.7] max-w-[42ch]">
                            Random Rescuer is a foster home-based not-for-profit cat rescue.
                            Continuously growing since June 2018 — before our name was even a thought.
                        </p>
                    </div>
                </div>
            </section>

            {/* Origin story */}
            <section id="simon" className="border-t border-paper-border py-20 md:py-32">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                        <div className="lg:col-span-4">
                            <div className="chapter-mark mb-6">
                                <span className="chapter-mark__num">02</span>
                                <span>Origin</span>
                            </div>
                            <h2 className="font-display text-4xl md:text-5xl text-ink leading-[0.98] tracking-[-0.02em]">
                                It began with
                                <br />
                                <span className="text-heartbeat-clay">Simon.</span>
                            </h2>
                        </div>

                        <div className="lg:col-span-8 space-y-6 text-ink-soft leading-[1.75] text-base md:text-lg">
                            <p className="drop-cap">
                                Our rescue began with a single cat, later named Simon, who crossed
                                our path, wounded, on Mother&apos;s Day of 2018. In an effort to help him,
                                he hissed and ran off only to stop in front of our car out of nowhere
                                just two weeks later.
                            </p>
                            <p>
                                It was at this time, when we looked at each other beneath the car he
                                sauntered over to and laid beneath, that I saw how tired he was of
                                living on the streets. This was not his choice. Simon was jaded, and
                                like most street cats, he lacked trust with people.
                            </p>

                            <blockquote className="pull-quote mt-10">
                                Simon taught me just how challenging rescue is while also being
                                deeply rewarding.
                                <span className="pull-quote__cite">— Hailey Kartash</span>
                            </blockquote>

                            <p>
                                His rescue was a rollercoaster of foster placement hopping and
                                fundraising for his medical care. He was a &ldquo;couch surfer,&rdquo;
                                finding respite wherever he landed, as long as it wasn&apos;t the
                                streets. That willingness to settle anywhere confirmed: he really
                                didn&apos;t want to live out there.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="border-t border-paper-border bg-bone-white py-20 md:py-28">
                <div className="container mx-auto">
                    <div className="chapter-mark mb-12">
                        <span className="chapter-mark__num">03</span>
                        <span>The Journey</span>
                    </div>
                    <h2 className="font-display text-4xl md:text-6xl text-ink leading-[0.98] mb-16 max-w-4xl">
                        From one wounded cat
                        <br />
                        to a <span className="text-heartbeat-clay">thriving village.</span>
                    </h2>

                    <ol className="border-t border-paper-border">
                        {timeline.map((item) => (
                            <li
                                key={item.year}
                                className="grid grid-cols-12 gap-x-6 gap-y-3 md:gap-x-10 py-7 md:py-9 border-b border-paper-border group"
                            >
                                <div className="col-span-3 md:col-span-2">
                                    <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-timber-gold">
                                        {item.year}
                                    </div>
                                </div>
                                <div className="col-span-9 md:col-span-5">
                                    <h3 className="font-display text-2xl md:text-3xl text-ink group-hover:text-heartbeat-clay transition-colors duration-500">
                                        {item.title}
                                    </h3>
                                </div>
                                <div className="col-span-12 md:col-span-5">
                                    <p className="text-ink-soft leading-[1.7]">{item.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* Founder */}
            <section className="border-t border-paper-border py-20 md:py-32">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                        <div className="lg:col-span-4">
                            <div className="chapter-mark mb-6">
                                <span className="chapter-mark__num">04</span>
                                <span>The Founder</span>
                            </div>
                            <h2 className="font-display text-4xl md:text-5xl text-ink leading-[0.98] tracking-[-0.02em]">
                                Meet
                                <br />
                                <span className="text-heartbeat-clay">Hailey.</span>
                            </h2>
                        </div>

                        <div className="lg:col-span-8 space-y-5 text-ink-soft leading-[1.75] text-base md:text-lg">
                            <p className="drop-cap">
                                Growing up, I had a natural draw to animals. Cats were a part of my
                                childhood. Rescue was a dream I didn&apos;t think would ever become a
                                reality — the intricacies felt too big, the funding too distant.
                            </p>
                            <p>
                                I am not a person with deep pockets. But Simon taught me that with
                                faith in others — and remembering that there are so many others like
                                me who can help in some ways, but not all — together, we can
                                accomplish whatever we need.
                            </p>

                            <blockquote className="pull-quote mt-10">
                                As long as funding is flowing, this rescue will keep moving forward.
                                <span className="pull-quote__cite">— Hailey Kartash, Founder</span>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="border-t border-paper-border bg-ink text-cream py-20">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                        {[
                            { num: '200+', label: 'Cats Rescued' },
                            { num: '50+', label: 'Foster Families' },
                            { num: '6+', label: 'Years Strong' },
                            { num: '100%', label: 'Volunteer-Run' },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <div className="font-display text-5xl md:text-7xl leading-none text-cream">
                                    {stat.num}
                                </div>
                                <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-cream/50 mt-3">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto text-center max-w-3xl">
                    <h2 className="font-display text-4xl md:text-6xl text-ink leading-[0.98] mb-6">
                        Join our <span className="text-heartbeat-clay">village.</span>
                    </h2>
                    <p className="text-lg text-ink-soft mb-10 max-w-xl mx-auto">
                        Whether you foster, donate, or volunteer — you are the reason we can say yes
                        to the next cat in need.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href={donateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-ink text-cream font-mono text-[10px] tracking-[0.18em] uppercase rounded-full hover:bg-heartbeat-clay transition-all"
                        >
                            Donate today
                            <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
                        </a>
                        <Link
                            href="/foster"
                            className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-ink/30 text-ink font-mono text-[10px] tracking-[0.18em] uppercase rounded-full hover:bg-heartbeat-clay hover:text-cream hover:border-heartbeat-clay transition-[background-color,border-color,color] duration-300"
                        >
                            Become a foster
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
