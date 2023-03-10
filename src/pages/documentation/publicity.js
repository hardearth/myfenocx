import publications from 'data/admin/publications';
import { Grid, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';

const App = () => {
  function getDate(date) {
    let request = new Date(Date.parse(date));
    return request.toDateString();
  }

  return (
    <div className="container">
      <Grid item xs={12}>
        <Typography variant="h1" gutterBottom>
          <FormattedMessage id="documentation" />
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          <FormattedMessage id="documentation" /> / <FormattedMessage id="publicity" />
        </Typography>
      </Grid>
      <div className="row">
        {publications.publications.map((publication) => (
          <div key={publication._id} className="col-12 col-lg-3 p-2">
            <div className="card">
              <Typography variant="" className="text-center mb-2">
                {publication.name}
              </Typography>
              <img alt="" src={publication.img} className="rounded mb-2" />
              <Typography variant="body2" className="p-2">
                {publication.description}
              </Typography>
              <a href={publication.url} rel="noreferrer" target="_blank" className="btn btn-sm m-2 bg-yellow text-light">
                Go to link
              </a>
              <Typography variant="caption" className="text-end">
                {getDate(publication.date)}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
