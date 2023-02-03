import PropTypes from 'prop-types';
import * as React from 'react';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import AppBar from '@mui/material/AppBar';
import { useTheme } from '@mui/material/styles';
import {
  useMediaQuery,
  Box,
  Button,
  Chip,
  Container,
  Drawer,
  Link,
  List,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger
} from '@mui/material';

// project import
import config from 'config';
import IconButton from 'components/@extended/IconButton';
import Logo from 'components/logo';

// assets
import { MenuOutlined } from '@ant-design/icons';

// ==============================|| COMPONENTS - APP BAR ||============================== //

// elevation scroll
function ElevationScroll({ layout, children, window }) {
  const theme = useTheme();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
    target: window ? window() : undefined
  });

  const backColorScroll = theme.palette.mode === 'dark' ? theme.palette.grey[50] : theme.palette.grey[800];
  const backColor = layout !== 'landing' ? backColorScroll : 'transparent';

  return React.cloneElement(children, {
    style: {
      backgroundColor: trigger ? backColorScroll : backColor
    }
  });
}

const Header = ({ handleDrawerOpen, layout = 'landing', ...others }) => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerToggle, setDrawerToggle] = useState(false);

  /** Method called on multiple components with different event types */
  const drawerToggler = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerToggle(open);
  };

  return (
    <ElevationScroll layout={layout} {...others}>
      <AppBar sx={{ bgcolor: 'transparent', color: theme.palette.text.primary, boxShadow: 'none' }}>
        <Container disableGutters={matchDownMd}>
          <Toolbar sx={{ px: { xs: 1.5, md: 0, lg: 0 }, py: 2 }}>
            <Stack direction="row" sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }} alignItems="center">
              <Typography component="div" sx={{ textAlign: 'left', display: 'inline-block' }}>
                <Logo reverse to="/" />
              </Typography>
              <Chip
                label={process.env.REACT_APP_VERSION}
                variant="outlined"
                size="small"
                color="secondary"
                sx={{ mt: 0.5, ml: 1, fontSize: '0.725rem', height: 20, '& .MuiChip-label': { px: 0.5 } }}
              />
            </Stack>
            <Stack
              direction="row"
              sx={{
                '& .header-link': { px: 1, '&:hover': { color: theme.palette.primary.main } },
                display: { xs: 'none', md: 'block' }
              }}
              spacing={2}
            >
              <RouterLink to="/login" style={{ textDecoration: 'none' }}>
                <Button component={Link} size="large" color="primary" variant="outlined">
                  Login
                </Button>
              </RouterLink>
              <RouterLink to="/buy" style={{ textDecoration: 'none' }}>
                <Button component={Link} size="large" color="primary" variant="contained">
                  Buy Account
                </Button>
              </RouterLink>
            </Stack>
            <Box
              sx={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
                display: { xs: 'flex', md: 'none' }
              }}
            >
              <Typography component="div" sx={{ textAlign: 'left', display: 'inline-block' }}>
                <Logo reverse to="/" />
              </Typography>
              <Stack direction="row" spacing={2}>
                {layout === 'component' && (
                  <Button
                    variant="outlined"
                    size="small"
                    color="warning"
                    component={RouterLink}
                    to={config.defaultPath}
                    sx={{ mt: 0.5, height: 28 }}
                  >
                    Dashboard
                  </Button>
                )}

                <IconButton
                  color="secondary"
                  {...(layout === 'component' ? { onClick: handleDrawerOpen } : { onClick: drawerToggler(true) })}
                  sx={{
                    '&:hover': { bgcolor: theme.palette.mode === 'dark' ? 'secondary.lighter' : 'secondary.dark' }
                  }}
                >
                  <MenuOutlined style={{ color: theme.palette.mode === 'dark' ? 'inherit' : theme.palette.grey[100] }} />
                </IconButton>
              </Stack>
              <Drawer
                anchor="top"
                open={drawerToggle}
                onClose={drawerToggler(false)}
                sx={{ '& .MuiDrawer-paper': { backgroundImage: 'none' } }}
              >
                <Box
                  sx={{
                    width: 'auto',
                    '& .MuiListItemIcon-root': {
                      fontSize: '1rem',
                      minWidth: 28
                    }
                  }}
                  role="presentation"
                  onClick={drawerToggler(false)}
                  onKeyDown={drawerToggler(false)}
                >
                  <List>
                    <RouterLink to="/login" style={{ textDecoration: 'none' }} className="d-block p-2 px-5">
                      <Button component={Link} size="large" color="primary" variant="outlined">
                        Login
                      </Button>
                    </RouterLink>
                    <RouterLink to="/buy" style={{ textDecoration: 'none' }} className="d-block p-2 px-5">
                      <Button component={Link} size="large" color="primary" variant="contained">
                        Buy Account
                      </Button>
                    </RouterLink>
                  </List>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
};

Header.propTypes = {
  handleDrawerOpen: PropTypes.func,
  layout: PropTypes.string
};

export default Header;
