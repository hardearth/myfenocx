// material-ui
import { Box, Toolbar } from '@mui/material';

// project import
import Profile from './Profile';
import Localization from './Localization';

// ==============================|| HEADER CONTENT - MOBILE ||============================== //

const MobileSection = () => {
  return (
    <>
      <Box sx={{ flexShrink: 0, ml: 0.75 }}>
        <Toolbar>
          <Localization />
          <Profile />
        </Toolbar>
      </Box>
    </>
  );
};

export default MobileSection;
