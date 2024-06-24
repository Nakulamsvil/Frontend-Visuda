import React, { useState } from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Home, Description, Drafts, Delete, Settings, ExitToApp, Person, ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import SuratPengantarRT from './components/SuratPengantarRT';

function Sidebar() {
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const handleMenuClick = () => {
    setOpenSubMenu(!openSubMenu);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh',
        padding: 4,
      }}
    >
      {/* Profile Box */}
      <Box
        textAlign="center"
        mb={1}
        mt={1}
        sx={{
          backgroundColor: '#1A2869',
          padding: '20px 2px 4px 5px',
          width: '100%',
          maxWidth: '250px',
          boxSizing: 'border-box',
        }}
      >
        {/* Avatar dan informasi profil */}
        <Person style={{ fontSize: 60, color: '#fff' }} />
        <Box mt={1}>
          <Typography variant="subtitle1" sx={{ color: '#fff' }}>Pak</Typography>
          <Typography variant="body2" color="textSecondary" sx={{ color: '#fff' }}>Admin</Typography>
        </Box>
      </Box>

      {/* Navigation List */}
      <List sx={{ flexGrow: 1 }}>
        <ListItem
          button
          component={NavLink}
          to="/"
          activeClassName="active-link"
          exact
          sx={{
            backgroundColor: openSubMenu ? '#eee' : 'inherit',
          }}
        >
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Data Warga" />
        </ListItem>
        <ListItem
          button
          onClick={handleMenuClick}
          sx={{
            backgroundColor: openSubMenu ? '#eee' : 'inherit',
          }}
        >
          <ListItemIcon>
            <Description />
          </ListItemIcon>
          <ListItemText primary="Surat-surat" />
          {openSubMenu ? <ArrowDropUp /> : <ArrowDropDown />}
        </ListItem>
        <List component="div" disablePadding hidden={!openSubMenu}>
          <ListItem
            button
            component={NavLink}
            to="/surat-pengantar-rt"
            activeClassName="active-link"
          >
            <ListItemIcon>
              <Description />
            </ListItemIcon>
            <ListItemText primary="Surat Pengantar RT/RW" />
          </ListItem>
          <ListItem
            button
            component={NavLink}
            to="/surat-keterangan-usaha"
            activeClassName="active-link"
          >
            <ListItemIcon>
              <Description />
            </ListItemIcon>
            <ListItemText primary="Surat Keterangan Usaha" />
          </ListItem>
        </List>
        <ListItem
          button
          component={NavLink}
          to="/daftar-permintaan"
          activeClassName="active-link"
          sx={{
            backgroundColor: openSubMenu ? '#eee' : 'inherit',
          }}
        >
          <ListItemIcon>
            <Drafts />
          </ListItemIcon>
          <ListItemText primary="Daftar Permintaan" />
        </ListItem>
        <ListItem
          button
          component={NavLink}
          to="/trash"
          activeClassName="active-link"
          sx={{
            backgroundColor: openSubMenu ? '#eee' : 'inherit',
          }}
        >
          <ListItemIcon>
            <Delete />
          </ListItemIcon>
          <ListItemText primary="Trash" />
        </ListItem>
      </List>

      {/* Bottom Items */}
      <Box mb={2}>
        <List>
          <ListItem button>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Setting" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Sidebar;
