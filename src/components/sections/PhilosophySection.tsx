'use client';

const pillars = [
    { num: '01', title: 'Trap', desc: 'Neuter · Return' },
    { num: '02', title: 'Foster', desc: 'Loving homes' },
    { num: '03', title: 'Treat', desc: 'Medical care' },
    { num: '04', title: 'Rehome', desc: 'Forever family' },
];

export function PhilosophySection() {
    return (
        <section id="philosophy" className="relative py-32 md:py-48 bg-cream paper-texture overflow-hidden">
            <div className="container mx-auto relative z-10">
                {/* Chapter mark */}
                <div className="flex justify-center mb-12 md:mb-16">
                    <div className="chapter-mark">
                        <span className="chapter-mark__num">05</span>
                        <span>The Philosophy</span>
                    </div>
                </div>

                {/* Massive quote */}
                <div className="text-center max-w-6xl mx-auto">
                    <p className="font-display text-[clamp(3rem,9vw,9rem)] leading-[0.92] tracking-[-0.03em] text-ink mb-8">
                        &ldquo;If we can help,
                        <br />
                        <span className="text-heartbeat-clay">we will.&rdquo;</span>
                    </p>
                    <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink-muted">
                        — Founding principle · Since 2018
                    </div>
                </div>

                {/* Sub-paragraph */}
                <p className="mt-16 md:mt-20 max-w-2xl mx-auto text-center text-lg md:text-xl text-ink-soft leading-[1.7]">
                    We didn&apos;t plan to be a rescue. But after Simon, the calls kept coming.
                    A random cat here. A stray there. Now it&apos;s what we do — for anyone who
                    crosses our path, whenever our means allow.
                </p>

                {/* Four pillars */}
                <div className="mt-24 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-px bg-paper-border border border-paper-border max-w-5xl mx-auto">
                    {pillars.map((item) => (
                        <div
                            key={item.title}
                            className="bg-cream p-8 md:p-10 text-center group hover:bg-bone-white transition-colors duration-500"
                        >
                            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-timber-gold mb-4">
                                {item.num}
                            </div>
                            <div className="font-display text-3xl md:text-4xl text-ink group-hover:text-heartbeat-clay transition-colors duration-300 mb-2">
                                {item.title}
                            </div>
                            <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink-muted">
                                {item.desc}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
