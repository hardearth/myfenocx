import { FormattedMessage } from 'react-intl';
import { Grid, Typography, Stack } from '@mui/material';
import services from 'data/services';

const DashboardDefault = () => {
  function getDate(date) {
    let request = new Date(Date.parse(date));
    return request.toDateString();
  }

  function diffSubtract(date1, date2) {
    let date_1 = new Date(date1);
    let date_2 = new Date(date2);
    let day_as_milliseconds = 86400000;
    let diff_in_millisenconds = date_2 - date_1;
    let diff_in_days = diff_in_millisenconds / day_as_milliseconds;

    return diff_in_days;
  }

  return (
    <>
      <Grid container spacing={3} className="container">
        <Grid item xs={12}>
          <Typography variant="h1" gutterBottom>
            <FormattedMessage id="home" />
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            <FormattedMessage id="dashboard" /> / <FormattedMessage id="home" />
          </Typography>
        </Grid>
        <div className="row w-100 m-3">
          <Typography variant="h6" color="textSecondary" className="mb-2">
            Membership
          </Typography>
          <div className="col-12 col-lg-3 m-1">
            <div className="card bg-green">
              <Stack justifyContent="center" alignItems="center">
                <Typography variant="h1">100</Typography>
                <Typography variant="h6">Days to renew your membership</Typography>
              </Stack>
            </div>
          </div>
        </div>
        <div className="row w-100 m-3">
          <Typography variant="h6" color="textSecondary" className="mb-2">
            Services
          </Typography>
          {services.subscriptions.map((service) =>
            service.state ? (
              <div key={service._idSubscription} className="col-12 col-lg-3 p-2">
                <div className="card bg-primary">
                  <Typography variant="h3" className="text-center mb-2">
                    {service.name}
                  </Typography>
                  <Typography variant="h6" className="text-black">
                    Subscribed on {getDate(service.startsAt)}
                  </Typography>
                  <Typography variant="h6" className="text-black">
                    Expires {getDate(service.expiresAt)}
                  </Typography>
                  <Typography variant="h6" className="text-black">
                    Active state
                  </Typography>
                  <Typography variant="h6" className="fw-bold text-end">
                    Expires in {diffSubtract(service.startsAt, service.expiresAt)} days
                  </Typography>
                </div>
              </div>
            ) : (
              <div className="col-12 col-lg-3 p-2">
                <div className="card bg-danger">
                  <Typography variant="h3" className="text-center mb-2">
                    {service.name}
                  </Typography>
                  <Typography variant="h2" className="text-black text-center fw-bold">
                    ${service.price} USD
                  </Typography>
                  <Typography variant="h6" className="text-black">
                    Inactive state
                  </Typography>
                  <Typography variant="h6" className="fw-bold text-end">
                    Buy
                  </Typography>
                </div>
              </div>
            )
          )}
        </div>
      </Grid>
    </>
  );
};

export default DashboardDefault;
