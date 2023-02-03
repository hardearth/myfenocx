import { FormattedMessage } from 'react-intl';
// material-ui
import { Grid, Typography } from '@mui/material';

// project imports
import ReferralLink from 'sections/dashboard/ReferralLink';
import Commissions from 'sections/dashboard/Commissions';

const Page = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h1" gutterBottom>
          <FormattedMessage id="commissions" />
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          <FormattedMessage id="dashboard" /> / <FormattedMessage id="commissions" />
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <ReferralLink />
      </Grid>
      <Grid item xs={12}>
        <Commissions />
      </Grid>
    </Grid>
  );
};

export default Page;
