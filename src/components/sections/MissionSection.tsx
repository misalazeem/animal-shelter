'use client';

export function MissionSection() {
    return (
        <section id="mission" className="relative py-28 md:py-40 bg-bone-white paper-texture overflow-hidden">
            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                    {/* Left — chapter mark + headline */}
                    <div className="lg:col-span-5">
                        <div className="chapter-mark mb-8">
                            <span className="chapter-mark__num">02</span>
                            <span>Our Mission</span>
                        </div>

                        <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.02] tracking-[-0.02em] text-ink">
                            A safe haven
                            <br />
                            <span className="text-heartbeat-clay">for the</span>
                            <br />
                            <span className="text-ink-soft">overlooked.</span>
                        </h2>
                    </div>

                    {/* Right — body text with drop cap */}
                    <div className="lg:col-span-7 lg:pt-16">
                        <p className="drop-cap text-lg md:text-xl leading-[1.75] text-ink-soft mb-8 max-w-[58ch]">
                            Random Rescuer is a foster home-based, not-for-profit cat rescue.
                            We focus on seniors, cats with medical needs, and the overlooked adults
                            the streets left behind. We don&apos;t have deep pockets — we have a village.
                            And when we can help, we will.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 pt-10 border-t border-paper-border">
                            {[
                                { label: 'We Do', value: 'Trap · Neuter · Return' },
                                { label: 'We Host', value: 'Foster families citywide' },
                                { label: 'We Treat', value: 'Medical · Senior · Chronic' },
                                { label: 'We Rehome', value: 'Forever families only' },
                            ].map((item) => (
                                <div key={item.label}>
                                    <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-timber-gold mb-1">
                                        {item.label}
                                    </div>
                                    <div className="font-display text-lg md:text-xl text-ink">
                                        {item.value}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
