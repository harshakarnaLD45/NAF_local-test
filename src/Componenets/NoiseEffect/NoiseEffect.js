// src/Componenets/NoiseEffect/NoiseEffect.js
import React, { useRef, useEffect } from 'react';
import './NoiseEffect.css';

function NoiseEffect() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      // scale down internal resolution slightly for perf on large screens
      const ratio = window.devicePixelRatio || 1;
      const w = Math.max(800, Math.floor(window.innerWidth * 0.9));
      const h = Math.max(600, Math.floor(window.innerHeight * 0.9));
      canvas.width = Math.floor(w * ratio);
      canvas.height = Math.floor(h * ratio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    resize();

    // draw a single soft noise background (will be reused)
    const drawStaticNoise = () => {
      const w = canvas.width;
      const h = canvas.height;
      const noiseImageData = ctx.createImageData(w, h);
      const buffer = new Uint32Array(noiseImageData.data.buffer);

      // coarser noise: iterate by steps to reduce CPU & memory churn
      for (let i = 0, len = buffer.length; i < len; i++) {
        const value = (Math.random() * 80) | 0; // lower intensity
        buffer[i] = (100 << 24) | (value << 16) | (value << 8) | value;
      }
      ctx.putImageData(noiseImageData, 0, 0);
      // apply a very soft global alpha so ripples draw over it
      ctx.globalAlpha = 0.18;
    };

    // draw static background once
    drawStaticNoise();

    let ripples = [];

    const createRipple = (x, y) => {
      // small rate-limit: drop a ripple sometimes to reduce flood
      const now = Date.now();
      ripples.push({ x, y, radius: 0, alpha: 1, createdAt: now });
      // cap ripple count
      if (ripples.length > 30) ripples.splice(0, ripples.length - 30);
    };

    const handleMouseMove = (e) => {
      // create ripple at cursor position (page coords)
      createRipple(e.clientX, e.clientY);
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });

    // draw ripples at ~30 FPS (throttled) rather than full rAF micro-frames
    const FPS = 30;
    const frameMs = Math.round(1000 / FPS);

    intervalRef.current = setInterval(() => {
      try {
        // clear only ripple layer by resetting (keeping static noise beneath)
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // redraw the static noise layer (cheap relative to full dynamic noise)
        drawStaticNoise();

        for (let i = ripples.length - 1; i >= 0; i--) {
          const ripple = ripples[i];
          ripple.radius += 6; // faster expansion so fewer frames required
          ripple.alpha -= 0.03;

          ctx.beginPath();
          ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
          // stroke with low alpha so effect is soft
          ctx.strokeStyle = `rgba(255,255,255,${Math.max(0, ripple.alpha * 0.08)})`;
          ctx.lineWidth = 28;
          ctx.stroke();
          ctx.closePath();

          if (ripple.alpha <= 0) {
            ripples.splice(i, 1);
          }
        }
      } catch (err) {
        // If something unexpected happens, swallow to avoid breaking page
        // (avoids noisy console errors in production)
        // console.warn('NoiseEffect draw error', err);
      }
    }, frameMs);

    // keep canvas responsive
    const onResize = () => {
      resize();
      // redraw static noise at new size
      drawStaticNoise();
    };
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', onResize);
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="ripple-overlay" aria-hidden="true" />;
}

export default NoiseEffect;
