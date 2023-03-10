import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Typography, Button } from '@mui/material';
import user from 'data/user';

const PayAux = ({ value, info }) => {
  const navigate = useNavigate();
  const [val, setVal] = useState(value);
  const [msm, setMsm] = useState();

  useEffect(() => {
    setVal(value);
  }, [value, val]);

  function confirm() {
    if (user.pendingWithdrawal >= value) {
      setMsm('');
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
    document.getElementById('btnPayAux').click(); // open/close pay
    window.location.replace('');
  }

  return (
    <>
      <button
        className="btn btn-primary d-none"
        id="btnPayAux"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#staticBackdropAux"
        aria-controls="staticBackdropAux"
      >
        Toggle static offcanvas
      </button>
      <div
        className="offcanvas offcanvas-end text-bg-dark container"
        data-bs-backdrop="static"
        tabIndex="-1"
        id="staticBackdropAux"
        aria-labelledby="staticBackdropAuxLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="staticBackdropAuxLabel">
            Payment window
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
            <Typography variant="body2" gutterBottom className="text-center">
              {info}
            </Typography>
            <Typography variant="h2" gutterBottom className="text-center">
              ${val} USD
            </Typography>
            <Typography variant="h5" gutterBottom className="text-center text-danger">
              {msm}
            </Typography>
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
    </>
  );
};

PayAux.propTypes = {
  value: PropTypes.number,
  info: PropTypes.object
};
export default PayAux;
