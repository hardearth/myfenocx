import { Box } from '@mui/material';
import Profile from './Profile';
import Localization from './Localization';
import Profit from './Profit';

const HeaderContent = () => {
  return (
    <>
      <Box sx={{ width: '100%', ml: { xs: 0, md: 1 } }}></Box>
      <Localization />
      <Profit />
      <Profile />
    </>
  );
};

export default HeaderContent;
