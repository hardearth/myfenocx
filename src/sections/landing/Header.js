import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, Container, Grid, Link, Typography } from '@mui/material';

// third party
import { motion } from 'framer-motion';

// assets
import { EyeOutlined } from '@ant-design/icons';
import AnimateButton from 'components/@extended/AnimateButton';

// ==============================|| LANDING - HEADER PAGE ||============================== //

const HeaderPage = () => {
  const theme = useTheme();

  return (
    <Container sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Grid container alignItems="center" justifyContent="space-between" spacing={2} sx={{ pt: { md: 0, xs: 8 }, pb: { md: 0, xs: 5 } }}>
        <Grid item xs={12} lg={5} md={5}>
          <Grid container spacing={2} sx={{ pr: 10, [theme.breakpoints.down('md')]: { pr: 0, textAlign: 'center' } }}>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30
                }}
              >
                <Typography
                  variant="h1"
                  color="white"
                  sx={{
                    fontSize: { xs: '1.825rem', sm: '2rem', md: '2.5rem' },
                    fontWeight: 700,
                    lineHeight: { xs: 1.3, sm: 1.3, md: 1.3 }
                  }}
                >
                  <span>MyFenocX </span>
                  <Box component="span" sx={{ color: theme.palette.primary.main }}>
                    <span>coming soon </span>
                  </Box>
                </Typography>
              </motion.div>
            </Grid>
            {/*<Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.2
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  color="white"
                  sx={{
                    fontSize: { xs: '0.875rem', md: '1rem' },
                    fontWeight: 400,
                    lineHeight: { xs: 1.4, md: 1.4 }
                  }}
                >
                  Mantis React is a blazing-fast dashboard template built using the MUI React library.
                </Typography>
              </motion.div>
            </Grid>*/}
            <Grid item xs={12} sx={{ my: 3.25 }}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.4
                }}
              >
                <Grid container spacing={2} sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Grid item>
                    <AnimateButton>
                      <Button
                        component={RouterLink}
                        to="/login"
                        size="large"
                        color="primary"
                        variant="outlined"
                        startIcon={<EyeOutlined style={{ fontSize: '1.15rem' }} />}
                      >
                        Explore dashboard
                      </Button>
                    </AnimateButton>
                  </Grid>
                  <Grid item>
                    <AnimateButton>
                      <RouterLink to="/buy" style={{ textDecoration: 'none' }}>
                        <Button component={Link} size="large" color="primary" variant="contained">
                          Buy Account
                        </Button>
                      </RouterLink>
                    </AnimateButton>
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.6
                }}
              ></motion.div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeaderPage;
