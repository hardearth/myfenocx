import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import user from 'data/user';
import { Box, ButtonBase, ClickAwayListener, Paper, Popper, Stack, Typography } from '@mui/material';
import Transitions from 'components/@extended/Transitions';
import toast from 'react-hot-toast';
import Withdraw from 'sections/Withdraw';
import Pay from 'sections/Pay';
import { FormattedMessage } from 'react-intl';

function TabPanel({ children, value, index, ...other }) {
  return (
    <div role="tabpanel" hidden={value !== index} id={`profile-tabpanel-${index}`} aria-labelledby={`profile-tab-${index}`} {...other}>
      {value === index && children}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const Profile = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const iconBackColorOpen = theme.palette.mode === 'dark' ? 'grey.200' : 'grey.300';

  function onPay() {
    toast('Verifying transaction', {
      duration: 3000,
      position: 'top-right'
    });
    setTimeout(() => {
      navigate('/dashboard/deposits');
    }, 1000);
  }

  function deposit() {
    document.getElementById('btnPay').click(); // open/close pay
  }

  function onWithdraw() {
    toast('Validating transaction', {
      duration: 3000,
      position: 'top-right'
    });
    setTimeout(() => {
      navigate('/dashboard/withdrawals');
    }, 1000);
  }

  function withdraw() {
    document.getElementById('btnWithdraw').click(); // open/close
  }

  return (
    <>
      <Pay value={null} info="Deposit" onPay={onPay} />
      <Withdraw onWithdraw={onWithdraw} />
      <Box sx={{ flexShrink: 0, ml: 0.75 }}>
        <ButtonBase
          sx={{
            p: 0.25,
            bgcolor: open ? iconBackColorOpen : 'transparent',
            borderRadius: 1,
            '&:hover': { bgcolor: theme.palette.mode === 'dark' ? 'secondary.light' : 'secondary.lighter' },
            '&:focus-visible': {
              outline: `2px solid ${theme.palette.secondary.dark}`,
              outlineOffset: 2
            }
          }}
          aria-label="open profile"
          ref={anchorRef}
          aria-controls={open ? 'profile-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          className="bg-green"
        >
          <Stack direction="row" spacing={1} alignItems="center" sx={{ p: 0.5 }}>
            <Typography variant="subtitle1">
              <FormattedMessage id="balance" /> ${user.pendingWithdrawal}
            </Typography>
          </Stack>
        </ButtonBase>
        <Popper
          placement="bottom-end"
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
          popperOptions={{
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [0, 9]
                }
              }
            ]
          }}
        >
          {({ TransitionProps }) => (
            <Transitions type="fade" in={open} {...TransitionProps}>
              {open && (
                <Paper
                  sx={{
                    boxShadow: theme.customShadows.z1,
                    width: 290,
                    minWidth: 240,
                    maxWidth: 290,
                    [theme.breakpoints.down('md')]: {
                      maxWidth: 250
                    }
                  }}
                >
                  <ClickAwayListener onClickAway={handleClose}>
                    <div className="container p-4 mt-3">
                      <div className="row align-items-center justify-content-center">
                        <div className="col-12 p-1">
                          <Typography variant="h2" className="text-center mb-2">
                            ${user.pendingWithdrawal}
                            <b className="h5 fw-bold"> USD </b>
                            <b className="h6">
                              <FormattedMessage id="balance" />
                            </b>
                          </Typography>
                        </div>
                        <button className="col-6 p-1 btn text-light" onClick={() => deposit()}>
                          <div className="card bg-green">
                            <Typography variant="h6" className="text-center fw-bold">
                              <FormattedMessage id="deposit" />
                            </Typography>
                          </div>
                        </button>
                        <button className="col-6 p-1 btn text-light" onClick={() => withdraw()}>
                          <div className="card bg-red">
                            <Typography variant="h6" className="text-center fw-bold">
                              <FormattedMessage id="withdraw" />
                            </Typography>
                          </div>
                        </button>
                      </div>
                    </div>
                  </ClickAwayListener>
                </Paper>
              )}
            </Transitions>
          )}
        </Popper>
      </Box>
    </>
  );
};

export default Profile;
