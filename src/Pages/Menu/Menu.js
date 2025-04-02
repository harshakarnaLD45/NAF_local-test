// import { Box, Paper, Typography } from "@mui/material";
// import React from "react";
// import arrowicon from "../../assets/Frame 124.png";
// import './Menu.css'


// const Menu = () => {
//   return (
//     <Box className="section-container  menucontainer" >
//     <Box
   
//     //   elevation={0}
//       sx={{
//         position: "relative",
//         // height: 650,
//         bgcolor: "#FA7854",
//         borderRadius: '24px',
//         overflow: "hidden",
//         // maxWidth: "100%",
//       }}
//     >
//       <Box
//         sx={{
//           p: 6,
//           display: "flex",
//           flexDirection: "column",
//           height: "100%",
//         }}
//       >
//         <Typography
//           variant="h1"
//           className="headings-h1"
//           sx={{
//             color: "#fcfcfc",
//             maxWidth: 741,
//             mb: 1,
//           }}
//         >
//           What's Vending Now? Explore Our Live & Monthly Menus!
//         </Typography>
//         <Typography
//           variant="body1"
//           className="bodyRegularText3"
//           sx={{
//             color: "#fcfcfc",
//             mb: 10,
//           }}
//         >
//           Find Fresh Food at a Vending Machine Near You
//         </Typography>
      
//         <Box
//           sx={{
//             width: 42,
//             height: 56,
           
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             cursor: "pointer",
//           }}
//         >
//           <img
//             src={arrowicon}
//             alt="Arrow Down"
//             style={{
//                 width: 55,
//                 height: 66,
//               color: "#fcfcfc",
//             }}
//           />
//         </Box>
//       </Box>
//     </Box>
//     </Box>
//   );
// };

// export default Menu;

import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import arrowicon from "../../assets/Frame 124.png";
import "./Menu.css";
import Unlock from "./Unlock";

const Menu = () => {
  return (
    <Box>
    <Box
      className="section-container menucontainer"
      sx={{
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center", 
      }}
    >
      <Box
        sx={{
          position: "relative",
          bgcolor: "#FA7854",
          borderRadius: "24px",
          overflow: "hidden",
        //   maxWidth: "90%",
        
        }}
      >
        <Box
          sx={{
            p: { xs: 2, sm: 4, md: 6 }, // Adjust padding based on screen size
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Typography
            variant="h1"
            className="headings-h1"
            sx={{
              color: "#fcfcfc",
              maxWidth: { xs: "100%", sm: "80%", md: "60%" }, // Adjust text width based on screen size
              textAlign: { xs: "center", sm: "left", md: "left" }, // Center on smaller screens, align left on larger screens
              mb: { xs: 2, sm: 3, md: 4 },
            }}
          >
            What's Vending Now? Explore Our Live & Monthly Menus!
          </Typography>
          <Typography
            variant="body1"
            className="bodyRegularText3"
            sx={{
              color: "#fcfcfc",
              textAlign: { xs: "center", sm: "left", md: "left" }, // Center on smaller screens, align left on larger screens
              mb: { xs: 3, sm: 4, md: 5 },
            }}
          >
            Find Fresh Food at a Vending Machine Near You
          </Typography>

          <Box
            sx={{
              width: { xs: 50, sm: 50, md: 70 }, // Adjust width based on screen size
              height: { xs: 60, sm: 60, md: 80 }, // Adjust height based on screen size
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              mt: { xs: 3, sm: 4, md: 5 }, 
            }}
          >
            <img
              src={arrowicon}
              alt="Arrow Down"
              style={{
                width: "100%",
                height: "auto",
                // color: "#fcfcfc",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
    <Unlock/>
    </Box>
  );
};

export default Menu;