import { Grid, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';

const App = () => {
  return (
    <div className="container">
      <Grid item xs={12}>
        <Typography variant="h1" gutterBottom>
          <FormattedMessage id="_lives" />
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          <FormattedMessage id="lives" /> / <FormattedMessage id="_lives" />
        </Typography>
      </Grid>
      <div className="row"></div>
    </div>
  );
};

export default App;
