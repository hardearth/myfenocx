import { FormattedMessage } from 'react-intl';
// material-ui
import { Grid, Typography } from '@mui/material';

// project imports
import ReferralLink from 'sections/dashboard/ReferralLink';
import Tree from 'sections/dashboard/Tree';

const Page = () => {
  return (
    <Grid container spacing={3}>
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
      <Grid item xs={12}>
        <Tree />
      </Grid>
    </Grid>
  );
};

export default Page;
