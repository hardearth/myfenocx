import { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, CardMedia } from '@mui/material';

// project import
import useConfig from 'hooks/useConfig';
import Hero from 'sections/landing/Header';
const dashImage = require.context('assets/images/landing', true);

// ==============================|| LANDING PAGE ||============================== //

const Landing = () => {
  const theme = useTheme();

  const { presetColor } = useConfig();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const listenToScroll = () => {
      let heightToHideFrom = 250;
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

      if (winScroll > heightToHideFrom) {
        setVisible(true);
      } else {
        visible && setVisible(false);
      }
    };

    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, [visible]);

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          bgcolor: theme.palette.mode === 'dark' ? 'grey.0' : 'grey.800',
          overflow: 'hidden',
          minHeight: '100vh',
          '&>*': {
            position: 'relative',
            zIndex: 5
          },
          '&:before': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            zIndex: 2,
            background: 'linear-gradient(329.36deg, #000000 14.79%, rgba(67, 67, 67, 0.28) 64.86%);'
          }
        }}
      >
        <CardMedia
          component="img"
          image={dashImage(`./bg-mockup-${presetColor}.png`)}
          sx={{
            position: 'absolute',
            width: { md: '78%', lg: '70%', xl: '65%' },
            right: { md: '-14%', lg: '-4%', xl: '-2%' },
            top: { md: '16%', lg: '12%', xl: '8%' },
            zIndex: 1,
            display: { xs: 'none', md: 'block' }
          }}
        />
        <Hero />
      </Box>
    </>
  );
};

export default Landing;
