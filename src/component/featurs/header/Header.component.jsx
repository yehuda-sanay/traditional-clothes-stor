// import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import Badge from '@mui/material/Badge';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import MailIcon from '@mui/icons-material/Mail';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import MoreIcon from '@mui/icons-material/MoreVert';
// import Button from '@mui/material/Button';
// import {Link} from 'react-router-dom'

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(3),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }));
// const pages = ['Home', 'Sing In'];
// const linkTo = ['/','Sing In']

// export default function PrimarySearchAppBar() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = (event) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   const menuId = 'primary-search-account-menu';
//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//     </Menu>
//   );

//   const mobileMenuId = 'primary-search-account-menu-mobile';
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//       <MenuItem>
//         <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//           <Badge badgeContent={4} color="error">
//             <MailIcon />
//           </Badge>
//           <Menu
//               id="menu-appbar"
//               anchorEl={true}
//             //   anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(true)}
//             //   open={Boolean(anchorElNav)}
//               onClose={true}
//             //   onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page}>
//                     {/* <MenuItem key={page} onClick={handleCloseNavMenu}></MenuItem> */}
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//         </IconButton>
//         <p>Messages</p>
//       </MenuItem>
//       <MenuItem>
//         <IconButton
//           size="large"
//           aria-label="show 17 new notifications"
//           color="inherit"
//         >
//           <Badge badgeContent={17} color="error">
//             <NotificationsIcon />
//           </Badge>
//         </IconButton>
//         <p>Notifications</p>
//       </MenuItem>
//       <MenuItem onClick={handleProfileMenuOpen}>
//         <IconButton
//           size="large"
//           aria-label="account of current user"
//           aria-controls="primary-search-account-menu"
//           aria-haspopup="true"
//           color="inherit"
//         >
//           <AccountCircle />
//         </IconButton>
//         <p>Profile</p>
//       </MenuItem>
//     </Menu>
//   );

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ display: { xs: 'none', sm: 'block' } }}
//           >
//             <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}

//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 <Link to={linkTo}>{page}</Link>
//               </Button>
//             ))}
//           </Box>
//           </Typography>
//           <Search>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               placeholder="Search…"
//               inputProps={{ 'aria-label': 'search' }}
//             />
//           </Search>
//           <Box sx={{ flexGrow: 1 }} />
//           <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//             <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//               <Badge badgeContent={4} color="error">
//                 <MailIcon />
//               </Badge>
//             </IconButton>
//             <IconButton
//               size="large"
//               aria-label="show 17 new notifications"
//               color="inherit"
//             >
//               <Badge badgeContent={17} color="error">
//                 <NotificationsIcon />
//               </Badge>
//             </IconButton>
//             <IconButton
//               size="large"
//               edge="end"
//               aria-label="account of current user"
//               aria-controls={menuId}
//               aria-haspopup="true"
//               onClick={handleProfileMenuOpen}
//               color="inherit"
//             >
//               <AccountCircle />
//             </IconButton>
//           </Box>
//           <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="show more"
//               aria-controls={mobileMenuId}
//               aria-haspopup="true"
//               onClick={handleMobileMenuOpen}
//               color="inherit"
//             >
//               <MoreIcon />
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       {renderMobileMenu}
//       {renderMenu}
//     </Box>
//   );
// }

// import React from "react";
// import {Link} from 'react-router-dom'
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// export default function Header(){

//     return(
//         <div>
//             <Stack spacing={2} direction="row">
//       <Button variant="contained"><Link to="/">Home</Link> </Button>
//       <Button variant="contained"><Link to="Sing In">Sing In</Link> </Button>
//       <Button variant="contained"><Link to="Join">Join</Link> </Button>
//       <Button variant="contained"><Link to="EthiopianWomen">Ethiopian Women</Link> </Button>
//       <Button variant="contained"><Link to="EthiopianMen">Ethiopian Men</Link> </Button>
//     </Stack>
//             <h1>Header</h1>
//         </div>
//     )
// }

// import React from "react";
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import {Link} from 'react-router-dom'
// // import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// export default function Header(){

//     return(
//         <div>
//             <Autocomplete
//       disablePortal
//       id="combo-box-demo"
//       options={top100Films}
//       sx={{ width: 300 }}
//       renderInput={(params) => <TextField {...params} label="Movie" />}
//     />

//             <h1>Header</h1>

//         </div>
//     )
// }
// const top100Films = [
//     <Button variant="contained"><Link to="/">Home</Link> </Button>,
//     <Button variant="contained"><Link to="Sing In">Sing In</Link> </Button>,
//     <Button variant="contained"><Link to="Ethiopian Women">Ethiopian Women</Link> </Button>,
//     <Button variant="contained"><Link to="Ethiopian Men">Ethiopian Men</Link> </Button>

//   ];

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { BsDoorOpenFill } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useShoppingCart } from "../../../contexts/ShoppingCartContext";
import Form from 'react-bootstrap/Form';

function Header() {
  const { openCart, cartQuantity } = useShoppingCart()
  const signUpInPage= useNavigate()
  // const cartPage= useNavigate()

  // const handleChangeCartPage=()=>{
  //   signUpInPage('/cartPage')
  // }

  const handleChange=()=>{
    signUpInPage('/JoinSingInPage')
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home">African</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Traditional clothes" id="collasible-nav-dropdown">
              <NavDropdown.Item
                href="#action/3.4"
                style={{ width: "60rem", height: "26rem" }}
              >
                <Row xs={1} md={3} className="g-4">
                <Nav.Link href="#Sing in">
              <Link to="Ethiopian Choice Page">

                <Col>
                      <Card style={{ width: "18rem", height: "10rem" }}>
                        <Card.Img
                        style={{ width: "18rem", height: "25rem" }}
                          variant="top"
                          src="https://i.pinimg.com/736x/39/0c/d1/390cd1b214e76a28ecb2e6d69cca1bdf.jpg"
                        />
                        <Card.Body>
                          <Card.Title>Ethiopia</Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
              </Link>
            </Nav.Link>
                    <Col>
                      <Card style={{ width: "18rem", height: "10rem" }}>
                        <Card.Img
                        style={{ width: "18rem", height: "30rem" }}
                          variant="top"
                          src="https://sc04.alicdn.com/kf/HTB1iqrOXbsrBKNjSZFpq6AXhFXay.jpg"
                        />
                        <Card.Body>
                          <Card.Title>China</Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                      <Card style={{ width: "18rem", height: "10rem" }}>
                        <Card.Img
                        style={{ width: "18rem", height: "23rem" }}
                          variant="top"
                          src="https://cdn.shopify.com/s/files/1/1058/0630/products/L17Sep-292_500x.jpg?v=1664499191"
                        />
                        <Card.Body>
                          <Card.Title>African</Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                </Row>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Home">
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
            style={{width:"15rem",height:"2.5rem"}}
              type="search"
              placeholder="Search color"
              className="me-2"
              aria-label="Search"
            />
            <Button className="me-3" variant="outline-success"
            style={{width:"15rem",height:"2.5rem"}}
            >Search</Button>
          </Form>
          <Nav>
            <Button 
            onClick={openCart}
            style={{width:"3rem",height:"3rem", position:"relative"}}
            variant="outline-primary"
            className="rounded-circle"
            >
              <BsFillCartFill/>
              <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{color:"white",
              width:"1.5rem",
              height:"1.5rem",
              position:"absolute",
              bottom:0,
              right:0,
              transform:"translate(25%, 25%)"
            }}
              >{cartQuantity}</div>
            </Button>
            <Nav.Link eventKey={2} href="#memes"></Nav.Link>
          </Nav>
          <Nav>
            <Button style={{width:"3rem",height:"3rem", position:"relative"}}
            variant="outline-primary"
            className="rounded-circle" onClick={handleChange}>
              <BsDoorOpenFill />
            </Button>
            <Nav.Link eventKey={2} href="#memes"></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

