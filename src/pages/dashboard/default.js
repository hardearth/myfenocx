import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import IncomeAreaChart from 'sections/dashboard/IncomeAreaChart';
import LinearWithLabel from 'components/@extended/Progress/LinearWithLabel';
import { Grid, Typography, Stack, Box } from '@mui/material';
import MainCard from 'components/MainCard';
import ReferralLink from 'sections/dashboard/ReferralLink';
import ranksInfo from 'data/system/ranks';
import ranks from 'data/admin/ranks';
import user from 'data/user';
import funding from 'data/admin/funding';
import trading from 'data/admin/trading';
import pips from 'data/admin/pips';
import academy from 'data/admin/academy';
import health from 'data/admin/health';
import eCommerce from 'data/admin/eCommerce';
import Subscriptions from 'sections/Subscriptions';

const DashboardDefault = () => {
  function diffSubtract(date2) {
    let date_1 = new Date();
    let date_2 = new Date(date2);
    let day_as_milliseconds = 86400000;
    let diff_in_mil = date_2 - date_1;
    let diff_in_days = diff_in_mil / day_as_milliseconds;

    return parseInt(diff_in_days);
  }

  function userRank() {
    let userAux = [];
    let i = user.rank;
    if (i > 0 && i != null) {
      let progress = (user.directVolumen + user.indirectVolumen) / (ranks.ranks[i - 1].directVolume + ranks.ranks[i - 1].indirectVolume);
      userAux = (
        <>
          <div className="col-12 ">
            <Typography variant="h6" className="mt-3">
              Current rank <b className="rounded bg-primary p-1 px-3">{ranksInfo[i - 1].rankName}</b>
            </Typography>
            <Typography variant="h6" className="mt-3">
              Received by Ranks
              <b className="rounded bg-primary p-1 px-3 ms-2">
                {user.receivedByRanks}
                <span className="caption"> USD</span>
              </b>
            </Typography>
            <Typography variant="h6" className="mt-3">
              Rank progress <LinearWithLabel value={progress * 100} />
            </Typography>
          </div>
        </>
      );
    }
    return userAux;
  }

  return (
    <>
      <Grid container className="container">
        <Grid item xs={12}>
          <Typography variant="h1" gutterBottom>
            <FormattedMessage id="home" />
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            <FormattedMessage id="dashboard" /> / <FormattedMessage id="home" />
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ReferralLink />
        </Grid>
        <div className="row w-100 my-3">
          <Typography variant="h6" color="textSecondary" className="mb-2">
            General
          </Typography>
          <div className="col-12 col-lg-3">
            <div className="card bg-blue my-2">
              <Stack justifyContent="center" alignItems="center">
                <Typography variant="h2">{diffSubtract(user.suscription.expiresAt)}</Typography>
                <Typography variant="caption">Days to renew your membership</Typography>
              </Stack>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div className="card bg-green my-2">
              <Typography variant="h2" className="text-center">
                ${user.profits} <b className="h5">USD</b>
              </Typography>
              <Typography variant="caption" className="fw-bold">
                Deposits & commissions
              </Typography>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div className="card bg-green my-2">
              <Typography variant="h2" className="text-center">
                ${user.pendingWithdrawal} <b className="h5">USD</b>
              </Typography>
              <Typography variant="caption" className="fw-bold">
                Balance
              </Typography>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div className="card bg-yellow my-2">
              <Typography variant="h2" className="text-center">
                ${user.withdrawal} <b className="h5">USD</b>
              </Typography>
              <Typography variant="caption" className="fw-bold">
                Total withdrawals
              </Typography>
            </div>
          </div>
        </div>
        <div className="row w-100 my-3">
          <Typography variant="h6" color="textSecondary">
            Rank
          </Typography>
          {userRank()}
        </div>
        <Link to="/funding/funding" className="w-100">
          <Subscriptions name="Funding" objUser={user.funding} objAdmin={funding.funding} />
        </Link>
        <Subscriptions name="Trading" objUser={user.trading} objAdmin={trading.trading} />
        <Subscriptions name="Pips" objUser={user.pips} objAdmin={pips.pips} />
        <Subscriptions name="Academy" objUser={user.academy} objAdmin={academy.academy} />
        <Subscriptions name="Health" objUser={user.health} objAdmin={health.health} />
        <Subscriptions name="E-commerce" objUser={user.eCommerce} objAdmin={eCommerce.eCommerce} />
        <Grid item xs={12} className="mt-3">
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h6">Chart of commissions in USD for the present year</Typography>
            </Grid>
          </Grid>
          <MainCard content={false} sx={{ mt: 1.5 }}>
            <Box sx={{ pt: 1, pr: 2 }}>
              <IncomeAreaChart />
            </Box>
          </MainCard>
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardDefault;
