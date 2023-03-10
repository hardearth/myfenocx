import { Link as RouterLink } from 'react-router-dom';
import { FacebookOutlined, InstagramOutlined, YoutubeOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { Link, Stack, Typography } from '@mui/material';
import links from 'data/system/links';
import { FormattedMessage } from 'react-intl';

const Footer = () => (
  <Stack justifyContent="space-between" alignItems="center" sx={{ p: '24px 16px 30px', mt: 'auto' }}>
    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ p: '24px 16px 0px', mt: 'auto' }}>
      <Stack spacing={5} direction="row" justifyContent="space-between" alignItems="center">
        <a href={links.whatsapp} rel="noreferrer" target="_blank" className="h3">
          <WhatsAppOutlined />
        </a>
        <a href={links.instagram} rel="noreferrer" target="_blank" className="h3">
          <InstagramOutlined />
        </a>
        <a href={links.facebook} rel="noreferrer" target="_blank" className="h3">
          <FacebookOutlined />
        </a>
        <a href={links.youtube} rel="noreferrer" target="_blank" className="h3">
          <YoutubeOutlined />
        </a>
      </Stack>
    </Stack>
    <Stack direction="row" spacing={1} justifyContent="space-between" alignItems="center" sx={{ p: '24px 16px 0px', mt: 'auto' }}>
      <Typography variant="caption">
        &copy; <FormattedMessage id="rights" />
      </Typography>
      <Link component={RouterLink} to="/" target="_blank" variant="caption" color="textPrimary">
        <FormattedMessage id="aboutUs" />
      </Link>
      <a href={links.privacy} rel="noreferrer" target="_blank" className="small text-light">
        <FormattedMessage id="privacy" />
      </a>
      <a href={links.terms} rel="noreferrer" target="_blank" className="small text-light">
        <FormattedMessage id="terms" />
      </a>
    </Stack>
  </Stack>
);

export default Footer;
