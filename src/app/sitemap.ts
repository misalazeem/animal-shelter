import { MetadataRoute } from 'next';
import { animals } from '@/data/animals';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://randomrescuer.org';

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/animals`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/foster`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
    ];

    // Dynamic animal pages
    const animalPages: MetadataRoute.Sitemap = animals.map((animal) => ({
        url: `${baseUrl}/animals/${animal.id}`,
        lastModified: new Date(animal.updatedAt),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    return [...staticPages, ...animalPages];
}
