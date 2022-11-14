import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const drawerWidth = 240;
const navItems = ['Home', 'New draw'];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Metaculus Draw App
      </Typography>
      <Divider />
      <List>
        <ListItem key="home" disablePadding>
          <Link to={"home/"}>
              <ListItemButton sx={{ textAlign: 'center' }}>
                      <ListItemText primary="Home" />
              </ListItemButton>
          </Link>
        </ListItem>          
        <ListItem key="new" disablePadding>
          <Link to={"new/"} state={{mode:"new"}}>
            <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText primary="New draw" />
            </ListItemButton>
          </Link>
              
        </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Metaculus Draw by CiroGam
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Link to={"home/"} state={{mode:"new"}}>
                <Button key="home" sx={{ color: '#fff' }}>
                  Home
                </Button>
              </Link>
              <Link to={"new/"} state={{mode:"new"}}>
                <Button key="new" sx={{ color: '#fff' }}>
                    New Draw
                </Button>
              </Link>
          </Box>
        </Toolbar>
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
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Header;