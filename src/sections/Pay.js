import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Typography, Button, TextField, InputAdornment, Tooltip } from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import IconButton from 'components/@extended/IconButton';
import { CopyOutlined } from '@ant-design/icons';
import qr from 'assets/images/qr.png';

const Pay = ({ value, info, onPay }) => {
  const [wallet, setWallet] = useState('');
  const [token, setToken] = useState('BUSD');
  const [network, setNetwork] = useState('BEP-20');
  const [val, setVal] = useState(value);
  const [inputValue, setInputValue] = useState(<></>);

  useEffect(() => {
    if (value === null) {
      setInputValue(
        <>
          <Typography variant="body2" color="textSecondary">
            Value to deposit in USD
          </Typography>
          <input
            className="form-control form-control-sm bg-dark border-secondary text-light mb-2"
            type="number"
            placeholder="Value to deposit"
            onChange={(e) => setVal(e.target.value)}
          />
        </>
      );
    } else {
      setVal(value);
    }
  }, [value, val]);

  useEffect(() => {
    document.getElementById('qr').style.display = 'none';
  }, []);

  function getQR() {
    // load qr here
    console.log({ network, token });
    setWallet('wallet0123456789');
    document.getElementById('qr').style.display = 'block';
  }

  function confirm() {
    onPay();
    cancel();
    document.getElementById('btnPay').click(); // open/close pay
  }

  function cancel() {
    document.getElementById('qr').style.display = 'none';
  }

  return (
    <>
      <button
        className="btn btn-primary d-none"
        id="btnPay"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#staticBackdrop"
        aria-controls="staticBackdrop"
      >
        Toggle static offcanvas
      </button>
      <div
        className="offcanvas offcanvas-end text-bg-dark container"
        data-bs-backdrop="static"
        tabIndex="-1"
        id="staticBackdrop"
        aria-labelledby="staticBackdropLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="staticBackdropLabel">
            Payment window
          </h5>
          <button
            type="button"
            className="btn btn-danger btn-sm text-white small"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={() => cancel()}
          >
            Close
          </button>
        </div>
        <div className="row align-items-center justify-content-center offcanvas-body">
          <div className="col-12 rounded bg-dark p-4">
            <Typography variant="body2" gutterBottom className="text-center">
              {info}
            </Typography>
            <Typography variant="h2" gutterBottom className="text-center">
              ${val} USD
            </Typography>
            {inputValue}
            <Typography variant="body2" color="textSecondary">
              Network
            </Typography>
            <select
              className="form-select form-select-sm bg-dark border-secondary text-light mb-2"
              onChange={(e) => setNetwork(e.target.value)}
            >
              <option value="BEP-20">BEP-20</option>
              <option value="TRC-20">TRC-20</option>
            </select>
            <Typography variant="body2" color="textSecondary">
              Crypto
            </Typography>
            <select
              className="form-select form-select-sm bg-dark border-secondary text-light mb-2"
              onChange={(e) => setToken(e.target.value)}
            >
              <option value="BUSD">BUSD</option>
              <option value="USDT">USDT</option>
              <option value="BTC">BTC</option>
            </select>
            <div className="text-center">
              <Button size="small" color="primary" variant="contained" onClick={() => getQR()}>
                Get QR
              </Button>
            </div>
            <div id="qr">
              <Typography variant="body2" color="textSecondary">
                Sent to wallet
              </Typography>
              <TextField
                fullWidth
                type="text"
                value={wallet}
                onChange={(e) => {
                  setWallet(e.target.value);
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <CopyToClipboard text={wallet}>
                        <Tooltip title="Copy">
                          <IconButton aria-label="Copy from another element" color="secondary" edge="end" size="large">
                            <CopyOutlined />
                          </IconButton>
                        </Tooltip>
                      </CopyToClipboard>
                    </InputAdornment>
                  )
                }}
              />
              <img src={qr} alt="" className="qr" />
              <TextField fullWidth type="text" value="" placeholder="Enter hash" />
              <div className="text-center">
                <Button size="small" color="primary" variant="outlined" onClick={() => cancel()}>
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

Pay.propTypes = {
  value: PropTypes.number,
  info: PropTypes.string,
  onPay: PropTypes.func
};
export default Pay;
