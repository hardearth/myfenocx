import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material-ui
import { Grid, Typography, Button, InputLabel, Select, MenuItem } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// ==============================|| LANDING PAGE ||============================== //

const Landing = () => {
  // Ejemplos, deben ir valores iniciales reales
  const [value, setValue] = useState(69.99);
  const [crypto, setCrypto] = useState('BUSD');
  const [network, setNetwork] = useState('BEP-20');
  const [fee, setFee] = useState(0.9);

  useEffect(() => {
    // Ejemplos, deben ir validaciones reales
    if (crypto === 'BTC') {
      setValue(0.0029);
      setFee(0.000039);
    }
    if (crypto === 'BUSD') setValue(69.99);
    if (crypto === 'USDT') setValue(69.99);
    if (crypto !== 'BTC' && network === 'BEP-20') setFee(0.9);
    if (crypto !== 'BTC' && network === 'TRC-20') setFee(0.99);
  }, [crypto, network]);

  return (
    <>
      <Grid container spacing={3} className="mt-5">
        <Grid item xs={12}>
          <Typography variant="h1" gutterBottom className="text-center">
            Payment section
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <MainCard content={false}>
            <div className="container">
              <div className="row my-5">
                <div className="col-12 col-lg-4 p-2">
                  <InputLabel htmlFor="network" className="text-secondary p-1">
                    Network
                  </InputLabel>
                  <Select defaultValue="BEP-20" className="w-100" onChange={(e) => setNetwork(e.target.value)}>
                    <MenuItem value="BEP-20">BEP-20</MenuItem>
                    <MenuItem value="TRC-20">TRC-20</MenuItem>
                  </Select>
                </div>
                <div className="col-12 col-lg-4 p-2">
                  <InputLabel htmlFor="network" className="text-secondary p-1">
                    Crypto
                  </InputLabel>
                  <Select defaultValue="BUSD" className="w-100" onChange={(e) => setCrypto(e.target.value)}>
                    <MenuItem value="BUSD">BUSD</MenuItem>
                    <MenuItem value="USDT">USDT</MenuItem>
                    <MenuItem value="BTC">BTC</MenuItem>
                  </Select>
                </div>
                <div className="col-12 col-lg-4 p-2">
                  <InputLabel htmlFor="network" className="text-secondary p-1">
                    To pay
                  </InputLabel>
                  <MainCard border={false}>
                    <Typography variant="body2" color="textSecondary" textAlign="center">
                      Network {network}
                    </Typography>
                    <Typography variant="h1" color="primary" textAlign="center">
                      {value} <span className="h5">{crypto}</span>
                    </Typography>
                    <Typography variant="h3" textAlign="center">
                      {fee} <span className="h6">Approximate fee</span>
                    </Typography>
                  </MainCard>
                </div>
                <div className="col-12 text-center">
                  <RouterLink to="/" style={{ textDecoration: 'none' }} className="m-2">
                    <Button size="large" color="primary" variant="outlined">
                      Cancel
                    </Button>
                  </RouterLink>
                  <RouterLink to="/qr" style={{ textDecoration: 'none' }} className="m-2">
                    <Button size="large" color="primary" variant="contained">
                      Continue
                    </Button>
                  </RouterLink>
                </div>
              </div>
            </div>
          </MainCard>
        </Grid>
      </Grid>
    </>
  );
};

export default Landing;
