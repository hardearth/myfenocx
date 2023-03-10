import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import user from 'data/user';

const Transfer = ({ objUser, objAdmin }) => {
  const navigate = useNavigate();
  const [val, setVal] = useState();
  const [selected, setSelected] = useState('None');
  const [msm, setMsm] = useState();

  useEffect(() => {
    setVal();
  }, []);

  function select(name, value) {
    if (user.pendingWithdrawal >= value) {
      setMsm('');
    } else {
      setMsm('Insufficient balance');
    }
    setSelected(name);
    setVal(value);
  }

  function getValue(_idValue, item) {
    let val = 0;
    item.map((element) => {
      if (_idValue === element._id) {
        val = element.value;
      }
    });
    return val;
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

  function confirm() {
    if (user.pendingWithdrawal >= val) {
      toast('Transaction in process', {
        duration: 3000,
        position: 'top-right'
      });
      setTimeout(() => {
        navigate('/dashboard/withdrawals');
      }, 100);
      close();
    } else {
      setMsm('Insufficient balance');
    }
  }

  function close() {
    document.getElementById('btnTransfer').click(); // open/close
  }
  return (
    <>
      <button
        className="btn btn-primary d-none"
        id="btnTransfer"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#staticBackdropT"
        aria-controls="staticBackdropT"
      >
        Toggle static offcanvas
      </button>
      <div
        className="offcanvas offcanvas-end text-bg-dark container"
        data-bs-backdrop="static"
        tabIndex="-1"
        id="staticBackdropT"
        aria-labelledby="staticBackdropTLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="staticBackdropTLabel">
            Transfer window
          </h5>
          <button className="btn btn-danger btn-sm text-white small" onClick={() => close()}>
            Close
          </button>
        </div>
        <div className="row align-items-center justify-content-center offcanvas-body">
          <div className="col-12 rounded bg-dark p-4">
            <Typography variant="h3" gutterBottom className="text-center m-3 card bg-green">
              Balance ${user.pendingWithdrawal} USD
            </Typography>
            <Typography variant="h6" color="textSecondary" className="mb-2">
              Select one of the following inactive services to pay subscription:
            </Typography>
            {objAdmin.map((item) => {
              let itemAux = [];
              let obj = getDataElement(item._id);
              if (Object.keys(obj).length > 0) {
                if (obj.state) {
                  itemAux = (
                    <button
                      key={item._id}
                      className="col-12 btn text-light p-0"
                      onClick={() => select(item.name, getValue(obj._idValue, item.values))}
                    >
                      <div className="card bg-yellow">
                        <Typography variant="body1" className="text-start fw-bold">
                          {item.name}
                        </Typography>
                        <Typography variant="h5"> ${getValue(obj._idValue, item.values)} USD </Typography>
                        <Typography variant="caption"> Expires in {diffSubtract(obj.expiresAt)} days </Typography>
                      </div>
                    </button>
                  );
                } else {
                  itemAux = (
                    <button
                      key={item._id}
                      className="col-12 btn text-light p-0"
                      onClick={() => select(item.name, getValue(obj._idValue, item.values))}
                    >
                      <div className="card bg-red">
                        <Typography variant="body1" className="text-start fw-bold">
                          {item.name}
                        </Typography>
                        <Typography variant="h5">${getValue(obj._idValue, item.values)} USD </Typography>
                        <Typography variant="caption"> Expired subscription </Typography>
                      </div>
                    </button>
                  );
                }
              }
              return <> {itemAux} </>;
            })}
            <Typography variant="body1" gutterBottom className="mt-4 rounded p-2 px-3 bg-green">
              Selected service <b className="fw-bold">{selected}</b>
            </Typography>
            <Typography variant="h2" className="text-center">
              ${val} USD
            </Typography>
            <Typography variant="h5" gutterBottom className="text-center text-danger">
              {msm}
            </Typography>
            <div>
              <div className="text-center">
                <Button size="small" color="primary" variant="outlined" onClick={() => close()}>
                  Cancel
                </Button>
                <Button size="small" color="primary" variant="contained" className="m-2" onClick={() => confirm()}>
                  Confirm
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Transfer.propTypes = {
  objUser: PropTypes.array,
  objAdmin: PropTypes.array
};
export default Transfer;
