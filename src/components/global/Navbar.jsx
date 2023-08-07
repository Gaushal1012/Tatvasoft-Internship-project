// import React from "react";
// import Logo from "../../assets/logo.png";
// import Button from "@mui/material/Button";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import SearchIcon from "@mui/icons-material/Search";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <>
//       <div className="menubar">
//         <div className="navbar">
//           <Link to="/">
//             <div className="logo">
//               <img src={Logo} alt="logo" />
//             </div>
//           </Link>
//           <div className="auth">
//             <Link to="/login">
//               <Button>Login</Button>
//             </Link>
//             <hr />
//             <Link to="/register">
//               <Button>Register</Button>
//             </Link>
//             <Button variant="outlined" style={{ borderColor: "rgb(65,65,65)" }}>
//               {<ShoppingCartIcon />} 0
//               <span style={{ color: "rgb(65,65,65)", marginLeft: "3px " }}>
//                 Cart
//               </span>
//             </Button>
//           </div>
//         </div>
//         <div className="searchbar">
//           <input
//             type="text"
//             name="search"
//             placeholder="What are you looking for..."
//           />
//           <Button variant="contained" style={{ backgroundColor: "#80BF32" }}>
//             {<SearchIcon />}Search
//           </Button>
//           <Button variant="contained" style={{ backgroundColor: "#f14d54" }}>
//             Cancle
//           </Button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../../assets/images/site-logo.svg";

import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
};

const Navbar = () => {
  const Style = {
    display: "flex",
    gap: "20px",
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "92px",
        }}
      >
        <img src={logo} alt="logo" style={{ width: "180px" }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Stack
            direction="row"
            spacing={1}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <Link to="/login" style={linkStyle}>
              <Button
                variant="text"
                color="error"
                sx={{ textTransform: "capitalize" }}
              >
                Login
              </Button>
            </Link>
            <Link to="/register" style={linkStyle}>
              <Button
                variant="text"
                color="error"
                sx={{ textTransform: "capitalize" }}
              >
                Register
              </Button>
            </Link>
            <Link to="/book" style={linkStyle}>
              <Button
                variant="text"
                color="error"
                sx={{ textTransform: "capitalize" }}
              >
                Books
              </Button>
            </Link>
          </Stack>
          <Link to="/cart" style={linkStyle}>
            <Button
              variant="outlined"
              color="error"
              startIcon={<ShoppingCartIcon style={{ color: "#c62828" }} />}
            >
              <span style={{ color: "#c62828", marginRight: "5px" }}>0</span>
              Cart
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Navbar;
