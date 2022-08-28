import { Box, BoxProps, styled } from '@mui/material';
import { Header } from 'components/Header';
import { SlideMenus } from 'components/SlideMenu';
import { drawerWidth, headerHeight } from 'consts';
import { addSlashPrefixToString } from 'helpers';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { loginSuffix, notFoundPageSuffix } from 'routes/routes-conts';

interface Props {
  name?: string;
  children: React.ReactChild;
}

const MainLayout = styled(Box)<BoxProps>(() => ({
  // width: '100%',
  minHeight: '100vh',
  boxSizing: 'border-box',
  width: `calc(100% - ${drawerWidth}px)`,
  height: '100vh',
}));

const Divider = styled(Box)<BoxProps>(() => ({
  height: headerHeight,
}));

const Wrapper = styled(Box)<BoxProps>({
  display: 'flex',
  width: '100%',
});

const Layout: React.FC<Props> = ({ children }) => {
  const location = useLocation();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItem:'center',
        justifyContent:'center',
        height: '100vh',
        backgroundColor: '#363740'
      }}
    >
      {location.pathname !== addSlashPrefixToString(notFoundPageSuffix) && (
        <>
          {location.pathname !== addSlashPrefixToString(loginSuffix) && 
          <>
          <Header /> 
          <Divider />
          </>
          }
          
        </>
      )}
      {location.pathname === addSlashPrefixToString(loginSuffix) ||
      location.pathname === addSlashPrefixToString(notFoundPageSuffix) ? (
        <>{children}</>
      ) : (
        <Wrapper>
          <SlideMenus />
          <MainLayout>
            <Divider />
            {children}
          </MainLayout>
        </Wrapper>
      )}
    </Box>
  );
};

export default Layout;
