'use client';

import { useState } from 'react';
import { ArrowUpRight, Mail, MapPin, Clock, Instagram, Facebook, Link as LinkIcon } from 'lucide-react';
import { links, donateUrl } from '@/lib/links';

const channels = [
    { icon: Instagram, label: 'Instagram', value: '@randomrescuer', href: links.instagram },
    { icon: Facebook, label: 'Facebook', value: 'randomrescuer7', href: links.facebook },
    { icon: LinkIcon, label: 'All Links', value: 'linktr.ee/randomrescuer', href: links.linktree },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for your message. We will get back to you soon.');
    };

    return (
        <div className="min-h-screen pt-28 md:pt-36 bg-cream">
            {/* Hero */}
            <section className="container mx-auto pb-16 md:pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                    <div className="lg:col-span-7">
                        <div className="chapter-mark mb-8">
                            <span className="chapter-mark__num">§</span>
                            <span>Say Hello</span>
                        </div>
                        <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.92] tracking-[-0.02em] text-ink">
                            Let&apos;s
                            <br />
                            <span className="text-heartbeat-clay">talk.</span>
                        </h1>
                    </div>
                    <div className="lg:col-span-5 lg:pt-20">
                        <p className="text-lg text-ink-soft leading-[1.7] max-w-[42ch]">
                            Adoption inquiries, fostering questions, or just a friendly hello —
                            we read every message.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content grid */}
            <section className="border-t border-paper-border py-16 md:py-24">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                        {/* Left — contact info */}
                        <div className="lg:col-span-5 space-y-12">
                            {/* Primary contact */}
                            <div>
                                <div className="chapter-mark mb-6">
                                    <span className="chapter-mark__num">01</span>
                                    <span>Direct</span>
                                </div>
                                <div className="space-y-6">
                                    <a
                                        href={links.emailHref}
                                        className="group block border-t border-paper-border pt-5"
                                    >
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase text-timber-gold mb-2">
                                                    <Mail className="w-3 h-3" />
                                                    Email
                                                </div>
                                                <div className="font-display text-2xl md:text-3xl text-ink group-hover:text-heartbeat-clay transition-colors">
                                                    {links.email}
                                                </div>
                                            </div>
                                            <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-heartbeat-clay transition-colors mt-2" />
                                        </div>
                                    </a>

                                    <div className="border-t border-paper-border pt-5">
                                        <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase text-timber-gold mb-2">
                                            <MapPin className="w-3 h-3" />
                                            Location
                                        </div>
                                        <div className="font-display text-2xl md:text-3xl text-ink">
                                            {links.location}
                                        </div>
                                        <p className="text-sm text-ink-muted mt-1">Foster-based · no public shelter</p>
                                    </div>

                                    <div className="border-t border-paper-border pt-5">
                                        <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase text-timber-gold mb-2">
                                            <Clock className="w-3 h-3" />
                                            Response
                                        </div>
                                        <div className="font-display text-2xl md:text-3xl text-ink">
                                            24-48 hours
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social */}
                            <div>
                                <div className="chapter-mark mb-6">
                                    <span className="chapter-mark__num">02</span>
                                    <span>Follow Along</span>
                                </div>
                                <div className="space-y-1">
                                    {channels.map((channel) => {
                                        const Icon = channel.icon;
                                        return (
                                            <a
                                                key={channel.label}
                                                href={channel.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group flex items-center justify-between gap-4 py-4 border-b border-paper-border hover:border-ink transition-colors"
                                            >
                                                <div className="flex items-center gap-4 min-w-0">
                                                    <div className="w-9 h-9 rounded-full border border-paper-border group-hover:border-ink flex items-center justify-center flex-shrink-0 transition-colors">
                                                        <Icon className="w-3.5 h-3.5 text-ink-soft group-hover:text-ink transition-colors" />
                                                    </div>
                                                    <div className="min-w-0">
                                                        <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-ink-muted">{channel.label}</div>
                                                        <div className="font-display text-lg text-ink truncate">{channel.value}</div>
                                                    </div>
                                                </div>
                                                <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-ink flex-shrink-0 transition-colors" />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Donate CTA */}
                            <a
                                href={donateUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block p-8 bg-ink text-cream rounded-sm hover:bg-heartbeat-clay transition-all"
                            >
                                <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-cream/60 mb-3">
                                    03 · Support
                                </div>
                                <div className="flex items-end justify-between gap-4">
                                    <div className="font-display text-3xl md:text-4xl leading-[0.95]">
                                        Donate to
                                        <br />
                                        the village.
                                    </div>
                                    <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300 flex-shrink-0" />
                                </div>
                            </a>
                        </div>

                        {/* Right — form */}
                        <div className="lg:col-span-7">
                            <div className="chapter-mark mb-6">
                                <span className="chapter-mark__num">§</span>
                                <span>Send a Message</span>
                            </div>
                            <h2 className="font-display text-4xl md:text-5xl text-ink leading-[0.98] mb-10">
                                Write us a<br />
                                <span className="text-heartbeat-clay">quick note.</span>
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block font-mono text-[10px] tracking-[0.18em] uppercase text-ink-muted mb-2">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="input"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-mono text-[10px] tracking-[0.18em] uppercase text-ink-muted mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="input"
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block font-mono text-[10px] tracking-[0.18em] uppercase text-ink-muted mb-2">
                                        Topic *
                                    </label>
                                    <select
                                        required
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        className="input"
                                    >
                                        <option value="">Select a topic...</option>
                                        <option value="adoption">Adoption inquiry</option>
                                        <option value="fostering">Fostering questions</option>
                                        <option value="volunteering">Volunteering</option>
                                        <option value="donation">Donation questions</option>
                                        <option value="lost-cat">Lost/found cat</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block font-mono text-[10px] tracking-[0.18em] uppercase text-ink-muted mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="input min-h-[180px] resize-y"
                                        placeholder="How can we help?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="group inline-flex items-center gap-2 px-7 py-4 bg-ink text-cream font-mono text-[10px] tracking-[0.18em] uppercase rounded-full hover:bg-heartbeat-clay transition-all"
                                >
                                    Send message
                                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
                                </button>
                            </form>

                            {/* FAQ */}
                            <div className="mt-16 pt-10 border-t border-paper-border">
                                <div className="chapter-mark mb-6">
                                    <span className="chapter-mark__num">FAQ</span>
                                    <span>Quick Answers</span>
                                </div>
                                <div className="space-y-6">
                                    {[
                                        { q: 'How do I adopt?', a: 'Browse adoptable cats, then fill out our adoption application form. We review each application carefully and match you with the right cat.' },
                                        { q: 'Do you have a shelter?', a: 'We are 100% foster-based. All cats live in loving homes until adoption.' },
                                        { q: 'How can I foster?', a: 'Fill out our foster application form. We cover food, medical, and supplies — you bring the home and heart.' },
                                    ].map((item, i) => (
                                        <div key={item.q} className="grid grid-cols-12 gap-4 border-t border-paper-border pt-5">
                                            <div className="col-span-1 font-mono text-[10px] tracking-[0.18em] uppercase text-timber-gold">
                                                0{i + 1}
                                            </div>
                                            <div className="col-span-11">
                                                <h3 className="font-display text-xl text-ink mb-1">{item.q}</h3>
                                                <p className="text-ink-soft leading-[1.7]">{item.a}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
