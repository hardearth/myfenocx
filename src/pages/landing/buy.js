import { Link as RouterLink } from 'react-router-dom';
import { Fragment } from 'react';
// material-ui
import { Grid, Typography, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import { CheckOutlined } from '@ant-design/icons';

// project import
import MainCard from 'components/MainCard';

// ==============================|| LANDING PAGE ||============================== //

const Landing = () => {
  return (
    <>
      <Grid container spacing={3} className="mt-5 pt-5 text-center">
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom>
            Welcome! <br /> Let`s start acquiring your membership
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <MainCard content={false}>
            <div className="container">
              <div className="row align-items-center justify-content-center my-5">
                <div className="col-12 col-lg-3 p-2">
                  <MainCard border={true}>
                    <Typography variant="h1" color="primary" textAlign="center">
                      69,99 USD/<span className="h6">year</span>
                    </Typography>
                    <Typography variant="h5" textAlign="center">
                      One account for one year of subscription
                    </Typography>
                    <Typography variant="body2" className="mt-3" color="textSecondary">
                      You acquire
                    </Typography>
                    <Typography variant="h5">
                      <Fragment>
                        <ListItem divider>
                          <ListItemIcon>
                            <CheckOutlined className="text-success me-3" />
                          </ListItemIcon>
                          <ListItemText primary={'Account activation'} />
                        </ListItem>
                      </Fragment>
                      <Fragment>
                        <ListItem divider>
                          <ListItemIcon>
                            <CheckOutlined className="text-success me-3" />
                          </ListItemIcon>
                          <ListItemText primary={'Access to MyCopyTradingFx'} />
                        </ListItem>
                      </Fragment>
                      <Fragment>
                        <ListItem divider>
                          <ListItemIcon>
                            <CheckOutlined className="text-success me-3" />
                          </ListItemIcon>
                          <ListItemText primary={'Referral earnings'} />
                        </ListItem>
                      </Fragment>
                      <Fragment>
                        <ListItem divider>
                          <ListItemIcon>
                            <CheckOutlined className="text-success me-3" />
                          </ListItemIcon>
                          <ListItemText primary={'Quick start income'} />
                        </ListItem>
                      </Fragment>
                      <Fragment>
                        <ListItem divider>
                          <ListItemIcon>
                            <CheckOutlined className="text-success me-3" />
                          </ListItemIcon>
                          <ListItemText primary={'Residual bonus'} />
                        </ListItem>
                      </Fragment>
                    </Typography>
                  </MainCard>
                </div>
                <div className="col-12">
                  <RouterLink to="/pay" style={{ textDecoration: 'none' }} className="m-2">
                    <Button size="large" color="primary" variant="contained">
                      Buy Account
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
