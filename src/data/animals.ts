import { Animal } from '@/types';

export const animals: Animal[] = [
    {
        id: 'sully',
        name: 'Sully',
        species: 'cat',
        breed: 'Domestic Shorthair',
        age: 'Young Adult',
        ageCategory: 'young',
        gender: 'male',
        weight: 10,
        color: 'Orange Tabby',
        description: `Sully is a playful, loving, and very affectionate asthmatic kitty who requires a daily inhaler medication for his asthma. He loves carrying his toys around and is great at both engaging in play with you and self-entertaining if you're busy.

He enjoys a good TV show and won't say no to a little cat TV! Despite his medical needs, Sully doesn't let his asthma slow him down—he's an absolute joy to be around and will fill your home with love and entertainment.

Sully's ideal home would be one where his humans understand his medical routine and are committed to keeping him healthy and happy. In return, he'll be your devoted companion who's always ready for playtime or snuggles on the couch.`,
        shortDescription: 'Playful, loving orange boy who needs daily inhaler medication for asthma. Loves TV time and carrying his toys around!',
        personality: ['Playful', 'Affectionate', 'Loving', 'Self-Entertaining', 'Sweet'],
        medicalNeeds: ['Daily inhaler medication for asthma'],
        specialNeeds: ['Requires asthma management'],
        goodWith: {
            cats: true,
            dogs: false,
            children: true,
        },
        adoptionFee: 150,
        status: 'available',
        featured: true,
        images: ['/cats/IMG-20240912-WA0006.jpg'],
        createdAt: new Date('2024-09-12'),
        updatedAt: new Date('2024-12-28'),
    },
    {
        id: 'aspen',
        name: 'Aspen',
        species: 'cat',
        breed: 'Domestic Shorthair',
        age: 'Kitten',
        ageCategory: 'kitten',
        gender: 'male',
        weight: 3,
        color: 'Grey Tabby & White',
        description: `Meet Aspen, an adorable grey tabby and white kitten who's looking for his forever home! This playful little guy is full of energy and curiosity, always ready to explore and discover new things.

Aspen loves feather wand toys and will chase them with endless enthusiasm. He's at that perfect age where every day is an adventure, and he'd love to share those adventures with you!

Like all kittens, Aspen is learning about the world and developing his personality. He's sure to bring joy, laughter, and plenty of entertainment to his new family.`,
        shortDescription: 'Playful, energetic kitten who loves feather wand toys. Full of curiosity and ready for adventure!',
        personality: ['Playful', 'Energetic', 'Curious', 'Adventurous'],
        goodWith: {
            cats: true,
            dogs: true,
            children: true,
        },
        adoptionFee: 175,
        status: 'available',
        featured: true,
        images: ['/cats/IMG-20240915-WA0000.jpg'],
        createdAt: new Date('2024-09-15'),
        updatedAt: new Date('2024-12-28'),
    },
    {
        id: 'rue',
        name: 'Rue',
        species: 'cat',
        breed: 'Domestic Shorthair',
        age: 'Kitten',
        ageCategory: 'kitten',
        gender: 'female',
        weight: 2.5,
        color: 'Grey Tabby',
        description: `Sweet little Rue is a gorgeous grey tabby kitten with the most expressive eyes! She's a gentle soul who loves to play but also appreciates her quiet cuddle time.

Rue enjoys chasing toys and wrestling with her siblings, but she's equally happy curled up in a warm lap. She's developing into a well-rounded kitten who will make a wonderful companion.

This lovely girl is looking for a family who will give her lots of love and playtime. She's ready to bring her sweet personality into your home!`,
        shortDescription: 'Sweet grey tabby girl who loves both playtime and cuddles. Gentle soul with expressive eyes!',
        personality: ['Sweet', 'Gentle', 'Playful', 'Cuddly'],
        goodWith: {
            cats: true,
            dogs: true,
            children: true,
        },
        adoptionFee: 175,
        status: 'available',
        featured: true,
        images: ['/cats/IMG-20240917-WA0002.jpg'],
        createdAt: new Date('2024-09-17'),
        updatedAt: new Date('2024-12-28'),
    },
    {
        id: 'emory',
        name: 'Emory',
        species: 'cat',
        breed: 'Domestic Shorthair',
        age: 'Kitten',
        ageCategory: 'kitten',
        gender: 'female',
        weight: 2.5,
        color: 'Grey Tabby',
        description: `Emory is a beautiful grey tabby kitten with a heart full of love and paws ready for play! This little lady is always on the move, exploring every corner and finding new toys to bat around.

She's particularly fond of interactive toys and will keep you entertained for hours with her acrobatic antics. Emory has that perfect blend of kitten energy and sweetness that makes her irresistible.

Looking for a playful companion who will grow with you? Emory is ready to be your best friend!`,
        shortDescription: 'Energetic grey tabby girl who loves interactive toys. Acrobatic, sweet, and ready to play!',
        personality: ['Energetic', 'Playful', 'Acrobatic', 'Sweet'],
        goodWith: {
            cats: true,
            dogs: true,
            children: true,
        },
        adoptionFee: 175,
        status: 'available',
        featured: false,
        images: ['/cats/IMG-20240917-WA0003.jpg'],
        createdAt: new Date('2024-09-17'),
        updatedAt: new Date('2024-12-28'),
    },
    {
        id: 'alder',
        name: 'Alder',
        species: 'cat',
        breed: 'Domestic Shorthair',
        age: 'Kitten',
        ageCategory: 'kitten',
        gender: 'male',
        weight: 3,
        color: 'Grey Tabby & White',
        description: `Alder is a handsome grey tabby and white kitten who's all about fun and games! This little guy has personality to spare and loves making new friends—both human and feline.

He's a confident boy who approaches life with enthusiasm, whether he's pouncing on a toy mouse or climbing to new heights. Alder would do great with another playful cat or kitten to keep him company.

If you're looking for an outgoing, adventurous kitten who will keep you smiling, Alder is your guy!`,
        shortDescription: 'Confident, outgoing grey tabby & white boy. Loves making friends and adventurous play!',
        personality: ['Confident', 'Outgoing', 'Adventurous', 'Friendly'],
        goodWith: {
            cats: true,
            dogs: true,
            children: true,
        },
        adoptionFee: 175,
        status: 'available',
        featured: false,
        images: ['/cats/IMG-20240917-WA0004.jpg'],
        createdAt: new Date('2024-09-17'),
        updatedAt: new Date('2024-12-28'),
    },
    {
        id: 'topaz',
        name: 'Topaz',
        species: 'cat',
        breed: 'Domestic Shorthair',
        age: 'Kitten',
        ageCategory: 'kitten',
        gender: 'male',
        weight: 2.5,
        color: 'White',
        description: `Topaz is a stunning white kitten who shines as bright as his namesake gemstone! This precious boy is pure sweetness wrapped in a snowy white coat.

He loves to play with feather toys and will chirp and chatter at anything that catches his attention. Topaz is developing into a loving, social kitten who enjoys being around his people.

His beautiful white coat and charming personality make him a real gem. Could Topaz be the treasure you've been searching for?`,
        shortDescription: 'Stunning white kitten, sweet as his namesake gem. Loves feather toys and chattering at everything!',
        personality: ['Sweet', 'Social', 'Playful', 'Vocal'],
        goodWith: {
            cats: true,
            dogs: true,
            children: true,
        },
        adoptionFee: 175,
        status: 'available',
        featured: true,
        images: ['/cats/IMG-20240917-WA0005.jpg'],
        createdAt: new Date('2024-09-17'),
        updatedAt: new Date('2024-12-28'),
    },
    {
        id: 'onyx',
        name: 'Onyx',
        species: 'cat',
        breed: 'Domestic Shorthair',
        age: 'Kitten',
        ageCategory: 'kitten',
        gender: 'male',
        weight: 3,
        color: 'Brown Tabby & White',
        description: `Onyx is a handsome brown tabby and white kitten with striking markings and an equally striking personality! This little guy is full of spunk and loves to play.

He's the first to investigate new toys and isn't afraid to show off his hunting skills with impressive pounces and leaps. Onyx is social and enjoys hanging out with his siblings and human friends alike.

Looking for a kitten with character? Onyx has personality in spades and is ready to bring his playful energy to your home!`,
        shortDescription: 'Striking brown tabby & white boy, full of spunk! First to investigate and loves to show off his moves.',
        personality: ['Spunky', 'Confident', 'Playful', 'Social'],
        goodWith: {
            cats: true,
            dogs: true,
            children: true,
        },
        adoptionFee: 175,
        status: 'available',
        featured: false,
        images: ['/cats/IMG-20240918-WA0003.jpg'],
        createdAt: new Date('2024-09-18'),
        updatedAt: new Date('2024-12-28'),
    },
    {
        id: 'pearl',
        name: 'Pearl',
        species: 'cat',
        breed: 'Domestic Medium Hair',
        age: 'Young Adult',
        ageCategory: 'young',
        gender: 'female',
        weight: 8,
        color: 'White',
        description: `This lovely young lady is all about being the centre of your attention. Pearl loves being pet and can sometimes get a bit over-stimulated by how much she loves your attention, so it's important to get to know her signs and take breaks to help her not over-stimulate.

She is an absolute sweetheart and would love to find her forever home, where she can learn to play and just enjoy life instead of being the teenage mom she didn't ask to be. Pearl is one of our young moms, now spayed, whose kittens are also on their search for forever homes too.

Pearl would thrive best in a quieter, adult-only home as a solo girl. She deserves a peaceful environment where she can finally be the princess she was always meant to be.`,
        shortDescription: 'Beautiful white young mom seeking a quiet, adult-only home. Loves attention and deserves to be a princess!',
        personality: ['Affectionate', 'Sweet', 'Attention-Loving', 'Gentle'],
        specialNeeds: ['Needs breaks from petting to prevent overstimulation', 'Best as solo cat in adult-only home'],
        goodWith: {
            cats: false,
            dogs: false,
            children: false,
        },
        adoptionFee: 125,
        status: 'available',
        featured: true,
        images: ['/cats/IMG-20241006-WA0017.jpg'],
        createdAt: new Date('2024-10-06'),
        updatedAt: new Date('2024-12-28'),
    },
    {
        id: 'simon',
        name: 'Simon',
        species: 'cat',
        breed: 'Domestic Shorthair',
        age: 'Senior',
        ageCategory: 'senior',
        gender: 'male',
        weight: 12,
        color: 'Orange Tabby',
        description: `Simon is the heart and soul of Random Rescuer—our origin story and forever inspiration. This brave orange boy was found wounded on Mother's Day 2018, sitting on a fence bleeding around his neck.

Two weeks later, he appeared again, this time laying beneath a car, too tired of street life to run. That moment changed everything. Simon taught us that rescue is challenging but deeply rewarding, and his story became the foundation of our mission.

Though Simon has since crossed the rainbow bridge, his legacy lives on in every cat we save. He showed us that even the most jaded street cat, with patience and love, can learn to trust again.

*In loving memory. Forever our first random rescue.*`,
        shortDescription: 'Our founding rescue and eternal inspiration. Simon started it all on Mother\'s Day 2018.',
        personality: ['Brave', 'Resilient', 'Loving', 'Trusting'],
        goodWith: {
            cats: true,
            dogs: false,
            children: true,
        },
        adoptionFee: 0,
        status: 'adopted',
        featured: false,
        images: ['/cats/PXL_20241004_005144370.jpg'],
        createdAt: new Date('2018-05-13'),
        updatedAt: new Date('2024-12-28'),
    },
];

// Helper functions
export function getAnimalById(id: string): Animal | undefined {
    return animals.find((animal) => animal.id === id);
}

export function getAvailableAnimals(): Animal[] {
    return animals.filter((animal) => animal.status === 'available');
}

export function getFeaturedAnimals(): Animal[] {
    return animals.filter((animal) => animal.featured && animal.status === 'available');
}

export function getAnimalsBySpecies(species: 'cat' | 'dog'): Animal[] {
    return animals.filter((animal) => animal.species === species);
}

export function getKittens(): Animal[] {
    return animals.filter((animal) => animal.ageCategory === 'kitten' && animal.status === 'available');
}

export function getAdultCats(): Animal[] {
    return animals.filter((animal) =>
        (animal.ageCategory === 'adult' || animal.ageCategory === 'young') &&
        animal.status === 'available'
    );
}
