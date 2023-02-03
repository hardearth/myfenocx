import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'store';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

// material-ui
import { useMediaQuery, Grid, Typography, Button, Stack, TextField, InputAdornment, Tooltip, Box } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import IconButton from 'components/@extended/IconButton';

// third-party
import { CopyToClipboard } from 'react-copy-to-clipboard';

// assets
import { CopyOutlined } from '@ant-design/icons';
import qr from 'assets/images/qr.png';
import { useTimer } from 'react-timer-hook';

// ==============================|| QR PAGE ||============================== //

const TimerBox = ({ count, label }) => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <MainCard content={false} sx={{ width: { xs: 60, sm: 80 } }}>
      <Stack justifyContent="center" alignItems="center">
        <Box sx={{ py: 1.75 }}>
          <Typography variant={matchDownSM ? 'h4' : 'h2'}>{count}</Typography>
        </Box>
        <Box sx={{ p: 0.5, bgcolor: 'secondary.lighter', width: '100%' }}>
          <Typography align="center" variant="subtitle2">
            {label}
          </Typography>
        </Box>
      </Stack>
    </MainCard>
  );
};

TimerBox.propTypes = {
  count: PropTypes.number,
  label: PropTypes.string
};

const Landing = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Ejemplos, deben ir valores iniciales reales
  const [text1, setText1] = useState('0xekikmdmjhhjdfsanAzg1h4');
  const [hash, setHash] = useState('');
  const [value, setValue] = useState(69.99);
  const [crypto, setCrypto] = useState('BUSD');
  const [network, setNetwork] = useState('BEP-20');

  useEffect(() => {
    // Ejemplos, deben ir validaciones reales
    setValue(69.99);
    setCrypto('BUSD');
    setNetwork('BEP-20');
  }, []);

  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);

  const { seconds, minutes } = useTimer({ expiryTimestamp: time });

  useEffect(() => {
    if (seconds === 0 && minutes === 0) {
      navigate('/');
    }
  }, [seconds, minutes, navigate]);

  return (
    <>
      <Grid container spacing={3} className="mt-5">
        <Grid item xs={12} sx={{ width: { xs: '95%', md: '40%' } }}>
          <Stack direction="row" alignItems="center" justifyContent="center" spacing={{ xs: 1, sm: 2 }}>
            <TimerBox count={minutes} label="min" />
            <Typography variant="h1"> : </Typography>
            <TimerBox count={seconds} label="sec" />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-12 col-lg-5 p-2">
                <MainCard border={true}>
                  <Stack>
                    <Typography variant="body2" color="textSecondary">
                      Wallet
                    </Typography>
                    <TextField
                      className="input"
                      fullWidth
                      disabled
                      type="text"
                      value={text1}
                      onChange={(e) => {
                        setText1(e.target.value);
                      }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <CopyToClipboard
                              text={text1}
                              onCopy={() =>
                                dispatch(
                                  openSnackbar({
                                    open: true,
                                    message: 'Text Copied',
                                    variant: 'alert',
                                    alert: {
                                      color: 'success'
                                    },
                                    close: false,
                                    anchorOrigin: { vertical: 'top', horizontal: 'right' },
                                    transition: 'SlideLeft'
                                  })
                                )
                              }
                            >
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
                  </Stack>
                  <Typography variant="body2" color="textSecondary">
                    Network {network}
                  </Typography>
                  <Typography variant="h2" textAlign="center" className="mt-3">
                    {value} <span className="h6">{crypto}</span>
                  </Typography>
                  <img src={qr} alt="" className="qr" />
                  <Stack>
                    <Typography variant="body2" color="textSecondary">
                      Hash
                    </Typography>
                    <TextField
                      fullWidth
                      type="text"
                      value={hash}
                      placeholder="Enter hash"
                      onChange={(e) => {
                        setHash(e.target.value);
                      }}
                    />
                  </Stack>
                  <div className="col-12 text-center mt-3">
                    <RouterLink to="/" style={{ textDecoration: 'none' }} className="m-2">
                      <Button size="large" color="primary" variant="outlined">
                        Cancel
                      </Button>
                    </RouterLink>
                    <Button size="large" color="primary" variant="contained" className="m-2">
                      Confirm
                    </Button>
                  </div>
                </MainCard>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Landing;
