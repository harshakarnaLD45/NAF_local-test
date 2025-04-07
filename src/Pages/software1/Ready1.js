// import React, { useEffect } from "react";
// import Matter from "matter-js";
// import image1 from '../../assets/software/ball.png';
// import image2 from '../../assets/software/ball (1).png';
// import image3 from '../../assets/software/ball (2).png';
// import image4 from '../../assets/software/ball (3).png';
// import image5 from '../../assets/software/ball (4).png';
// import image6 from '../../assets/software/ball (5).png';

// const Ready1 = () => {
//   useEffect(() => {
//     const { Engine, Render, Runner, World, Bodies, Composite, Mouse, MouseConstraint } = Matter;

//     const engine = Engine.create();
//     const { world } = engine;

//     const sectionWidth = window.innerWidth * 0.8;

//     const render = Render.create({
//       element: document.getElementById("physics-container"),
//       engine: engine,
//       options: {
//         width: sectionWidth,
//         height: window.innerHeight * 0.7,
//         wireframes: false,
//         background: "transparent",
//       },
//     });

//     let mouseConstraint;
//     if (sectionWidth > 450) {
//       const mouse = Mouse.create(render.canvas);
//       mouseConstraint = MouseConstraint.create(engine, {
//         mouse: mouse,
//         constraint: {
//           stiffness: 0.2,
//           render: {
//             visible: false,
//           },
//         },
//       });
//       World.add(world, mouseConstraint);
//     }

//     // Reduced ground thickness from 20 to 10
//     const ground = Bodies.rectangle(
//       sectionWidth / 2,
//       (window.innerHeight * 0.7) - 5,  // Adjusted position due to thinner ground
//       sectionWidth,
//       5,  // Reduced from 20
//       {
//         isStatic: true,
//         render: {
//           fillStyle: "#525252",
//           strokeStyle: "transparent",
//         },
//       }
//     );

//     // Reduced wall thickness from 20 to 10
//     const leftWall = Bodies.rectangle(
//       5,  // Adjusted position due to thinner wall
//       (window.innerHeight * 0.7) / 2,
//       5,  // Reduced from 20
//       window.innerHeight * 0.7,
//       {
//         isStatic: true,
//         render: {
//           fillStyle: "#525252",
//           strokeStyle: "transparent",
//         },
//       }
//     );

//     // Reduced wall thickness from 20 to 10
//     const rightWall = Bodies.rectangle(
//       sectionWidth - 5,  // Adjusted position due to thinner wall
//       (window.innerHeight * 0.7) / 2,
//       5,  // Reduced from 20
//       window.innerHeight * 0.7,
//       {
//         isStatic: true,
//         render: {
//           fillStyle: "#525252",
//           strokeStyle: "transparent",
//         },
//       }
//     );

//     // Reduced ceiling thickness from 20 to 10
//     const ceiling = Bodies.rectangle(
//       sectionWidth / 2,
//       5,  // Adjusted position due to thinner ceiling
//       sectionWidth,
//       5,  // Reduced from 20
//       {
//         isStatic: true,
//         render: {
//           fillStyle: "#525252",
//           strokeStyle: "transparent",
//         },
//       }
//     );

//     World.add(world, [ground, leftWall, rightWall, ceiling]);

//     const preloadImages = async (imageUrls) => {
//       const images = [];
//       for (const url of imageUrls) {
//         const img = new Image();
//         img.src = url;
//         try {
//           await new Promise((resolve, reject) => {
//             img.onload = resolve;
//             img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
//           });
//           images.push(img);
//         } catch (error) {
//           console.error(error.message);
//         }
//       }
//       return images;
//     };

//     const createMixedImages = async () => {
//       const imageUrls = [image1, image2, image3, image3, image4, image5, image6];

//       try {
//         const loadedImages = await preloadImages(imageUrls);
//         const images = [];
//         for (let i = 0; i < 7; i++) {
//           const x = Math.random() * sectionWidth;
//           const y = Math.random() * (window.innerHeight * 0.7) * 0.5;
//           const size = Math.random() * 100 + 100;
//           const randomImage = loadedImages[Math.floor(Math.random() * loadedImages.length)];

//           images.push(
//             Bodies.rectangle(x, y, size, size / 2, {
//               restitution: 0.6,
//               render: {
//                 sprite: {
//                   texture: randomImage.src,
//                   xScale: size / randomImage.width,
//                   yScale: size / randomImage.height,
//                 },
//               },
//             })
//           );
//         }
//         World.add(world, images);
//       } catch (error) {
//         console.error("Failed to load images:", error);
//       }
//     };

//     createMixedImages();

//     Render.run(render);
//     const runner = Runner.create();
//     Runner.run(runner, engine);

//     return () => {
//       Render.stop(render);
//       Runner.stop(runner);
//       World.clear(world, false);
//       Engine.clear(engine);
//       render.canvas.remove();
//     };
//   }, []);

//   return (
//     <div style={{ margin: 0 }}>
//       <div
//         id="physics-container"
//         style={{
//           width: "100%",  
//           height: "100vh",
//           margin: "0 0",  
//         }}
//       ></div>
//     </div>
//   );
// };

// export default Ready1;





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

const Ready1 = () => {
  const [containerSize, setContainerSize] = useState({
    width: window.innerWidth * 0.9,
    height: window.innerHeight * 0.9,
  });

  useEffect(() => {
    const handleResize = () => {
      setContainerSize({
        width: window.innerWidth * 0.9,
        height: window.innerHeight * 0.9,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const { Engine, Render, Runner, World, Bodies, Composite, Mouse, MouseConstraint } = Matter;

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
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });
      World.add(world, mouseConstraint);
    }

    // Boundaries adjusted to the new height
    const ground = Bodies.rectangle(sectionWidth / 2, sectionHeight + 20, sectionWidth, 40, { isStatic: true, render: { fillStyle: "transparent", strokeStyle: "transparent" } });
    const leftWall = Bodies.rectangle(-10, sectionHeight / 2, 40, sectionHeight + 40, { isStatic: true, render: { fillStyle: "transparent", strokeStyle: "transparent" } });
    const rightWall = Bodies.rectangle(sectionWidth + 10, sectionHeight / 2, 40, sectionHeight + 40, { isStatic: true, render: { fillStyle: "transparent", strokeStyle: "transparent" } });
    const ceiling = Bodies.rectangle(sectionWidth / 2, -20, sectionWidth, 40, { isStatic: true, render: { fillStyle: "transparent", strokeStyle: "transparent" } });

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
      const imageUrls = [image1, image2, image3, image3, image4, image5, image6];

      try {
        const loadedImages = await preloadImages(imageUrls);
        const images = [];
        for (let i = 0; i < 7; i++) {
          const maxSize = Math.min(200, sectionWidth * 0.2); // Responsive max size
          const minSize = Math.min(120, sectionWidth * 0.1); // Responsive min size
          const size = Math.random() * (maxSize - minSize) + minSize;
          const x = Math.random() * (sectionWidth - size) + (size / 2);
          const y = Math.random() * (sectionHeight - size) + (size / 2); 
          const randomImage = loadedImages[Math.floor(Math.random() * loadedImages.length)];

          // Changed from Bodies.rectangle to Bodies.circle
          images.push(
            Bodies.circle(x, y, size / 2, {
              restitution: 0.6,
              friction: 0.1,
              render: {
                sprite: {
                  texture: randomImage.src,
                  xScale: size / randomImage.width,
                  yScale: size / randomImage.height,
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
    <div style={{ 
      margin: 0, 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh'
    }}>
      <div style={{ position: 'relative' }}>
        {/* Adjusted height in inline styles */}
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
            width: { xs: "90%", md: "719px" }, 
            top: { xs: "15%", md: "10%" }, // Adjusted top position
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: { xs: "2rem", md: "3rem" }, // Responsive font size
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
            borderRadius: "50%",
            color: "#fcfcfc",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
            fontSize: { xs: "0.8rem", md: "1rem" },
          }}
        >
          <AnimateButton text1='GET IN' text2='TOUCH' />
        </Box>
      </div>
    </div>
  );
};

export default Ready1;