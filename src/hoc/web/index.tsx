import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import AdbIcon from "@mui/icons-material/Adb";
import Link from "next/link";

import styles from "./index.module.scss";

interface Props {
  window?: () => Window;
  children: React.ReactNode;
}

const drawerWidth = 240;
const navItems = ["Contact"];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const titleClasses = {
    fontSize: "24px",
    fontWeight: "600",
    color: "#000000",
  };

  const classesss = {
    // backgroundColor: "#1976d2",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    color: "#000000",
  };

  const classes1 = {
    padding: "0",
    
  };
  const classes2 = {
  backgroundColor: "#FFFFFF",
  }
  const drawer = (
    <div onClick={handleDrawerToggle}>
      <Toolbar style={{ ...classesss }} disableGutters={true}>
        <Link href="/">
          <AdbIcon />
        </Link>
        <span style={{ ...titleClasses }}>PRAY </span>
      </Toolbar>

      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding >
            <ListItemButton sx={{ textAlign: "center"}} >
              <ListItemText primary={item}  />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Container maxWidth="xl" className="p-0">
      <Box>
        <AppBar component="nav" style={{ ...classes2 }} >
          <Container maxWidth="xl">
            <Toolbar style={{ ...classes1 }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon sx={{ color: "#000000" }} />
              </IconButton>
              <Link href="/">
                <AdbIcon
                  sx={{
                    display: { xs: "none", sm: "block" },
                    mr: 1,
                    color: "#000000",
                  }}
                />
              </Link>

              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                <span style={{ ...titleClasses }}>PRAY</span>
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item) => (
                  <Button key={item} sx={{ color: "#fff" }}>
                    {item}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          // sx={{ p: 3 }}
          className={styles["main-component"]}
        >
          {props.children}
        </Box>
      </Box>
    </Container>
  );
}
