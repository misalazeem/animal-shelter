'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { Heart, Calendar, Users, Award } from 'lucide-react';

const timeline = [
    {
        year: '2018',
        title: 'Simon Changes Everything',
        description: 'A wounded cat on Mother\'s Day becomes the catalyst for Random Rescuer.',
        icon: '🧡',
    },
    {
        year: '2019',
        title: 'Growing the Village',
        description: 'Foster families join our mission. The community begins to form.',
        icon: '🏠',
    },
    {
        year: '2020',
        title: 'The COVID Challenge',
        description: 'We take the plunge all in, helping cats during the rescue crisis.',
        icon: '💪',
    },
    {
        year: '2022',
        title: '100+ Rescues',
        description: 'A milestone reached through community support and dedication.',
        icon: '🎉',
    },
    {
        year: '2024',
        title: 'Still Going Strong',
        description: 'Continuing our mission: if we can help, we will.',
        icon: '✨',
    },
];

export default function AboutPage() {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    });
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);

    return (
        <div className="min-h-screen pt-20 md:pt-24 bg-bone-white">
            {/* Hero Section */}
            <section ref={heroRef} className="relative py-20 md:py-32 overflow-hidden">
                <motion.div
                    style={{ y: heroY }}
                    className="absolute inset-0 bg-gradient-to-br from-rescue-olive to-rescue-olive-dark"
                />
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 30% 70%, rgba(198, 156, 109, 0.4) 0%, transparent 50%)`,
                    }} />
                </div>

                <div className="container mx-auto px-4 md:px-8 relative z-10 text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <span className="inline-block px-4 py-1 bg-timber-gold/20 rounded-full text-timber-gold text-sm font-medium mb-6">
                            Our Story
                        </span>
                        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-timber-gold mb-6">
                            Who is Random Rescuer?
                        </h1>
                        <p className="text-xl text-bone-white/90 leading-relaxed">
                            A foster home-based not-for-profit cat rescue that has been
                            continuously growing since June 2018—before our name was even a thought!
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Origin Story */}
            <section id="simon" className="py-20 md:py-32">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-4 py-1 bg-timber-gold/20 rounded-full text-timber-gold-dark text-sm font-medium mb-6">
                                Where It All Began
                            </span>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-rescue-olive mb-6">
                                Our Rescue Began with Simon
                            </h2>
                            <div className="space-y-4 text-rescue-olive/80 leading-relaxed">
                                <p>
                                    Our rescue began with a single cat, later named <strong className="text-rescue-olive">Simon</strong>,
                                    who crossed our path, wounded on Mother&apos;s Day of 2018.
                                </p>
                                <p>
                                    In an effort to help him, he hissed and ran off only to stop in front of our
                                    car out of nowhere just 2 weeks later. It was at this time when we looked at
                                    each other beneath the car he sauntered over to and laid beneath, that I saw
                                    how tired he was of living on the streets.
                                </p>
                                <blockquote className="border-l-4 border-timber-gold pl-6 py-2 italic text-lg text-rescue-olive my-6">
                                    &ldquo;This was not his choice and it wasn&apos;t what he wanted. Simon was jaded
                                    and like most street cats, he lacked trust with people.&rdquo;
                                </blockquote>
                                <p>
                                    Simon taught me just how challenging rescue is while also being deeply rewarding
                                    when I get to see how a cat&apos;s life shifts from struggling to exist on the streets
                                    to lazing in the comfort of a home.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-square rounded-3xl bg-gradient-to-br from-timber-gold/30 to-rescue-olive/30 flex items-center justify-center shadow-2xl">
                                <motion.span
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="text-[120px]"
                                >
                                    🧡
                                </motion.span>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl"
                            >
                                <p className="text-rescue-olive font-heading font-bold text-lg">Simon</p>
                                <p className="text-rescue-olive-light text-sm">The Original Random Rescue</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-cream">
                <div className="container mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-rescue-olive mb-4">
                            Our Journey
                        </h2>
                        <p className="text-rescue-olive/70 max-w-xl mx-auto">
                            From one wounded cat to a thriving community of rescuers, fosters, and supporters.
                        </p>
                    </motion.div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Timeline Line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-timber-gold/30 -translate-x-1/2" />

                        {timeline.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex items-center gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Content */}
                                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-16 md:pl-0`}>
                                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-bone-white-dark">
                                        <span className="text-heartbeat-clay font-bold text-lg">{item.year}</span>
                                        <h3 className="font-heading text-xl font-bold text-rescue-olive mt-1 mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-rescue-olive/70">{item.description}</p>
                                    </div>
                                </div>

                                {/* Icon */}
                                <div className="absolute left-8 md:static md:flex-shrink-0 -translate-x-1/2 md:translate-x-0">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="w-16 h-16 rounded-full bg-timber-gold flex items-center justify-center shadow-lg text-2xl"
                                    >
                                        {item.icon}
                                    </motion.div>
                                </div>

                                {/* Spacer */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet Hailey */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-2 lg:order-1"
                        >
                            <div className="aspect-square rounded-3xl bg-gradient-to-br from-heartbeat-clay/30 to-timber-gold/30 flex items-center justify-center shadow-2xl max-w-md mx-auto">
                                <motion.span
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="text-[100px]"
                                >
                                    👩‍⚕️
                                </motion.span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-1 lg:order-2"
                        >
                            <span className="inline-block px-4 py-1 bg-heartbeat-clay/10 rounded-full text-heartbeat-clay text-sm font-medium mb-6">
                                The Founder
                            </span>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-rescue-olive mb-6">
                                Meet Hailey Kartash
                            </h2>
                            <div className="space-y-4 text-rescue-olive/80 leading-relaxed">
                                <p className="text-lg italic border-l-4 border-heartbeat-clay pl-6">
                                    &ldquo;I fell into the rescue world in 2018 because of a cat sitting on a fence,
                                    bleeding around his neck. I didn&apos;t know I needed him to push me.&rdquo;
                                </p>
                                <p>
                                    Growing up, I had a natural draw to animals. Cats were a part of my childhood.
                                    Rescue was a dream and wish that I actually didn&apos;t think would ever become a
                                    reality due to all the intricacies involved.
                                </p>
                                <p>
                                    I am not a person with deep pockets. But Simon taught me that with faith in
                                    others—and always remembering that there are so many like me, who can help in
                                    some ways, but not in all ways—together, we can accomplish whatever we need
                                    to help these animals.
                                </p>
                                <p className="font-semibold text-rescue-olive">
                                    &ldquo;As long as funding is flowing, this rescue will keep moving forward.&rdquo;
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-rescue-olive">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { icon: Heart, number: '200+', label: 'Cats Rescued' },
                            { icon: Users, number: '50+', label: 'Foster Families' },
                            { icon: Calendar, number: '6+', label: 'Years Strong' },
                            { icon: Award, number: '100%', label: 'Volunteer-Run' },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <stat.icon className="w-8 h-8 mx-auto mb-3 text-timber-gold" />
                                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                                    {stat.number}
                                </div>
                                <div className="text-bone-white/70 text-sm">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto"
                    >
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-rescue-olive mb-4">
                            Join Our Village
                        </h2>
                        <p className="text-rescue-olive/70 mb-8">
                            Whether you foster, donate, or volunteer—you are the reason we can
                            say &ldquo;Yes&rdquo; to the next cat in need.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/donate" className="btn btn-primary">
                                <Heart className="w-5 h-5" />
                                Donate Today
                            </Link>
                            <Link href="/foster" className="btn btn-secondary">
                                <Users className="w-5 h-5" />
                                Become a Foster
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
