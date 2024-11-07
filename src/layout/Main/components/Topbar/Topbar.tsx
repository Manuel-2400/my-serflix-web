import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from '@mui/material';

interface Props {
  onSidebarOpen: () => void;
  colorInvert?: boolean;
}

const Topbar = ({
  onSidebarOpen,
}: Props): JSX.Element => {
  const theme = useTheme();
  // const { mode } = theme.palette;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Box sx={{ display: { xs: 'flex', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
      <Link
        underline="none"
        variant='h5'
        display={'flex'}
        component="a"
        href="/"
        title="theFront"
        color="textPrimary"
        width={{ xs: 100, md: 120 }}
      >
        SerFlix
      </Link>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box marginLeft={4}>
          <Link
            underline="none"
            variant="body2"
            color="textPrimary"
            component="a"
            target="blank"
            href='./'
          >
            Cartelera
          </Link>
        </Box>
        <Box marginLeft={4}>
          <Link
            underline="none"
            variant="body2"
            color="textPrimary"
            component="a"
            target="blank"
            href='./'
          >
            Generos
          </Link>
        </Box>
        <Box marginLeft={4}>
          <Link
            underline="none"
            variant="body2"
            color="textPrimary"
            component="a"
            target="blank"
            href='./'
          >
            Populares
          </Link>
        </Box>
        <Box marginLeft={4}>
          <Link
            underline="none"
            variant="body2"
            color="textPrimary"
            component="a"
            target="blank"
            href='./'
          >
            Mejores Calificados
          </Link>
        </Box>
        <Box marginLeft={4}>
          <Link
            underline="none"
            variant="body2"
            color="textPrimary"
            component="a"
            target="blank"
            href='./'
          >
            Proximamente
          </Link>
        </Box>
        <Box marginLeft={4}>
          <Button
            variant="text"
            color="primary"
            component="a"
            target="blank"
            size="medium"
          >
            Iniciar sesión
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
