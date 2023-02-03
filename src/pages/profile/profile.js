import { Button, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';

// third-party
import NumberFormat from 'react-number-format';

// project import
import MainCard from 'components/MainCard';
import ReferralLink from 'sections/dashboard/ReferralLink';

// ==============================|| ACCOUNT PROFILE - PERSONAL ||============================== //

const TabPersonal = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h1" gutterBottom>
          Edit profile
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <ReferralLink />
      </Grid>
      <Grid item xs={12} sm={6}>
        <MainCard title="Personal Information">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Stack spacing={1.25}>
                <InputLabel htmlFor="personal-first-name">First Name</InputLabel>
                <TextField fullWidth defaultValue="Anshan" id="personal-first-name" placeholder="First Name" autoFocus />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack spacing={1.25}>
                <InputLabel htmlFor="personal-first-name">Last Name</InputLabel>
                <TextField fullWidth defaultValue="Handgun" id="personal-first-name" placeholder="Last Name" />
              </Stack>
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <MainCard title="Contact Information">
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Stack spacing={1.25}>
                    <InputLabel htmlFor="personal-phone">Phone Number</InputLabel>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                      <Select defaultValue="+57">
                        <MenuItem value="+57">+57</MenuItem>
                        <MenuItem value="91">+91</MenuItem>
                        <MenuItem value="1-671">1-671</MenuItem>
                        <MenuItem value="36">+36</MenuItem>
                        <MenuItem value="225">(255)</MenuItem>
                        <MenuItem value="39">+39</MenuItem>
                      </Select>
                      <NumberFormat
                        fullWidth
                        customInput={TextField}
                        label="Phone Number"
                        defaultValue="8654239581"
                        onBlur={() => {}}
                        onChange={() => {}}
                      />
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Stack spacing={1.25}>
                    <Typography>Email Address</Typography>
                    <Typography color="textSecondary">mail@ejemplo.com</Typography>
                  </Stack>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>
          <Button variant="outlined" color="secondary">
            Cancel
          </Button>
          <Button variant="contained">Update Profile</Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default TabPersonal;
