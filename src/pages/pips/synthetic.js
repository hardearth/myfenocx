import { Grid, Typography } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import ValidateSubscription from 'sections/ValidateSubscription';
import user from 'data/user';
import pips from 'data/admin/pips';
import messages from 'data/admin/messages';

const App = () => {
  function getDate(date) {
    let request = new Date(Date.parse(date));
    return request.toDateString();
  }
  return (
    <div className="container">
      <Grid item xs={12}>
        <Typography variant="h1" gutterBottom>
          <FormattedMessage id="synthetic" />
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          <FormattedMessage id="pips" /> / <FormattedMessage id="synthetic" />
        </Typography>
      </Grid>
      <ValidateSubscription name="Synthetic" objUser={user.pips} objAdmin={pips.pips} />
      <div className="row align-items-center justify-content-center my-3 bg-dark p-3 pt-4 rounded">
        <div className="accordion bg-transparent" id="accordionExample">
          {messages.synthetic.map((pip) => (
            <div key={pip._id} className="accordion-item border-0 bg-transparent col-12 col-lg-5">
              <span className="accordion-header" id={`pip${pip._id}`}>
                <button
                  className="border border-secondary bg-dark py-3 p-5 rounded h5 bg-black mb-2 text-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${pip._id}`}
                  aria-controls={`collapse${pip._id}`}
                >
                  {pip.name}
                </button>
              </span>
              <div
                id={`collapse${pip._id}`}
                className="accordion-collapse collapse"
                aria-labelledby={`pip${pip._id}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body text-light container-aux">
                  {pip.messages.map((message) => {
                    if (message.type === 'text') {
                      return (
                        <div key={message._id} className=" p-2 mb-2 py-1 bg-black rounded">
                          {message.content}
                          <span className="msm-date">{getDate(message.date)}</span>
                        </div>
                      );
                    }
                    if (message.type === 'img') {
                      return (
                        <a key={message._id} href={message.content} rel="noreferrer" target="_blank">
                          <img alt="" src={message.content} className="rounded mb-2" style={{ width: '70%' }} />
                        </a>
                      );
                    }
                    if (message.type === 'document') {
                      return (
                        <a
                          key={message._id}
                          href={message.content}
                          rel="noreferrer"
                          target="_blank"
                          className="btn btn-sm p-2 py-1 mb-2 bg-blue text-light small rounded w-100 "
                        >
                          <b>Click to see the document</b>
                          <span className="msm-date">{getDate(message.date)}</span>
                        </a>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
