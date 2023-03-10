import { Grid } from '@mui/material';
import ValidationWizard from 'sections/profile/verification';

const page = () => (
  <Grid container spacing={2.5} justifyContent="center">
    <Grid item xs={12} md={6} lg={7}>
      <ValidationWizard />
    </Grid>
  </Grid>
);

export default page;
