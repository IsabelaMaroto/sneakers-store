import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import imgAvatar from "../../images/image-avatar.png";
import Logo from "../../images/logo.svg";
import styled from "@emotion/styled";
import MenuImg from "../../images/icon-menu.svg";
import Car from "../../images/icon-cart.svg";
import CloseIcon from "../../images/icon-close.svg";
import Badge from "@mui/material/Badge";
import Divider from '@mui/material/Divider';
import { CarMenu } from "./car/car";

const pages = ["Collections", "Men", "Women", "About", "Contact"];

const HeaderBar = styled(AppBar)`
  background-color: white;
  box-shadow: unset;

  .css-19r6kue-MuiContainer-root{
    padding: 0 16px;
  }
  .css-1l7f38q-MuiButtonBase-root-MuiButton-root{
    min-width: unset;
  }
  .css-1msjbys-MuiButtonBase-root-MuiButton-root{
    border-bottom: 5px solid #fff;
    background-color: unset;
    border-radius: unset;
    min-height: 100%;
    margin: unset;
    padding: 0 10px 30px;
  }
  .css-1msjbys-MuiButtonBase-root-MuiButton-root:hover{
    border-bottom: 5px solid hsl(26, 100%, 55%);
    background-color: unset;
    border-radius: unset;
    min-height: 100%;
    margin: unset;
    padding: 0 10px 30px;
    color: hsl(220, 13%, 13%);
  }
  .css-1t6c9ts{
    min-height: 100%;
    padding: 30px 0 0;
  }
  .css-8je8zh-MuiTouchRipple-root{
    min-height: 100%;
  }
`;
const SetButton = styled(Button)`
  color: hsl(219, 9%, 45%);
`;
const MenuStyled = styled(Menu)`
  display: flex;
  position: absolute;
  margin: 0;
 
  .MuiMenu-paper {
    width: 70%;
    height: 100%;
    box-shadow: unset;
    border-radius: 0;
    top: 0 !important;
    left: 0 !important;
    padding: 0;
    margin: 0;
   
  }
  ul {
    width: 70%;
    height: 90%;
    background-color: white;
  }
  .css-5mgas3-MuiTypography-root {
    font-weight: 700;
  }
  .MuiBackdrop-root {
    display: flex;
    position: unset;
    padding: 0;
    margin: 0;
    max-width: 100%;
    max-height: 100%;
  }
  .css-g3hgs1-MuiBackdrop-root-MuiModal-backdrop {
    position: unset;
    padding: 0;
    margin: 0;
  }
  .css-1ka5eyc-MuiPaper-root-MuiMenu-paper-MuiPopover-paper {
    max-width: 70%;
    min-width: 70%;
    max-height: 100%;
  }
`;
const XIcon = styled("img")`
  padding: 16px;
`;
const CardStyle = styled(Menu)`
  .MuiMenu-paper {
    position: absolute;
    padding: 0;
    margin: 0;
    left: 50% !important;
    transform: translateX(-50%) !important;
    right: unset !important;

    @media (min-width: 500px) {
      left: unset !important;
      right: 10px !important;
      transform: unset !important;
    }
  }

  .css-1ka5eyc-MuiPaper-root-MuiMenu-paper-MuiPopover-paper {
    max-width: none;
    max-height: none;
    width: 95%;

    @media (min-width: 500px) {
      width: 320px;
      height: auto;
    }
  }
`;
const BadgeCar = styled(Badge)`
 opacity: 1;
`

export function Header({valueTotal, setValueTotal, setValue}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseCarMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <HeaderBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{display: "flex"}}>
            <Box sx={{ display: { xs: "none", md: "flex" }}}>
              <img src={Logo} alt="logo Sneakers" style={{marginBottom: '10px', paddingRight: '20px'}}/>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                letterSpacing: ".3rem",
                textDecoration: "none",
              }}
            ></Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, m: '0px' }}>
              <SetButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <img src={MenuImg} alt="Menu icon" style={{ paddingRight: '20px'}}/>
              </SetButton>
          </Box>
          
            <MenuStyled
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                m: '0px',
              }}
            >
              <XIcon
                src={CloseIcon}
                alt="Close icon"
                onClick={handleCloseNavMenu}
              />
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </MenuStyled>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }}}>
            <img src={Logo} alt="logo Sneakers" />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <SetButton
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block" }}
              >
                {page}
              </SetButton>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex"}}>
            <Tooltip title="Open cart">
              <Box
                sx={{
                  mr: 3,
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={handleOpenUserMenu}
              >
                <BadgeCar badgeContent={valueTotal} color="primary" showZero>
                  <img src={Car} alt="Shopping Car" />
                </BadgeCar>
              </Box>
            </Tooltip>
            <CardStyle
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseCarMenu}
            >
             <CarMenu valueTotal={valueTotal} setValueTotal={setValueTotal} setValue={setValue}/>
            </CardStyle>
            <Box>
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Avatar" src={imgAvatar} />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </Container>
      <Divider  sx={{ display: { xs: "none", md: "flex" }}}/>
    </HeaderBar>
  );
}
