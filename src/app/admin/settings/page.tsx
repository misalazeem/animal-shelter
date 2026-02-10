'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import {
    ArrowLeft,
    Settings,
    User,
    Bell,
    Share2,
    Shield,
    Globe,
    Save,
    Facebook,
    Instagram,
    Twitter,
    Check,
    X,
    Mail,
    Phone,
} from 'lucide-react';

const socialPlatforms = [
    { id: 'facebook', name: 'Facebook', icon: Facebook, color: 'bg-blue-600', connected: true },
    { id: 'instagram', name: 'Instagram', icon: Instagram, color: 'bg-gradient-to-r from-purple-500 to-pink-500', connected: true },
    { id: 'twitter', name: 'X (Twitter)', icon: Twitter, color: 'bg-black', connected: false },
];

export default function AdminSettingsPage() {
    const [activeTab, setActiveTab] = useState('general');
    const [isSaving, setIsSaving] = useState(false);
    const [settings, setSettings] = useState({
        organizationName: 'Random Rescuer',
        email: 'info@randomrescuer.org',
        phone: '(555) 123-4567',
        address: 'Serving Our Local Community',
        timezone: 'America/New_York',
        autoPostEnabled: true,
        emailNotifications: true,
        applicationAlerts: true,
        donationAlerts: true,
    });

    const tabs = [
        { id: 'general', label: 'General', icon: Settings },
        { id: 'social', label: 'Social Media', icon: Share2 },
        { id: 'notifications', label: 'Notifications', icon: Bell },
        { id: 'security', label: 'Security', icon: Shield },
    ];

    const handleSave = async () => {
        setIsSaving(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsSaving(false);
    };

    return (
        <div className="min-h-screen bg-bone-white lg:ml-64 pt-16 lg:pt-0">
            <div className="p-6 lg:p-10 pb-32 lg:pb-10">
                {/* Header */}
                <div className="mb-8">
                    <Link
                        href="/admin/dashboard"
                        className="inline-flex items-center gap-2 text-rescue-olive hover:text-heartbeat-clay transition-colors mb-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Dashboard
                    </Link>
                    <h1 className="font-heading text-2xl lg:text-3xl font-bold text-rescue-olive">
                        Settings
                    </h1>
                    <p className="text-rescue-olive-light">
                        Manage your rescue&apos;s configuration and integrations
                    </p>
                </div>

                <div className="grid lg:grid-cols-4 gap-6">
                    {/* Tabs Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl p-4 shadow-lg border border-bone-white-dark">
                            <nav className="space-y-1">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${activeTab === tab.id
                                                ? 'bg-rescue-olive text-white'
                                                : 'text-rescue-olive hover:bg-bone-white'
                                            }`}
                                    >
                                        <tab.icon className="w-5 h-5" />
                                        {tab.label}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="lg:col-span-3">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white rounded-2xl p-6 shadow-lg border border-bone-white-dark"
                        >
                            {/* General Settings */}
                            {activeTab === 'general' && (
                                <div className="space-y-6">
                                    <h2 className="font-heading text-xl font-bold text-rescue-olive mb-6">
                                        General Settings
                                    </h2>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-rescue-olive mb-2">
                                                Organization Name
                                            </label>
                                            <input
                                                type="text"
                                                value={settings.organizationName}
                                                onChange={(e) => setSettings({ ...settings, organizationName: e.target.value })}
                                                className="input"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-rescue-olive mb-2">
                                                Timezone
                                            </label>
                                            <select
                                                value={settings.timezone}
                                                onChange={(e) => setSettings({ ...settings, timezone: e.target.value })}
                                                className="input"
                                            >
                                                <option value="America/New_York">Eastern Time</option>
                                                <option value="America/Chicago">Central Time</option>
                                                <option value="America/Denver">Mountain Time</option>
                                                <option value="America/Los_Angeles">Pacific Time</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="border-t border-bone-white-dark pt-6">
                                        <h3 className="font-semibold text-rescue-olive mb-4 flex items-center gap-2">
                                            <Globe className="w-5 h-5 text-timber-gold" />
                                            Contact Information
                                        </h3>

                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-rescue-olive mb-2">
                                                    Email Address
                                                </label>
                                                <div className="relative">
                                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-rescue-olive-light" />
                                                    <input
                                                        type="email"
                                                        value={settings.email}
                                                        onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                                                        className="input pl-12"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-rescue-olive mb-2">
                                                    Phone Number
                                                </label>
                                                <div className="relative">
                                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-rescue-olive-light" />
                                                    <input
                                                        type="tel"
                                                        value={settings.phone}
                                                        onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                                                        className="input pl-12"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-rescue-olive mb-2">
                                                    Address / Location
                                                </label>
                                                <input
                                                    type="text"
                                                    value={settings.address}
                                                    onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                                                    className="input"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Social Media Settings */}
                            {activeTab === 'social' && (
                                <div className="space-y-6">
                                    <h2 className="font-heading text-xl font-bold text-rescue-olive mb-6">
                                        Social Media Integrations
                                    </h2>

                                    <p className="text-rescue-olive-light mb-6">
                                        Connect your social media accounts to automatically post when new animals are added.
                                    </p>

                                    {/* Auto-Post Toggle */}
                                    <div className="flex items-center justify-between p-4 bg-bone-white rounded-xl">
                                        <div>
                                            <p className="font-semibold text-rescue-olive">Auto-Post New Animals</p>
                                            <p className="text-sm text-rescue-olive-light">
                                                Automatically share new animals on connected platforms
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => setSettings({ ...settings, autoPostEnabled: !settings.autoPostEnabled })}
                                            className={`relative w-14 h-8 rounded-full transition-colors ${settings.autoPostEnabled ? 'bg-rescue-olive' : 'bg-gray-300'
                                                }`}
                                        >
                                            <span className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow-md transition-transform ${settings.autoPostEnabled ? 'left-7' : 'left-1'
                                                }`} />
                                        </button>
                                    </div>

                                    {/* Connected Platforms */}
                                    <div className="space-y-3">
                                        {socialPlatforms.map((platform) => (
                                            <div
                                                key={platform.id}
                                                className="flex items-center justify-between p-4 border border-bone-white-dark rounded-xl"
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className={`w-10 h-10 rounded-xl ${platform.color} flex items-center justify-center`}>
                                                        <platform.icon className="w-5 h-5 text-white" />
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold text-rescue-olive">{platform.name}</p>
                                                        <p className="text-sm text-rescue-olive-light">
                                                            {platform.connected ? 'Connected' : 'Not connected'}
                                                        </p>
                                                    </div>
                                                </div>

                                                {platform.connected ? (
                                                    <div className="flex items-center gap-2">
                                                        <span className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                                                            <Check className="w-4 h-4" />
                                                            Connected
                                                        </span>
                                                        <button className="text-sm text-heartbeat-clay hover:underline">
                                                            Disconnect
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <button className="btn btn-outline text-sm">
                                                        Connect
                                                    </button>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Notifications Settings */}
                            {activeTab === 'notifications' && (
                                <div className="space-y-6">
                                    <h2 className="font-heading text-xl font-bold text-rescue-olive mb-6">
                                        Notification Preferences
                                    </h2>

                                    <div className="space-y-4">
                                        {[
                                            { key: 'emailNotifications', label: 'Email Notifications', desc: 'Receive email updates about rescue activity' },
                                            { key: 'applicationAlerts', label: 'Application Alerts', desc: 'Get notified when new foster/adoption applications come in' },
                                            { key: 'donationAlerts', label: 'Donation Alerts', desc: 'Receive notifications for new donations' },
                                        ].map((item) => (
                                            <div key={item.key} className="flex items-center justify-between p-4 border border-bone-white-dark rounded-xl">
                                                <div>
                                                    <p className="font-semibold text-rescue-olive">{item.label}</p>
                                                    <p className="text-sm text-rescue-olive-light">{item.desc}</p>
                                                </div>
                                                <button
                                                    onClick={() => setSettings({ ...settings, [item.key]: !settings[item.key as keyof typeof settings] })}
                                                    className={`relative w-14 h-8 rounded-full transition-colors ${settings[item.key as keyof typeof settings] ? 'bg-rescue-olive' : 'bg-gray-300'
                                                        }`}
                                                >
                                                    <span className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow-md transition-transform ${settings[item.key as keyof typeof settings] ? 'left-7' : 'left-1'
                                                        }`} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Security Settings */}
                            {activeTab === 'security' && (
                                <div className="space-y-6">
                                    <h2 className="font-heading text-xl font-bold text-rescue-olive mb-6">
                                        Security Settings
                                    </h2>

                                    <div className="p-4 bg-bone-white rounded-xl">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-rescue-olive flex items-center justify-center flex-shrink-0">
                                                <User className="w-5 h-5 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-semibold text-rescue-olive">Admin Account</p>
                                                <p className="text-sm text-rescue-olive-light mb-4">admin@randomrescuer.org</p>

                                                <button className="btn btn-outline text-sm">
                                                    Change Password
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-t border-bone-white-dark pt-6">
                                        <h3 className="font-semibold text-rescue-olive mb-4">Active Sessions</h3>
                                        <div className="p-4 border border-bone-white-dark rounded-xl">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="font-medium text-rescue-olive">Current Session</p>
                                                    <p className="text-sm text-rescue-olive-light">Linux · Chrome · Active now</p>
                                                </div>
                                                <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                                                    Current
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Save Button */}
                            <div className="mt-8 pt-6 border-t border-bone-white-dark flex justify-end">
                                <motion.button
                                    onClick={handleSave}
                                    disabled={isSaving}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="btn btn-primary disabled:opacity-50"
                                >
                                    {isSaving ? (
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                        />
                                    ) : (
                                        <>
                                            <Save className="w-5 h-5" />
                                            Save Changes
                                        </>
                                    )}
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
