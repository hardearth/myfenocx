import { FormattedMessage } from 'react-intl';
import { Grid, Typography } from '@mui/material';
import ReferralLink from 'sections/dashboard/ReferralLink';
import Tree from 'sections/dashboard/Tree';

const Page = () => {
  return (
    <Grid container className="container">
      <Grid item xs={12}>
        <Typography variant="h1" gutterBottom>
          <FormattedMessage id="referrals" />
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          <FormattedMessage id="dashboard" /> / <FormattedMessage id="referrals" />
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <ReferralLink />
      </Grid>
      <Tree />
    </Grid>
  );
};

export default Page;
