import { Box, BoxProps, Button, ButtonProps, styled, Typography, TypographyProps } from '@mui/material';
import Logo from 'assets/images/logo-example.svg';
import { headerHeight } from 'consts';
import { useLocation } from 'react-router-dom';
import { addSlashPrefixToString } from 'helpers';
import React from 'react';
import { loginSuffix } from 'routes/routes-conts';

const Container = styled(Box)<BoxProps>(() => ({
  height: headerHeight,
  width: '100%',
  position: 'fixed',
  display: 'flex',
  padding: '14px 45px 14px 14px',
  boxShadow: '0px 0px 48px rgba(0, 0, 0, 0.06)',
  boxSizing: 'border-box',
  alignItems: 'center',
  zIndex: '1500',
  background: '#ffff',
}));

const LogoWrapper = styled(Box)<BoxProps>({
  display: 'flex',
});

const ImageBox = styled(Box)<BoxProps>({
  display: 'flex',
  alignItems: 'center',
  marginRight: '3.125rem',
});

const HeaderTitle = styled(Typography)<TypographyProps>({
  margin: '0',
  color: '#121212',
  fontSize: '1.5rem',
  fontWeight: '700',
  display: 'flex',
  alignItems: 'center',
});

const LogoutBnt = styled(Button)<ButtonProps>({
  marginLeft: '4.625rem',
});

const EmailWrapper = styled(Box)<BoxProps>({
  display: 'flex',
});

const Email = styled(Typography)<TypographyProps>({
  margin: '0',
  display: 'flex',
  alignItems: 'center',
});

const Divider = styled(Box)<BoxProps>({
  flexGrow: 1,
});

export const Header = () => {

  return (
    <Container>
      <LogoWrapper>
        <ImageBox>
          <img src={Logo} />
        </ImageBox>
        <HeaderTitle>RM</HeaderTitle>
      </LogoWrapper>
      <Divider />

      <EmailWrapper>
        <Email>Logged in as @username</Email>
        <LogoutBnt>Logout</LogoutBnt>
      </EmailWrapper>
    </Container>
  );
};
