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

const pages = ["Collections", "Men", "Women", "About", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const HeaderBar = styled(AppBar)`
  background-color: white;
`;
const SetButton = styled(Button)`
  color: hsl(219, 9%, 45%);
`;
const MenuStyled = styled(Menu)`
  display: flex;
  position: unset;
  margin: 0;

  .MuiMenu-paper {
    position: absolute;
    display: flex;
    top: unset;
    left: unset;
    width: 70%;
    height: 100%;
    box-shadow: unset;
    background-color: purple;
    border-radius: 0;
    top: 0 !important;
    left: 0 !important;
    padding: 0;
    margin: 0;
  }
  ul{
    width: 100%
  }
  .MuiBackdrop-root{
    position: unset;
    padding: 0;
    margin: 0;
    background-color: red;
    max-width: unset;
    max-height: unset;
  }
  .css-g3hgs1-MuiBackdrop-root-MuiModal-backdrop{
    position: unset;
    padding: 0;
    margin: 0;
  }
  .css-1ka5eyc-MuiPaper-root-MuiMenu-paper-MuiPopover-paper{
    max-width: unset;
    min-width: unset;
  }
`;
export function Header() {
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

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <HeaderBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 10 }}>
            <img src={Logo} alt="logo Sneakers" />
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

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <SetButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <img src={MenuImg} alt="Menu icon" />
            </SetButton>
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
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </MenuStyled>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
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

          <Box sx={{ flexGrow: 0, display: "flex" }}>
            <Tooltip title="Open settings">
              <Box
                sx={{
                  mr: 5,
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={handleOpenUserMenu}
              >
                <img src={Car} alt="Shopping Car" />
              </Box>
            </Tooltip>
            <Menu
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
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <Box>
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Avatar" src={imgAvatar} />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </HeaderBar>
  );
}
