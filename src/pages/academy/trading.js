import publications from 'data/admin/publications';
import { Grid, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import ValidateSubscription from 'sections/ValidateSubscription';
import user from 'data/user';
import academy from 'data/admin/academy';

const App = () => {
  function getDate(date) {
    let request = new Date(Date.parse(date));
    return request.toDateString();
  }
  return (
    <div className="container">
      <Grid item xs={12}>
        <Typography variant="h1" gutterBottom>
          <FormattedMessage id="copy" />
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          <FormattedMessage id="academy" /> / <FormattedMessage id="copy" />
        </Typography>
      </Grid>
      <ValidateSubscription name="Trading" objUser={user.academy} objAdmin={academy.academy} />
      <div className="row">
        {publications.trading.map((item) => (
          <div key={item._id} className="col-12 col-lg-3 p-1">
            <div className="card">
              <Typography variant="" className="text-center mb-2">
                {item.name}
              </Typography>
              <img alt="" src={item.img} className="rounded-1 mb-2" />
              <Typography variant="body2" className="p-2">
                {item.description}
              </Typography>
              <a href={item.url} rel="noreferrer" target="_blank" className="btn btn-sm m-2 bg-yellow text-light">
                Go learn
              </a>
              <Typography variant="caption" className="text-end">
                {getDate(item.date)}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
