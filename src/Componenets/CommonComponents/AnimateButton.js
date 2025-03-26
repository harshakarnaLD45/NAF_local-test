import React, { useRef, useState } from 'react';
import { ArrowIcon } from '../CustomIcons';

function AnimateButton({ text1 = 'LEARN', text2 = 'MORE', route = '/' }) {
    const [position, setPosition] = useState({ x: 0, y: 0, active: false });
    const [showArrow, setShowArrow] = useState(false);
    const buttonRef = useRef(null);

    const handleMouseMove = (e) => {
        const button = buttonRef.current.getBoundingClientRect();
        const x = e.clientX - (button.left + button.width / 2);
        const y = e.clientY - (button.top + button.height / 2);

        const distance = Math.sqrt(x ** 2 + y ** 2);

        // Expanded detection radius (starts animation early)
        if (distance < 100) {
            setPosition({ x, y, active: true });
            setShowArrow(true);
        } else {
            setPosition({ x: 0, y: 0, active: false });
            setShowArrow(false);
        }
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0, active: false });
        setShowArrow(false);
    };

    return (
        <div
            className="detection-area"
            style={styles.detectionArea}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Animated Circle Below Button */}
            {position.active && (
                <div
                    style={{
                        ...styles.animatedCircle,
                        transform: `translate(${position.x}px, ${position.y}px)`,
                        opacity: 1,
                    }}
                />
            )}

            {/* Main Button */}
            <div
                ref={buttonRef}
                className="animate-button"
                style={styles.button}
            >
                {/* <div style={styles.defaultContent}>
                    {showArrow ? '→' : 'Learn More'}
                </div> */}
                <div style={styles.defaultContent}>
                    {showArrow ? (
                        <ArrowIcon />
                    ) : (
                        <div style={styles.splitText}>
                            <div className='bodyRegularText1' style={styles.leftText}>{text1}</div>
                            <div className='bodyRegularText1' style={styles.rightText}>{text2}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

const styles = {
    detectionArea: {
        position: 'relative',
        width: '180px',
        height: '180px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
    },
    button: {
        position: 'relative',
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        border: '1.5px solid #7FEE64',
        backgroundColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        cursor: 'pointer',
        zIndex: 2,
    },
    defaultContent: {
        position: 'absolute',
        zIndex: 3,
        fontSize: '20px',
        color: '#00FF00',
        transition: 'opacity 0.3s ease-out',
        width: '80%',
        textAlign: 'center',
    },
    splitText: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    leftText: {
        textAlign: 'left',
        paddingLeft: '10px',
        color: '#FCFCFC',
    },
    rightText: {
        textAlign: 'right',
        paddingRight: '10px',
        color: '#FCFCFC',
    },
    animatedCircle: {
        position: 'absolute',
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        border: '1.5px solid #7FEE64',
        backgroundColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transformOrigin: 'center',
        transition: 'transform 0.2s ease-in-out, opacity 0.2s ease-in-out',
        zIndex: 1,
        marginTop: '20px',
    },
};

export default AnimateButton;
