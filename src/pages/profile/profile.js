import { Button, Grid, InputLabel, Stack, TextField, Typography } from '@mui/material';
import NumberFormat from 'react-number-format';
import MainCard from 'components/MainCard';
import ReferralLink from 'sections/dashboard/ReferralLink';
import user from 'data/user';

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
                <TextField fullWidth defaultValue={user.name} id="personal-first-name" placeholder="First Name" autoFocus />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack spacing={1.25}>
                <InputLabel htmlFor="personal-first-name">Last Name</InputLabel>
                <TextField fullWidth defaultValue={user.lastname} id="personal-first-name" placeholder="Last Name" />
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
                      <select name="countryCode" className="form-select form-select-sm bg-dark border-secondary text-light mb-2">
                        <option value="+57">+57</option>
                        <option value="+1">+1</option>
                        <option value="+34">+34</option>
                        <option value="+507">+507</option>
                        <option value="+51">+51</option>
                        <option value="+51">+52</option>
                        <option value="+53">+53</option>
                        <option value="+54">+54</option>
                        <option value="+55">+55</option>
                        <option value="+56">+56</option>
                        <option value="+58">+58</option>
                        <option value="+591">+591</option>
                        <option value="+592">+592</option>
                        <option value="+593">+593</option>
                        <option value="+595">+595</option>
                        <option value="+598">+598</option>
                        <option value="+61">+61</option>
                      </select>
                      <NumberFormat
                        fullWidth
                        customInput={TextField}
                        label="Phone Number"
                        defaultValue={user.phone}
                        onBlur={() => {}}
                        onChange={() => {}}
                      />
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Stack spacing={1.25}>
                    <Typography>Email Address</Typography>
                    <Typography color="textSecondary">{user.email}</Typography>
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
