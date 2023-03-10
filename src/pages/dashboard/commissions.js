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
          <FormattedMessage id="commissions" />
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          <FormattedMessage id="dashboard" /> / <FormattedMessage id="commissions" />
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
                {user.directCommissions} <b className="h5">USD</b>
              </Typography>
              <Typography variant="h6" className="fw-bold">
                Direct commissions
              </Typography>
            </div>
          </div>
          <div className="col-9 col-lg-2 p-2">
            <div className="card bg-primary">
              <Typography variant="h1" className="text-center mb-2">
                {user.indirectCommissions} <b className="h5">USD</b>
              </Typography>
              <Typography variant="h6" className="fw-bold">
                Indirect commissions
              </Typography>
            </div>
          </div>
          <div className="col-9 col-lg-2 p-2">
            <div className="card bg-green">
              <Typography variant="h1" className="text-center mb-2">
                {user.directCommissions + user.indirectCommissions} <b className="h5">USD</b>
              </Typography>
              <Typography variant="h6" className="fw-bold">
                Total commissions
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <Grid item xs={12}>
        <Table dataJson={dataJson.commissions} headersJson={headersJson} />
      </Grid>
    </Grid>
  );
};

export default Page;
