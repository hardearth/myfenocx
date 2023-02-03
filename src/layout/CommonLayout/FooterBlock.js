import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Container, CardMedia, Divider, Grid, Link, Typography } from '@mui/material';

import imgfootersoc1 from 'assets/images/landing/img-soc1.svg';
import imgfootersoc2 from 'assets/images/landing/img-soc2.svg';
import imgfootersoc3 from 'assets/images/landing/img-soc3.svg';

// ==============================|| LANDING - FOOTER PAGE ||============================== //

const FooterBlock = () => {
  const theme = useTheme();

  const linkSX = {
    color: theme.palette.common.white,
    fontSize: '0.875rem',
    fontWeight: 400,
    opacity: '0.6',
    '&:hover': {
      opacity: '1'
    }
  };

  return (
    <>
      <Divider sx={{ borderColor: 'grey.700' }} />
      <Box
        sx={{
          py: 1.5,
          bgcolor: theme.palette.mode === 'dark' ? theme.palette.grey[50] : theme.palette.grey[800]
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              Copyright © &nbsp;
              <Typography component={Link} variant="subtitle2" href="#" underline="hover">
                MyFenocx
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Grid container spacing={2} alignItems="center" sx={{ justifyContent: 'flex-end' }}>
                <Grid item>
                  <Link href="#" underline="none" sx={linkSX}>
                    <CardMedia component="img" image={imgfootersoc1} />
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" underline="none" sx={linkSX}>
                    <CardMedia component="img" image={imgfootersoc2} />
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" underline="none" sx={linkSX}>
                    <CardMedia component="img" image={imgfootersoc3} />
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

FooterBlock.propTypes = {
  isFull: PropTypes.bool
};

export default FooterBlock;
