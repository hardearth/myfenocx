// material-ui
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Box, Container, Stack, Typography } from '@mui/material';

// project imports
import MainCard from 'components/MainCard';

// assets
import logo from 'assets/images/logo.svg';

// ==============================|| CONTACT US - HEADER ||============================== //

function ContactHeader() {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <MainCard
      sx={{
        bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey.A700 : theme.palette.grey[100],
        border: 'transparent',
        borderRadius: 0,
        m: 0,
        mt: { xs: 6, md: 2 }
      }}
      className="p-lg-5"
    >
      <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 2 } }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-around" alignItems="center" spacing={{ xs: 0, sm: 3 }}>
          <Box sx={{ width: { xs: '100%', sm: 252, md: 360, lg: 436 } }}>
            <Stack spacing={1}>
              <Typography align={matchDownSM ? 'center' : 'left'} variant="h2">
                Talk to our{' '}
                <Typography variant="h2" component="span" color="primary" sx={{ cursor: 'pointer' }}>
                  Support team
                </Typography>
              </Typography>
              <Typography align={matchDownSM ? 'center' : 'left'} color="textSecondary">
                Send us your request or tell us how we can help you
              </Typography>
            </Stack>
          </Box>
          <Box sx={{ width: { xs: 320, sm: 320, md: 500, lg: 600 } }} className="p-3">
            <img
              src={logo}
              alt="mantis"
              style={{
                width: '100%',
                background: theme.palette.mode === 'dark' ? theme.palette.grey.A700 : theme.palette.grey[100]
              }}
            />
          </Box>
        </Stack>
      </Container>
    </MainCard>
  );
}

export default ContactHeader;
