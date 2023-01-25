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

import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthenticated } from "../hooks/useAuthenticated";
import { AUTH } from "../lib/auth";
import { API } from "../lib/api";

// const pages = ["FRIENDS", "FIND ITEMS", "LIST ITEMS"];
const pages = {
  1: ["PEOPLE", "people"],
  2: ["FIND ITEMS", "items"],
  3: ["SHARE ITEMS", "add-items"],
};
const unAuthOptions = ["SIGN IN", "SIGN UP"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function AppAppBar() {
  const [isLoggedIn, setIsLoggedIn] = useAuthenticated();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [profileImg, setProfileImg] = useState(
    "https://i.imgur.com/CzmAXlp.jpg"
  );

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

  const handleNavOptions = (e) => {
    navigate(`/${e.target.id}`);
    handleCloseNavMenu();
  };

  const handleLoginOrRegiseter = (e) => {
    if (e.target.id === "SIGN IN") {
      navigate("/login");
    } else {
      navigate("/register");
    }
  };
  const handleUserSettingOptions = (e) => {
    if (e.target.id === "Logout") {
      logout();
      //TODO need toast here
    }
    handleCloseUserMenu();
  };

  const logout = () => {
    AUTH.logout();
    setIsLoggedIn(false);
    navigate("/");
  };

  useEffect(() => {
    if (isLoggedIn) {
      const uId = AUTH.getPayload().sub;
      API.GET(API.ENDPOINTS.singlePerson(uId))
        .then(({ data }) => {
          setProfileImg(data.profile_image);
          console.log(data.profile_image);
        })
        .catch(({ message, response }) => {
          console.error(message, response);
        });
    }
  }, [isLoggedIn]);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            OURS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
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
              {" "}
              {isLoggedIn &&
                Object.keys(pages).map((page) => (
                  <MenuItem
                    key={pages[page][0]}
                    id={pages[page][1]}
                    onClick={(e) => {
                      handleNavOptions(e);
                    }}
                  >
                    <Typography textAlign="center">{pages[page][0]}</Typography>
                  </MenuItem>
                ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            OURS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {isLoggedIn &&
              Object.keys(pages).map((page) => (
                <Button
                  key={pages[page][0]}
                  id={pages[page][1]}
                  onClick={(e) => {
                    handleNavOptions(e);
                  }}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {pages[page][0]}
                </Button>
              ))}
          </Box>

          {!isLoggedIn ? (
            <>
              {unAuthOptions.map((option) => (
                <MenuItem key={option}>
                  <Typography
                    id={option}
                    onClick={(e) => {
                      handleLoginOrRegiseter(e);
                    }}
                    textAlign="center"
                  >
                    {option}
                  </Typography>
                </MenuItem>
              ))}
            </>
          ) : (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="User Profile Img" src={profileImg} />
                </IconButton>
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
                  <MenuItem
                    id={setting}
                    onClick={(e) => {
                      handleUserSettingOptions(e);
                    }}
                    key={setting}
                  >
                    <Typography id={setting} textAlign="center">
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default AppAppBar;
