import { Link as RouterLink } from 'react-router-dom';
import { FacebookOutlined, InstagramOutlined, YoutubeOutlined, WhatsAppOutlined } from '@ant-design/icons';

// material-ui
import { Link, Stack, Typography } from '@mui/material';

const Footer = () => (
  <Stack justifyContent="space-between" alignItems="center" sx={{ p: '24px 16px 0px', mt: 'auto' }}>
    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ p: '24px 16px 0px', mt: 'auto' }}>
      <Stack spacing={5} direction="row" justifyContent="space-between" alignItems="center">
        <Link component={RouterLink} to="/" target="_blank" variant="h3" color="textPrimary">
          <FacebookOutlined />
        </Link>
        <Link component={RouterLink} to="/" target="_blank" variant="h3" color="textPrimary">
          <InstagramOutlined />
        </Link>
        <Link component={RouterLink} to="/" target="_blank" variant="h3" color="textPrimary">
          <YoutubeOutlined />
        </Link>
        <Link component={RouterLink} to="/" target="_blank" variant="h3" color="textPrimary">
          <WhatsAppOutlined />
        </Link>
      </Stack>
    </Stack>
    <Stack direction="row" spacing={1} justifyContent="space-between" alignItems="center" sx={{ p: '24px 16px 0px', mt: 'auto' }}>
      <Typography variant="caption">&copy; All rights reserved</Typography>
      <Link component={RouterLink} to="/" target="_blank" variant="caption" color="textPrimary">
        About us
      </Link>
      <Link component={RouterLink} to="#" target="_blank" variant="caption" color="textPrimary">
        Privacy
      </Link>
      <Link component={RouterLink} to="#" target="_blank" variant="caption" color="textPrimary">
        Terms
      </Link>
    </Stack>
  </Stack>
);

export default Footer;
