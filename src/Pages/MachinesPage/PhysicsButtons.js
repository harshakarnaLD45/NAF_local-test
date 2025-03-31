import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import styles from './MachinesPage.css'; // Ensure this path is correct for your CSS file

const machineData = [
    { id: 'hot', label: 'Hot Machine', width: 100, height: 40, initialXOffset: -50, initialAngle: -0.2 },
    { id: 'all', label: 'All', width: 80, height: 30, initialXOffset: -100, initialAngle: 0.05 },
    { id: 'cold', label: 'Cold Machine', width: 120, height: 40, initialXOffset: 50, initialAngle: 0.1 },
    { id: 'snack', label: 'Snack Machine', width: 120, height: 40, initialXOffset: -180, initialAngle: 0.25 },
    { id: 'pizza', label: 'Pizza Machine', width: 110, height: 40, initialXOffset: 100, initialAngle: -0.2 },
    { id: 'cotton', label: 'Cotton Candy Machine', width: 160, height: 40, initialXOffset: 150, initialAngle: 0.5 },
    { id: 'ice', label: 'Ice Cream Machine', width: 150, height: 40, initialXOffset: 220, initialAngle: -0.3 },
    { id: 'return', label: 'Return Station', width: 130, height: 40, initialXOffset: -310, initialAngle: 0.1 },
    { id: 'beer', label: 'Beer Dispenser Machine', width: 180, height: 40, initialXOffset: -50, initialAngle: -0.05 },
    { id: 'fries', label: 'French Fries Machine', width: 160, height: 40, initialXOffset: -250, initialAngle: 0.15 },
    { id: 'gourmet', label: 'Gourmet Food Machine', width: 200, height: 40, initialXOffset: 280, initialAngle: -0.1 },
];

function MachineLayout() {
    const sceneRef = useRef(null);
    const buttonsRef = useRef([]);
    const bodiesRef = useRef([]);
    const engineRef = useRef(null);
    const renderRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [isVisible, setIsVisible] = useState(false);
    const hasInitialized = useRef(false); // Track if the physics simulation has already run

    // Observer to check if section is in viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.2 } // Trigger when 20% of the section is visible
        );

        if (sceneRef.current) {
            observer.observe(sceneRef.current);
        }

        return () => {
            if (sceneRef.current) {
                observer.unobserve(sceneRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible || hasInitialized.current) return; // Run only the first time

        hasInitialized.current = true; // Mark as initialized

        const scene = sceneRef.current;
        const engine = Matter.Engine.create();
        const world = engine.world;
        const render = Matter.Render.create({
            element: scene,
            engine: engine,
            options: {
                width: scene ? scene.offsetWidth : window.innerWidth,
                height: 300,
                wireframes: false,
                background: 'transparent',
                visible: false,
            },
        });

        render.canvas.style.pointerEvents = "none"; // Prevent interaction
        render.canvas.style.display = 'none';

        world.gravity.y = 0.8; // Slight gravity for a natural fall

        const centerX = render.options.width / 2;

        const bodies = machineData.map((machine, index) => {
            const startY = -60 - index * 15; // Different heights for staggered falling
            const startX = centerX + machine.initialXOffset;

            const body = Matter.Bodies.rectangle(
                startX,
                startY,
                machine.width,
                machine.height,
                {
                    friction: 0.2,
                    restitution: 0.5,
                    density: 0.0005,
                    inertia: Infinity,
                    label: machine.label
                }
            );

            Matter.Body.rotate(body, machine.initialAngle || 0);

            return body;
        });

        bodiesRef.current = bodies;

        const divider = Matter.Bodies.rectangle(
            centerX,
            310,
            render.options.width * 0.5,
            0,
            { isStatic: true, render: { visible: false } }
        );

        const ground = Matter.Bodies.rectangle(
            render.options.width / 2,
            render.options.height + 25,
            render.options.width + 50,
            50,
            { isStatic: true }
        );

        Matter.World.add(world, [...bodies, divider, ground]);

        const runner = Matter.Runner.create();
        Matter.Runner.run(runner, engine);
        Matter.Render.run(render);

        const updatePositions = () => {
            bodies.forEach((body, index) => {
                if (buttonsRef.current[index]) {
                    const { x, y } = body.position;
                    buttonsRef.current[index].style.transform = `translate(${x - machineData[index].width / 2}px, ${y - machineData[index].height / 2}px) rotate(${body.angle}rad)`;
                }
            });
            requestAnimationFrame(updatePositions);
        };

        updatePositions();

        return () => {
            Matter.Render.stop(render);
            Matter.Engine.clear(engine);
            Matter.World.clear(world);
        };
    }, [isVisible]); // Only re-run when section visibility changes

    const handleClick = (index) => {
        console.log('Button clicked:', index);
        setSelectedIndex(index);

        // const body = bodiesRef.current[index];
        // if (body) {
        //     Matter.Body.setStatic(body, true);
        // }
    };

    return (
        <div
            className={styles.machineLayoutContainer}
            ref={sceneRef}
            style={{
                position: 'relative', height: '300px', overflow: 'hidden', width: '100%', borderBottom: '1px solid #525252',
            }}
        >
            {machineData.map((machine, index) => (
                <div
                    key={machine.id}
                    ref={(el) => (buttonsRef.current[index] = el)}
                    className='bodyRegularText3'
                    style={{
                        position: 'absolute',
                        left: `calc(0% + ${machine.initialXOffset}px)`,
                        top: '-40px',
                        padding: '16px 48px',
                        backgroundColor: selectedIndex === index ? '#7FEE64' : 'transparent',
                        textAlign: 'center',
                        lineHeight: `${machine.height}px`,
                        border: '0.5px solid #F4F4F4',
                        borderRadius: '100px',
                        color: selectedIndex === index ? '#1A1A1A' : '#FCFCFC',
                        zIndex: selectedIndex === index ? 2 : 1,
                        userSelect: 'none',
                        transform: `translateX(-50%) rotate(${machine.initialAngle || machine.rotation || 0}rad)`,
                        pointerEvents: 'auto',
                        cursor: 'pointer',
                    }}
                    onClick={() => handleClick(index)}
                >
                    {machine.label}
                </div>
            ))}
        </div>
    );
}

export default MachineLayout;
