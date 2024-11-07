
import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { alpha, Button, Link, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@/components/Container';

interface Props {
  onClose: () => void;
  open: boolean;
  variant: 'permanent' | 'persistent' | 'temporary' | undefined;
}



const Sidebar = ({ open, variant, onClose }: Props): JSX.Element => {
  const theme = useTheme()
  return (
    <Drawer
      anchor="bottom"
      onClose={() => onClose()}
      open={open}
      variant={variant}
      sx={{
        '& .MuiPaper-root': {
          width: '100%',
          height: '100%'
        },
      }}
    >
      <Container paddingY={1}>
        <Box>
          <Box display={'flex'} justifyContent={'space-between'} paddingX={2} paddingY={1}>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }} alignItems={'center'}>
              <Button
                onClick={() => onClose()}
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
            >
              SerFlix
            </Link>
          </Box>
          <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} paddingX={2} paddingY={2}>
            <Box>
              <Link
                underline="none"
                variant='h4'
                display={'flex'}
                component="a"
                href="/"
                title="theFront"
                color="textPrimary"
              >
                Cartelera
              </Link>
            </Box>
            <Box>
              <Link
                underline="none"
                variant='h4'
                display={'flex'}
                component="a"
                href="/"
                title="theFront"
                color="textPrimary"
              >
                Generos
              </Link>
            </Box>
            <Box>
              <Link
                underline="none"
                variant='h4'
                display={'flex'}
                component="a"
                href="/"
                title="theFront"
                color="textPrimary"
              >
                Populares
              </Link>
            </Box>
            <Box>
              <Link
                underline="none"
                variant='h4'
                display={'flex'}
                component="a"
                href="/"
                title="theFront"
                color="textPrimary"
              >
                Mejores Calificados
              </Link>
            </Box>
            <Box>
              <Link
                underline="none"
                variant='h4'
                display={'flex'}
                component="a"
                href="/"
                title="theFront"
                color="textPrimary"
              >
                Proximamente
              </Link>
            </Box>
            <Box marginTop={2}>
              <Button
                size={'large'}
                variant="outlined"
                fullWidth
                component="a"
                href="./"
                target={'blank'}
              >
                Iniciar sesión
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Drawer>
  );
};

export default Sidebar;
