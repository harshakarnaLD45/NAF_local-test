import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import styles from '../MachinesPage/MachinesPage.css'; // Make sure this path is correct for your CSS file

const machineData = [
    { id: 'blogs', label: 'Blogs', width: 100, height: 40, initialXOffset: -300 },
    { id: 'all', label: 'All', width: 80, height: 30, style: { backgroundColor: 'lightgreen' }, initialXOffset: -150 },
    { id: 'events', label: 'Events', width: 120, height: 40, initialXOffset: 0 },
    { id: 'news', label: 'News', width: 120, height: 40, initialXOffset: -220 },
   
];

function Blogfilter() {
    const sceneRef = useRef(null);
    const buttonsRef = useRef([]);
    const [isSectionVisible, setIsSectionVisible] = useState(true);

    const handleDragStart = (e, index) => {
        const button = buttonsRef.current[index];
        const offsetX = e.clientX - button.getBoundingClientRect().left;
        const offsetY = e.clientY - button.getBoundingClientRect().top;

        const handleDragMove = (e) => {
            button.style.left = `${e.clientX - offsetX}px`;
            button.style.top = `${e.clientY - offsetY}px`;
        };

        const handleDragEnd = () => {
            document.removeEventListener('mousemove', handleDragMove);
            document.removeEventListener('mouseup', handleDragEnd);
        };

        document.addEventListener('mousemove', handleDragMove);
        document.addEventListener('mouseup', handleDragEnd);
    };

    useEffect(() => {
        if (!isSectionVisible) return;

        const scene = sceneRef.current;
        const engine = Matter.Engine.create();
        const world = engine.world;
        const render = Matter.Render.create({
            element: scene,
            engine: engine,
            options: {
                width: scene ? scene.offsetWidth : window.innerWidth, // Full width
                height: 400, 
                wireframes: false,
                background: 'transparent',
            },
        });

        render.canvas.style.opacity = "0";
        world.gravity.y = 0.3; // Further reduced gravity for a wider spread

        const centerX = render.options.width / 2;

        const bodies = machineData.map((machine, index) => {
            const startY = -150 - index * 30; // Increased starting height
            const startX = centerX + machine.initialXOffset;

            const body = Matter.Bodies.rectangle(
                startX,
                startY,
                machine.width,
                machine.height,
                { friction: 0.2, restitution: 0.1, label: machine.label }
            );

            if (machine.rotation) {
                Matter.Body.rotate(body, machine.rotation);
            }
            if (machine.initialAngle) {
                Matter.Body.rotate(body, machine.initialAngle);
            }

            return body;
        });

        const ground = Matter.Bodies.rectangle(
            render.options.width / 2,
            render.options.height + 25,
            render.options.width + 50,
            50,
            { isStatic: true }
        );

        Matter.World.add(world, [...bodies, ground]);

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
    }, [isSectionVisible]);

    return (
        <div className={styles.machineLayoutContainer} ref={sceneRef} style={{ position: 'relative', height: '400px', overflow: 'hidden', width: '100%' }}>
            {machineData.map((machine, index) => {
                return (
                    <div
                        key={machine.id}
                        ref={(el) => (buttonsRef.current[index] = el)}
                        className='bodyRegularText3'
                        style={{
                            position: 'absolute',
                            left: `calc(0% + ${machine.initialXOffset}px)`,
                            top: '-150px',
                            padding: '16px 48px',
                            backgroundColor: machine.style?.backgroundColor || 'transparent',
                            textAlign: 'center',
                            lineHeight: `${machine.height}px`,
                            border: '1px solid #ddd',
                            borderRadius: '100px',
                            fontWeight: machine.id === 'all' ? 'bold' : 'normal',
                            color: '#F4F4F4',
                            userSelect: 'none',
                            transform: `translateX(-50%) rotate(${machine.initialAngle || machine.rotation || 0}rad)`,
                        }}
                        onMouseDown={(e) => handleDragStart(e, index)}
                    >
                        {machine.label}
                    </div>
                );
            })}
        </div>
    );
}

export default Blogfilter;
