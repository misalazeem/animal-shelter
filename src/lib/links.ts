/**
 * Central registry for all external URLs used across the site.
 *
 * Donation goes directly to the rescue's PayPal.Me page.
 * Adoption and foster applications live in Google Forms.
 * Linktree is the general hub for everything else.
 */
export const links = {
    // Direct donation destination
    paypal: "https://www.paypal.com/paypalme/randomrescuer",

    // Primary hub
    linktree: "https://linktr.ee/randomrescuer",

    // Application forms
    adoptForm:
        "https://docs.google.com/forms/d/e/1FAIpQLSe57UO7jcs7idPuEqw9vfh6O78DGePCYsDvlrn2kd5lRrf8yw/viewform",
    fosterForm:
        "https://docs.google.com/forms/d/e/1FAIpQLSdbXa6UWvvPA0b9n-MWTt_83a20ecR2L9ngCZkcTY0-ygfCNg/viewform",

    // Direct social channels
    instagram: "https://www.instagram.com/randomrescuer/",
    facebook: "https://www.facebook.com/randomrescuer7/",

    // Contact
    email: "info@randomrescuer.org",
    emailHref: "mailto:info@randomrescuer.org",

    // Location (Toronto, ON based foster rescue)
    location: "Toronto, ON · Canada",
} as const;

/**
 * Canonical donation destination — PayPal.Me for direct giving.
 */
export const donateUrl = links.paypal;

/**
 * Adoption application — Google Form.
 */
export const adoptApplicationUrl = links.adoptForm;

/**
 * Foster application — Google Form.
 */
export const fosterApplicationUrl = links.fosterForm;
