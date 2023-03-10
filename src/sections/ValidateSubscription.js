import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const App = ({ name, objAdmin, objUser }) => {
  const navigate = useNavigate();

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

  return (
    <>
      {objAdmin.map((item) => {
        if (name === item.name) {
          let obj = getDataElement(item._id);
          if (Object.keys(obj).length > 0) {
            if (obj.state) {
              return (
                <div key={item._id} className="col-12 col-lg-3 p-2">
                  <div className="card bg-yellow">
                    <Typography variant="h3" className="text-center mb-2">
                      {item.name}
                    </Typography>
                    <Typography variant="caption" className="text-light">
                      Subscribed on {getDate(obj.startsAt)}
                    </Typography>
                    <Typography variant="caption" className="text-light">
                      Expires {getDate(obj.expiresAt)}
                    </Typography>
                    <Typography variant="caption" className="text-light">
                      Active state
                    </Typography>
                    <Typography variant="caption" className=" text-end">
                      Expires in {diffSubtract(obj.expiresAt)} days
                    </Typography>
                  </div>
                </div>
              );
            } else {
              setTimeout(() => {
                navigate('/dashboard/default');
              }, 100);
              toast('Please pay subscription', {
                duration: 5000,
                position: 'top-right'
              });
            }
          } else {
            setTimeout(() => {
              navigate('/dashboard/default');
            }, 100);
            toast('Please pay subscription', {
              duration: 5000,
              position: 'top-right'
            });
          }
        }
      })}
    </>
  );
};

App.propTypes = {
  name: PropTypes.string,
  objAdmin: PropTypes.array,
  objUser: PropTypes.array
};
export default App;
