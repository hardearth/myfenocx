import publications from 'data/admin/publications';
import { Grid, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import ValidateSubscription from 'sections/ValidateSubscription';
import { WhatsAppOutlined } from '@ant-design/icons';
import links from 'data/system/links';

import user from 'data/user';
import health from 'data/admin/health';

const App = () => {
  function getDate(date) {
    let request = new Date(Date.parse(date));
    return request.toDateString();
  }
  return (
    <div className="container">
      <Grid item xs={12}>
        <Typography variant="h1" gutterBottom>
          <FormattedMessage id="_health" />
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          <FormattedMessage id="health" /> / <FormattedMessage id="_health" />
        </Typography>
        <Typography variant="h5" gutterBottom>
          <a href={links.healthAssistance} rel="noreferrer" target="_blank" className="small text-light bg-green p-3 card my-3 d-block">
            <WhatsAppOutlined className="mx-2 h3" />
            Online health assistance
          </a>
        </Typography>
      </Grid>
      <ValidateSubscription name="Health" objUser={user.health} objAdmin={health.health} />
      <div className="row">
        {publications.health.map((item) => (
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
