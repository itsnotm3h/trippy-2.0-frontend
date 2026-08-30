import { Mail, Paid } from '@mui/icons-material';
import { AppBar, Container, Stack, Toolbar, Typography } from '@mui/material';
import { LoginButton } from './LoginButton';
import { useAuthStore } from '@/store/useAuthStore';
import { useLogoutUser } from '@/api/user/loginQueries';
import { useNavigate } from 'react-router-dom';
import useAuth from '@/hooks/useAuth';

//Pages will have the name and icon
export const pages = [
  { navTitle: 'Trips', link: "", isDisabled: false },
  { navTitle: 'Dashboard', link: "", isDisabled: true },
  { navTitle: 'Explore', link: "", isDisabled: true }
];
export const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const Navbar = () => {



  const {user, isLogin} = useAuth();

  const navigate = useNavigate();

  const {mutate} = useLogoutUser();

  const handleLogout = ()=>{

    if(isLogin) mutate();
    navigate("/login");

  }

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
          {user!=null && (<>
            <Mail sx={{cursor:"pointer"}}/>
            <Paid sx={{cursor:"pointer"}}/>
          </>
          )}
          <LoginButton loggedIn={isLogin} onClick={handleLogout} />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
