import { Button, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// ==============================|| ACCOUNT PROFILE - PERSONAL ||============================== //

const Wallet = () => {
  return (
    <Grid container spacing={2.5} justifyContent="center">
      <Grid item xs={12}>
        <Typography variant="h1" gutterBottom>
          Wallet
        </Typography>
      </Grid>
      <Grid item xs={12} sm={7}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <MainCard title="Withdrawal wallet">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Stack spacing={1.25}>
                    <InputLabel htmlFor="network">Network</InputLabel>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                      <Select defaultValue="ERC-20">
                        <MenuItem value="ERC-20">ERC-20</MenuItem>
                        <MenuItem value="BEP-20">BEP-20</MenuItem>
                        <MenuItem value="TRC-20">TRC-20</MenuItem>
                      </Select>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={1.25}>
                    <InputLabel htmlFor="wallet">Wallet</InputLabel>
                    <TextField fullWidth defaultValue="0x5e45sdf45f4sad7f545f" id="wallet" placeholder="Wallet" />
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
          <Button variant="contained">Save</Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Wallet;
