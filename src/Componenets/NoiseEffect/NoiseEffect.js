import React, { useRef, useEffect } from 'react';
import './NoiseEffect.css';

function NoiseEffect() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let ripples = [];

        // Generate noise dynamically
        const drawNoise = () => {
            const noiseImageData = ctx.createImageData(canvas.width, canvas.height);
            const buffer = new Uint32Array(noiseImageData.data.buffer);

            for (let i = 0; i < buffer.length; i++) {
                const value = Math.random() * 255;
                buffer[i] = (255 << 24) | (value << 16) | (value << 8) | value; // Grayscale noise
            }

            ctx.putImageData(noiseImageData, 0, 0);
        };

        // Add ripple waves
        const createRipple = (x, y) => {
            ripples.push({ x, y, radius: 0, alpha: 1 });
        };

        const handleMouseMove = (e) => {
            createRipple(e.clientX, e.clientY);
        };

        document.addEventListener('mousemove', handleMouseMove);

        // Draw ripples
        const drawRipples = () => {
            drawNoise(); // Continuous noise effect

            for (let i = ripples.length - 1; i >= 0; i--) {
                const ripple = ripples[i];
                ripple.radius += 2;
                ripple.alpha -= 0.01;

                ctx.beginPath();
                ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(255, 255, 255, ${ripple.alpha * 0.1})`;
                ctx.lineWidth = 8;
                ctx.stroke();
                ctx.closePath();

                if (ripple.alpha <= 0) {
                    ripples.splice(i, 1);
                }
            }

            requestAnimationFrame(drawRipples);
        };

        drawRipples();

        // Resize listener
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    return <canvas ref={canvasRef} className="ripple-overlay" />;
}

export default NoiseEffect