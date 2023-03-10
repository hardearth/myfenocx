import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ButtonBase } from '@mui/material';
import config from 'config';
import icon from 'assets/images/icon.svg';
import logo from 'assets/images/logo.svg';

const LogoSection = ({ isIcon, sx, to }) => (
  <ButtonBase disableRipple component={Link} to={!to ? config.defaultPath : to} sx={sx}>
    {isIcon ? <img src={icon} alt="logo" style={{ width: '175px' }} /> : <img src={logo} alt="logo" style={{ width: '175px' }} />}
  </ButtonBase>
);

LogoSection.propTypes = {
  isIcon: PropTypes.bool,
  sx: PropTypes.object,
  to: PropTypes.string
};

export default LogoSection;
