import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const App = ({ name, objAdmin, objUser }) => {
  function getDate(date) {
    let request = new Date(Date.parse(date));
    return request.toDateString();
  }

  function diffSubtract(date2) {
    let date_1 = new Date();
    let date_2 = new Date(date2);
    let day_as_milliseconds = 86400000;
    let diff_in_mil = date_2 - date_1;
    let diff_in_days = diff_in_mil / day_as_milliseconds;

    return parseInt(diff_in_days);
  }

  function getDataElement(id) {
    let obj = {};
    objUser.map((element) => {
      if (id === element._idRef) {
        obj = element;
      }
    });
    return obj;
  }

  function transfer() {
    document.getElementById('btnTransfer').click(); // open/close
  }

  return (
    <>
      <div className="row w-100 my-3">
        <Typography variant="h6" color="textSecondary" className="mb-2">
          {name}
        </Typography>
        {objAdmin.map((item) => {
          let obj = getDataElement(item._id);
          if (Object.keys(obj).length > 0) {
            if (obj.state) {
              return (
                <div key={item._id} className="col-12 col-lg-3 p-3 text-light">
                  <div className="card bg-yellow">
                    <Typography variant="h4" className="mb-1">
                      {item.name}
                    </Typography>
                    <Typography variant="caption"> Subscribed on {getDate(obj.startsAt)} </Typography>
                    <Typography variant="caption"> Expires {getDate(obj.expiresAt)} </Typography>
                    <Typography variant="caption"> Active subscription </Typography>
                    <Typography variant="caption" className="fw-bold text-end ">
                      Expires in {diffSubtract(obj.expiresAt)} days
                    </Typography>
                  </div>
                </div>
              );
            } else {
              return (
                <div key={item._id} className="col-12 col-lg-3 p-3 text-light">
                  <div className="card bg-red">
                    <Typography variant="h4" className="mb-1">
                      {item.name}
                    </Typography>
                    <Typography variant="caption">Expired subscription </Typography>
                    <button className="btn btn-sm fw-bold text-end text-light" onClick={() => transfer()}>
                      Pay subscription
                    </button>
                  </div>
                </div>
              );
            }
          } else {
            return (
              <div key={item._id} className="col-12 col-lg-3 p-3 text-light">
                <div className="card bg-blue">
                  <Typography variant="h4" className="mb-1">
                    {item.name}
                  </Typography>
                  <Typography variant="caption"> Not subscribed </Typography>
                  <button className="btn btn-sm text-light fw-bold text-end" onClick={() => transfer()}>
                    Subscribe me
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

App.propTypes = {
  name: PropTypes.string,
  objAdmin: PropTypes.array,
  objUser: PropTypes.array
};
export default App;
