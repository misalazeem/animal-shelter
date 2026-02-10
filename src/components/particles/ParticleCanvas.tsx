'use client';

import { useEffect, useRef, useCallback } from 'react';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    color: string;
    life: number;
    maxLife: number;
}

interface ParticleCanvasProps {
    particleCount?: number;
    colors?: string[];
    className?: string;
}

const DEFAULT_COLORS = [
    'rgba(198, 156, 109, 0.6)', // Timber Gold
    'rgba(204, 90, 63, 0.4)',   // Heartbeat Clay
    'rgba(58, 68, 45, 0.3)',    // Rescue Olive
];

export function ParticleCanvas({
    particleCount = 50,
    colors = DEFAULT_COLORS,
    className = '',
}: ParticleCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animationFrameRef = useRef<number>(0);
    const mouseRef = useRef({ x: 0, y: 0 });

    const createParticle = useCallback((canvas: HTMLCanvasElement): Particle => {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 4 + 1,
            opacity: Math.random() * 0.5 + 0.2,
            color: colors[Math.floor(Math.random() * colors.length)],
            life: 0,
            maxLife: Math.random() * 200 + 100,
        };
    }, [colors]);

    const initParticles = useCallback((canvas: HTMLCanvasElement) => {
        particlesRef.current = [];
        for (let i = 0; i < particleCount; i++) {
            particlesRef.current.push(createParticle(canvas));
        }
    }, [particleCount, createParticle]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles(canvas);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particlesRef.current.forEach((particle, index) => {
                // Update position
                particle.x += particle.vx;
                particle.y += particle.vy;
                particle.life++;

                // Gentle attraction to mouse (subtle effect)
                const dx = mouseRef.current.x - particle.x;
                const dy = mouseRef.current.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 200) {
                    particle.vx += dx * 0.00003;
                    particle.vy += dy * 0.00003;
                }

                // Add slight random movement
                particle.vx += (Math.random() - 0.5) * 0.02;
                particle.vy += (Math.random() - 0.5) * 0.02;

                // Damping
                particle.vx *= 0.99;
                particle.vy *= 0.99;

                // Fade based on life
                const lifeRatio = particle.life / particle.maxLife;
                const currentOpacity = particle.opacity * (1 - Math.pow(lifeRatio, 2));

                // Reset particle if it goes off screen or dies
                if (
                    particle.x < -50 ||
                    particle.x > canvas.width + 50 ||
                    particle.y < -50 ||
                    particle.y > canvas.height + 50 ||
                    particle.life >= particle.maxLife
                ) {
                    particlesRef.current[index] = createParticle(canvas);
                }

                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = particle.color.replace(/[\d.]+\)$/, `${currentOpacity})`);
                ctx.fill();

                // Draw subtle glow
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
                const gradient = ctx.createRadialGradient(
                    particle.x, particle.y, 0,
                    particle.x, particle.y, particle.size * 2
                );
                gradient.addColorStop(0, particle.color.replace(/[\d.]+\)$/, `${currentOpacity * 0.3})`));
                gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
                ctx.fillStyle = gradient;
                ctx.fill();
            });

            // Draw connections between nearby particles
            particlesRef.current.forEach((particle, i) => {
                particlesRef.current.slice(i + 1).forEach((otherParticle) => {
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 120) {
                        const opacity = 0.1 * (1 - distance / 120);
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.strokeStyle = `rgba(198, 156, 109, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                });
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameRef.current);
        };
    }, [initParticles, createParticle]);

    return (
        <canvas
            ref={canvasRef}
            className={`particle-canvas ${className}`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: -1,
            }}
        />
    );
}
