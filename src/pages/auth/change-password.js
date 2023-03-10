// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import AuthResetPassword from 'sections/auth/auth-forms/AuthResetPassword';

// ================================|| RESET PASSWORD ||================================ //

const ResetPassword = () => (
  <div className="container">
    <div className="row align-items-center justify-content-center">
      <div className="col-12 col-lg-4 mt-3">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <Typography variant="h3">Change Password</Typography>
              <Typography color="secondary">Please choose your new password</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <AuthResetPassword />
          </Grid>
        </Grid>
      </div>
    </div>
  </div>
);

export default ResetPassword;
