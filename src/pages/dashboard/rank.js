import { FormattedMessage } from 'react-intl';
import { Grid, Typography } from '@mui/material';
import Rank from 'sections/dashboard/Rank';

const Page = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h1" gutterBottom>
          <FormattedMessage id="rank" />
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          <FormattedMessage id="dashboard" /> / <FormattedMessage id="rank" />
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Rank />
      </Grid>
    </Grid>
  );
};

export default Page;
