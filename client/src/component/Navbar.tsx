import { Mail, Paid } from '@mui/icons-material';
import { AppBar, Box, Button, Chip, Stack, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import { LoginButton } from './ui/LoginButton';

//Pages will have the name and icon
export const pages = [
  { navTitle: 'Trips', link: "", isDisabled: false },
  { navTitle: 'Dashboard', link: "", isDisabled: true },
  { navTitle: 'Explore', link: "", isDisabled: true }
];
export const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const Navbar = () => {

  const [loggedIn, setIsLoggedIn] = useState(false);

  return (

    <AppBar position='static'>
      <Toolbar variant='dense'>
        <img alt="trippy-logo" src="../logo.svg" width={130} />
        <Stack direction="row" sx={{ ml: "auto", gap: 2, alignItems:"center" }}>
          {pages.map(item => (
            <Typography key={`navItem_${item.navTitle}`} variant='h4'
              sx={{
                opacity: item.isDisabled ? "0.5" : "1",
                cursor: item.isDisabled ? "default" : "pointer"
              }}>
              {item.navTitle}
            </Typography>
          ))}
          {loggedIn && (<>
            <Mail sx={{cursor:"pointer"}}/>
            <Paid sx={{cursor:"pointer"}}/>
          </>
          )}
          <LoginButton loggedIn={loggedIn} />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
