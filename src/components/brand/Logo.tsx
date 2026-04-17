import Image from 'next/image';

interface LogoProps {
    /** Size of the logo tile in pixels. Default 44. */
    size?: number;
    /** When `true`, apply the soft olive-to-cream glow ring so the logo
     *  blends onto cream backgrounds without looking like a pasted chip. */
    glow?: boolean;
    className?: string;
}

/**
 * The Random Rescuer brand mark — an illustrated cat on a wood slice,
 * framed by a soft olive ring to match the site palette.
 *
 * The source PNG already includes an olive background with a subtle vignette,
 * so we render it inside a circular container (using `overflow-hidden`) so
 * the vignette edges blend seamlessly with surrounding cream or olive
 * backgrounds regardless of where the mark is placed.
 */
export function Logo({ size = 44, glow = false, className = '' }: LogoProps) {
    return (
        <span
            className={`relative inline-flex items-center justify-center flex-shrink-0 ${className}`}
            style={{ width: size, height: size }}
            aria-hidden
        >
            {glow && (
                <span
                    className="absolute -inset-1 rounded-full opacity-60 blur-md"
                    style={{
                        background:
                            'radial-gradient(circle, rgba(42,52,32,0.35) 0%, transparent 70%)',
                    }}
                />
            )}
            <span
                className="relative w-full h-full rounded-full overflow-hidden ring-1 ring-rescue-olive/30"
                style={{
                    boxShadow:
                        '0 2px 12px -3px rgba(26, 21, 17, 0.15), inset 0 0 0 1px rgba(255, 250, 243, 0.08)',
                }}
            >
                <Image
                    src="/logo.png"
                    alt="Random Rescuer"
                    fill
                    sizes={`${size}px`}
                    className="object-contain"
                    priority
                />
            </span>
        </span>
    );
}
