import publications from 'data/admin/publications';
import { Grid, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { WhatsAppOutlined } from '@ant-design/icons';

const App = () => {
  function getDate(date) {
    let request = new Date(Date.parse(date));
    return request.toDateString();
  }
  return (
    <div className="container">
      <Grid item xs={12}>
        <Typography variant="h1" gutterBottom>
          <FormattedMessage id="websites" />
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          <FormattedMessage id="eCommerce" /> / <FormattedMessage id="websites" />
        </Typography>
      </Grid>
      <div className="row">
        {publications.websites.map((item) => (
          <div key={item._id} className="col-12 col-lg-4 p-1">
            <div className="card">
              <Typography variant="" className="text-center mb-2">
                {item.name}
              </Typography>
              <img alt="" src={item.img} className="rounded-1 mb-2" />
              <Typography variant="body2" className="p-2">
                {item.description}
              </Typography>
              <a href={item.url} rel="noreferrer" target="_blank" className="btn btn-sm m-2 bg-green text-light">
                <WhatsAppOutlined className="mx-2 h3" />
                Quote
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
