// Simple authentication utilities for admin dashboard
// In production, use proper authentication like NextAuth.js with database

import { cookies } from 'next/headers';

const ADMIN_EMAIL = 'admin@randomrescuer.org';
const ADMIN_PASSWORD = 'rescuer2024!'; // Change this in production!
const AUTH_COOKIE_NAME = 'admin_session';
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export interface AdminSession {
    email: string;
    expiresAt: number;
}

export function createSession(): string {
    const session: AdminSession = {
        email: ADMIN_EMAIL,
        expiresAt: Date.now() + SESSION_DURATION,
    };
    return Buffer.from(JSON.stringify(session)).toString('base64');
}

export function validateCredentials(email: string, password: string): boolean {
    return email === ADMIN_EMAIL && password === ADMIN_PASSWORD;
}

export async function getSession(): Promise<AdminSession | null> {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get(AUTH_COOKIE_NAME);

    if (!sessionCookie?.value) {
        return null;
    }

    try {
        const session: AdminSession = JSON.parse(
            Buffer.from(sessionCookie.value, 'base64').toString('utf-8')
        );

        if (session.expiresAt < Date.now()) {
            return null;
        }

        return session;
    } catch {
        return null;
    }
}

export async function isAuthenticated(): Promise<boolean> {
    const session = await getSession();
    return session !== null;
}
