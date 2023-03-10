import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Typography, Button, Select, MenuItem, TextField, InputAdornment, Tooltip } from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import IconButton from 'components/@extended/IconButton';
import { CopyOutlined } from '@ant-design/icons';

const Withdraw = ({ onWithdraw }) => {
  const [text, setText] = useState('');
  const [network, setNetwork] = useState('BEP-20');
  const [token, setToken] = useState('BUSD');
  const [val, setVal] = useState();

  useEffect(() => {
    setVal();
  }, []);

  function confirm() {
    onWithdraw();
    close();
  }

  function close() {
    document.getElementById('btnWithdraw').click(); // open/close
  }
  return (
    <>
      <button
        className="btn btn-primary d-none"
        id="btnWithdraw"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#staticBackdropW"
        aria-controls="staticBackdropW"
      >
        Toggle static offcanvas
      </button>
      <div
        className="offcanvas offcanvas-end text-bg-dark container"
        data-bs-backdrop="static"
        tabIndex="-1"
        id="staticBackdropW"
        aria-labelledby="staticBackdropWLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="staticBackdropWLabel">
            Withdraw window
          </h5>
          <button type="button" className="btn btn-danger btn-sm text-white small" onClick={() => close()}>
            Close
          </button>
        </div>
        <div className="row align-items-center justify-content-center offcanvas-body">
          <div className="col-12 rounded bg-dark p-4">
            <Typography variant="body2" color="textSecondary">
              Value to withdraw in USD
            </Typography>
            <TextField
              fullWidth
              className="mb-2"
              type="number"
              defaultValue=""
              placeholder="Value to withdraw"
              onChange={(e) => setVal(e.target.value)}
            />
            <Typography variant="body2" color="textSecondary">
              Network
            </Typography>
            <Select value={network} className="w-100 mb-2" onChange={(e) => setNetwork(e.target.value)}>
              <MenuItem value="BEP-20">BEP-20</MenuItem>
              <MenuItem value="TRC-20">TRC-20</MenuItem>
            </Select>
            <Typography variant="body2" color="textSecondary">
              Crypto
            </Typography>
            <Select value={token} className="w-100 mb-2" onChange={(e) => setToken(e.target.value)}>
              <MenuItem value="BUSD">BUSD</MenuItem>
              <MenuItem value="USDT">USDT</MenuItem>
              <MenuItem value="BTC">BTC</MenuItem>
            </Select>
            <div>
              <Typography variant="body2" color="textSecondary">
                My wallet
              </Typography>
              <TextField
                fullWidth
                type="text"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <CopyToClipboard text={text}>
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
              <Typography variant="h2" gutterBottom className="text-center m-3">
                ${val} USD
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
      </div>
    </>
  );
};

Withdraw.propTypes = {
  onWithdraw: PropTypes.func
};
export default Withdraw;
