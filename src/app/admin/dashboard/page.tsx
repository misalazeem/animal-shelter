import { redirect } from 'next/navigation';
import { isAuthenticated } from '@/lib/auth';
import { AdminDashboardClient } from './AdminDashboardClient';

export default async function AdminDashboardPage() {
    const authenticated = await isAuthenticated();

    if (!authenticated) {
        redirect('/admin');
    }

    return <AdminDashboardClient />;
}
