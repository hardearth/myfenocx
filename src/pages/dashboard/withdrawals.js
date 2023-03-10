import { FormattedMessage } from 'react-intl';
import { Grid, Typography } from '@mui/material';
import ReferralLink from 'sections/dashboard/ReferralLink';
import Table from 'sections/dashboard/Table';
import dataJson from 'data/transactions';
import headersJson from 'data/system/headers';
import user from 'data/user';

const Page = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h1" gutterBottom>
          <FormattedMessage id="withdrawals" />
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          <FormattedMessage id="dashboard" /> / <FormattedMessage id="withdrawals" />
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <ReferralLink />
      </Grid>
      <div className="container mt-3">
        <div className="row align-items-center justify-content-center">
          <div className="col-9 col-lg-2 p-2">
            <div className="card bg-primary">
              <Typography variant="h1" className="text-center mb-2">
                ${user.profits} <b className="h5">USD</b>
              </Typography>
              <Typography variant="h6" className="fw-bold">
                Deposits & commissions
              </Typography>
            </div>
          </div>
          <div className="col-9 col-lg-2 p-2">
            <div className="card bg-primary">
              <Typography variant="h1" className="text-center mb-2">
                ${user.pendingWithdrawal} <b className="h5">USD</b>
              </Typography>
              <Typography variant="h6" className="fw-bold">
                Balance
              </Typography>
            </div>
          </div>
          <div className="col-9 col-lg-2 p-2">
            <div className="card bg-green">
              <Typography variant="h1" className="text-center mb-2">
                ${user.withdrawal} <b className="h5">USD</b>
              </Typography>
              <Typography variant="h6" className="fw-bold">
                Total withdrawals
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <Grid item xs={12}>
        <Table dataJson={dataJson.withdrawals} headersJson={headersJson} />
      </Grid>
    </Grid>
  );
};

export default Page;
