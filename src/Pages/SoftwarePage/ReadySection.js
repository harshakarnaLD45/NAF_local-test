import React, { useEffect, useState } from "react";
import Matter from "matter-js";
import image1 from '../../assets/software/ball.png';
import image2 from '../../assets/software/ball (1).png';
import image3 from '../../assets/software/ball (2).png';
import image4 from '../../assets/software/ball (3).png';
import image5 from '../../assets/software/ball (4).png';
import image6 from '../../assets/software/ball (5).png';
import AnimateButton from "../../Componenets/CommonComponents/AnimateButton";
import { Box, Typography } from "@mui/material";

// Utility to debounce resize event
const debounceResize = (callback, delay) => {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(callback, delay);
  };
};

const ReadySection = () => {
  const [containerSize, setContainerSize] = useState({
    width: window.innerWidth * 0.9,
    height: window.innerHeight * 0.9,
  });

  useEffect(() => {
    const handleResize = debounceResize(() => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      const heightRatio = screenWidth < 480 ? 0.5 : 0.9;

      setContainerSize({
        width: screenWidth * 0.9,
        height: screenHeight * heightRatio,
      });
    }, 200);

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize resize logic

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const { Engine, Render, Runner, World, Bodies, Mouse, MouseConstraint } = Matter;

    const engine = Engine.create();
    const { world } = engine;

    const sectionWidth = containerSize.width;
    const sectionHeight = containerSize.height;

    const render = Render.create({
      element: document.getElementById("physics-container"),
      engine: engine,
      options: {
        width: sectionWidth,
        height: sectionHeight,
        wireframes: false,
        background: "transparent",
      },
    });

    let mouseConstraint;
    if (sectionWidth > 0) {
      const mouse = Mouse.create(render.canvas);
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.9,
          render: {
            visible: false,
          },
        },
      });
      World.add(world, mouseConstraint);
    }

    const wallThickness = 100;

    // Adding walls to the world
    const ground = Bodies.rectangle(
      sectionWidth / 2,
      sectionHeight + wallThickness / 2,
      sectionWidth,
      wallThickness,
      { isStatic: true, render: { fillStyle: "transparent" } }
    );
    const ceiling = Bodies.rectangle(
      sectionWidth / 2,
      -wallThickness / 2,
      sectionWidth,
      wallThickness,
      { isStatic: true, render: { fillStyle: "transparent" } }
    );
    const leftWall = Bodies.rectangle(
      -wallThickness / 2,
      sectionHeight / 2,
      wallThickness,
      sectionHeight,
      { isStatic: true, render: { fillStyle: "transparent" } }
    );
    const rightWall = Bodies.rectangle(
      sectionWidth + wallThickness / 2,
      sectionHeight / 2,
      wallThickness,
      sectionHeight,
      { isStatic: true, render: { fillStyle: "transparent" } }
    );

    World.add(world, [ground, leftWall, rightWall, ceiling]);

    const preloadImages = async (imageUrls) => {
      const images = [];
      for (const url of imageUrls) {
        const img = new Image();
        img.src = url;
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
        });
        images.push(img);
      }
      return images;
    };

    const createMixedImages = async () => {
      const imageUrls = [image1, image2, image3, image4, image5, image6];
      try {
        const loadedImages = await preloadImages(imageUrls);
        const images = [];

        const fixedSize = Math.min(200, sectionWidth * 0.12); // Fixed size for images

        for (let i = 0; i < 7; i++) {
          const x = Math.random() * (sectionWidth - fixedSize) + fixedSize / 2;
          const y = Math.random() * (sectionHeight - fixedSize) + fixedSize / 2;
          const randomImage = loadedImages[Math.floor(Math.random() * loadedImages.length)];

          images.push(
            Bodies.circle(x, y, fixedSize / 2, {
              restitution: 0.2,
              friction: 0.05,
              frictionAir: 0.02,
              render: {
                sprite: {
                  texture: randomImage.src,
                  xScale: fixedSize / randomImage.width,
                  yScale: fixedSize / randomImage.height,
                },
              },
            })
          );
        }

        World.add(world, images);
      } catch (error) {
        console.error("Failed to load images:", error);
      }
    };

    createMixedImages();

    // Function to animate the physics world
    const animate = () => {
      Engine.update(engine, 1000 / 60); // 60 FPS
      Render.world(render);
      requestAnimationFrame(animate); // Keep the animation running
    };

    animate(); // Start the animation loop

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      World.clear(world, false);
      Engine.clear(engine);
      render.canvas.remove();
    };
  }, [containerSize]);

  return (
    <Box className='section-container' sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      mt: { xs: '75px', sm: '150px', md: "200px" }
    }}>
      <div style={{ position: 'relative' }}>
        {/* Physics Container */}
        <div
          id="physics-container"
          style={{
            width: `${containerSize.width}px`,
            height: `${containerSize.height}px`,
            margin: "0 auto",
            border: "1px solid",
            borderColor: "#525252",
            borderRadius: "24px",
          }}
        ></div>

        <Typography
          variant="h2"
          className="headings-h2"
          sx={{
            position: "absolute",
            width: { xs: "90%", md: "80%", xl: "70%" },
            top: { xs: "5%", sm: "15%", md: "10%" },
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
          }}
        >
          Ready to See the NAF Cloud System in Action?
        </Typography>

        <Box
          className="centralButton"
          sx={{
            position: "absolute",
            width: { xs: "80px", md: "120px" },
            height: { xs: "80px", md: "120px" },
            top: { xs: "40%", md: "35%" },
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          <AnimateButton text1='GET IN' text2='TOUCH' />
        </Box>
      </div>
    </Box>
  );
};

export default ReadySection;
