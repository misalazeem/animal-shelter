'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
    LayoutDashboard,
    Cat,
    PlusCircle,
    Settings,
    LogOut,
    TrendingUp,
    Users,
    Heart,
    DollarSign,
    Bell,
    Share2,
} from 'lucide-react';
import { animals } from '@/data/animals';

const stats = [
    { label: 'Total Animals', value: animals.length, icon: Cat, color: 'bg-rescue-olive' },
    { label: 'Available', value: animals.filter(a => a.status === 'available').length, icon: Heart, color: 'bg-timber-gold' },
    { label: 'Pending Adoption', value: animals.filter(a => a.status === 'pending').length, icon: TrendingUp, color: 'bg-heartbeat-clay' },
    { label: 'Adopted', value: animals.filter(a => a.status === 'adopted').length, icon: DollarSign, color: 'bg-green-500' },
];

const recentActivity = [
    { action: 'New foster application', time: '2 hours ago', icon: Users },
    { action: 'Whiskers profile updated', time: '5 hours ago', icon: Cat },
    { action: 'Donation received: $50', time: '1 day ago', icon: DollarSign },
    { action: 'New adoption inquiry: Patches', time: '2 days ago', icon: Heart },
];

export function AdminDashboardClient() {
    const router = useRouter();

    const handleLogout = async () => {
        await fetch('/api/auth/logout', { method: 'POST' });
        router.push('/admin');
    };

    return (
        <div className="min-h-screen bg-bone-white">
            {/* Sidebar */}
            <aside className="fixed left-0 top-0 h-full w-64 bg-rescue-olive text-white hidden lg:block">
                <div className="p-6">
                    {/* Logo */}
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-full bg-timber-gold flex items-center justify-center">
                            <span className="font-bold text-rescue-olive">R</span>
                        </div>
                        <div>
                            <h1 className="font-heading font-bold text-timber-gold">Admin</h1>
                            <p className="text-xs text-bone-white/70">Random Rescuer</p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="space-y-2">
                        <Link
                            href="/admin/dashboard"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 text-white"
                        >
                            <LayoutDashboard className="w-5 h-5" />
                            Dashboard
                        </Link>
                        <Link
                            href="/admin/animals"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-bone-white/70 hover:bg-white/5 hover:text-white transition-colors"
                        >
                            <Cat className="w-5 h-5" />
                            Animals
                        </Link>
                        <Link
                            href="/admin/animals/new"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-bone-white/70 hover:bg-white/5 hover:text-white transition-colors"
                        >
                            <PlusCircle className="w-5 h-5" />
                            Add Animal
                        </Link>
                        <Link
                            href="/admin/settings"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-bone-white/70 hover:bg-white/5 hover:text-white transition-colors"
                        >
                            <Settings className="w-5 h-5" />
                            Settings
                        </Link>
                    </nav>
                </div>

                {/* Logout Button */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-bone-white/70 hover:bg-white/5 hover:text-white transition-colors"
                    >
                        <LogOut className="w-5 h-5" />
                        Logout
                    </button>
                </div>
            </aside>

            {/* Mobile Header */}
            <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-rescue-olive text-white z-50 flex items-center justify-between px-4">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-timber-gold flex items-center justify-center">
                        <span className="font-bold text-rescue-olive text-sm">R</span>
                    </div>
                    <span className="font-heading font-bold text-timber-gold">Admin</span>
                </div>
                <button onClick={handleLogout}>
                    <LogOut className="w-5 h-5" />
                </button>
            </header>

            {/* Main Content */}
            <main className="lg:ml-64 pt-16 lg:pt-0 min-h-screen">
                <div className="p-6 lg:p-10">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="font-heading text-2xl lg:text-3xl font-bold text-rescue-olive">
                            Welcome back! 👋
                        </h1>
                        <p className="text-rescue-olive-light">
                            Here&apos;s what&apos;s happening with your rescue today.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-5 shadow-lg border border-bone-white-dark"
                            >
                                <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center mb-3`}>
                                    <stat.icon className="w-5 h-5 text-white" />
                                </div>
                                <p className="text-2xl font-bold text-rescue-olive">{stat.value}</p>
                                <p className="text-sm text-rescue-olive-light">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Quick Actions */}
                    <div className="grid lg:grid-cols-2 gap-6 mb-8">
                        {/* Add New Animal */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Link href="/admin/animals/new">
                                <div className="bg-gradient-to-br from-heartbeat-clay to-heartbeat-clay-dark rounded-2xl p-6 text-white cursor-pointer hover:shadow-xl transition-shadow">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                                            <PlusCircle className="w-7 h-7" />
                                        </div>
                                        <div>
                                            <h3 className="font-heading font-bold text-xl">Add New Animal</h3>
                                            <p className="text-white/80">Post a new cat for adoption</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>

                        {/* Social Media Integration */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="bg-gradient-to-br from-timber-gold to-timber-gold-dark rounded-2xl p-6 text-white">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                                        <Share2 className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading font-bold text-xl">Social Posting</h3>
                                        <p className="text-white/80">Auto-post to connected platforms</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Recent Activity & Animals */}
                    <div className="grid lg:grid-cols-2 gap-6">
                        {/* Recent Activity */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="bg-white rounded-2xl p-6 shadow-lg border border-bone-white-dark"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-heading font-bold text-lg text-rescue-olive">
                                    Recent Activity
                                </h3>
                                <Bell className="w-5 h-5 text-rescue-olive-light" />
                            </div>
                            <div className="space-y-4">
                                {recentActivity.map((activity, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-full bg-bone-white flex items-center justify-center flex-shrink-0">
                                            <activity.icon className="w-4 h-4 text-rescue-olive" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-rescue-olive">{activity.action}</p>
                                            <p className="text-xs text-rescue-olive-light">{activity.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Recent Animals */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="bg-white rounded-2xl p-6 shadow-lg border border-bone-white-dark"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-heading font-bold text-lg text-rescue-olive">
                                    Latest Animals
                                </h3>
                                <Link href="/admin/animals" className="text-sm text-heartbeat-clay hover:underline">
                                    View All
                                </Link>
                            </div>
                            <div className="space-y-4">
                                {animals.slice(0, 4).map((animal) => (
                                    <div key={animal.id} className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-timber-gold/20 to-rescue-olive/20 flex items-center justify-center">
                                            <span className="text-xl">🐱</span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-semibold text-rescue-olive">{animal.name}</p>
                                            <p className="text-xs text-rescue-olive-light">{animal.breed}</p>
                                        </div>
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${animal.status === 'available' ? 'bg-rescue-olive/10 text-rescue-olive' :
                                                animal.status === 'pending' ? 'bg-timber-gold/10 text-timber-gold-dark' :
                                                    'bg-heartbeat-clay/10 text-heartbeat-clay'
                                            }`}>
                                            {animal.status}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Mobile Navigation */}
                    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-bone-white-dark flex justify-around py-3 z-50">
                        <Link href="/admin/dashboard" className="flex flex-col items-center gap-1 text-rescue-olive">
                            <LayoutDashboard className="w-5 h-5" />
                            <span className="text-xs">Dashboard</span>
                        </Link>
                        <Link href="/admin/animals" className="flex flex-col items-center gap-1 text-rescue-olive-light">
                            <Cat className="w-5 h-5" />
                            <span className="text-xs">Animals</span>
                        </Link>
                        <Link href="/admin/animals/new" className="flex flex-col items-center gap-1 text-rescue-olive-light">
                            <PlusCircle className="w-5 h-5" />
                            <span className="text-xs">Add</span>
                        </Link>
                        <Link href="/admin/settings" className="flex flex-col items-center gap-1 text-rescue-olive-light">
                            <Settings className="w-5 h-5" />
                            <span className="text-xs">Settings</span>
                        </Link>
                    </nav>
                </div>
            </main>
        </div>
    );
}
