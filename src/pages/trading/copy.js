import { Typography, Grid } from '@mui/material';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import user from 'data/user';
import trading from 'data/admin/trading';
import Transfer from 'sections/Transfer';
import PayAux from 'sections/PayAux';

const App = () => {
  const [value, setValue] = useState();
  const [info, setInfo] = useState();

  function getDate(date) {
    let request = new Date(Date.parse(date));
    return request.toDateString();
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

  function activateAccount(item, idBroker, idValue, value, user, password, code) {
    let val = filterIt(item.values, idValue);
    let total = Number(value) + Number(val.value);
    console.log({ item, idBroker, idValue, value, user, password, code });
    document.getElementById('btnPayAux').click(); // open/close
    setInfo(
      <>
        <span className="h5">Funding account activation</span>
      </>
    );
    setValue(total);
  }

  function transfer() {
    document.getElementById('btnTransfer').click(); // open/close
  }

  function payFee(idRef) {
    let item = getDataElement(idRef);
    setValue(item.fee);
    setInfo(
      <>
        <span className="h5">Pay fee</span> <br />
        <span>
          Fee
          <b className="ms-2">{item.fee} USD</b>
        </span>
      </>
    );
    document.getElementById('btnPayAux').click(); // open/close
  }

  function getDataElement(id) {
    let obj = {};
    user.trading.map((element) => {
      if (id === element._idRef) {
        obj = element;
      }
    });
    return obj;
  }

  function filterIt(obj, id) {
    let request = {};
    obj.map((value) => {
      if (id === value._id) {
        request = value;
      }
    });
    return request;
  }

  return (
    <>
      <Transfer objUser={user.trading} objAdmin={trading.trading} />
      <PayAux value={value} info={info} />
      <div className="container">
        <Grid item xs={12}>
          <Typography variant="h1" gutterBottom>
            <FormattedMessage id="trading" />
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            <FormattedMessage id="trading" /> / <FormattedMessage id="account" />
          </Typography>
        </Grid>

        <div className="row">
          {trading.trading.map((item) => {
            let _idBroker = item.brokers[0]._id;
            let _idValueAux = item.values[0]._id;
            let userAux = '';
            let valueAux = 0;
            let passwordAux = '';
            let codeAux = '';

            let account = <></>;
            let state = <></>;
            let user = <></>;
            let password = <></>;
            let server = <></>;
            let fee = <></>;
            let url = <></>;
            let selects = (
              <>
                <Typography variant="body2" className="text-secondary mb-2">
                  Enter the following data
                </Typography>
                <span className="small text-secondary">Account or ID</span>
                <input
                  className="form-control form-control-sm bg-dark border-secondary text-light mb-2"
                  type="text"
                  onChange={(e) => (userAux = e.target.value)}
                />
                <span className="small text-secondary">Password</span>
                <input
                  className="form-control form-control-sm bg-dark border-secondary text-light mb-2"
                  type="text"
                  onChange={(e) => (passwordAux = e.target.value)}
                />
                <span className="small text-secondary">Value to invest</span>
                <input
                  className="form-control form-control-sm bg-dark border-secondary text-light mb-2"
                  type="text"
                  onChange={(e) => (valueAux = e.target.value)}
                />
                <span className="small text-secondary">Broker</span>
                <select
                  className="form-select form-select-sm bg-dark border-secondary text-light mb-2"
                  onChange={(e) => (_idBroker = e.target.value)}
                >
                  {item.brokers.map((broker) => (
                    <option key={broker._id} value={broker._id}>
                      {broker.name}
                    </option>
                  ))}
                </select>
                <span className="small text-secondary">Subscription</span>
                <select
                  className="form-select form-select-sm bg-dark border-secondary text-light mb-2"
                  onChange={(e) => (_idValueAux = e.target.value)}
                >
                  {item.values.map((val) => (
                    <option key={val._id} value={val._id}>
                      {val.name} ({val.value} USD)
                    </option>
                  ))}
                </select>
                <span className="small text-secondary">Code</span>
                <div className="row mb-3">
                  <div className="col-7">
                    <input
                      className="form-control form-control-sm bg-dark border-secondary text-light"
                      type="text"
                      placeholder="Enter code"
                      onChange={(e) => (codeAux = e.target.value)}
                    />
                  </div>
                  <div className="col-5 text-end">
                    <button className="btn btn-sm text-light bg-black">
                      <b className="small"> Send code</b>
                    </button>
                  </div>
                </div>
                <button
                  className="btn rounded-0 text-light bg-blue"
                  onClick={() => activateAccount(item, _idBroker, _idValueAux, valueAux, userAux, passwordAux, codeAux)}
                >
                  Activate account
                </button>
              </>
            );

            let obj = getDataElement(item._id);
            if (Object.keys(obj).length > 0) {
              let brokerData = filterIt(item.brokers, obj._idBroker);
              let valueData = filterIt(item.values, obj._idValue);

              account = (
                <Typography variant="body2">
                  Account
                  <b className="ms-2">
                    {brokerData.name}
                    <span className="text-secondary ms-2">
                      {brokerData.name} - {valueData.value}
                    </span>
                  </b>
                </Typography>
              );
              if (obj.state) {
                state = (
                  <>
                    <Typography variant="body2" className="state">
                      <b className="bg-success rounded px-2">Active</b>
                    </Typography>
                    <button className="card bg-yellow mb-1" onClick={() => transfer()}>
                      <Typography variant="caption" className="text-light">
                        Subscribed on {getDate(obj.startsAt)}
                      </Typography>
                      <Typography variant="caption" className="text-light">
                        Expires {getDate(obj.expiresAt)}
                      </Typography>
                      <Typography variant="caption" className="text-light">
                        Active subscription
                      </Typography>
                      <Typography variant="caption" className="text-light">
                        ${getValue(obj._idValue, item.values)}
                      </Typography>
                      <Typography variant="caption" className="text-light text-end w-100">
                        Expires in {diffSubtract(obj.expiresAt)} days
                      </Typography>
                    </button>
                  </>
                );
              } else {
                state = (
                  <>
                    <Typography variant="body2" className="state">
                      <b className="bg-danger rounded px-2">Inactive</b>
                    </Typography>
                    <button className="card bg-red mb-1" onClick={() => transfer()}>
                      <Typography variant="caption" className="text-light">
                        Expired subscription or 20% fee debt
                      </Typography>
                      <Typography variant="h5" className="text-light">
                        ${getValue(obj._idValue, item.values)}
                      </Typography>
                      <Typography variant="caption" className="text-light text-end w-100">
                        Pay subscription
                      </Typography>
                    </button>
                  </>
                );
              }
              user = (
                <Typography variant="body2">
                  Account ID
                  <b className="ms-2">{obj.user}</b>
                </Typography>
              );
              let countLetters = obj.password.length;
              let str = '*';
              password = (
                <Typography variant="body2">
                  Password
                  <b className="ms-2">
                    {str.repeat(countLetters - 3)}
                    {obj.password.slice(countLetters - 3)}
                  </b>
                </Typography>
              );
              server = (
                <Typography variant="body2">
                  Server
                  <b className="ms-2">{obj.server}</b>
                </Typography>
              );
              if (obj.fee > 0) {
                fee = (
                  <>
                    <button className="btn text-center text-light bg-red card mb-2" onClick={() => payFee(obj._idRef)}>
                      Pay ${obj.fee} USD fee
                    </button>
                  </>
                );
              }
              url = (
                <Typography variant="body2">
                  Audited account
                  <b className="ms-2">
                    <a href={item.url} rel="noreferrer" target="_blank" className="small text-light">
                      {item.url}
                    </a>
                  </b>
                </Typography>
              );
              selects = <></>;
            }
            return (
              <div key={item._id} className="col-12 col-lg-3 p-2 text-light">
                <div className="text-start bg-dark card rounded p-4">
                  <Typography variant="h3" className="text-center mb-3 text-secondary">
                    {item.name}
                    {url}
                  </Typography>
                  {state}
                  {fee}
                  {account}
                  {user}
                  {password}
                  {server}
                  {selects}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
