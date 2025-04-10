import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CursorPointer = styled.div.attrs(props => ({
    style: {
        left: `${props.x}px`,
        top: `${props.y}px`,
    }
}))`
    background-color: white;
    position: fixed;
    border-radius: 100%;
    mix-blend-mode: difference;
    width: 32px;
    height: 32px;
    pointer-events: none;
    transform: translate(-50%, -50%);
    z-index: 9999999;
  `;

const CustomCursor = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    useEffect(() => {
        const handleMouseMovement = (e) => {
            setX(e.clientX)
            setY(e.clientY)
        }
        document.addEventListener('mousemove', handleMouseMovement);
        return () => {
            document.removeEventListener('mousemove', handleMouseMovement);
        }
    }, [x, y])

    return <CursorPointer x={x} y={y} />;
};

export default CustomCursor;
