import { FormattedMessage } from 'react-intl';
// material-ui
import { Grid, Typography } from '@mui/material';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h1" gutterBottom>
          <FormattedMessage id="home" />
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          <FormattedMessage id="dashboard" /> / <FormattedMessage id="home" />
        </Typography>
      </Grid>
    </Grid>
  );
};

export default DashboardDefault;
